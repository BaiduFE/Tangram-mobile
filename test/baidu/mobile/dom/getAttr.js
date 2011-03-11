module('baidu.mobile.dom.getAttr测试')
/**
 * TODO:should add dom for testing
 */


test('基础测试', function() {
	var div = document.createElement('div');
	div.setAttribute('title',"div_getAttri");
	equal(baidu.mobile.dom.getAttr(div, "rel"),null,"div gets no rel attribute");
	equal(baidu.mobile.dom.getAttr(div,"title"),"div_getAttri","div gets title attribute");
});
