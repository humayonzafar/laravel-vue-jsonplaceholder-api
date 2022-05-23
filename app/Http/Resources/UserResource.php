<?php

namespace App\Http\Resources;

use Illuminate\Contracts\Support\Arrayable;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  Request  $request
     * @return array|Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'email' => $this->email,
            'favorite_images' => FavoriteImageResource::collection($this->whenLoaded('favorites')),
            'favorites_images_count_current_week' => $this->when(isset($this->favorites_images_count_current_week), $this->favorites_images_count_current_week),
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at
        ];
    }
}
