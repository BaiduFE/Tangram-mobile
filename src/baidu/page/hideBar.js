/*
* Tangram Mobile
* Copyright 2010 Baidu Inc. All rights reserved.
*
*/

///import baidu.page;
///import baidu.dom.ready;
///import baidu.dom.setStyle;
///import baidu.dom._styleFilter.px;

/**
 * 隐藏地址栏
 *
 * @param {Function}   fn 回调函数
 */
baidu.page.hideBar = function (fn) {
    function setBody() {
        var bigHeight = Math.max(window.innerHeight, window.innerWidth) * 2;
        baidu.dom.setStyle(document.body, 'height', bigHeight);
    }

    function hideFunc() {
        if(!window.pageYOffset) {
            setBody();

            setTimeout( function() {
                window.scrollTo(0, 1);
                
                if(fn) {
                    setTimeout( function() {
                        fn();
                    }, 100)
                }
            }, 0);
        };
    }

    baidu.dom.ready(hideFunc);
};
