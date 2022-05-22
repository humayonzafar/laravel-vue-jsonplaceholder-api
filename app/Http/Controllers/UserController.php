<?php

namespace App\Http\Controllers;

use App\Http\Resources\UserCollection;
use App\Http\Resources\UserResource;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;

class UserController extends Controller
{
    /**
     * Return the logged in user.
     *
     * @param Request $request
     * @return mixed
     */
    public function __invoke(Request $request)
    {
        return response()->json(['user' => new UserResource($request->user())], 200);
    }

    /**
     * Return the users who liked most pictures this week.
     *
     * @return mixed
     */
    public function getUsersWithMostLikedImagesCurrentWeek()
    {
        $users = User::query()
            ->selectRaw('users.*, count(*) as favorites_images_count_current_week')
            ->join('user_images', 'user_images.user_id', 'users.id')
            ->where('user_images.is_favorite', true)
            ->whereBetween('user_images.updated_at', [Carbon::now()->startOfWeek(), Carbon::now()->endOfWeek()])
            ->groupBy('user_images.user_id')
            ->orderBy('favorites_images_count_current_week', 'DESC')
            ->paginate(10);

        return response()->json(['users' => new UserCollection($users)], 200);
    }

}
