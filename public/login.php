<?php
session_start();

function pageController() {
  $data = [];
  $message = "";
  $username = (isset($_POST['username'])) ? $_POST['username'] : '';
  $password = (isset($_POST['password'])) ? $_POST['password'] : '';

  if(!empty($_POST)) {
    if($username == 'guest' && $password == 'password') {
      $_SESSION['logged_in_user'] = $username;
    } else {
      $message = "Login failed. Try again.";
    }
  }

  if(!empty($_SESSION)) {
    if($_SESSION['logged_in_user'] == 'guest') {
      header("Location: /authorized.php");
      die;
    }
  }

  $data['message'] = $message;
  $data['username'] = $username;
  $data['password'] = $password;


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
