$(function () {
    var wheel = document.querySelector('.wheel-img');
    var resultWrapper = document.querySelector('.spin-result-wrapper');
    var isRotated = false; // Флаг для отслеживания состояния крутящегося колеса

    $('.cursor-text').click(function () {
        // Проверяем, не было ли колесо уже повёрнуто
        if (!isRotated) {
            wheel.classList.add('super-rotation');
            // Устанавливаем таймер для отображения результата
            setTimeout(function () {
                resultWrapper.style.display = "block";
            }, 7000);
            // Устанавливаем таймер для отображения блока заказа
            setTimeout(function () {
                $('.spin-wrapper').slideUp();
                $('.order_block').slideDown();
                setTimeout(function () {
                    $('.order_block').hide();
                }, 10009999);
            }, 10000);
            // Добавляем класс 'rotated' для отметки, что колесо повёрнуто
            wheel.classList.add('rotated');
            // Устанавливаем флаг в значение true
            isRotated = true;
        } else {
            // Если колесо уже повёрнуто, отображаем результат
            resultWrapper.style.display = "block";
        }
    });

    $('.close-popup, .pop-up-button').click(function (e) {
        e.preventDefault();
        $('.spin-result-wrapper').fadeOut();
        var top = $('#toform').offset().top;
        $('body,html').animate({
            scrollTop: top
        }, 800);
    });

    $('[href^="#"]').on('click', function (e) {
        // e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 800);
    });
});
