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

  $seedParksTable = "INSERT INTO national_parks (name, location, date_established, area_in_acres) VALUES ('{$park[0]}', '{$park[1]}', '{$park[2]}', '{$park[3]}')";

  $dbc->exec($seedParksTable);
}


 ?>
