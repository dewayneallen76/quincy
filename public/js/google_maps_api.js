(function() {
  'use strict';
  var myLatlng = { lat: 29.426791, lng: -98.489602 };
  var mapOne = document.getElementById("map");
  var mapOptions = {
    // Set the zoom level
        zoom: 19,

        // This sets the center of the map at our location
        center: {
            lat:  29.426791,
            lng: -98.489602
        },

        mapTypeId: google.maps.MapTypeId.HYBRID
  };
  var map = new google.maps.Map(mapOne, mapOptions);

  var marker = new google.maps.Marker({
    position: myLatlng,
    map: map,
    draggable: true,
    animation: google.maps.Animation.DROP
  })

  // SECOND MAP
  var mapTwoElement = document.getElementById('map_two');

  // Set our address to geocode
  var address = "300 Alamo Plaza, San Antonio, TX, 78205";

  // Init geocoder object
  var geocoder = new google.maps.Geocoder();

  // Geocode our address
  geocoder.geocode({ "address": address }, function(results, status) {

     // Check for a successful result
     if (status == google.maps.GeocoderStatus.OK) {
       var marker = new google.maps.Marker({
           map: mapTwo,
           position: results[0].geometry.location
       });

         // Recenter the map over the address
         mapTwo.setCenter(results[0].geometry.location);
     } else {

         // Show an error message with the status if our request fails
         alert("Geocoding was not successful - STATUS: " + status);
     }
    console.log(results,status);
   });

   var mapTwo = new google.maps.Map(mapTwoElement, mapOptions);

}());
