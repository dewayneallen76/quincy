(function() {
  'use strict';
  console.log('connected');

  const apiKey = "9045f328001b8cd61b813c19463bd371";
  var url = "http://api.openweathermap.org/data/2.5/forecast/daily";
  var lat = "29.423017";
  var lon = "-98.48527";

/* function to make the call to the open weather API */
  function getWeather() {
    $.get(url, {
      APPID: apiKey,
      lat: lat,
      lon: lon,
      cnt: "3",
      units: "imperial"
    }).done(function(data){
        displayWeather(data);
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
      var dayOfWeek = days[date.getDay()]
        content += "<div class='col-lg-4 day'>";
        content += "<h3>" + dayOfWeek + "</h3>" + "<br>";
        content += "<h4>" + Math.round(weather.temp.min) + "&deg" + "/" + Math.round(weather.temp.max) + "&deg" + "</h4>" + "<br>";
        content += "<img src='http://openweathermap.org/img/w/" + weather.weather[0].icon +".png'>" + "<br>";
        content += "<strong>" + weather.weather[0].main + "</strong>"+ ": " + weather.weather[0].description + "</br>";
        content += "<strong>Humidity: </strong>" + weather.humidity + "</br>";
        content += "<strong>Pressure: </strong>" + weather.pressure;
      console.log(dayOfWeek);
      content += "</div>" /* closes column */
    });
      content += "</div>" /* closes row */
    $('#forecastDiv').append(content);
  }


  getWeather();





}());
