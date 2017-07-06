(function() {
  'use strict';
  console.log('connected');

  $.get("http://api.openweathermap.org/data/2.5/weather", {
    APPID: "9045f328001b8cd61b813c19463bd371",
    q:     "San Antonio, TX"
  }).done(function(data){
    console.log(data);
  });

}());
