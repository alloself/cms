<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\CMS\Menu;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Str;

class AuthenticationController extends Controller
{
    public function login(Request $request)
    {
        if (!Auth::attempt($request->only('email', 'password'))) {
            return response()->json([
                'message' => 'Invalid login details'
            ], 401);
        }

        $user = User::where('email', $request->email)->firstOrFail();

        $token = $user->createToken('auth_token')->plainTextToken;

        return $token;
    }

    public function user(Request $request)
    {
        return $request->user()->load('children');
    }

    public function logout(Request $request)
    {
        return $request->user()->tokens()->delete();
    }

    public function register(Request $request)
    {
        $fields = $request->validate([
            'first_name' => 'required',
            'last_name' => 'required',
            'middle_name' => 'required',
            'email' => 'required|string|unique:users,email',
            'password'  => 'required|string|confirmed',
        ]);

        $user = new User();
        if ($request->has('referal_code')) {
            $referal_owner = User::where('referal_code', $request->referal_code)->first();
            $user->parent_id = $referal_owner->id;
        }
        $user->email = $fields['email'];
        $user->first_name = $fields['first_name'];
        $user->last_name = $fields['last_name'];
        $user->middle_name = $fields['middle_name'];
        $user->password = Hash::make($fields['password']);
        $user->remember_token = Str::random(10);
        $user->referal_code = Str::random(10);
        $user->save();

        $token = $user->createToken('account')->plainTextToken;

        $response = [
            'user' => User::where('email', $fields['email'])->firstOrFail(),
            'token' => $token
        ];

        return $response;
    }

    public function currencyList()
    {
        $response = Http::withHeaders([
            'X-CMC_PRO_API_KEY' => env('CURRENCY_API_KEY'),

        ])->get(env('CURRENCY_API_URL') . '/v1/cryptocurrency/quotes/latest', [
            'symbol' => 'BTC,ETH,DOGE,LTC'
        ]);

        return $response;
    }

    public function menu()
    {
        return Menu::where('name', 'menu')->with(['items' => function ($query) {
            $query->orderBy('order', 'DESC')->with('attributes', 'children');
        }])->first();
    }
}
