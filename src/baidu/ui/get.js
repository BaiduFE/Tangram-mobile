///import baidu.ui;
///import baidu.lang.isString;
///import baidu.lang.instance;
//

/**
 * 获取元素所在的控件
 * @param {HTMLElement|string} 要查找的元素，如果是字符串，则查找这个guid为此字符串的控件
 * @return {object} ui控件
 */
baidu.ui.get = function(element) {
    var lang = baidu.lang;
    if(lang.isString(element)) {
        return lang.instance(element);
    } else {
        while(element) {
            if(element == document.body) {
                return null;
            }

            if(element.getAttribute('t-ui')) {
                return lang.instance(element.getAttribute('data-guid'));
            }

            element = element.parentNode;
        }
    }
};

