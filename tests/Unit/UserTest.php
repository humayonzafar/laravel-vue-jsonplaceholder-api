<?php

namespace Tests\Unit;

use App\Models\User;
use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

class UserTest extends TestCase
{
    use RefreshDatabase;


    /** @test */
    public function a_visitor_can_visit_home()
    {
        $response = $this->get('/home');

        $response->assertStatus(200);
    }

    /** @test */
    public function access_restricted_route()
    {
        $user =  User::factory()->create();

        $response =  $this->actingAs($user)->get('/api/user/auth');;

        $response->assertStatus(200);
    }

    /** @test */
    public function no_access_restricted_route()
    {
        $response = $this->json('get', 'api/user/auth');

        $response->assertStatus(401);

    }
}
