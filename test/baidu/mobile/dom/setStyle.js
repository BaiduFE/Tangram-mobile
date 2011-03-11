module("baidu.mobile.dom.setStyle");
test("set style",function(){
	var div = document.createElement('div');
	var img = document.createElement('img');
	document.body.appendChild(div);
	div.appendChild(img);
	img.id = 'img_id';
	baidu.mobile.dom.setStyle(img,'width','20px');
	baidu.mobile.dom.setStyle(img,'height','10px');
	//baidu.mobile.dom.setStyle('img_id','float','left');
	
	equal(img.style.height,'10px',"get img height style");
	equal(img.style.width,'20px','get img width style');
	//equal($(img).css('float'),'left','get img float');
	document.body.removeChild(div);
});


