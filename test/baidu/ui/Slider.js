/**
 * check Slider properties, methods and events
 */
module("baidu.ui.Slider");

test("setup", function() {
    var slider = document.createElement('div');
    slider.setAttribute('t-ui', 'slider');
    
    var thumb = document.createElement('div');
    thumb.setAttribute('t-role', 'thumb');
    
    slider.appendChild(thumb);
    document.body.appendChild(slider);

    var ui = new baidu.ui.Slider({
        element: slider
    });

    ui.setup();

    ok(slider.getAttribute('t-guid'), 'slider has been shown');
    te.dom.push(slider);
});

test("horizontal tap", function() {
    var slider = document.createElement('div');
    slider.setAttribute('t-ui', 'slider');
    
    var thumb = document.createElement('div');
    thumb.setAttribute('t-role', 'thumb');
    
    slider.appendChild(thumb);
    document.body.appendChild(slider);

    var ui = new baidu.ui.Slider({
        element: slider
    });

    ui.setup();
    
    ui.ontap = function(){
        ok(true, 'on horizontal tap');
        start();
    }

    baidu.event.fireCustomEvent(slider, 'tap');
    
    te.dom.push(slider);
    stop();
});

test("horizontal slide", function() {
    var slider = document.createElement('div');
    slider.setAttribute('t-ui', 'slider');
    
    var thumb = document.createElement('div');
    thumb.setAttribute('t-role', 'thumb');
    
    slider.appendChild(thumb);
    document.body.appendChild(slider);

    var ui = new baidu.ui.Slider({
        element: slider
    });

    ui.setup();
    
    ui.onslide = function(){
        ok(true, 'on horizontal slided');
        start();
    }

    baidu.event.fireCustomEvent(thumb, 'drag');
    
    te.dom.push(slider);
    stop();
});

test("vertical tap", function() {
    var slider = document.createElement('div');
    slider.setAttribute('t-ui', 'slider');
    slider.setAttribute('t-attr', 'layout:vertical');
    
    var thumb = document.createElement('div');
    thumb.setAttribute('t-role', 'thumb');
    
    slider.appendChild(thumb);
    document.body.appendChild(slider);

    var ui = new baidu.ui.Slider({
        element: slider
    });

    ui.setup();
    
    ui.ontap = function(){
        ok(true, 'on vertical tap');
        start();
    }

    baidu.event.fireCustomEvent(slider, 'tap');
    
    te.dom.push(slider);
    stop();
});

test("vertical slide", function() {
    var slider = document.createElement('div');
    slider.setAttribute('t-ui', 'slider');
    slider.setAttribute('t-attr', 'layout:vertical');
    
    var thumb = document.createElement('div');
    thumb.setAttribute('t-role', 'thumb');
    
    slider.appendChild(thumb);
    document.body.appendChild(slider);

    var ui = new baidu.ui.Slider({
        element: slider
    });

    ui.setup();
    
    ui.onslide = function(){
        ok(true, 'on vertical slided');
        start();
    }

    baidu.event.fireCustomEvent(thumb, 'drag');
    
    te.dom.push(slider);
    stop();
});

test("getValue", function() {
        var slider = document.createElement('div');
    slider.setAttribute('t-ui', 'slider');
    slider.style.width = '100px';
    
    var thumb = document.createElement('div');
    thumb.setAttribute('t-role', 'thumb');
    
    slider.appendChild(thumb);
    document.body.appendChild(slider);

    var ui = new baidu.ui.Slider({
        element: slider
    });

    ui.setup();
    
    ui.onslide = function(){
        equal(this.getValue(), 2, 'check the value');
        start();
    }

    baidu.event.fireCustomEvent(thumb, 'drag');
    
    te.dom.push(slider);
    stop();
});