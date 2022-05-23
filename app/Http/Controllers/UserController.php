<?php

namespace App\Http\Controllers;

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
            ->join('favorite_images', 'favorite_images.user_id', 'users.id')
            ->where('favorite_images.is_liked', true)
            ->whereBetween('favorite_images.created_at', [Carbon::now()->startOfWeek(), Carbon::now()->endOfWeek()])
            ->groupBy('favorite_images.user_id')
            ->paginate(10);

        return response()->json(['users' => UserResource::collection($users)], 200);
    }

}
