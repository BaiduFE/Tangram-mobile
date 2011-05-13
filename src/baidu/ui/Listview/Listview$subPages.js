/**
 * Tangram
 * Copyright 2011 Baidu Inc. All rights reserved.
 */

///import baidu.ui.Page;
///import baidu.ui.Listview;
///import baidu.ui.get;
///import baidu.ui.getParent;
///import baidu.event.tap;

baidu.ui.Listview.register( function(me) {
    me.addEventListener('onsetup', function() {
        me.parentPage = me.findParentUI('page');
    });
    
    me.addEventListener('onload', function() {
        if(!me.parentPage) {
            return;
        }

        me.each('item', function(item) {
            if(item.pageId) {
                me.on(item.element, 'tap', function() {
                    var page = baidu.ui.get(item.pageId);
                    page.loadPage(me.parentPage.element);
                });
            }
        });
    });
});
