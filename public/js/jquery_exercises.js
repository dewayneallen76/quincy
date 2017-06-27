(function() {
  'use strict';
  console.log('connected');

  $('#main-header').css('color', 'red');

  $('#content').html('removing paragraph and adding this');

  $('#codeup').click(function() {
    alert('h1 with id codeup was clicked');
  });
}());
