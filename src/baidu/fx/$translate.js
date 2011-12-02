/*
 * Tangram Mobile
 * Copyright 2010 Baidu Inc. All rights reserved.
 * 
 */

///import baidu.fx.$getTranslate;
///import baidu.fx.$start;
///import baidu.object.extend;

/**
 * translate移动方法
 *     封装了3D移动
 *     注：目前无法与transform其他属性rotate scale等做动画叠加
 * @param {HTMLelem} elem  目标元素
 * @param {array} to      目标位置[x,y]
 * @param {array} from  初始位置[x,y] (可选)
 * @param {Object} options 选项 参照baidu.fx.start
 * @return {DOMElement} 目标元素
 */
baidu.fx.translate = function(elem, to, from, options) {
    var getTranslate = baidu.fx.getTranslate;
    
    options = baidu.object.extend(options || {}, {
        from : 
            from ? 
                {webkitTransform : getTranslate(from[0], from[1])} : 
                {},
        to : {webkitTransform : getTranslate(to[0], to[1])}
    });
    baidu.fx.start(elem, options);
    return elem;
};
