$(function () {
    $('.canvas > ul> li').click(function () {
        let color = $(this).css('background-color');
        console.log(color)
        $('.mainSvg path').css({ 'fill': color });
    });

    $('.question').click(function () {
        $('.modal').fadeIn();
    });

    $('.modal .inner button').click(function () {
        $('.modal').fadeOut();
    });
    $('.btn').click(function () {
        $(this).toggleClass('on');
    })
    
});

