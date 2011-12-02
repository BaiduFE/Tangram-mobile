/**
 * Tangram
 * Copyright 2011 Baidu Inc. All rights reserved.
 */

///import baidu.ui;
///import baidu.dom.$query;
///import baidu.page.$hideBar;
///import baidu.ui.getAttribute;

/**
 * 从当前页面批量setup所有控件（DOM - 控件）
 *
 * @param {Function} [fn] setup成功回调函数
 * @param {object} [options] 配置
 * @param {HTMLElement} target setup容器元素
 */
baidu.ui.setup = function(fn, target) {
    baidu.page.hideBar(function(){
    	var elements = baidu.dom.query('[t-ui]', target),
            length = elements.length,
            i,
            type,
            ui,
            element,
            uiArray = [];

        //统一创建
        for(i=0;element = elements[i];i++) {
            type = element.getAttribute('t-ui');

            if(type) {
                type = type.charAt(0).toUpperCase() + type.slice(1);

                if(baidu.ui[type]) {
                    ui = new baidu.ui[type]({
                        element: element
                    });
            		ui._create();
                    uiArray.push(ui);
                }

            }
        }
        
        //统一初始化
        for(i=0;i<length;i++) {
            uiArray[i]._setup();
        }
        
        //统一初始化
        for(i=0;i<length;i++) {
            uiArray[i]._init();
        }

        //执行成功回调函数
        if(fn) {
            fn();
        }
    });
};
