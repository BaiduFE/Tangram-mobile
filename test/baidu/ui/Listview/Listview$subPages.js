/**
 * check Listview$subPages properties, methods and events
 */
module("baidu.ui.Listview.Listview$subPages");

test("slideTo", function() {
    var page1 = document.createElement('div');
    page1.setAttribute('id', 'page1');
    page1.setAttribute('t-ui', 'page');
    var listview = document.createElement('div');
    var item = document.createElement('div');
    item.setAttribute('t-role', 'item');
    item.setAttribute('t-attr', 'pageId:page2');
    listview.appendChild(item);
    page1.appendChild(listview);
    var page2 = document.createElement('div');
    page2.setAttribute('id', 'page2');
    page2.setAttribute('t-ui', 'page');
    document.body.appendChild(page1);
    document.body.appendChild(page2);
    
    var pageUI1 = new baidu.ui.Page({
        element: page1
    });
    
    var pageUI2 = new baidu.ui.Page({
        element: page2
    });
    
    var listviewUI = new baidu.ui.Listview({
        element: listview
    });

    pageUI1.setup();
    pageUI2.setup();
    listviewUI.setup();
    
    
    baidu.event.fireCustomEvent(item, 'tap');
    
    setTimeout(function(){
        equal(page1.style.display, 'none', 'check page1 display');
        start();
    }, 1000);

    te.dom.push(page1);
    te.dom.push(page2);
    stop();
});