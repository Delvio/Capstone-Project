<?php

use App\Http\Controllers\TaskController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia; // We are going to use this class to render React components
use App\Http\Controllers\UserController;
use App\Http\Controllers\TaskListController;

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
    return Inertia::render("Home");
});

Route::match(["get", "post"], "/register", [UserController::class, "register"])->name("register");
Route::match(["get", "post"], "/login", [UserController::class, "login"])->name("login");
Route::match(["get", "post"], "/password-reset", [UserController::class, "passwordReset"])->name("password_reset");
Route::match(["get", "post"], "/logout", [UserController::class, "logout"])->name("logout");
Route::get('/forgot-password', [UserController::class, 'showResetForm'])->name('password.request');
Route::post('/forgot-password', [UserController::class, 'sendResetLinkEmail'])->name('password.email');
Route::get('/reset-password/{token}', [UserController::class, 'showResetPasswordForm'])->name('password.reset');
Route::post('/reset-password', [UserController::class, 'resetPassword'])->name('password.update');

Route::get('/tasklist',  [TaskListController::class, "index"])->middleware("auth");;
Route::get('/tasklist/{id}/tasks',  [TaskListController::class, "tasks"]);
Route::post("/tasklist/create", [TaskListController::class, "store"]);
Route::post("/tasklist/delete", [TaskListController::class, "destroy"]);
Route::post("/tasklist/edit", [TaskListController::class, "update"]);

Route::post("/task/create", [TaskController::class, "store"]);
Route::post("/task/edit", [TaskController::class, "update"]);
Route::post("/task/delete", [TaskController::class, "destroy"]);
