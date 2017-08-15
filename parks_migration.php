<?php

require_once('db_connect.php');

$dbc->exec("DROP TABLE IF EXISTS national_parks");

$createParksTable = 'CREATE TABLE IF NOT EXISTS national_parks (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  location VARCHAR(255) NOT NULL,
  date_established DATE NOT NULL,
  area_in_acres DOUBLE NOT NULL,
  description TEXT NOT NULL,
  PRIMARY KEY (id)
)';

$dbc->exec($createParksTable);
echo "parks table successfully created" . PHP_EOL;
?>
