module("baidu.mobile.dom.getStyle");


test("get style from style", function() {
	expect(8);
	var div = document.createElement('div');
	var a = document.createElement('a');
	var img = document.createElement('img');
	document.body.appendChild(div);
	div.appendChild(a);
	div.appendChild(img);
	div.id = 'div_id';
	a.id = 'a_id';
	div.style.float = 'left';
	div.style.width = '10%';
	div.style.height = '15%';
	div.style.background = "#FFCC80";
	div.style.color = "red";
	img.style.display = 'block';
	img.style.width = '16px';
	img.style.height = '12px';
	a.style.top = '5px';
	equal(baidu.mobile.dom.getStyle(div, 'float'), 'left');
	equal(baidu.mobile.dom.getStyle(div, 'width'), '10%');
	equal(baidu.mobile.dom.getStyle(div, 'height'), '15%');
	var color = baidu.mobile.dom.getStyle(div, 'color').toLowerCase();
	ok(color == '#ff0000' || color == 'red' || color == 'rgb(255,0,0)',
			'color red');
	equal(baidu.mobile.dom.getStyle(img, 'display'), 'block');
	equal(baidu.mobile.dom.getStyle(img, 'width'), '16px');
	equal(baidu.mobile.dom.getStyle(img, 'height'), '12px');
	equal(baidu.mobile.dom.getStyle(a, 'top'), '5px');

	document.body.removeChild(div);
});


