/**
 * Tangram
 * Copyright 2011 Baidu Inc. All rights reserved.
 */

///import baidu.ui.getAttribute;
///import baidu.dom.$query;
///import baidu.dom.$g;
///import baidu.object.extend;
///import baidu.array.$indexOf;

/**
 * 获取元素所在的控件下所有或制定的role的所有属性
 * @param {HTMLElement|string} element 要查找的元素
 * @param {string} role 角色值
 * @return {array} 找到符合的子元素数组
 */
baidu.ui.getRoles = function(element, role) {
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
        tempElement,
        attr,
        i;

    for(i=0;tempElement = allElements[i];i++) {
        if(!baidu.array.indexOf(otherElements, tempElement)) {
            role = tempElement.getAttribute('t-role');
            attr = baidu.object.extend({
                element: tempElement
            }, baidu.ui.getAttribute(tempElement));

            if(result[role]) {
                result[role].push(attr);
            } else {
                result[role] = [attr];
            }
        }
    }

    return result;
};
