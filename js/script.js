$(document).ready(function () {



    //more reviews
    var num;
    var num_post;

    if ($('body').hasClass('main-page')) {
        num = 4;
    } else if ($('body').hasClass('blog-page')) {
        num = 8;
    }

    $('.wrap-blog__block:lt(' + num + ')').addClass('active ')
    $('.button-more-blogs').on('click', function () {
        event.preventDefault()
        $('.wrap-blog__block').addClass('active ')
        $('.button-more-blogs').css('visibility', 'hidden')
    })

    num_post = 1;
    $('.wrap-post__block:lt(' + num_post + ')').addClass('active ')
    $('.more-posts').on('click', function () {
        event.preventDefault()
        $('.wrap-post__block').addClass('active ')
        $('.more-posts').css('visibility', 'hidden')
    })

    //progress
    var progressLines = $('.progress-done')
    progressLines.each(function (i, elem) {
        console.log($(elem).attr('data-val'))

        $(elem).css('width', $(elem).attr('data-val') + "%")
        if (+$(elem).attr('data-val') < 50) {
            $(elem).css('background', '#3abf4a')
        } else if (+$(elem).attr('data-val') >= 50 && +$(elem).attr('data-val') < 75) {
            $(elem).css('background', '#fec504')
        } else if (+$(elem).attr('data-val') > 75) {
            $(elem).css('background', '#FF181F')
        }
    })

    //menu
    $('.menu-button').on('click', function () {
        $(this).toggleClass('active')
        $(this).next().toggleClass('active')
    })



    var video = $('.main-video');

    $('.video-block').on('click', function () {
        if ($(this).hasClass('active')) {
            $('.video-block').removeClass('active');
            $(video).get(0).pause();
        } else {
            $('.video-block').addClass('active');
            $(video).get(0).play();
        }
    })



    //hint

    $('.hint-wrap').on('click', function () {
        event.preventDefault();
        $('.hint-popup').toggleClass('show')
    })



    var ua = navigator.userAgent.toLowerCase();

    if (ua.indexOf('safari') != -1) {
        if (ua.indexOf('chrome') > -1) {
            console.log("1") // Chrome
        } else {
            Array.prototype.forEach.call(document.querySelectorAll('.hint-wrap'), function (e) {
                e.style = 'transform:translateY(-10px)';
            });
        }
    }

});

$(document).mouseup(function (e) { // событие клика по веб-документу
    var div = $(".menu, .menu-button"); // тут указываем ID элемента
    var hint = $(".hint-popup, .hint-wrap");

    if (!div.is(e.target) // если клик был не по нашему блоку
        &&
        div.has(e.target).length === 0) { // и не по его дочерним элементам
        div.removeClass('active'); // скрываем его
        $('.menu-button').removeClass('active')
    }
    if (!hint.is(e.target) // если клик был не по нашему блоку
        &&
        hint.has(e.target).length === 0) { // и не по его дочерним элементам
        hint.removeClass('active'); // скрываем его
        $('.hint-popup').removeClass('show')
    }
});