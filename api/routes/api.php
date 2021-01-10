<?php


use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Used to test the endpoint.
Route::get('hello', 'TestController@hello');

Route::post('/login', 'AuthController@login');
Route::post('/register', 'AuthController@register');

Route::post('/forgot', 'ForgotPasswordController@forgot');
Route::post('/reset', 'ForgotPasswordController@reset');

Route::get('/user', 'AuthController@user')->middleware('auth:api');