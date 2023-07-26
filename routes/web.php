<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia; // We are going to use this class to render React components
use App\Http\Controllers\UserController;


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

// This is the default route that comes with Laravel
// Route::get('/', function () {
//     return view('welcome');
// });

Route::get('/', function () {
    return Inertia::render('Home');
});

Route::match(["get", "post"], "/register", [UserController::class, "register"])->name("register");

Route::match(["get", "post"], "/login", [UserController::class, "login"])->name("login");
Route::match(["get", "post"], "/password-reset", [UserController::class, "passwordReset"])->name("password_reset");
Route::post("/logout", [UserController::class, "logout"])->name("logout");
Route::get('/forgot-password', [UserController::class, 'showResetForm'])->name('password.request');
Route::post('/forgot-password', [UserController::class, 'sendResetLinkEmail'])->name('password.email');
Route::get('/reset-password/{token}', [UserController::class, 'showResetPasswordForm'])->name('password.reset');
Route::post('/reset-password', [UserController::class, 'resetPassword'])->name('password.update');

Route::get("/dashboard", function () {
    return Inertia::render("Dashboard");
})->middleware("auth");
