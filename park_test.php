<?php

require_once 'Park.php';

Park::dbConnect();

var_dump(Park::$dbc);

echo "there are" . Park::count() . " parks";

print_r(Park::all());
 ?>
