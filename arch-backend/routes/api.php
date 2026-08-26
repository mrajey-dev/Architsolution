<?php

use App\Http\Controllers\Api\BusinessLeadController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
*/

Route::prefix('business-leads')->group(function () {
    Route::post('/', [BusinessLeadController::class, 'store']);
    Route::get('/', [BusinessLeadController::class, 'index']);
    Route::get('/{id}', [BusinessLeadController::class, 'show']);
    Route::patch('/{id}/status', [BusinessLeadController::class, 'updateStatus']);
});
