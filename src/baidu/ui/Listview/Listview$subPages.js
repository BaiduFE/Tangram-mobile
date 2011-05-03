/**
 * Tangram
 * Copyright 2011 Baidu Inc. All rights reserved.
 */

///import baidu.ui.Listview;
///import baidu.ui.getParent;
///import baidu.array.each;
///import baidu.event.tap;

baidu.ui.Listview.register( function(me) {
    me.addEventListener('onsetup', function() {
        me.parentPage = me.findParentUI('page');
    });
    
    me.addEventListener('onload', function() {
        if(!me.parentPage) {
            return;
        }

        baidu.array.each(me.roles.item, function(item) {
            if(item.pageId) {
                me.on(item.element, 'tap', function() {
                    var page = baidu.ui.get(item.pageId);
                    page.loadPage(me.parentPage.element);
                });
            }
        });
    });
});
