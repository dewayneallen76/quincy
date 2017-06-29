(function() {
  'use strict';
  console.log('connected');

  $(document).ready(function() {
    $('#make-invisible').click(function(event) {
      event.preventDefault();
      $('dd').toggleClass('invisible');
    });

    $('dt').click(function(event) {
      event.preventDefault();
      $(this).toggleClass('highlighted');
    });
  });

}());
