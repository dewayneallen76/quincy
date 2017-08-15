<?php

require_once 'Park.php';

Park::dbConnect();
Park::$dbc->exec('TRUNCATE national_parks');

// get contents of national_parks csv file
$contents = file_get_contents('national_parks.csv');

// get an array of all the rows
$parks = explode("\n", trim($contents));

// remove the heading
array_shift($parks);

// trim each
$parks = array_map('trim', $parks);

foreach($parks as $park) {
  $park = explode(',', $park);

  $addPark = new Park();
  $addPark->name = $park[0];
  $addPark->location = $park[1];
  $addPark->dateEstablished = $park[2];
  $addPark->areaInAcres = $park[3];
  $addPark->description = $park[4];

  $addPark->insert();
  
}


 ?>
