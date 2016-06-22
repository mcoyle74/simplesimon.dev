'use strict';

// $(document).ready(function () {
	var pressPlay = $('#play');
	var instructions = $('#instructions');
	var red = $('#red');
	var yellow = $('#yellow');
	var green = $('#green');
	var blue = $('#blue');
	var tiles = $('.tiles');
	var control = $('#control');

	var simon = {
		sequence: [],
		round: 0,
		animateSequence: function() {
			// animate
		},
		check: function() {
			player.sequence.forEach(function(color, index) {
				if (color == simon.sequence[index]) {
					console.log('success');
				} else {
					console.log('failure')
				}
			});
		}
	}

	var player = {
		sequence: [],
		rounds: 0,
	}	

	function getRandomTile() {
		var randomColor = Math.floor(Math.random() * 4) + 1;
		if (randomColor == 1) {
			red.fadeOut(250).fadeIn(250);
			simon.sequence.push(randomColor);
		} else if (randomColor == 2) {
			yellow.fadeOut(250).fadeIn(250);
			simon.sequence.push(randomColor);
		} else if (randomColor == 3) {
			green.fadeOut(250).fadeIn(250);
			simon.sequence.push(randomColor);
		} else if (randomColor == 4) {
			blue.fadeOut(250).fadeIn(250);
			simon.sequence.push(randomColor);
		}
		simon.round++;
		instructions.html('Select the tiles that reproduce the sequence.').append('<h3>Round: ' + simon.round + '</h3>');
		pressPlay.attr('hidden', true);
	}
	
	$('[data-id]').click(function(event) {
		var tilePressed = event.target.dataset.id;
		console.log(parseInt(tilePressed));
		if (tilePressed == 1) {
			player.sequence.push(parseInt(tilePressed));
		} else if (tilePressed == 2) {
			player.sequence.push(parseInt(tilePressed));
		} else if (tilePressed == 3) {
			player.sequence.push(parseInt(tilePressed));
		} else if (tilePressed == 4) {
			player.sequence.push(parseInt(tilePressed));
		}
		simon.check();
	});

	pressPlay.click(function() {
		instructions.html('Watch carefully.');
		setTimeout(function() {
			getRandomTile();
		}, 1000);
	});
// });