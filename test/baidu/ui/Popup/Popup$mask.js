/**
 * check Popup$mask properties, methods and events
 */
module("baidu.ui.Popup.Popup$mask");

test("open", function() {
    var popup = document.createElement('div');
    popup.setAttribute('t-ui', 'popup');
    document.body.appendChild(popup);

    var ui = new baidu.ui.Popup({
        element: popup
    });

    ui.setup();

    ui.open();
    
    equal(baidu.ui.Mask._instance.element.style.display, 'block', 'check mask display');
    
    te.dom.push(popup);
    te.dom.push(baidu.ui.Mask._instance.element);
});