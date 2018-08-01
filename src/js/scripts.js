
// Movimento das barras de destaque.
const el = document.getElementById('featured');
if (el.addEventListener) {
    el.addEventListener('mousemove', function (event) {
        document.querySelector('.xtop').style.left = event.pageX - 8 + 'px';
        document.querySelector('.yleft').style.top = event.pageY - 8 + 'px';
    }, false);
} else if (el.attachEvent) {
    el.attachEvent('onmousemove', function (event) {
        document.querySelector('.xtop').style.left = event.pageX - 8 + 'px';
        document.querySelector('.yleft').style.top = event.pageY - 8 + 'px';
    });
}

/**
 * Swiper 4.3.3
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * http://www.idangero.us/swiper/
 *
 * Copyright 2014-2018 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: June 5, 2018
 */
import Swiper from 'swiper';

const members = new Swiper('.members__swiper--container', {
    // If we need pagination
    pagination: {
        el: '.members__swiper--pagination',
        clickable: true,
        renderBullet: function (index, className) {
            var texts = ['Management','Backend', 'Frontend'];
            return '' +
                '<li class="' + className + '">' +
                '<a href="javascript:void(0)">' + (texts.hasOwnProperty(index) ? texts[index] : (index + 1)) + '</a>' +
                '</li>';
        }
    },
});
