<?php

require_once 'User.php';
require_once 'functions.php';

// $bob = new User();
// $bob->username = "Bobbybob";
// $bob->email = "bob@bobco.bob";
// $bob->password = "password123";
//
// $bob->login("Bobbybob", "password123");
// $bob->logout();
//
// var_dump($bob);
$message = "";
if(inputHas('username') && inputHas('password') && inputHas('password')) {
  $user = new User();
  $user->username = inputGet('username');
  $user->password = inputGet('password');
  $user->email = inputGet('password');

  $user->login();

}

if(isset($user) && $user->isLoggedIn) {
  $message = "Welcome $user->username!";
}

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
    <form action="#" method="POST">
      <input type="text" name="username" placeholder="Input username">
      <input type="password" name="password" placeholder="Input password">
      <input type="text" name="email" placeholder="Input email">
      <button type="submit" name="button">Register</button>
    </form>
    <h1><?= $message; ?></h1>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
  </body>
</html>
