<?php
function clearSession()
{
    // clear $_SESSION array
    session_unset();

    // ensure client is sent a new session cookie
    session_regenerate_id();
}
    // start a new session - session_destroy() ended our previous session so
    // if we want to store any new data in $_SESSION we must start a new one
session_start();

clearSession();

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
