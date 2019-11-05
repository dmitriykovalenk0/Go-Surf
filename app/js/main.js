$(function () {
    $('.header__slider').slick({
        infinity: true,
        fade: true,
        nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/arrows-right.svg"alt="">',
        prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/arrows-left.svg"alt="">',
        asNavFor: '.slider-dots',
    })

    $('.slider-dots').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.header__slider',
    });

    $('.surf-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/arrows-right.svg"alt="">',
        prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/arrows-left.svg"alt="">',
        asNavFor: '.slider-map',
    });

    $('.slider-map').slick({
        slidesToShow: 8,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.surf-slider',
        focusOnSelect: true
    });
})