module('baidu.mobile.dom.setStyles');

test("set styles",function(){

	baidu.mobile.dom._styleFixer["float"] = ua.browser.ie ? "styleFloat" : "cssFloat";
	expect(4);
	var div = document.createElement('div');
	var img = document.createElement('img');
	document.body.appendChild(div);
	div.appendChild(img);
	img.id = 'img_id';
	baidu.mobile.dom.setStyles(img,{color:"red",float:'left',display:"", opacity:"0.2"});
	
	var color = $.trim(img.style.color.toLowerCase());
	ok(color=='red'||color=='rgb(255,0,0)'||color=='#ff0000','color red');
	equal(img.style.display,"",'get img display style');
	equal($(img).css('float'),'left','get img float');
	ok(img.style.opacity=='0.2'||img.filters.alpha.opacity== 20,'get img opacity');
	document.body.removeChild(div);
});
