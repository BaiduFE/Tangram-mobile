/*
* Tangram UI
* Copyright 2011 Baidu Inc. All rights reserved.
*
* path: baidu/ui/getAttributesByRole.js
* author: walter
* version: 1.0.0
* date: 2010/4/14
*/

///import baidu.ui;
///import baidu.dom.query;
///import baidu.dom.g;
///import baidu.object.extend;

/**
 * 获取元素所在的控件下所有或制定的role的所有属性
 * @param {HTMLElement|string} element 要查找的元素
 * @param {string} role 角色值
 * @return {array} 找到符合的子元素数组
 */
baidu.ui.getAttributesByRole = function(element, role) {
    element = baidu.dom.g(element);

    while(1) {
        if(!element || element == document.body) {
            return null;
        }

        if(element.getAttribute('t-ui')) {
            break;
        }
        element = element.parentNode;
    }

    var roleSelector = role ? '[t-role="' + role + '"]' : '[t-role]',
        allElements = baidu.dom.query(roleSelector, element),
        otherElements = baidu.dom.query('[t-ui] ' + roleSelector, element),
        result = {},
        attr,
        length = allElements.length,
        inArray = function(element, source) {
            var length = source.length;
            for(var i=0;i<length;i++) {
                if(source[i] == element) {
                    return true;
                }
            }
            return false;
        };
        
    for(var i=0;i<length;i++) {
        if(!inArray(allElements[i], otherElements)) {
            role = allElements[i].getAttribute('t-role');
            attr = baidu.object.extend({
                element: allElements[i]
            }, baidu.ui.getAttribute(allElements[i]));

            if(result[role]) {
                result[role].push(attr);
            } else {
                result[role] = [attr];
            }
        }
    }

    return result;
}
