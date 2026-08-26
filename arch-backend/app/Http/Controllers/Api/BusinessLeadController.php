<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\BusinessLead;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class BusinessLeadController extends Controller
{
    /**
     * Display a listing of incoming business leads.
     */
    public function index()
    {
        $leads = BusinessLead::latest()->paginate(25);
        return response()->json([
            'success' => true,
            'data'    => $leads
        ]);
    }

    /**
     * Store a newly created business lead inquiry.
     */
    public function store(Request $request)
    {
        // 1. Payload Validation
        $validator = Validator::make($request->all(), [
            'name'            => 'required|string|max:255',
            'company'         => 'required|string|max:255',
            'email'           => 'required|email|max:255',
            'phone'           => 'nullable|string|max:50',
            'service'         => 'required|string|max:255',
            'company_size'    => 'nullable|string|max:255',
            'budget'          => 'required|string|max:255',
            'timeline'        => 'nullable|string|max:255',
            'features'        => 'nullable|array',
            'project_details' => 'nullable|string',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => $validator->errors()->first(),
                'errors'  => $validator->errors()
            ], 422);
        }

        // 2. Generate Unique Ticket Reference ID (e.g. ARCH-BIZ-829104)
        $referenceId = 'ARCH-BIZ-' . rand(100000, 999999);

        // 3. Persist into MySQL Database
        $lead = BusinessLead::create([
            'reference_id'    => $referenceId,
            'name'            => strip_tags($request->input('name')),
            'company'         => strip_tags($request->input('company')),
            'email'           => strtolower(trim($request->input('email'))),
            'phone'           => $request->input('phone'),
            'service'         => $request->input('service'),
            'company_size'    => $request->input('company_size'),
            'budget'          => $request->input('budget'),
            'timeline'        => $request->input('timeline'),
            'features'        => $request->input('features', []),
            'project_details' => $request->input('project_details'),
            'status'          => 'new',
            'ip_address'      => $request->ip()
        ]);

        // 4. Return Success Response
        return response()->json([
            'success'      => true,
            'message'      => 'Thank you! Your business inquiry has been recorded. A Senior Solution Architect will review your scope and reach out within 24 hours.',
            'reference_id' => $lead->reference_id,
            'data'         => $lead
        ], 201);
    }

    /**
     * Display a single lead details.
     */
    public function show($id)
    {
        $lead = BusinessLead::where('id', $id)
            ->orWhere('reference_id', $id)
            ->firstOrFail();

        return response()->json([
            'success' => true,
            'data'    => $lead
        ]);
    }

    /**
     * Update lead pipeline status (e.g. contacted, proposal_sent, closed).
     */
    public function updateStatus(Request $request, $id)
    {
        $request->validate([
            'status' => 'required|in:new,contacted,in_discussion,proposal_sent,closed'
        ]);

        $lead = BusinessLead::findOrFail($id);
        $lead->update(['status' => $request->input('status')]);

        return response()->json([
            'success' => true,
            'message' => 'Status updated successfully.',
            'data'    => $lead
        ]);
    }
}
