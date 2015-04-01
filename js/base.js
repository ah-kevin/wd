// JavaScript Document
 (function(){
		  var _w = document.documentElement.clientWidth;
		  var _h = document.documentElement.clientHeight;
			  var _fontsize = (_w / 640) * 20;
			  var style = document.createElement('style');
			  style.type = 'text/css';
			  style.innerHTML = 'body{font-size:' + _fontsize + 'px}';
			  document.getElementsByTagName('head').item(0).appendChild(style);
		  })();