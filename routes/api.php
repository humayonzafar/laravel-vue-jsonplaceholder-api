<?php

use Illuminate\Support\Facades\Route;
use \App\Http\Controllers\UserController;
use \App\Http\Controllers\UserImageController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::middleware(['auth:sanctum'])->group(function () {
    Route::get('/user/auth', UserController::class);
    Route::get('/user/getFavoritesImageIds', [UserImageController::class, 'getFavoritesImageIds']);
    Route::post('/user/toggleFavoriteImage', [UserImageController::class, 'toggleFavoriteImage']);
});

Route::get('/getUsersWithMostLikedImagesCurrentWeek', [UserController::class, 'getUsersWithMostLikedImagesCurrentWeek']);
Route::get('/latestFavoriteImages', [UserImageController::class, 'getLatestFavoriteImages']);
