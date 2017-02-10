$('#card').on('click', function(){
  $(this).toggleClass('flipped');
});

$('#slide.first').on('click', function(){
  $('#slide.second').toggleClass('slideleft');
});

$('#slide.second').on('click', function(){
  $('#slide.third').toggleClass('slideleft');
});
