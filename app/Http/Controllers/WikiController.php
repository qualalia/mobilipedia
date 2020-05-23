<? php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Links;

class LinksController extends Controller {

  /**
   * Adds a new link to the database.
   *
   * @return Response
   */
  public function getAll() {
    return Links::findAll()->toJson();
  }

  /**
   * Adds a new link to the database.
   *
   * @param  Request  $request
   * @param  string  $id
   * @return Response
   */
  public function add(Request $request) {
    $info = $request->all();
    // sanitize
    $newLink = new Links;
    $newLink->url = $info->url;
    $newLink->save();
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
