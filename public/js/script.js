'use strict';

// $(document).ready(function () {
	var pressPlay = $('#play');
	var instructions = $('#instructions');
	var red = $('#red');
	var yellow = $('#yellow');
	var green = $('#green');
	var blue = $('#blue');
	var squares = $('.squares');
	var control = $('#control');

	var simon = {
		sequence: [],
		round: 0,
		animateSequence: function() {
			// animate
		},
		check: function() {
			// if (this.sequence[i])...
		}
	}

	var player = {
		sequence: [],
		rounds: 0,
	}	

	function getRandomSquare() {
		var integer = Math.floor(Math.random() * 4) + 1;
		if (integer == 1) {
			red.fadeOut(250).fadeIn(250);
			simon.sequence.push(integer);
		} else if (integer == 2) {
			yellow.fadeOut(250).fadeIn(250);
			simon.sequence.push(integer);
		} else if (integer == 3) {
			green.fadeOut(250).fadeIn(250);
			simon.sequence.push(integer);
		} else if (integer == 4) {
			blue.fadeOut(250).fadeIn(250);
			simon.sequence.push(integer);
		}
		simon.round++;
		instructions.html('Select the tiles that reproduce the sequence.').append('<h3>Round: ' + simon.round + '</h3>');
		pressPlay.attr('hidden', true);
	}
	
	$('[data-id]').click(function(event) {
		var squarePushed = event.target.dataset.id;
		console.log(squarePushed);
		if (squarePushed == 1) {
			player.sequence.push(squarePushed);
		} else if (squarePushed == 2) {
			player.sequence.push(squarePushed);
		} else if (squarePushed == 3) {
			player.sequence.push(squarePushed);
		} else if (squarePushed == 4) {
			player.sequence.push(squarePushed);
		} 
	});

	pressPlay.click(function() {
		instructions.html('Watch carefully.');
		setTimeout(function() {
			getRandomSquare();
		}, 1000);
	});
// });