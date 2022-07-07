<?php

namespace Database\Seeders;

use App\Models\Language;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'email' => 'admin@' . env('MAIL_HOST'),
            'password' => Hash::make('password'),
            'referal_code' => Str::random(10)
        ]);
        Language::create([
            'name' => 'Ru',
            'code' => 'ru'
        ]);
        Language::create([
            'name' => 'En',
            'code' => 'en'
        ]);
    }
}
