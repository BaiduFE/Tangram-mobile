/**
 * check popup properties, methods and events
 */
module("baidu.ui.Mask");

test("setup", function() {
    var mask = document.createElement('div');
    mask.setAttribute('t-ui', 'mask');
    document.body.appendChild(mask);

    var ui = new baidu.ui.Mask({
        element: mask
    });

    ui.setup();

    ok(mask.getAttribute('t-guid'), 'mask has been shown');
    te.dom.push(mask);
});

test("open", function() {
    var mask = document.createElement('div');
    mask.setAttribute('t-ui', 'mask');
    document.body.appendChild(mask);

    var ui = new baidu.ui.Mask({
        element: mask
    });

    ui.setup();

    ui.open();
    
    equal(mask.style.display, 'block', 'mask popup display');
    
    te.dom.push(mask);
});

test("close", function() {
    var mask = document.createElement('div');
    mask.setAttribute('t-ui', 'mask');
    document.body.appendChild(mask);

    var ui = new baidu.ui.Mask({
        element: mask
    });

    ui.setup();

    ui.close();
    
    equal(mask.style.display, 'none', 'mask popup display');
    
    te.dom.push(mask);
});