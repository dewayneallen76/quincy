<?php
session_start();

require 'functions.php';
require_once '../Auth.php';
require_once '../Input.php';

function pageController() {
  $data = [];

  if(Auth::check()) {
    header("Location: /authorized.php");
    die();
  }

  $message = "";
  $username = Input::get('username');
  $password = Input::get('password');

  if(!empty($_POST)) {
    if(Auth::attempt($username, $password)) {
      header("Location: authorized.php");
      die();
    } else {
      $message = "Invalid Login";
    }
  }

  $data = [
    'message' => $message,
    'username' => $username,
    'password' => $password
  ];
  return $data;
}

extract(pageController());
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
    <div class="container">
      <p><strong><?= $message ?></strong></p>
      <form class="" method="POST">
        <label for="username">Username:</label>
        <input type="text" name="username" value="">
        <label for="password">Password:</label>
        <input type="password" name="password" value="">
        <input type="submit">
      </form>
    </div>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
  </body>
</html>
