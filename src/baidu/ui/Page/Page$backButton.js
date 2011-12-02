/**
 * Tangram
 * Copyright 2011 Baidu Inc. All rights reserved.
 */

///import baidu.ui.Page;
///import baidu.ui.$get;
///import baidu.ui.Base.addEventListener;
///import baidu.ui.Base.each;
///import baidu.ui.Base.on;
///import baidu.event.tap;

baidu.ui.Page.register( function(me) {
    me.addEventListener('onload', function() {
        me.each('back', function(item, i) {
            if(item.pageId) {
                me.on(item.element, 'tap', function() {
                    var page = baidu.ui.get(baidu.g(item.pageId));
                    page.slideTo(me.element, 'right');
                });
            }
        });
    });
});