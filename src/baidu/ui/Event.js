/*
* Tangram Mobile
* Copyright 2011 Baidu Inc. All rights reserved.
*
* path: baidu/ui/Event.js
* author: walter
* version: 1.0.0
* date: 2011/4/17
*/

///import baidu.ui;
///import baidu.event.on;
///import baidu.event.turn;
///import baidu.lang.instance;
///import baidu.dom.ready;
///import baidu.fn.bind;

(function() {
    /**
     * 获取target最近的一个父亲role节点
     */
    function getRoleElement(target) {
        while(target) {
            if(target == document.body || target == this.element) {
                return null;
            }

            if(target.getAttribute('t-role')) {
                return target;
            }

            target = target.parentNode;
        }
    }

    
    /**
     * 获取target最近的一个父亲role类型
     */
    function getRoleType(target) {
        var role = this.getRoleElement(target);

        if(role) {
            return role.getAttribute('t-role');
        }

        return null;
    }
    
    /**
     * 从target ui 开始依次向上给父UI派发事件
     */
    function dispatchEvent(e, fn) {
        var ui = baidu.ui.get(e.target),
        temp = e.target;

        while(ui) {
            e.getRoleElement = baidu.fn.bind(getRoleElement, e, temp);
            e.getRoleType = baidu.fn.bind(getRoleType, e, temp);

            ui[fn] && ui[fn](e);
            temp = ui.element;
            ui = ui.parent;
        }
    }

    baidu.dom.ready( function() {
        baidu.event.on(document, 'tap', function(e) {
            dispatchEvent(e, '_ontap');
        }, true);
        baidu.event.on(document, 'dbtap', function(e) {
            dispatchEvent(e, '_ondbtap');
        }, true);
        baidu.event.on(document, 'taphold', function(e) {
            dispatchEvent(e, '_ontaphold');
        }, true);
        baidu.event.on(document, 'swipe', function(e) {
            dispatchEvent(e, '_onswipe');
        }, true);
        baidu.event.on(document, 'pinch', function(e) {
            dispatchEvent(e, '_onpinch');
        }, true);
        baidu.event.on(window, 'turn', function(e) {

        }, true);
    });
})();
