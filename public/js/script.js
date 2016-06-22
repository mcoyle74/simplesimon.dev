'use strict';

var pressedPlay = $('#play');
var squares = $('.squares');

pressedPlay.click(function(event) {
	for (var i = 0; i < squares.length; i++) {
		squares[i].animate({
			height: '+=5px',
			width: '+=5px'
		}, 500);
		squares[i].animate({
			height: '-=5px',
			width: '-=5px'
		}, 500);
	}
});