/**
 * check Page properties, methods and events
 */
module("baidu.ui.Listview");

test("setup", function() {
    var listview = document.createElement('div');

    document.body.appendChild(listview);
    
    var listviewUI = new baidu.ui.Listview({
        element: listview
    });
    
    listviewUI.setup();

    ok(listview.getAttribute('t-guid'), 'listview has been shown');
    te.dom.push(listview);
});