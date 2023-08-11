<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Password;


class UserController extends Controller
{
    public function register(Request $request)
    {
        if ($request->isMethod("get")) {
            return Inertia::render("Register");
        } else {

            $data = $request->validate([
                "name" => ["required", "min:3", "max:255"],
                "email" => ["required", "email", Rule::unique("users", "email")],
                "password" => ["required", "min:6"]
            ]);

            $data["password"] = bcrypt($data["password"]);
            $user = User::create($data);
            auth()->login($user);

            return Inertia::location('/tasklist');
        }
    }

    public function login(Request $request)
    {
        if ($request->isMethod("get")) {
            return Inertia::render("Login");
        } else {
            $data = $request->validate([
                "email" => "required|email",
                "password" => "required|min:6"
            ]);

            if (Auth::attempt(["email" => $data["email"], "password" => $data["password"]])) {
                $request->session()->regenerate();
                return Inertia::location("/tasklist");
            } else {
                Inertia::location("/login");
            }
        }
    }

    public function resetPassword(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'token' => 'required|string',
            'password' => 'required|confirmed|min:8',
        ]);

        $status = Password::reset($request->only('email', 'password', 'password_confirmation', 'token'), function ($user, $password) {
            $user->forceFill([
                'password' => bcrypt($password),
            ])->save();
        });

        return redirect()->route('login')->with(['status' => $status]);
    }


    public function showResetForm()
    {
        return Inertia::render('ForgotPassword');
    }

    public function sendResetLinkEmail(Request $request)
    {
        $request->validate(['email' => 'required|email']);

        $status = Password::sendResetLink($request->only('email'));

        return back()->with(['status' => $status]);
    }

    public function showResetPasswordForm(Request $request)
    {
        return Inertia::render('ResetPassword', [
            'email' => $request->email,
            'token' => $request->route('token'),
        ]);
    }

    public function logout()
    {
        auth()->logout();
        return Inertia::location("/");
    }
}
