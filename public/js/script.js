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
	var index = 0;

	var simon = {
		sequence: [],
		round: 0,
		getRandomTile: function() {
			disablePlayer();
			var randomColor = Math.floor(Math.random() * 4) + 1;
			simon.sequence.push(randomColor);
			simon.round++;
			simon.animateSequence();
			instructions.html('Select the tiles that reproduce the sequence.').append('<h3>Round: ' + simon.round + '</h3>');
			pressPlay.attr('hidden', true);
		}, 
		animateSequence: function() {
			setTimeout(function() {
				simon.sequence.forEach(function(element, index) {
					setTimeout(function(){
					var iteration = $('[data-id="' + element + '"]');
					iteration.hide().fadeIn(1000);
					}, 1000 * index);
				});
			}, 500);
			playerGo();
		}
	}	

	function start() {
		instructions.html('Press <span class="italics">Play</span> to begin.');
		pressPlay.attr('hidden', false);
		pressPlay.click(function() {
		instructions.html('Watch carefully.');
		setTimeout(function() {
			simon.getRandomTile();
		}, 1500);
	});
	}

	function playerGo() {
		tiles.click(function(event) {
		var tilePressed = $(this).data('id');
		console.log(parseInt(tilePressed));
		if (tilePressed == simon.sequence[index]) {
			index++;
		} else {
			index = 0;
			gameOver();
		}
		if (index == simon.sequence.length) {
			index = 0;
			instructions.html('Watch carefully.');
			simon.getRandomTile();
		}
	});
	}

	function disablePlayer() {
		tiles.off('click');
		instructions.html('Watch carefully.');
	}

	function gameOver() {
		instructions.html('Game Over');
		setTimeout(function(){
			start();
		}, 3000);
	}

	disablePlayer();
	start();
// });