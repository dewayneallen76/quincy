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

    $('button').click(function(event) {
      $('ul').each(function(index) {
        $(this).children('li').last().css('background-color', '#FF0');
      });
    });

    $('h3').click(function(event) {
      $(this).next().children().css('font-weight', 'bold');
    });

    $('li').click(function(event) {
      $(this).first().css('color', 'blue');
    });

  });

}());
