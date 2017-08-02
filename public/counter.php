<?php

function pageController()
{
  if(isset($_GET['direction']) && isset($_GET['count'])) {
    $count = $_GET['count'];
    $direction = $_GET['direction'];
    if($direction == 'UP') {
      $count++;
    } else {
      $count--;
    }
  } else {
    $count = $_GET['count'] = 0;
    $direction = $_GET['direction'] = 'START';
  }
  return [
    'count' => $count,
    'direction' => $direction
  ];
}

var_dump($_GET);
extract(pageController());

 ?>


<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>PHP Counter</title>

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">

    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.2/html5shiv.js"></script>
      <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>
  <body>
    <h1>Count:<?= $count; ?></h1>
    <a href="/counter.php?direction=UP&count=<?= $count; ?>">Up</a>
    <a href="/counter.php?direction=DOWN&count=<?= $count; ?>">Down</a>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
  </body>
</html>
