<?php

require_once __DIR__ . './../Park.php';
require_once __DIR__ . './../Input.php';

function getLastPage($limit)
{
  $count = Park::count();
  $lastPage = ceil($count / $limit);
  return $lastPage;
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

function addPark()
{
  $name = htmlspecialchars(strip_tags(Input::get('name')));
  $location = htmlspecialchars(strip_tags(Input::get('location')));
  $area_in_acres = htmlspecialchars(strip_tags(Input::get('area_in_acres')));
  $date_established = htmlspecialchars(strip_tags(Input::get('date_established')));
  $description = htmlspecialchars(strip_tags(Input::get('description')));

  $date_established = date('Y-m-d', strtotime($date_established));

  if(!is_numeric($area_in_acres)) {
    echo "Area in acres must be numeric";
    return;
  }

  $park = new Park();
  $park->name = $name;
  $park->location = $location;
  $park->areaInAcres = $area_in_acres;
  $park->dateEstablished = $date_established;
  $park->description = $description;

  $park->insert();
}


function pageController()
{

  $data = [];

  if(!empty($_POST)) {
    addPark();
  }

  $limit = 4;
  $page = Input::get('page', 1);

  $lastPage = getLastPage($limit);

  handleOutOfRangeRequests($page, $lastPage);

  $data['parks'] = Park::paginate($page, $limit);
  $data['page'] = $page;
  $data['lastPage'] = $lastPage;

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
      <table class="table table-striped table-hover table-bordered table-responsive">
        <h1>National Parks</h1>
        <thead>
          <th>Name</th>
          <th>Location</th>
          <th>Date Established</th>
          <th>Area In Acres</th>
          <th>Description</th>
        </thead>
        <tbody>
          <?php foreach($parks as $park): ?>
            <tr>
              <td><?= $park->name; ?></td>
              <td><?= $park->location; ?></td>
              <td><?= $park->date_established; ?></td>
              <td><?= $park->area_in_acres; ?></td>
              <td><?= $park->description ?></td>
            </tr>
          <?php endforeach; ?>
        </tbody>
      </table>
      <a <?php if ($page <= 1): ?>style="color: grey;"<?php endif; ?> href="/national_parks.php?page=<?=$page-1?>">Previous</a>
      <a <?php if ($page >= $lastPage): ?>style="color: grey;"<?php endif; ?> class="pull-right" href="/national_parks.php?page=<?=$page+1?>">Next</a>
      <br>
      <h2>Enter a new park</h2>
      <div class="form-group">
        <form action="national_parks.php" method="POST">
          <label for="name">Park Name:</label>
          <input type="text" class="form-control" name="name" id="name" placeholder="Enter park name">
          <label for="name">Location:</label>
          <input type="text" class="form-control" name="location" id="location" placeholder="Enter location">
          <label for="name">Date Established:</label>
          <input type="date" class="form-control" name="date_established" id="date_established" placeholder="Enter date established">
          <label for="name">Area in acres:</label>
          <input type="text" class="form-control" name="area_in_acres" id="area_in_acres" placeholder="Enter area in acres">
          <label for="name">Park description: </label>
          <input type="text" class="form-control" name="description" id="description" placeholder="Enter area in acres">
          <br>
          <button class="btn btn-default" type="submit" name="button">Submit</button>
        </form>
      </div>
    </div>


    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
  </body>
</html>
