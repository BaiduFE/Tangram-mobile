/**
 * check popup properties, methods and events
 */
module("baidu.ui.Popup");

test("setup", function() {
    var popup = document.createElement('div');
    popup.setAttribute('t-ui', 'popup');
    document.body.appendChild(popup);

    var ui = new baidu.ui.Popup({
        element: popup
    });

    ui.setup();

    ok(popup.getAttribute('t-guid'), 'popup has been shown');
    te.dom.push(popup);
});

test("open", function() {
    var popup = document.createElement('div');
    popup.setAttribute('t-ui', 'popup');
    document.body.appendChild(popup);

    var ui = new baidu.ui.Popup({
        element: popup
    });

    ui.setup();

    ui.open();
    
    setTimeout(function(){
        equal(popup.style.display, 'block', 'check popup display');
        start();
    },1000);
    
    te.dom.push(popup);
    stop();
});

test("close", function() {
    var popup = document.createElement('div');
    popup.setAttribute('t-ui', 'popup');
    document.body.appendChild(popup);

    var ui = new baidu.ui.Popup({
        element: popup
    });

    ui.setup();
    popup.style.display = 'block';
    
    ui.close();
    
    setTimeout(function(){
        equal(popup.style.display, 'none', 'check popup display');
        start();
    },1000);
    
    te.dom.push(popup);
    stop();
});

test("ok", function() {
    var popup = document.createElement('div');
    popup.setAttribute('t-ui', 'popup');
    var okbutton = document.createElement('div');
    okbutton.setAttribute('t-role', 'ok');
    popup.appendChild(okbutton);
    document.body.appendChild(popup);

    var ui = new baidu.ui.Popup({
        element: popup
    });

    ui.setup();
    

    ui.onok = function(){
        ok(true, 'on ok');
        start();
    }
    
    popup.style.display = 'block';
  
    baidu.event.fireCustomEvent(okbutton, 'tap');
    
    te.dom.push(popup);
    stop();
});

test("cancel", function() {
    var popup = document.createElement('div');
    popup.setAttribute('t-ui', 'popup');
    var cancel = document.createElement('div');
    cancel.setAttribute('t-role', 'cancel');
    popup.appendChild(cancel);
    document.body.appendChild(popup);

    var ui = new baidu.ui.Popup({
        element: popup
    });

    ui.setup();
    
    ui.oncancel = function(){
        ok(true, 'on cancel');
        start();
    }
    
    popup.style.display = 'block';
  
    baidu.event.fireCustomEvent(cancel, 'tap');
    
    te.dom.push(popup);
    stop();
});