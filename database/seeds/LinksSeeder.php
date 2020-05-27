<?php

use Illuminate\Database\Seeder;

class LinksSeeder extends Seeder
{
  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run()
  {
    DB::table('links')->insert([
      [
	'url' => 'https://www.youtube.com/watch?v=7U89ioflm0s',
	'description' => 'climbing video',
	'tags' => 'climbing,',
      ],
      [
	'url' => 'https://www.youtube.com/watch?v=za8yS1JfztM',
	'description' => 'climbing video',
	'tags' => 'climbing,',
      ],
      [
	'url' => 'https://www.youtube.com/watch?v=2Tz5GioEybg',
	'description' => 'climbing video',
	'tags' => 'climbing,',
      ],
    ]);
  }
}
