$(function () {
  $('.modal').fadeIn(500);

  $('.modal .inner button').click(function () {
    $('.modal').fadeOut();
  });
  $('.btn').click(function () {
    $(this).toggleClass('on');
  });

/* 창닫기를 클릭하면 창이 닫힘
다 닫으면 배경이 돌아옴 */


  $('.fix_photo .pt .close').click(function () {
    let i = $(this).parents('.fix_photo>.pt').index();
    $(this).parents('.fix_photo>.pt').hide();
    if(i ==0){
      $('.fix_photo').css('background','transparent')
    }
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