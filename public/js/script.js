'use strict';

// $(document).ready(function () {
	var pressPlay = $('#play');
	var instructions = $('#instructions');
	var red = $('[data-id="1"]');
	var yellow = $('[data-id="2"]');
	var green = $('[data-id="3"]');
	var blue = $('[data-id="4"]');
	var tiles = $('[data-id]');
	var control = $('#control');

	var simon = {
		sequence: [],
		round: 0,
		animateSequence: function() {
			setTimeout(function() {
				simon.sequence.forEach(function(element, index) {
					var iteration = $('[data-id="' + element + '"]');
					iteration.fadeOut(1000).fadeIn(1000);
				});
			}, 1000)
		},
		check: function() {
			player.sequence.forEach(function(color, index) {
				if (color == simon.sequence[index]) {
					console.log('success');
					getRandomTile();
					simon.round++;
				} else {
					console.log('failure')
				}
			});
		}
	}

	var player = {
		sequence: [],
		rounds: 0
	}	

	function getRandomTile() {
		var randomColor = Math.floor(Math.random() * 4) + 1;
		simon.sequence.push(randomColor);
		simon.round++;
		simon.animateSequence();
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