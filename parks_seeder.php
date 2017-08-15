<?php

require 'Park.php';
// require_once('db_connect.php');

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
//
// refactor to use park model, not working currently, getting hung up on date_established
//   $addPark = new Park();
//   $addPark->name = $park[0];
//   $addPark->location = $park[1];
//   $addPark->date_established = $park[2];
//   $addPark->area_in_acres = $park[3];
//   $addPark->description = $park[4];
//
//   $addPark->insert();

  $seedParksTable = "INSERT INTO national_parks (name, location, date_established, area_in_acres, description) VALUES (:name, :location, :date_established, :area_in_acres, :description)";

  $stmt = Park::$dbc->prepare($seedParksTable);

  $stmt->bindValue(':name', $park[0], PDO::PARAM_STR);
  $stmt->bindValue(':location', $park[1], PDO::PARAM_STR);
  $stmt->bindValue(':date_established', $park[2], PDO::PARAM_STR);
  $stmt->bindValue(':area_in_acres', $park[3], PDO::PARAM_STR);
  $stmt->bindValue(':description', $park[4], PDO::PARAM_STR);

  $stmt->execute();
}


 ?>
