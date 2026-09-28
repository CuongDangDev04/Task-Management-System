<?php

use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;

// Gom nhóm tất cả endpoint xác thực dưới prefix /auth
Route::prefix('auth')->group(function () {
    // Public routes (không cần token)
    Route::post('/register', [AuthController::class, 'register']);
    Route::post('/login', [AuthController::class, 'login']);

    // Protected routes (bắt buộc có token Sanctum)
    Route::middleware('auth:sanctum')->group(function () {
        Route::get('/user', [AuthController::class, 'me']);
        Route::post('/logout', [AuthController::class, 'logout']);
    });
});