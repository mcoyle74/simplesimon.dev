'use strict';

$(document).ready(function () {
	
	var pressPlay = $('#play');
	var instructions = $('#instructions');
	var tiles = $('[data-id]');
	var highScore = 0;
	var sequence = [];
	var round = 1;
	var index = 0;

	function getRandomTile() {
		disablePlayer();
		var randomColor = Math.floor(Math.random() * 4) + 1;
		sequence.push(randomColor);
		animateSequence();
	}

	function animateSequence() {
		setTimeout(function() {
			sequence.forEach(function(element, index) {
				setTimeout(function(){
				var iteration = $('[data-id="' + element + '"]');
				iteration.hide().fadeIn(600);
				}, 1000 * index);
			});
		}, 1500);
		playerGo();
	}	

	function start() {
		round = 1;
		sequence = [];
		instructions.html('Press <span class="italics">Play</span> to begin.');
		pressPlay.attr('hidden', false);
	}

	function playerGo() {
		setTimeout(function(){
			instructions.html('Select tiles that duplicate the sequence.').append('<h3>Round: ' + round + '</h3>');
		}, 1000);
		tiles.click(function(event) {
		var tilePressed = $(this).data('id');
		var buttonToLight = $('[data-id="' + tilePressed + '"');
		buttonToLight.hide().fadeIn(600);
		if (tilePressed == sequence[index]) {
			index++;
		} else {
			index = 0;
			gameOver();
			return;
		}
		if (index == sequence.length) {
			index = 0;
			round++;
			getRandomTile();
		}
	});
	}

	function disablePlayer() {
		tiles.off('click');
	}

	function gameOver() {
		if ((round - 1) > highScore) {
			highScore = round -1;
		}
		if ((highScore != 0) && (round == highScore)) {
			instructions.html('Game Over<br>You completed ' + (round - 1) + ' rounds, matching your high score!');
		} else if ((highScore != 0) && (round > highScore)) {
			instructions.html('Game Over<br>You completed ' + (round - 1) + ' rounds, a new high score!');
		} else {
			instructions.html('Game Over<br>You completed ' + (round - 1) + ' rounds. Please try again.');
		}
		$('#score').html('high score: ' + highScore);
		pressPlay.attr('hidden', false);
		pressPlay.html('Play again?');
	}

	pressPlay.click(function() {
		round = 1
		sequence = [];
		instructions.html('Watch carefully.');
		pressPlay.attr('hidden', true);
		setTimeout(function() {
			getRandomTile();
		}, 1200);
	});

	disablePlayer();
	start();
});