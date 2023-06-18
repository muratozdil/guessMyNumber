"use strict";
//event handler & listener
//math trunc removes the decimal and random generates number.
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector(".check").addEventListener("click", function () {
	const guess = Number(document.querySelector(".guess").value);

	//when no value or error value
	if (!guess || guess < 0 || guess > 20) {
		document.querySelector(".message").textContent = "error";

		//when guess is true
	} else if (guess === secretNumber) {
		if (score > highscore) highscore = score;
		document.querySelector(".highscore").textContent = highscore;
		document.querySelector(".message").textContent = "You won!";
		document.querySelector(".number").textContent = secretNumber;

		// to access css property
		document.querySelector("body").style.backgroundColor = "#60b347";

		//when guess is false
	} else if (guess !== secretNumber && score > 0) {
		document.querySelector(".message").textContent =
			guess < secretNumber ? "Too low" : "Too high";
		score--;
	}

	document.querySelector(".score").textContent = score;

	if (score === 0) {
		document.querySelector(".message").textContent = "You lost the game";
		document.querySelector("body").style.backgroundColor = "#ff0000";
	}
});

document.querySelector(".again").addEventListener("click", function () {
	score = 20;
	document.querySelector(".score").textContent = score;
	secretNumber = Math.trunc(Math.random() * 20) + 1;
	document.querySelector("body").style.backgroundColor = "#222";
	document.querySelector(".message").textContent = "Start guessing...";
	document.querySelector(".number").textContent = "?";
	document.querySelector(".guess").value = "";
});
