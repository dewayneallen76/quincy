(function() {
  'use strict';
  console.log('connected');

  $('#codeup').click(function(event) {
    $(this).html('Codeup Rocks!');
  });

  $(document).ready(function() {
    $('#highlight-important').click(function(event) {
      event.preventDefault();
      $('.important').toggleClass('highlighted');
    });
  });

}());
