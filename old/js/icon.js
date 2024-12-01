$(function () {
  $('.modal').fadeIn(500);

  $('.modal .inner button').click(function () {
    $('.modal').fadeOut();
  });
  $('.btn').click(function () {
    $(this).toggleClass('on');
  });

  let clickmeTop = $('#click_me').offset().top;
  let phoArr = $('.fix_photo > div'); 
  $(window).scroll(function() {
    let st = $(this).scrollTop();
    if (st >= clickmeTop) {
      if (!$('.fix_photo').is(':visible')) {
        $('.fix_photo').fadeIn(100, function() {
          phoArr.each(function(index) {
            $(this).delay(index * 200).fadeIn(100);
          });
        });
      }
    } else {
      if ($('.fix_photo').is(':visible')) {
        $('.fix_photo').fadeOut(100, function() {
          phoArr.hide();
        });
      }
    }
  });
  
});