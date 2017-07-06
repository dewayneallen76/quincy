(function() {
  'use strict';
  console.log('connected');

  const apiKey = "9045f328001b8cd61b813c19463bd371";
  var lat = "29.423017";
  var lon = "-98.48527";

  $.get("http://api.openweathermap.org/data/2.5/forecast?", {
    APPID: apiKey,
    lat: lat,
    lon: lon,
    unit: "imperial"
  }).done(function(data){
      console.log(data);
  });

  



}());
