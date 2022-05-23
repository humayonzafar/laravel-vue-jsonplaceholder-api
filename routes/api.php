<?php

use App\Models\FavoriteImage;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;
use \App\Http\Controllers\UserController;
use \App\Http\Controllers\FavoriteImageController;
use Carbon\Carbon;

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

Route::get('/test', function (){

    return FavoriteImage::query()->where('is_liked', 1)->latest('updated_at')->get();
    return  DB::table('users')
        ->selectRaw('users.*, count(*) as liked')
        ->join('favorites', 'favorites.user_id', 'users.id')
        ->where('favorites.is_liked',  true)
        ->whereBetween('favorites.created_at', [Carbon::now()->startOfWeek(), Carbon::now()->endOfWeek()])
        ->groupBy('favorites.user_id')
        ->paginate(10);
//    return [Carbon::now()->startOfWeek()->toDateString(), Carbon::now()->endOfWeek()->toDateString()];
//    return  Favorites::where('is_liked', true)->whereBetween('created_at',
//        [Carbon::now()->startOfWeek(), Carbon::now()->endOfWeek()]
//    )->groupBy('user_id')
//        ->selectRaw('count(*) as total, user_id')
//        ->get();;

        return  FavoriteImage::where('is_liked', true)
            ->whereBetween('created_at', [Carbon::now()->startOfWeek(), Carbon::now()->endOfWeek()])
            ->groupBy('user_id')
        ->selectRaw('count(*) as total, user_id')
        ->select('user_id')->get();


    return DB::table('favorites')
        ->where('is_liked', true)
        ->select('user_id', DB::raw('count(*) as total'))
        ->groupBy('user_id')
        ->get();
    return   FavoriteImage::query()->groupBy('user_id')
        ->selectRaw('count(*) as liked, user_id')
        ->get();;
});

Route::middleware(['auth:sanctum'])->group(function () {
    Route::get('/user/auth', UserController::class);
    Route::get('/user/getFavoritesImageIds', [FavoriteImageController::class, 'getUserFavoritesImageIds']);
    Route::post('/user/syncFavoriteImage', [FavoriteImageController::class, 'favoritePicture']);
    Route::get('/users/{user}', [UserController::class, 'show']);
    Route::get('/users', [UserController::class, 'index']);
});

Route::get('/getUsersWithMostLikedImagesCurrentWeek', [UserController::class, 'getUsersWithMostLikedImagesCurrentWeek']);
Route::get('/getLatestFavoriteImages', [FavoriteImageController::class, 'getLatestFavoriteImages']);
