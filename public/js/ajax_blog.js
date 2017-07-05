(function() {
  'use strict';

  var blog = 'data/blog.json';

  $.get(blog).done(function(data) {
    console.log(data);
  });

  function addBlog(blog) {
    var content = '';
    blog.forEach(function(blog){
      content += '<h2>' + blog.title + '</h2>';
      content += '<p>' + blog.content + '</p>';
      content += '<h4>' + 'Categories: ' + blog.categories + '</h4>';
      content += '<h4>' + 'Date: ' + blog.date + '</h4>';
    });
    $('#posts').append(content);
  }

  $.get(blog).done(function(blog) {
    addBlog(blog);
  });


}());
