<?php

require_once './../db_connect.php';

function getParks($dbc)
{
  $stmt = $dbc->query("SELECT * FROM national_parks");
  $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);
  return $rows;
}

$parks = getParks($dbc);

 ?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title></title>

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">

    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.2/html5shiv.js"></script>
      <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>
  <body>
    <table class="table-striped table-hover">
      <thead>
        <th>Name</th>
        <th>Location</th>
        <th>Date Established</th>
        <th>Area In Acres</th>
      </thead>
      <tbody>
        <?php foreach($parks as $park): ?>
        <tr>
          <td><?= $park['name']; ?></td>
          <td><?= $park['location']; ?></td>
          <td><?= $park['date_established']; ?></td>
          <td><?= $park['area_in_acres']; ?></td>
        </tr>
      <?php endforeach; ?>
      </tbody>
    </table>


    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
  </body>
</html>
