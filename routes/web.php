<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CustomerController;
use App\Mail\PromotionalEmailController;

Route::get('/customers', [CustomerController::class, 'index']);
Route::get('/customers/create', [CustomerController::class, 'create']);
Route::post('/customers', [CustomerController::class, 'store']);
Route::get('/customers/{customer}', [CustomerController::class, 'show']);
Route::get('/customers/{customer}/edit', [CustomerController::class, 'edit']);
Route::put('/customers/{customer}', [CustomerController::class, 'update']);
Route::delete('/customers/{customer}', [CustomerController::class, 'destroy']);
Route::get('/promotional-email', [PromotionalEmailController::class, 'create'])->name('promotional-email.create');
Route::post('/promotional-email', [PromotionalEmailController::class, 'send'])->name('promotional-email.send');