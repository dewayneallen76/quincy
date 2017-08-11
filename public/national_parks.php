<?php

require_once './../db_connect.php';
require_once './../Input.php';

function getLastPage($dbc, $limit) {
  $stmt = $dbc->query("SELECT COUNT(*) FROM national_parks");
  $count = $stmt->fetch()[0];
  $lastPage = ceil($count / $limit);
  return $lastPage;
}

function getPaginatedParks($dbc, $page, $limit)
{
  $offset = ($page - 1) * $limit;

  $stmt = $dbc->query("SELECT * FROM national_parks LIMIT $limit OFFSET $offset");
  return $stmt->fetchAll(PDO::FETCH_ASSOC);
}

function handleOutOfRangeRequests($page, $lastPage)
{
	// protect from looking at negative pages, too high pages, and non-numeric pages
 if($page < 1 || !is_numeric($page)) {
		header("location: national_parks.php?page=1");
		die;
	} else if($page > $lastPage) {
		header("location: national_parks.php?page=$lastPage");
		die;
	}
}


function pageController($dbc)
{

  $data = [];

  $limit = 4;
  $page = Input::get('page', 1);

  $lastPage = getLastPage($dbc, $limit);

  handleOutOfRangeRequests($page, $lastPage);

  $data['parks'] = getPaginatedParks($dbc, $page, $limit);
  $data['page'] = $page;
  $data['lastPage'] = $lastPage;

  return $data;
}

extract(pageController($dbc));

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
      <table class="table table-striped table-hover table-bordered table-responsive">
        <h1>National Parks</h1>
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
      <a <?php if ($page <= 1): ?>style="color: grey;"<?php endif; ?> href="/national_parks.php?page=<?=$page-1?>">Previous</a>
      <a <?php if ($page >= $lastPage): ?>style="color: grey;"<?php endif; ?> class="pull-right" href="/national_parks.php?page=<?=$page+1?>">Next</a>
    </div>


    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
  </body>
</html>
