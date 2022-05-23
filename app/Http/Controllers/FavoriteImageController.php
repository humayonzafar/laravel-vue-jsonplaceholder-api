<?php

namespace App\Http\Controllers;

use App\Http\Requests\FavoriteImageRequest;
use App\Models\FavoriteImage;
use Illuminate\Support\Facades\Auth;

class FavoriteImageController extends Controller
{

    /**
     * Add/remove image from favorites
     *
     * @param FavoriteImageRequest $request
     * @return mixed
     */
    public function favoritePicture(FavoriteImageRequest $request)
    {
        try {
            $user = Auth::user();
            $favorite = FavoriteImage::query()->where(['image_id' => $request['image_id'], 'user_id' => $user['id']])->first();
            if ($favorite) {
                $favorite->is_liked = false;
                $favorite->save();

                return response()->json(['favorite' => false], 200);
            }
            $user->favoriteImages()->create(['image_id' => $request['image_id'], 'is_liked' => true]);

            return response()->json(['favorite' => true], 200);
        } catch (\Exception $exception) {
            return response()->json(['message' => $exception->getMessage()], 409);
        }
    }

    /**
     * Add/remove image from favorites
     *
     * @return mixed
     */
    public function getUserFavoritesImageIds()
    {
        return response()->json(['favorites' => Auth::user()->favoriteImages()->where('is_liked', true)->pluck('image_id')], 200);
    }

    /**
     * Add/remove image from favorites
     *
     * @return mixed
     */
    public function getLatestFavoriteImages()
    {
        FavoriteImage::query()->where('is_liked', 1)->latest('updated_at')->get();
        return response()->json(['favorites' => Auth::user()->favoriteImages()->where('is_liked', true)->pluck('image_id')], 200);
    }
}
