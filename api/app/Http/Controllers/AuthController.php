<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\User;
use App\Http\Requests\RegisterRequest;

class AuthController extends Controller
{
    public function login(Request $request) 
    {
        try {
            if (\Auth::attempt($request->only('email', 'password'))) {
                $user = \Auth::user();
                $token = $user->createToken('app')->accessToken;

                return response([
                    'message' => 'Success.',
                    'token' => $token,
                    'user' => $user
                ]);
            }
        } catch (\Exception $exception) {
            return response([
                'message' => $exception->getMessage()
            ], 400);
        }

        return response([
            'message' => 'Invalid email/password'
        ], 401);
    }

    public function user()
    {
        return \Auth::user();
    }

    public function register(RegisterRequest $request)
    {
        try {
            $user = User::create([
                'first_name' => $request->input('first_name'),
                'last_name' => $request->input('last_name'),
                'email' => $request->input('email'),
                'password' => Hash::make($request->input('password'))
            ]);

            return $user;
        } catch (\Exception $exception) {
            return response([
                'message' => $exception->getMessage()
            ], 400);
        }
    }
}
