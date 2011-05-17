/**
 * check Carousel properties, methods and events
 */
module("baidu.ui.Carousel");

test("setup", function() {
    var carousel = document.createElement('div');
    carousel.setAttribute('t-ui', 'carousel');
    document.body.appendChild(carousel);

    var ui = new baidu.ui.Carousel({
        element: carousel
    });

    ui.setup();

    ok(carousel.getAttribute('t-guid'), 'carousel has been shown');
    te.dom.push(carousel);
});

test("swipe", function() {
    var carousel = document.createElement('div');
    carousel.setAttribute('t-ui', 'carousel');
    carousel.style.width = '150px';
    
    var innercarousel = document.createElement('div');
    innercarousel.setAttribute('t-role', 'content');
    innercarousel.style.width = '450px';
    
    var content1 = document.createElement('div');
    content1.style.width = '150px';
    var content2 = document.createElement('div');
    content2.style.width = '150px';
    var content3 = document.createElement('div');
    content3.style.width = '150px';
    
    innercarousel.appendChild(content1);
    innercarousel.appendChild(content2);
    innercarousel.appendChild(content3);
    carousel.appendChild(innercarousel);
    document.body.appendChild(carousel);

    var ui = new baidu.ui.Carousel({
        element: carousel
    });

    ui.setup();
    
    ui.onswipe = function(){
        ok(true, 'on swipped');
        start();
    }

    baidu.event.fireCustomEvent(carousel, 'swipe');
    te.dom.push(carousel);
    stop();
});