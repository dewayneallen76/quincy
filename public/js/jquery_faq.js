(function() {
  'use strict';
  console.log('connected');
  $(document).ready(function() {
    $('#highlight-important').click(function(event) {
      event.preventDefault();
      $('.important').toggleClass('highlighted');
    });
  });

}());
