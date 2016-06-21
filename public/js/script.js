'use strict';

var pressedPlay = $('#play');
var squares = $('.squares');

pressedPlay.click(function() {
	squares.forEach(function(square) {
		square.animate({
			height: '+=5px',
			width: '+=5px'
		}, 500)
	});
});