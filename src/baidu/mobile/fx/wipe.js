/*
 * Tangram Mobile
 * Copyright 2010 Baidu Inc. All rights reserved.
 * 
 * path: baidu/mobile/fx/wipe.js
 * author: bang
 * version: 1.0.0
 * date: 2010/12/6
 */

///import baidu.dom.g
///import baidu.mobile.fx.start
///import baidu.mobile.dom.getStyle;

/**
 * 渐变遮罩效果
 *        目前只有safari5.0支持
 * @param {HTMLelem} elem  目标元素
 * @param {Object} options 选项 
 *        参考baidu.mobile.fx.start，忽略from to参数
 */
baidu.mobile.fx.wipe = function(elem, options) {
    var 
        options = options || {},
        elem = baidu.dom.g(elem),
        elemWidth = elem.offsetWidth,
        elemHeight = elem.offsetHeight,
        curZ = baidu.mobile.getStyle(elem, 'z-index'),
        mask = '',
        toSize = '100%',
        fromSize = '100%';
    zIndex = curZ + 1;
    mask = '-webkit-gradient(linear, left bottom, right bottom, from(transparent), to(#000), color-stop(66%, #000), color-stop(33%, transparent))';
    toSize = elemHeight * 100 + 'px';
    fromSize = elemHeight;

    options.from = {
        'webkitMaskImage': mask,
        'webkitMaskSize': elemWidth * 3 + 'px ' + elemHeight + 'px',
        'zIndex': zIndex,
        'webkitMaskPositionX': 0
    };
    options.to = {
        'webkitMaskImage': mask,
        'webkitMaskSize': elemWidth * 3 + 'px ' + elemHeight + 'px',
        'zIndex': zIndex,
        'webkitMaskPositionX': -elemWidth * 2 + 'px'
    };
    baidu.mobile.fx.start(elem, options);
};