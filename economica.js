if (window.matchMedia('(min-width: 1068px)').matches) {
  var navpos2 = $('#customblock-Akreditasi-Sinta').offset();
  $(window).bind('scroll', function () {
  if ($(window).scrollTop() > navpos2.top) {
    $('#customblock-Right-Menu').addClass('kanan-fixed');
  } else {
    $('#customblock-Right-Menu').removeClass('kanan-fixed');
  }
  });
}


if (window.matchMedia('(min-width: 1068px)').matches) {
  var navpos = $('#navbar').offset();
  $(window).bind('scroll', function () {
  if ($(window).scrollTop() > navpos.top) {
    $('#navbar').addClass('selaludiatas');
    
  } else {
    $('#navbar').removeClass('selaludiatas');
    
  }
  });
}
