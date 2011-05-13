/*
* Tangram
* Copyright 2011 Baidu Inc. All rights reserved.
*/

///import baidu.event.fire;

baidu.event.fireCustomEvent = function(element, type, options) {
    options = options || {};
    switch(type) {
        case 'tap':
            baidu.event.fire(element, 'touchstart');
            baidu.event.fire(element, 'touchend');
            break;
            
        case 'scroll':
        case 'drag':
            if(options.direction == 'left') {
                baidu.event.fire(element, 'touchstart', {
                    clientX: 1
                });
                baidu.event.fire(element, 'touchmove');
                baidu.event.fire(element, 'touchend');
            } else if(options.direction == 'up') {
                baidu.event.fire(element, 'touchstart');
                baidu.event.fire(element, 'touchmove', {
                    clientY: 1
                });
                baidu.event.fire(element, 'touchend');
            } else if(options.direction == 'down') {
                baidu.event.fire(element, 'touchstart', {
                    clientY: 1
                });
                baidu.event.fire(element, 'touchmove');
                baidu.event.fire(element, 'touchend');
            } else {
                baidu.event.fire(element, 'touchstart');
                baidu.event.fire(element, 'touchmove', {
                    clientX: 1
                });
                baidu.event.fire(element, 'touchend');
            }
            break;

        case 'swipe':
            if(options.direction == 'right') {
                baidu.event.fire(element, 'touchstart');
                baidu.event.fire(element, 'touchmove', {
                    clientX: 40
                });
                baidu.event.fire(element, 'touchend');

            } else {
                baidu.event.fire(element, 'touchstart', {
                    clientX: 40
                });
                baidu.event.fire(element, 'touchmove');
                baidu.event.fire(element, 'touchend');
            }
            break;

    }
}
