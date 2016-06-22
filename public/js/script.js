'use strict';

$(document).ready(function () {
	var pressPlay = $('#play');
	var instructions = $('#instructions');
	var red = $('#red');
	var yellow = $('#yellow');
	var green = $('#green');
	var blue = $('#blue');

	function getRandomSquare() {
		var index = Math.floor(Math.random() * 4);
		if (index == 0) {
			red.fadeOut(250).fadeIn(250);
		} else if (index == 1) {
			yellow.fadeOut(250).fadeIn(250);
		} else if (index == 2) {
			green.fadeOut(250).fadeIn(250);
		} else if (index == 3) {
			blue.fadeOut(250).fadeIn(250);
		}
	}
	
	pressPlay.click(function() {
		instructions.html('Watch carefully.');
		setTimeout(function() {
			getRandomSquare();
			instructions.html('Select the tiles that reproduce the sequence.');
		}, 1000);
	});
});