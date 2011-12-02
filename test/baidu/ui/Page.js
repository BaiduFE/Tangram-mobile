/**
 * check Page properties, methods and events
 */
module("baidu.ui.Page");

test("setup", function() {
    var page1 = document.createElement('div');

    document.body.appendChild(page1);
    
    var pageUI1 = new baidu.ui.Page({
        element: page1
    });
    
    pageUI1.setup();

    ok(page1.getAttribute('t-guid'), 'pages has been shown');
    te.dom.push(page1);
});