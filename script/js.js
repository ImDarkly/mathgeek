$(window).scroll(function() {
    if ($(document).scrollTop() > 0) {
      $('nav').addClass('sticky');
      $('.discord').addClass('show');
      $('.dark_theme').addClass('show');
      $('.discord').removeClass('hide');
      $('.dark_theme').removeClass('hide');
    } else {
      $('nav').removeClass('sticky');
      $('.discord').removeClass('show');
      $('.dark_theme').removeClass('show');
      $('.discord').addClass('hide');
      $('.dark_theme').addClass('hide');
    }
  });

$('.dark_theme').on('click', function() {
      
  $('#bg').toggleClass('dm');
  $('#bg').toggleClass('wm');
  $('.sun').toggleClass('hide');
  $('.sun').toggleClass('show');
  $('.moon').toggleClass('hide');
  $('.moon').toggleClass('show');
  $('.second').toggleClass('hide');
  $('.second').toggleClass('show');
  $('.third').toggleClass('hide');
  $('.third').toggleClass('show');



  });