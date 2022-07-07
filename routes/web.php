<?php

use App\Http\Controllers\Web\PageController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::redirect('/', '/ru');

Route::get('/cms{any}', [PageController::class, 'cms'])->where('any', '.*')->name('cms');
Route::get('/account{any}', [PageController::class, 'account'])->where('any', '.*')->name('account');
Route::prefix('{language}')->get('/{path?}', [PageController::class, 'site'])->where('path', '.*')->name('site');
