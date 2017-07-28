<?php

$nouns = ['dog', 'cat', 'car', 'tugboat', 'building', 'snake', 'tree', 'zombie', 'hobbit', 'nerfherder'];
$adjectives = ['funky', 'tiny', 'fresh', 'dank', 'horny', 'gigantic', 'stanky', 'hungry', 'honorable', 'fantastic'];

function randomNameGenerator($array) {
  $random = mt_rand(0, 9);
  return $array[$random];
}


 ?>

 <!DOCTYPE html>
 <html lang="en">
   <head>
     <meta charset="utf-8">
     <meta http-equiv="X-UA-Compatible" content="IE=edge">
     <meta name="viewport" content="width=device-width, initial-scale=1">
     <title>Server Name Generator</title>

     <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
     <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">

     <!--[if lt IE 9]>
       <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.2/html5shiv.js"></script>
       <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
     <![endif]-->
   </head>
   <body>
     <h1><?php echo randomNameGenerator($adjectives) . ' ' . randomNameGenerator($nouns) ; ?></h1>

     <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
     <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
   </body>
 </html>
