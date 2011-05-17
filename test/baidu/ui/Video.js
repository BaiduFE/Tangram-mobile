/**
 * check Video properties, methods and events
 */

module("baidu.ui.Video");

test("setup", function() {
    var video = document.createElement('video');
    document.body.appendChild(video);

    var ui = new baidu.ui.Video({
        element: video
    });

    ui.setup();

    ok(video.getAttribute('t-guid'), 'video has been shown');
    te.dom.push(video);
});

test("on play", function() {
    var video = document.createElement('video');
    video.poster = '../../baidu/ui/Video/img/Screenshot.png';
    video.width = '200px';
    video.src = '../../baidu/ui/Video/img/space.mp4';
    document.body.appendChild(video);

    var ui = new baidu.ui.Video({
        element: video
    });

    ui.setup();
    
    ui.onplay = function() {
        ok(true, 'on playing');
        start();
    }

    baidu.event.fire(ui.poster, 'click');

    te.dom.push(video);
    stop()
});

test("on pause", function() {
    var video = document.createElement('video');
    video.poster = '../../baidu/ui/Video/img/Screenshot.png';
    video.width = '200px';
    video.src = '../../baidu/ui/Video/img/space.mp4';
    document.body.appendChild(video);

    var ui = new baidu.ui.Video({
        element: video
    });

    ui.setup();
    
    
    ui.onpause = function() {
        ok(true, 'on paused');
        start();
    }
    

    baidu.event.fire(ui.poster, 'click');
    
    ui.pause();
    
    te.dom.push(video);
    stop()
});

