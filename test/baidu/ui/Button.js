/**
 * check Button properties, methods and events
 */
module("baidu.ui.Button");

test("setup", function() {
    var button = document.createElement('button');
    document.body.appendChild(button);

    var ui = new baidu.ui.Button({
        element: button
    });

    ui.setup();

    ok(button.getAttribute('t-guid'), 'button has been shown');
    te.dom.push(button);
});

test("test event", function() {
    var button = document.createElement('button');
    document.body.appendChild(button);

    var ui = new baidu.ui.Button({
        element: button
    });

    ui.setup();
    
    ui.ontap = function() {
        ok(true, 'on Tapped');
        start();
    };
    
    baidu.event.fireCustomEvent(button, 'tap');
    
    te.dom.push(button);
    stop();
});

test("test disabled", function() {
    var button = document.createElement('button');
    document.body.appendChild(button);

    var ui = new baidu.ui.Button({
        element: button
    });

    ui.setup();  
    
    ui.ondisable = function() {
        ok(true, 'on disable');
        start();
    };
    
    ui.disable();

    te.dom.push(button);
    stop();
});

test("test enabled", function() {
    var button = document.createElement('button');
    document.body.appendChild(button);

    var ui = new baidu.ui.Button({
        element: button
    });

    ui.setup();
    
    ui.onenable = function() {
        ok(true, 'on enable');
        start();
    };
   
    ui.disable();
    ui.enable();
    te.dom.push(button);
    stop();
});