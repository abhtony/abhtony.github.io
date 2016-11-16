console.log("Hello World");

$(function() {
  $("#bars li .bar").each( function( key, bar ) {
    var percentage = $(this).data('percentage');

    $(this).animate({
      'height' : percentage + '%'
    }, 1000);
  });
});

$('.animate-scroll').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    return false;
});

$('.menu-item').click(function(){
  $(".navbar-collapse").collapse('hide');
});
