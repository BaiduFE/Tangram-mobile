/*
 * Tangram Mobile
 * Copyright 2011 Baidu Inc. All rights reserved.
 * 
 * path: baidu/mobile/dom/ready.js
 * author: walter
 * version: 1.0.0
 * date: 2011/3/7
 */

///import baidu.mobile.dom;

/**
 * 使函数在页面dom节点加载完毕时调用
 * @author allstar
 * @name baidu.mobile.dom.ready
 * @function
 * @grammar baidu.mobile.dom.ready(callback)
 * @param {Function} callback 页面加载完毕时调用的函数.
 * @remark
 * 如果有条件将js放在页面最底部, 也能达到同样效果，不必使用该方法。
 * @meta standard
 */

(function(){
    var readyFunc = [];
    
    function DOMReady(){
        for (var i = 0, l = readyFunc.length; i < l; i++) {
            readyFunc[i]();
        }
        
        readyFunc = null;
        document.removeEventListener('DOMContentLoaded', DOMReady, false);
    };
    
    baidu.mobile.ready = baidu.mobile.dom.ready = function(fn){
        if (readyFunc.length == 0) {
            document.addEventListener('DOMContentLoaded', DOMReady, false);
        }
        readyFunc.push(fn);
    };
    
})();
