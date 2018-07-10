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

const mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    touchEventsTarget: 'wrapper',
    loop: false,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});