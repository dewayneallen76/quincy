(function() {
  'use strict';
  var mapElement = document.getElementById("map");
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
  var map = new google.maps.Map(mapElement, mapOptions);

  // Set our address to geocode
  var address = "300 Alamo Plaza, San Antonio, TX, 78205";

  // Init geocoder object
  var geocoder = new google.maps.Geocoder();

  // Geocode our address
  geocoder.geocode({ "address": address }, function(results, status) {

     // Check for a successful result
     if (status == google.maps.GeocoderStatus.OK) {

         // Recenter the map over the address
         map.setCenter(results[0].geometry.location);
     } else {

         // Show an error message with the status if our request fails
         alert("Geocoding was not successful - STATUS: " + status);
     }
   });



}());
