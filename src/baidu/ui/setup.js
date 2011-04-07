/*
/*
* Tangram Mobile
* Copyright 2011 Baidu Inc. All rights reserved.
*
* path: baidu/ui/setup.js
* author: walter
* version: 1.0.0
* date: 2011/4/2
*/

///import baidu.dom.query;
///import baidu.dom.ready;
///import baidu.ui.getAttribute;
///import baidu.ui.hideBarFn;
///import baidu.lang.isFunction;
///import baidu.page.hideBar;

/**
 * 从当前页面批量setup所有控件（DOM - 控件）
 *
 * @param {Function} fn 渲染查成功回调函数
 */
baidu.ui.setup = function(fn) {
    function create(element) {
        var uiOpt = baidu.ui.getAttribute(element),
        type = uiOpt.ui;

        if(type) {
            uiOpt.element = element;
            uiOpt.autoRender = true
            new baidu.ui[type](uiOpt);
        }
    }

    function createAll() {
        var elements = baidu.dom.query('[data-tangram]'),
        length = elements.length,
        i;

        for(i=0;i<length;i++) {
            create(elements[i]);
        }
        
        if(baidu.lang.isFunction(fn)) {
            fn();
        }
    }

    baidu.dom.ready( function() {
        if(baidu.ui.hideBarFn()) {//如果允许隐藏地址栏
                baidu.page.hideBar(createAll);
            } else {//直接初始化UI
                createAll();
            }
    })
};
