/**
 * check Scroller properties, methods and events
 */
module("baidu.ui.Scroller");

test("setup", function() {
    var wraper = document.createElement('div');
    wraper.style.height = '100px';
    var scroller = document.createElement('div');
    scroller.setAttribute('t-ui', 'scroller');
    scroller.style.height = '600px';
    document.body.appendChild(scroller);

    var ui = new baidu.ui.Scroller({
        element: scroller
    });

    ui.setup();

    ok(scroller.getAttribute('t-guid'), 'scroller has been shown');
    te.dom.push(scroller);
});

test("srroll", function() {
    var wraper = document.createElement('div');
    wraper.style.height = '100px';
    var scroller = document.createElement('div');
    scroller.setAttribute('t-ui', 'scroller');
    scroller.style.height = '600px';
    document.body.appendChild(scroller);

    var ui = new baidu.ui.Scroller({
        element: scroller
    });

    ui.setup();
    
    ui.onscroll = function(){
        ok(true, 'on scrolled');
        start();
    }

    baidu.event.fireCustomEvent(scroller, 'scroll', {
        direction: 'down'
    });
        
    te.dom.push(scroller);
    stop();
});