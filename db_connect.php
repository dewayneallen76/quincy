<?php
require_once('parks_login.php');

$dbc = new PDO('mysql:host='. DB_HOST . ';dbname=' . DB_NAME , DB_USER, DB_PASS);

$dbc->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

// echo  $dbc->getAttribute(PDO::ATTR_CONNECTION_STATUS).PHP_EOL;

 ?>
