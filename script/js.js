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

  function createRipple(event) {
    const button = event.currentTarget;
  
    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
  
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
    circle.classList.add("ripple");
  
    const ripple = button.getElementsByClassName("ripple")[0];
  
    if (ripple) {
      ripple.remove();
    }
  
    button.appendChild(circle);
  }
  
  const buttons = document.getElementsByTagName("button");
  for (const button of buttons) {
    button.addEventListener("click", createRipple);
  }