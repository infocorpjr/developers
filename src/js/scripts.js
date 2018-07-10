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

const testing = new Swiper('#testing', {
    // Optional parameters
    direction: 'horizontal',
    touchEventsTarget: 'wrapper',
    loop: false,
    // If we need pagination
    pagination: {
        el: '#testing__pagination',
        clickable: true
    },
});

const developing = new Swiper('#developing', {
    // Optional parameters
    direction: 'horizontal',
    touchEventsTarget: 'wrapper',
    loop: false,
    // If we need pagination
    pagination: {
        el: '#developing__pagination',
        clickable: true
    },
});