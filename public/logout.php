<?php
session_start();
require_once '../Auth.php';

Auth::logout();
// header("Location: login.php");
// die();

 ?>

<!DOCTYPE html>
<html>
<head>
	<title>Authorized</title>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootswatch/3.3.7/slate/bootstrap.min.css">

</head>
<body>
	<div class="container text-center">
		<h1>YOU ARE NOW LOGGED OUT</h1>
		<br>
		<a class="btn btn-default" href="/login.php" role="button">Login</a>
	</div>

</body>
</html>
