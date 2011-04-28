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
///import baidu.page.hideBar;

/**
 * 从当前页面批量setup所有控件（DOM - 控件）
 *
 * @param {Function} [fn] setup成功回调函数
 * @param {object} [options] 配置
 * @param {HTMLElement} element setup容器元素
 */
baidu.ui.setup = function(fn, element) {
    function createAll() {
        var elements = baidu.dom.query('[t-ui]', element),
        length = elements.length,
        i,
        type,
        ui,
        element,
        uiArray = [];
        
        //统一setup
        for(i=0;i<length;i++) {
            element = elements[i];
            type = element.getAttribute('t-ui');

            if(type) {
                ui = new baidu.ui[type]({
                    element: element
                });
                ui._setup();
                uiArray.push(ui);
            }
        }
        
        //统一初始化
        for(i=0;i<length;i++) {
            uiArray[i]._init();
        }
        
        //执行成功回调函数
        if(fn) {
            fn();
        }
    }
    
    baidu.page.hideBar(createAll);
};
