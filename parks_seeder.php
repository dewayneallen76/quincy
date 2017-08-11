<?php

require_once('db_connect.php');

$dbc->exec('TRUNCATE national_parks');

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
  $seedParksTable = "INSERT INTO national_parks (name, location, date_established, area_in_acres) VALUES (:name, :location, :date_established, :area_in_acres)";

  $stmt = $dbc->prepare($seedParksTable);

  $stmt->bindValue(':name', $park[0], PDO::PARAM_STR);
  $stmt->bindValue(':location', $park[1], PDO::PARAM_STR);
  $stmt->bindValue(':date_established', $park[2], PDO::PARAM_STR);
  $stmt->bindValue(':area_in_acres', $park[3], PDO::PARAM_STR);

  $stmt->execute();
}


 ?>
