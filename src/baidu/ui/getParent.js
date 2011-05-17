/**
 * Tangram
 * Copyright 2011 Baidu Inc. All rights reserved.
 */
 
///import baidu.ui;
///import baidu.lang.instance;

/**
 * 获取父亲UI的实例
 * @param {HTMLElement} 目标元素
 */
baidu.ui.getParent = function(element) {
    while(element) {
        element = element.parentNode;
        
        if(element == document.body){
            return null;
        }
        
        if(element.getAttribute('t-ui')) {
            return baidu.lang.instance(element.getAttribute('t-guid'));
        }
    }
};
