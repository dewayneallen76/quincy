<?php

require_once './../db_connect.php';

$stmt = $dbc->query("SELECT * FROM national_parks");


var_dump($stmt->fetch(PDO::FETCH_ASSOC));



 ?>
