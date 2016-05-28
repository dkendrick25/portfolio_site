$(function() {
  //click on a circle and make it rubberBand
  $('.circle').click(function() {
    $(this).addClass('animated rubberBand');
    setTimeout(function () {
          $('.circle').removeClass('animated rubberBand');
        }, 1000);
  });
//click on the square and make it bounce
$('.square').click(function() {
  $(this).addClass('animated bounce');
  setTimeout(function () {
        $('.square').removeClass('animated bounce');
      }, 1000);
});

//click on a triangle and make it wobble
$('.triangle').click(function() {
  $(this).addClass('animated wobble');
  setTimeout(function () {
        $('.triangle').removeClass('animated wobble');
      }, 1000);
});

})
