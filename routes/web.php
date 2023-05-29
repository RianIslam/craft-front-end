<?php

use App\Http\Controllers\ContactController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use App\Http\Middleware\Demomiddleware;
use App\Http\Controllers\DemoComtroller;
use App\Http\Middleware\RedirectToDashboard;
use App\Http\Controllers\RegistrationController;
use App\Http\Controllers\LogRequestMiddleware;
use App\Http\Controllers\PostController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/


//task 8:
Route::get('/', function () {
    return view('welcome');
});
// Task 1: 
Route::post('/register', [RegistrationController::class, 'FromRegistration']);

//Task 2:

Route::get('/home', function () {
    return redirect('/dashboard', 302);
});

//task 3:
Route::middleware([LogRequestMiddleware::class])->group(function () {
    // Your routes here
    Route::get('/log', function () {
        return view('log');
    });
});

//task 4:
Route::middleware(['auth'])->group(function () {
    Route::get('/profile', function () {
        return 'This is the profile page';
    });

    Route::get('/settings', function () {
        return 'This is the settings page';
    });
});

//task 5:
Route::get('/products', 'ProductController@index')->name('products.index');
Route::get('/products/create', 'ProductController@create')->name('products.create');
Route::post('/products', 'ProductController@store')->name('products.store');
Route::get('/products/{id}/edit', 'ProductController@edit')->name('products.edit');
Route::put('/products/{id}', 'ProductController@update')->name('products.update');
Route::delete('/products/{id}', 'ProductController@destroy')->name('products.destroy');


//task 6:

Route::post('/contact', ContactController::class);


//task 7:

Route::get('posts', [PostController::class, 'index'])->name('posts.index');
Route::get('posts/create', [PostController::class, 'create'])->name('posts.create');
Route::post('posts', [PostController::class, 'store'])->name('posts.store');
Route::get('posts/{post}', [PostController::class, 'show'])->name('posts.show');
Route::get('posts/{post}/edit', [PostController::class, 'edit'])->name('posts.edit');
Route::put('posts/{post}', [PostController::class, 'update'])->name('posts.update');
Route::delete('posts/{post}', [PostController::class, 'destroy'])->name('posts.destroy');


