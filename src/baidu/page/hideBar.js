/*
 * Tangram Mobile
 * Copyright 2010 Baidu Inc. All rights reserved.
 * 
 * path: baidu/page/hideBar.js
 * author: bang
 * version: 1.0.0
 * date: 2010/12/6
 */

///import baidu.page;

/**
 * 隐藏地址栏
 *  
 * @param {Function}   fn 回调函数
 * @remark  页面高度应该大于等于可见高度才可隐藏地址栏
 */
baidu.page.hideBar = function (fn) {
    var hideFunc = function() {
            setTimeout(function() {
                window.scrollTo(0, 1);
                if(fn){
                    setTimeout(function(){
                        fn();
                    }, 0)
                }
            }, 0);
        }
    if (document.readyState == "complete") {
        hideFunc();
    } else {
        window.addEventListener("load", hideFunc, false);
    }
};