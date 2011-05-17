/**
 * check Tab properties, methods and events
 */
module("baidu.ui.Tab");

test("setup", function() {
    var tab = document.createElement('div');
    tab.setAttribute('t-ui', 'tab');
    var header = document.createElement('div');
    header.setAttribute('t-role', 'head');
    var content = document.createElement('div');
    content.setAttribute('t-role', 'content');
    tab.appendChild(header);
    tab.appendChild(content);
    document.body.appendChild(tab);

    var ui = new baidu.ui.Tab({
        element: tab
    });

    ui.setup();

    ok(tab.getAttribute('t-guid'), 'tab has been shown');
    te.dom.push(tab);
});

test("switch", function() {
    var tab = document.createElement('div');
    tab.setAttribute('t-ui', 'tab');
    
    var header = document.createElement('div');
    header.setAttribute('t-role', 'head');
    var header1 = document.createElement('div');
    var header2 = document.createElement('div');
    header.appendChild(header1);
    header.appendChild(header2);
    
    var content = document.createElement('div');
    content.setAttribute('t-role', 'content');
    var content1 = document.createElement('div');
    var content2 = document.createElement('div');
    content1.style.width = '200px';
    content2.style.width = '200px';
    content1.style.height = '200px';
    content2.style.height = '200px';
    content.appendChild(content1);
    content.appendChild(content2);
    
    tab.appendChild(header);
    tab.appendChild(content);
    document.body.appendChild(tab);

    var ui = new baidu.ui.Tab({
        element: tab
    });

    ui.setup();

    ui.onswitch = function(){
        ok(true, 'on switched');
        start();
    }
    
    baidu.event.fireCustomEvent(header2, 'tap');
    
    te.dom.push(tab);
    stop();
});
