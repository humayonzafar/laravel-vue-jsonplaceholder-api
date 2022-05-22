<?php

namespace App\Http\Controllers;

use App\Http\Requests\ToggleFavoriteImageRequest;
use App\Http\Resources\UserImageCollection;
use App\Models\UserImage;
use Illuminate\Support\Facades\Auth;

class UserImageController extends Controller
{

    /**
     * Add/remove image from user favorites
     *
     * @param ToggleFavoriteImageRequest $request
     * @return mixed
     */
    public function toggleFavoriteImage(ToggleFavoriteImageRequest $request)
    {
        try {
            $user = Auth::user();
            $favorite = UserImage::query()->where(['image_id' => $request['image_id'], 'user_id' => $user['id']])->first();
            /*Create new if data not exists else toggle the is_favorite*/
            if ($favorite) {
                $favorite->is_favorite = !$favorite->is_favorite;
                $favorite->save();

                return response()->json(['favorite' => $favorite->is_favorite], 200);
            }
            $user->userImages()->create(['image_id' => $request['image_id'], 'is_favorite' => true]);

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
    public function getFavoritesImageIds()
    {
        return response()->json(['favorite_image_ids' => Auth::user()->userImages()->select('image_id')->where('is_favorite', true)->get()], 200);
    }

    /**
     * Add/remove image from favorites
     *
     * @return mixed
     */
    public function getLatestFavoriteImages()
    {
        /*Query to remove duplicate, TO DO*/
        /*select distinct image_id from (SELECT image_id,updated_at FROM sanctum_spa_login.user_images order by updated_at desc) as image_ids;*/
        $favoriteImages = UserImage::query()->where('is_favorite', 1)->latest('updated_at')->paginate(10);

        return response()->json(['latest_favorite_images' => new UserImageCollection($favoriteImages)], 200);
    }
}
