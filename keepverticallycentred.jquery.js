/*

Keep Vertically Centred jQuery Plugin

© 2013 Chrissi Klassen

Usage:
	$(document).ready(function(){
		$('#yourElement').keepVerticallyCentred();
	}

Tips:
	Elements must be positioned relatively.


*/

$.fn.keepVerticallyCentred = function(){

	var element = this;
	function vc(){
		var parent = element.parent();
		if (parent.is('body')){
			parent = $(window);
		}
		var parentHeight = parent.height();
		var elementHeight = element.height();
		element.css({
			"position": "relative", 
			"top": ((parentHeight - elementHeight)/2) + "px"
		});
	}

	vc(this,parent);

	$(window).resize(function(){
		vc(this,parent);
	});

};