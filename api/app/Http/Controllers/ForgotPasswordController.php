<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\ForgotPasswordRequest;
use App\Http\Requests\ResetPasswordRequest;
use App\User;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class ForgotPasswordController extends Controller
{
    public function forgot(ForgotPasswordRequest $request)
    {
        $email = $request->input('email');

        if (User::where('email', $email)->doesntExist()) {
            return response([
                'message' => 'User doesn\'t exists!'
            ], 404);
        }

        $token = Str::random(10);

        try {
            DB::table('password_resets')->insert([
                'email' => $email,
                'token' => $token
            ]);

            \Mail::to($email)->send(new \App\Mail\ForgotPassword($token));

            return response([
                'message' => 'Check your email.'
            ]);
        } catch (\Exception $exception) {
            return response([
                'message' => $exception->getMessage()
            ], 400);
        }
    }

    public function reset(ResetPasswordRequest $request)
    {
        $token = $request->input('token');
        $passwordResets = DB::table('password_resets')->where('token', $token)->first();

        if (!$passwordResets) {
            return response([
                'message' => 'Invalid reset token'
            ], 400);
        }

        $user = User::where('email', $passwordResets->email)->first();

        if (!$user) {
            return response([
                'message' => 'User doesn\'t exist'
            ], 400);
        }

        $user->password = Hash::make($request->input('password'));
        $user->save();

        return response([
            'message' => 'success, go and login!'
        ]);
    }
}
