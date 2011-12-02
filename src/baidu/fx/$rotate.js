/*
 * Tangram Mobile
 * Copyright 2010 Baidu Inc. All rights reserved.
 * 
 */

///import baidu.object.extend;
///import baidu.fx.$start;

/**
 * 旋转动画
 *     封装角度旋转动画
 *     注：目前无法与transform其他属性translate scale等做动画叠加
 * @param {HTMLelem} elem  目标元素
 * @param {number} to      目标角度
 * @param {number} from  初始角度(可选)
 * @param {Object} options 选项 参照baidu.fx.start
 * @return {DOMElement} 目标元素
 */
baidu.fx.rotate = function(elem, to, from, options) {
    options = baidu.object.extend(options || {}, {
        from : 
            from ? 
                {webkitTransform : "rotate(" + from + "deg)" }:
                {},
        to : {webkitTransform :  "rotate(" + to + "deg)" }
    });
    baidu.fx.start(elem, options);
    return elem;
};
