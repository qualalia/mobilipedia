<?php

use Symfony\Component\Console\Output\ConsoleOutput;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Exceptions\Handler;
use App\Link;

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

Route::get('/links/{id}', function (Request $request) {
  return Link::where('id', $request->id)->get();
});

/* Gotta check out the Controller class probably;
   the returned response right now is a redirect,
   I think, rather than the JSON I expected.
 */
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

Route::delete('/links/{id}', function (Request $request) {
  try {
    Link::where('id', $request->id)->delete();
    return response()->json([
      "status" => 200,
      "message" => "Delete successful"
    ]);
  } catch (Throwable $err) {
    return response()->json([
      "status" => $err->status,
      "message" => $err->validator->customMessages[0]
    ]);
  }
});
