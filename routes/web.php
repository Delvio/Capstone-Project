<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia; // We are going to use this class to render React components


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

// This is the route that will render our React component
Route::get('/', function () {
    return Inertia::render('Home'); // This will get component Test.jsx from the resources/js/Pages/Test.jsx
});
