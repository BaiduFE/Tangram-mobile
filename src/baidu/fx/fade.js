/*
 * Tangram Mobile
 * Copyright 2010 Baidu Inc. All rights reserved.
 * 
 */

///import baidu.dom.getStyle;
///import baidu.object.extend;
///import baidu.fx.start;

/**
 * 淡入淡出效果
 * @param {HTMLelem} elem  目标元素
 * @param {Object} options 选项 
 *        参考baidu.fx.start，忽略from to参数，新增：
 *        {
 *            out : {boolean} false    //运动类型是否为out(从正常显示运动到消失)
 *        }
 */
baidu.fx.fade = function(elem, options) {
    var 
        curZ = baidu.getStyle(elem, 'z-index') == 'auto' ? 0 : baidu.getStyle(elem, 'z-index'),
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
    baidu.fx.start(elem, options);
    return elem;
};	
