<?php

namespace App\Http\Resources;

use Illuminate\Contracts\Support\Arrayable;
use Illuminate\Http\Resources\Json\JsonResource;
use JsonSerializable;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param $request
     * @return array|Arrayable|JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'email' => $this->email,
            'user_images' =>  UserImageCollection::collection($this->whenLoaded('userImages')),
            'favorites_images_count_current_week' => $this->when(isset($this->favorites_images_count_current_week), $this->favorites_images_count_current_week),
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at
        ];
    }
}
