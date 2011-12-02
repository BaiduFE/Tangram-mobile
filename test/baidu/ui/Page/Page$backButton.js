/**
 * check Page$backButton properties, methods and events
 */
module("baidu.ui.Page.Page$backButton");

test("back", function() {
    var page1 = document.createElement('div');
    page1.setAttribute('id', 'page1');
    page1.setAttribute('t-ui', 'page');
    page1.style.display = 'none';
    var page2 = document.createElement('div');
    page2.setAttribute('t-ui', 'page');
    page2.setAttribute('id', 'page2');
    var back = document.createElement('div');
    back.setAttribute('t-role', 'back');
    back.setAttribute('t-attr', 'pageId:page1');
    page2.appendChild(back);
    document.body.appendChild(page1);
    document.body.appendChild(page2);

    var pageUI1 = new baidu.ui.Page({
        element: page1
    });

    var pageUI2 = new baidu.ui.Page({
        element: page2
    });


    pageUI1.setup();
    pageUI2.setup();

    baidu.event.fireCustomEvent(back, 'tap');

    setTimeout( function() {
            equal(page2.style.display, 'none', 'check page2 display');
            start();
    }, 1000);
    
    te.dom.push(page1);
    te.dom.push(page2);
    stop();
});