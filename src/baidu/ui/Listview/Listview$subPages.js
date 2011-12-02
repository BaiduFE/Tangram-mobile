/**
 * Tangram
 * Copyright 2011 Baidu Inc. All rights reserved.
 */

///import baidu.ui.Page;
///import baidu.ui.Listview;
///import baidu.ui.$get;
///import baidu.dom.$g;
///import baidu.ui.Base.getParentUI;
///import baidu.event.tap;
///import baidu.ui.Base.on;
///import baidu.ui.Base.addEventListener;

baidu.ui.Listview.register( function(me) {
    me.addEventListener('onsetup', function() {
        me.parentPage = me.getParentUI('page');
    });
    
    me.addEventListener('onload', function() {
        if(!me.parentPage) {
            return;
        }

        me.each('item', function(item) {
            if(item.pageId) {
                me.on(item.element, 'tap', function() {
                    var page = baidu.ui.get(baidu.g(item.pageId));
                    page.loadPage(me.parentPage.element);
                });
            }
        });
    });
});
