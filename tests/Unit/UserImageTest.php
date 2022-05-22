<?php

namespace Tests\Unit;

use App\Models\User;
use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

/**
 * Tests:
 *   active_scope_only_returns_active_exhibitors
 *   returns_settings_value_for_corresponding_key
 *   returns_null_if_no_corresponding_settings_key_is_found
 */
class UserImageTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function forbid_unathenticated_request()
    {
        $response = $this->json('post', '/api/user/toggleFavoriteImage');

        $response->assertStatus(401);
    }

    /** @test */
    public function form_validation_failed_toggle_authenticated_request()
    {
        $user = User::factory()->make();
        $response = $this->actingAs($user)->json('post', '/api/user/toggleFavoriteImage', []);
        $response->assertStatus(422);

        $response->assertJsonValidationErrors('image_id');

    }

}
