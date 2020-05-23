<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Link;

class LinksController extends Controller {

  /**
   * Adds a new link to the database.
   *
   * @return Response
   */
  public function index() {
    return Link::all()->toJson();
  }

  /**
   * Adds a new link to the database.
   *
   * @param  Request  $request
   * @param  string  $id
   * @return Response
   */
  public function add(Request $request) {
    try {
      $request->validate(
	["url" => "required|url"],
	["Invalid URL"],
      );
      $url = $request->url;
      $newLink = new Link;
      $newLink->url = $url;
      $newLink->save();
      return $newLink->toJson();
    } catch (Throwable $err) {
      return response()->json([
	"status" => $err->status,
	"message" => $err->validator->customMessages[0]
      ]);
    }
  }
  
  /**
   * Updates the specified link in the database.
   *
   * @param  Request  $request
   * @param  string  $id
   * @return Response
   */
  public function update(Request $request, $id) {
    //
  }
}
