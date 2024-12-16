$(document).ready(function () {
    function typeText(element, text, speed) {
        let index = 0;
        function type() {
            if (index < text.length) {
                $(element).append(text[index++]);
                setTimeout(type, speed);
            }
        }
        type();
    }

    let speed = 50; // 타이핑 속도 (밀리초 단위)
    $('.type-item').each(function (i, element) {
        let text = $(element).text();
        $(element).text('');
        setTimeout(function () {
            typeText(element, text, speed);
        }, i * 1000); // 항목마다 타이핑 시작 시간을 달리 함
    });
    let aboutTop = $('#about_me').offset().top;
    let ht = $(window).height();
    $(window).scroll(function () {
        let sc = $(window).scrollTop();

        if (sc >= ht) {
            $('.modal').hide();
        } else {
            $('.modal').show();
        }
    })
});