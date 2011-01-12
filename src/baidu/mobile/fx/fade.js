/*
 * Tangram Mobile
 * Copyright 2010 Baidu Inc. All rights reserved.
 * 
 * path: baidu/mobile/fx/fade.js
 * author: bang
 * version: 1.0.0
 * date: 2010/12/6
 */

///import baidu.mobile.dom.getStyle;
///import baidu.object.extend;
///import baidu.mobile.fx.start;

/**
 * 淡入淡出效果
 * @param {HTMLelem} elem  目标元素
 * @param {Object} options 选项 
 *        参考baidu.mobile.fx.start，忽略from to参数，新增：
 *        {
 *            out : {boolean} false    //运动类型是否为out(从正常显示运动到消失)
 *        }
 */
baidu.mobile.fx.fade = function(elem, options) {
    var 
        curZ = baidu.mobile.getStyle(elem, 'z-index') == 'auto' ? 0 : baidu.mobile.getStyle(elem, 'z-index'),
        out = options && options.out;
    
    options = baidu.object.extend(options || {}, {
        from : {
            opacity : (out ? 1 : 0) ,
            zIndex : (out ? curZ : curZ + 1)
        },
        to : {
            opacity : (out ? 0 : 1) ,
            zIndex : (out ? curZ : curZ + 1)
        }
    });
    baidu.mobile.fx.start(elem, options);
};	