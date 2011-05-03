/**
 * Tangram
 * Copyright 2011 Baidu Inc. All rights reserved.
 */

///import baidu.ui.Button;
///import baidu.ui.getParent;
///import baidu.event.tap;

baidu.ui.Button.register( function(me) {
    me.addEventListener('onsetup', function() {
        me.parentPage = me.findParentUI('page');
    });
    
    me.addEventListener('onload', function() {
        if(!me.parentPage) {
            return;
        }

        if(me.pageId) {
            me.on(me.element, 'tap', function() {
                var page = baidu.ui.get(me.pageId);
                page.slide(me.parentPage.element, 'right');
            });
        }
    });
});