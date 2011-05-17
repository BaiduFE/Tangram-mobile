/**
 * check Toolbar properties, methods and events
 */
module("baidu.ui.Toolbar");

test("setup", function() {
    var toolbar = document.createElement('div');
    toolbar.style.height = '50px';
    document.body.appendChild(toolbar);

    var ui = new baidu.ui.Toolbar({
        element: toolbar
    });

    ui.setup();

    ok(toolbar.getAttribute('t-guid'), 'toolbar has been shown');
    te.dom.push(toolbar);
});

test("test hideOnTap", function() {
    var toolbar = document.createElement('div');
    document.body.appendChild(toolbar);
    toolbar.style.height = '50px';

    var ui = new baidu.ui.Toolbar({
        element: toolbar
    });

    ui.setup();
    
    baidu.event.fireCustomEvent(document, 'tap');
    
    setTimeout(function(){
        equal(toolbar.style.display, 'none', 'check toolbar display');
        start();
    },10);   
    
    te.dom.push(toolbar);
    stop();
});

test("test top", function() {
    var toolbar = document.createElement('div');
    document.body.appendChild(toolbar);
    toolbar.style.height = '50px';
    toolbar.setAttribute('t-attr', 'top:10');

    var ui = new baidu.ui.Toolbar({
        element: toolbar
    });

    ui.setup();

    equal(toolbar.style.top, (window.pageYOffset + 10) + 'px', 'check top');
    te.dom.push(toolbar);
});

test("test bottom", function() {
    var toolbar = document.createElement('div');
    document.body.appendChild(toolbar);
    toolbar.style.height = '50px';
    toolbar.setAttribute('t-attr', 'bottom:0');

    var ui = new baidu.ui.Toolbar({
        element: toolbar
    });

    ui.setup();

    equal(toolbar.style.top, (window.pageYOffset + window.innerHeight - toolbar.offsetHeight - 0) + 'px', 'check bottom');
    te.dom.push(toolbar);
});

test("test left", function() {
    var toolbar = document.createElement('div');
    document.body.appendChild(toolbar);
    toolbar.style.height = '50px';
    toolbar.setAttribute('t-attr', 'left:10');

    var ui = new baidu.ui.Toolbar({
        element: toolbar
    });

    ui.setup();

    equal(toolbar.style.left, (window.pageXOffset + 10) + 'px', 'check left');
    te.dom.push(toolbar);
});

test("test right", function() {
    var toolbar = document.createElement('div');
    document.body.appendChild(toolbar);
    toolbar.style.height = '50px';
    toolbar.setAttribute('t-attr', 'right:0');

    var ui = new baidu.ui.Toolbar({
        element: toolbar
    });

    ui.setup();

    equal(toolbar.style.left, (window.pageXOffset + window.innerWidth - toolbar.offsetWidth - 0) + 'px', 'check right');
    te.dom.push(toolbar);
});
