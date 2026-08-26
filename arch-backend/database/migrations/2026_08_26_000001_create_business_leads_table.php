<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('business_leads', function (Blueprint $table) {
            $table->id();
            $table->string('reference_id', 40)->unique();
            
            // Client & Company Information
            $table->string('name');
            $table->string('company');
            $table->string('email')->index();
            $table->string('phone')->nullable();
            
            // Requirements & Scope
            $table->string('service'); // e.g. "Web App & SaaS"
            $table->string('company_size')->nullable(); // e.g. "Growing Business (5–50 team)"
            $table->string('budget'); // e.g. "₹50,000 – ₹1,00,000" or "Other (₹35,000)"
            $table->string('timeline')->nullable(); // e.g. "1 – 3 Months"
            $table->json('features')->nullable(); // Array of selected capabilities
            $table->text('project_details')->nullable(); // Brief/scope notes
            
            // Administrative fields
            $table->enum('status', ['new', 'contacted', 'in_discussion', 'proposal_sent', 'closed'])->default('new');
            $table->string('ip_address', 45)->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('business_leads');
    }
};
