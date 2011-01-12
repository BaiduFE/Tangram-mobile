/*
 * Tangram Mobile
 * Copyright 2010 Baidu Inc. All rights reserved.
 * 
 * path: baidu.mobile/fx/pop.js
 * author: bang
 * version: 1.0.0
 * date: 2010/12/6
 */

///import baidu.mobile.dom.getStyle;
///import baidu.mobile.fx.start;

/**
 * 放大缩小效果
 * @param {HTMLelem} elem  目标元素
 * @param {Object} options 选项 
 *        参考baidu.mobile.fx.start，忽略from to参数，新增：
 *        {
 *            out : {boolean} false    //运动类型是否为out(从正常显示运动到消失)
 *        }
 */
baidu.mobile.fx.pop = function(elem, options) {
    var
        options = options || {},
        curZ = baidu.mobile.getStyle(elem, 'z-index') == 'auto' ? 0 : baidu.mobile.getStyle(elem, 'z-index'),
        out = options.out,
        
        fromScale = out ? 1 : 0.01,
        toScale = out ? 0.01 : 1,
        
        fromOpacity = out ? 1 : 0,
        toOpacity = out ? 0 : 1,
        
        fromZ = out ? curZ : curZ + 1,
        toZ = out ? curZ : curZ + 1;
        
    options.from = {
        'webkitTransform': 'scale(' + fromScale + ')',
        'webkitTransformOrigin': '50% 50%',
        'opacity': fromOpacity
    };
    
    options.to = {
        'webkitTransform': 'scale(' + toScale + ')',
        'webkitTransformOrigin': '50% 50%',
        'opacity': toOpacity
    };
    
    baidu.mobile.fx.start(elem, options);
};