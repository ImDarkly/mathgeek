$(window).scroll(function() {
    if ($(document).scrollTop() > 100) {
      $('.navbar').addClass('sticky');
    } else {
      $('.navbar').removeClass('sticky');
    }
  });