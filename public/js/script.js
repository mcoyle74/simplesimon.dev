'use strict';

// $(document).ready(function () {
	
	var pressPlay = $('#play');
	var instructions = $('#instructions');
	var tiles = $('[data-id]');
	var highScore = 0;
	var sequence = [];
	var round = 0;
	var index = 0;

	function getRandomTile() {
		disablePlayer();
		var randomColor = Math.floor(Math.random() * 4) + 1;
		sequence.push(randomColor);
		round++;
		animateSequence();
		instructions.html('Select the tiles that reproduce the sequence.').append('<h3>Round: ' + round + '</h3>');
		pressPlay.attr('hidden', true);
	}

	function animateSequence() {
		setTimeout(function() {
			sequence.forEach(function(element, index) {
				setTimeout(function(){
				var iteration = $('[data-id="' + element + '"]');
				iteration.hide().fadeIn(1000);
				}, 1000 * index);
			});
		}, 500);
		playerGo();
	}	

	function start() {
		round = 0;
		sequence = [];
		instructions.html('Press <span class="italics">Play</span> to begin.');
		pressPlay.attr('hidden', false);
	}

	function playerGo() {
		tiles.click(function(event) {
		var tilePressed = $(this).data('id');
		if (tilePressed == sequence[index]) {
			index++;
		} else {
			index = 0;
			gameOver();
			return;
		}
		if (index == sequence.length) {
			index = 0;
			highScore++;
			instructions.html('Watch carefully.');
			getRandomTile();
		}
	});
	}

	function disablePlayer() {
		tiles.off('click');
		instructions.html('Watch carefully.');
	}

	function gameOver() {
		if (round == highScore) {
			instructions.html('Game Over<br>You reached round ' + round + ', and matched your high score!');
		} else if (round > highScore) {
			instructions.html('Game Over<br>You reached round ' + round + ', a new high score!');
		} else if (round < highScore) {
			instructions.html('Game Over<br>You reached round ' + round + '. Please try again.');
		}
		setTimeout(function(){
			start();
		}, 3000);
	}

	pressPlay.click(function() {
		instructions.html('Watch carefully.');
		setTimeout(function() {
			getRandomTile();
		}, 1500);
	});

	disablePlayer();
	start();
// });