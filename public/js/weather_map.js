(function() {
  'use strict';
  console.log('connected');

  const apiKey = "9045f328001b8cd61b813c19463bd371"; // constant for API key
  var url = "http://api.openweathermap.org/data/2.5/forecast/daily"; // url for openweathermap daily forcast
  var lat = "29.423017"; // san antonio latitude
  var lon = "-98.48527"; // san antonio longitude
  var weatherOptions = { // weather options used in the get function
      APPID: apiKey,
      lat: lat,
      lon: lon,
      cnt: "3",
      units: "imperial"
  };

/* function to make the call to the open weather API */
  function getWeather() {
    $.get(url, weatherOptions).done(function(data){
        displayWeather(data);
    }).fail(function(status, error) {
        console.log(status);
        console.log(error);
    });
  }

/* function to display the weather and append to html */
  function displayWeather(weather) {
    var content = '';

      content += "<h2 id='header'><strong>" + weather.city.name + "</strong></h2>" + "<br>";
      content += "<div class='row'>";

    weather.list.forEach(function(weather) {
      var date = new Date(weather.dt * 1000);
      var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
      var dayOfWeek = days[date.getDay()];

        content += "<div class='col-sm-4 day'>";
        content += "<h3>" + dayOfWeek + "</h3>" + "<br>";
        content += "<h3>" + Math.round(weather.temp.min) + "&deg" + "/" + Math.round(weather.temp.max) + "&deg" + "</h3>" + "<br>";
        content += "<img src='http://openweathermap.org/img/w/" + weather.weather[0].icon +".png'>" + "<br>";
        content += "<h4><strong>" + weather.weather[0].main + "</strong>"+ ": " + weather.weather[0].description + "</h4></br>";
        content += "<h4><strong>Humidity: </strong>" + weather.humidity + "</h4><br>";
        content += "<h4><strong>Pressure: </strong>" + weather.pressure + "</h4><br>";
        content += "</div>" /* closes column */

    });

      content += "</div>" /* closes row */

    $('#forecastDiv').append(content);
  }

// Click event to display today's forecast for location selected
  $("#oneDayForecast").click(function(e) {
    weatherOptions.cnt = $("#oneDayForecast").val();
    $("#forecastDiv").html("");
    getWeather();
  });

// Click event to display the 3 day forecast for the location selected
  $("#threeDayForecast").click(function(e) {
      weatherOptions.cnt = $("#threeDayForecast").val();
      $("#forecastDiv").html("");
      getWeather();
  });

// Click event to display the 6 day forecast for the location selected
  $("#sixDayForecast").click(function(e) {
      weatherOptions.cnt = $("#sixDayForecast").val();
      $("#forecastDiv").html("");
      getWeather();
  });




// Function called to connect to openweathermap and display information
  getWeather();

// Map options for google maps api
  var markerLocation = { lat: 29.423017, lng: -98.48527 }
  var mapOptions = {
    // Set the zoom level
        zoom: 10,

        // This sets the center of the map at our location
        center: markerLocation
  };
// Render google map on the page
  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

// Create draggable marker that can be used with forecast functions
  var marker = new google.maps.Marker({
    position: markerLocation,
    map: map,
    draggable: true,
    title: "Move me!"
  });

// Added listener to marker to update weatherOtions latitude and longitude, clear the current weather forecast and call to getWeather function to update the page with the forecast for the location where the marker was dropped.
  google.maps.event.addListener(marker, 'dragend', function(e) {
    weatherOptions.lat = this.getPosition().lat();
    weatherOptions.lon = this.getPosition().lng();
    $('#forecastDiv').html("");
    getWeather();
  })

}());
