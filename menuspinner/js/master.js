$(document).ready(function() {
  $("#button").click(function(event) {
    $(this).toggleClass('boxbig'),
    $('ul.menu>li').toggle(),
    $('ul.menu>li').toggleClass('spin')
  });
});
