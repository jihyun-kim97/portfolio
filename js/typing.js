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


    let aboutTop = $('#about_me').offset().top;
    let ht =$(window).height();
    console.log(ht);
    $(window).scroll(function () {

        let sc = $(window).scrollTop();
        console.log(sc);
        if (sc >= aboutTop) {
            $('.type-item').each(function (i, element) {
                let text = $(element).text();
                $(element).text('');
                setTimeout(function () {
                    typeText(element, text, speed);
                }, i * 1000); // 항목마다 타이핑 시작 시간을 달리 함
            });
        }

        if (sc >= ht) {
            $('.modal').hide();
        }else{
            $('.modal').show();
        }
    });
});
