<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Exceptions\Handler;

/*
   |--------------------------------------------------------------------------
   | API Routes
   |--------------------------------------------------------------------------
   |
   | Here is where you can register API routes for your application. These
   | routes are loaded by the RouteServiceProvider within a group which
   | is assigned the "api" middleware group. Enjoy building your API!
   |
 */

Route::middleware('auth:api')->get('/user', function (Request $request) {
  return $request->user();
});

Route::get('/links', 'LinksController@index')->name('get-all-links');
/*Route::get('/links', function () {
  return App\Link::all()->toJson();
});*/

Route::post('/links', function (Request $request) {
  try {
    $request->validate(
      ["url" => "required|url",],
      ["Invalid URL",],
    );
    $url = $request->url;
    $newLink = new App\Link;
    $newLink->url = $url;
    $newLink->save();
    return $newLink->toJson();
  } catch (Throwable $err) {
    return response()->json([
      "status" => $err->status,
      "message" => $err->validator->customMessages[0]
    ]);
  }
});
//	    'LinksController@add')->name('add-new-link');
