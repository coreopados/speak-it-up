$(document).ready(function () {

    //sliders
    var mySwiper;
    var mySwiper2

    mySwiper = new Swiper('.online-slider', {
        // Optional parameter
        slidesPerView: 1,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        loop: true
    })


    $('.button-tab').on('click', function () {
        $('.button-tab').removeClass('active')
        $('.first-tab-content, .second-tab-content').removeClass('show')
        $(this).addClass('active')
        if ($(this).hasClass('button-tab-first')) {
            $('.first-tab-content').addClass('show');
            mySwiper2.destroy()
            mySwiper = new Swiper('.online-slider', {
                // Optional parameter
                slidesPerView: 1,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                loop: true
            })
        } else if ($(this).hasClass('button-tab-second')) {
            $('.second-tab-content').addClass('show')
            $('.effect').addClass('hide')
            mySwiper.destroy()
            mySwiper2 = new Swiper('.skype-slider', {
                // Optional parameter
                slidesPerView: 1,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                loop: true
            })
        }
    })

})