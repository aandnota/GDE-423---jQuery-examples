$('.trigger').on('click', function(){
  $(this).toggleClass('clicked');
});

$('.trigger2').on('click', function(){
  $(this).toggleClass('clicked');
})

$('.trigger3').on('click', function(){
  $(this).toggleClass('is-paused');
  /* Act on the event */
});

$(function(){
  $('.draggable').draggable(),
  $('.draggable').addClass('is-absolute')
});

$(function(){
  $('#accordion').accordion();
})
