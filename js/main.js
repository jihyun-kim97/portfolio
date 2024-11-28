$(function () {
    $('.canvas > ul> li').click(function () {
        let color = $(this).css('background-color');
        console.log(color)
        $('.mainSvg path').css({ 'fill': color });
    });
});