/*
* Tangram
* Copyright 2011 Baidu Inc. All rights reserved.
*/

///import baidu.event.fire;

baidu.event.fireCustomEvent = function(element, type, options) {
    options = options || {};
    var fire = baidu.event.fire;
    switch(type) {
    	case 'taphold': 
    		fire(element, 'touchstart');
    		break;
    		
        case 'tap':
            fire(element, 'touchstart');
            fire(element, 'touchend');
            break;
        
        case 'dbtap':
        	fire(element, 'touchstart');
            fire(element, 'touchend');
            fire(element, 'touchstart');
            fire(element, 'touchend');
            break;
        
        case 'scroll':
        case 'drag':
            if(options.direction == 'left') {
                fire(element, 'touchstart', {
                    clientX: 1
                });
                fire(element, 'touchmove');
                fire(element, 'touchend');
            } else if(options.direction == 'up') {
                fire(element, 'touchstart');
                fire(element, 'touchmove', {
                    clientY: 1
                });
                fire(element, 'touchend');
            } else if(options.direction == 'down') {
                fire(element, 'touchstart', {
                    clientY: 1
                });
                fire(element, 'touchmove');
                fire(element, 'touchend');
            } else {
                fire(element, 'touchstart');
                fire(element, 'touchmove', {
                    clientX: 1
                });
                fire(element, 'touchend');
            }
            break;

        case 'swipe':
            if(options.direction == 'right') {
                fire(element, 'touchstart');
                fire(element, 'touchmove', {
                    clientX: 40
                });
                fire(element, 'touchend');

            } else {
                fire(element, 'touchstart', {
                    clientX: 40
                });
                fire(element, 'touchmove');
                fire(element, 'touchend');
            }
            break;
            
         case 'turn':
         	if(window.innerWidth > window.innerHeight) {
                options.turned = true;
                options.orientation = 'landscape';
            } else {
                options.turned = false;
                options.orientation = 'portrait';
            }
            
         	if("orientation" in window){
         		fire(window, 'orientationchange', options);
         	}else{
         		fire(window, 'resize', options);
         	}
         	break;
         	
         case 'pinch':
         	fire(element, 'gesturestart');
         	fire(element, 'gesturechange');
         	break;
            
         default :
         	fire(element, type, options);
    }
}