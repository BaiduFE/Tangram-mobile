/*
 * Tangram Mobile
 * Copyright 2010 Baidu Inc. All rights reserved.
 * 
 * path: baidu/mobile/fx/translate.js
 * author: bang
 * version: 1.0.0
 * date: 2010/12/6
 */

///import baidu.mobile.browser.has3d;
///import baidu.mobile.fx.start;
///import baidu.object.extend;

/**
 * translate移动方法
 *     封装了3D移动
 *     注：目前无法与transform其他属性rotate scale等做动画叠加
 * @param {HTMLelem} elem  目标元素
 * @param {array} to      目标位置[x,y]
 * @param {array} from  初始位置[x,y] (可选)
 * @param {Object} options 选项 参照baidu.mobile.fx.start
 */
baidu.mobile.fx.translate = function(elem, to, from, options) {
    var 
        translateOpen = 'translate' + (baidu.mobile.browser.has3d ? '3d(' : '('),
        translateClose = baidu.mobile.browser.has3d ? ',0)' : ')',
        getTranslate = function(x, y) {
            return translateOpen + x + "," + y + translateClose;
        }
        
    options = baidu.object.extend(options || {}, {
        from : 
            from ? 
                {webkitTransform : getTranslate(from[0], from[1])} : 
                {},
        to : {webkitTransform : getTranslate(to[0], to[1])}
    });
    baidu.mobile.fx.start(elem, options);
};