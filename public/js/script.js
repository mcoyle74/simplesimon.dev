'use strict';

// $(document).ready(function () {
	var pressPlay = $('#play');
	var instructions = $('#instructions');
	var red = $('#red');
	var yellow = $('#yellow');
	var green = $('#green');
	var blue = $('#blue');
	var squares = $('.squares');
	var control = $('#control')
	var sequence = [];
	var round = 0;

	function getRandomSquare() {
		var index = Math.floor(Math.random() * 4);
		if (index == 0) {
			red.fadeOut(250).fadeIn(250);
			sequence.push(index);
		} else if (index == 1) {
			yellow.fadeOut(250).fadeIn(250);
			sequence.push(index);
		} else if (index == 2) {
			green.fadeOut(250).fadeIn(250);
			sequence.push(index);
		} else if (index == 3) {
			blue.fadeOut(250).fadeIn(250);
			sequence.push(index);
		}
		round++;
		instructions.html('Select the tiles that reproduce the sequence.').append('<h3>Round: ' + round + '</h3>');
		$('#play').attr('hidden', true);
	}
	
	squares.click(function() {

	});

	pressPlay.click(function() {
		instructions.html('Watch carefully.');
		setTimeout(function() {
			getRandomSquare();
		}, 1000);
	});
// });