<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BusinessLead extends Model
{
    use HasFactory;

    protected $table = 'business_leads';

    protected $fillable = [
        'reference_id',
        'name',
        'company',
        'email',
        'phone',
        'service',
        'company_size',
        'budget',
        'timeline',
        'features',
        'project_details',
        'status',
        'ip_address'
    ];

    /**
     * The attributes that should be cast.
     */
    protected $casts = [
        'features' => 'array',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];
}
