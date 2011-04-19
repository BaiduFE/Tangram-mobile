/*
* Tangram Mobile
* Copyright 2011 Baidu Inc. All rights reserved.
*
* path: baidu/ui/getParent.js
* author: walter
* version: 1.0.0
* date: 2011/4/11
*/
///import baidu.ui;
///import baidu.lang.instance;

baidu.ui.getParent = function(element) {
    while(element) {
        element = element.parentNode;
        
        if(element == document.body){
            return null;
        }
        
        if(element.getAttribute('t-ui')) {
            return baidu.lang.instance(element.getAttribute('data-guid'));
        }
    }
}
