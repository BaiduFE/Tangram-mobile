/**
 * Tangram
 * Copyright 2011 Baidu Inc. All rights reserved.
 */

///import baidu.ui;
///import baidu.string.trim;
///import baidu.string.toCamelCase;

/**
 *  从指定的dom元素中获取ui控件的属性值
 *
 *  todo: &datasource支持
 */

baidu.ui.getAttribute = function(element){
    var attributeName = "t-attr",
        attrs = element.getAttribute(attributeName),
        params = {},
        len,
        trim = baidu.string.trim;

    if (attrs) {
        attrs = attrs.split(';');
        len = attrs.length;

        for (; len--; ) {
            var s = attrs[len],
                pos = s.indexOf(':'),
                name = trim(pos >= 0 ? s.slice(0, pos) : s),
                value = pos >= 0 ? trim(s.slice(pos + 1)) || 'true' : 'true';

            params[baidu.string.toCamelCase(name)] =
                /^\d+(\.\d+)?$/.test(value)
                    ? value - 0
                    : value == 'true' ? true : value == 'false' ? false : value;
        }
    }

    return params;
};
