(function() {
  'use strict';
  console.log('connected');

  $(document).ready(function() {
    // Attributes and CSS lesson
    $('#make-invisible').click(function(event) {
      event.preventDefault();
      $('dd').toggleClass('invisible');
    });

    $('dt').click(function(event) {
      event.preventDefault();
      $(this).toggleClass('highlighted');
    });

    // Traversing lesson
    $('button').click(function(event) {
      $('ul').each(function(index) {
        $(this).children('li').last().css('background-color', '#FF0');
      });
    });

    $('h3').click(function(event) {
      $(this).next().children().css('font-weight', 'bold');
    });

    $('ul').click(function(event) {
      $(this).children('li').first().css('color', 'blue');
    });

    $('.hide-signup').click(function(event) {
      $('.newsletter').hide();
    });

  });

}());
