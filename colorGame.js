 var numSquares = 6;
 var colors = [];
 var colorPicked;
// Grabbing all divs with a class of square.
var square = document.querySelectorAll(".square");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
// var easyBtn = document.querySelector("#easyBtn");
// var hardBtn = document.querySelector("#hardBtn");
var modeButtons = document.querySelectorAll(".mode");
 var colorDisplay = document.querySelector("#colorDisplay");

 //Grabbing the span element with an id of message to display a Correct or Try again message.
 var messageDisplay = document.querySelector("#message");

init();

function init(){
	//mode buttons event listerner
		setUpModeButtons();
		setUpSquares();
	
	 reset();
	}

	function setUpModeButtons(){
			for(var i = 0; i < modeButtons.length; i++){
			modeButtons[i].addEventListener("click",function(){
				modeButtons[0].classList.remove("selected");
				modeButtons[1].classList.remove("selected");
				this.classList.add("selected");
				 this.innerHTML =="Easy" ? numSquares = 3: numSquares = 6; 
				reset();
			});
		}
	}
	function setUpSquares(){
		for (var i = 0; i < square.length; i++){
 	// add click listerners to square
	 	square[i].addEventListener("click",function(){
	 	//grab color of picked square after listening, this keyword is used
	 	var clickedColor = this.style.backgroundColor 
	 	//compare to colorPicked
			if (clickedColor === colorPicked){
				messageDisplay.textContent = "Correct";
				changeColor(clickedColor);
				h1.style.backgroundColor = clickedColor;
				resetButton.innerHTML = "Play again?"
		 		}
				else{
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again";
				}
	 		});
		}
	}
	function reset(){
		colors = generateRandomColor(numSquares);
		//pick a new random color from array
	colorPicked = pickedColor();
		//change colorDisplay to match picked color
	colorDisplay.innerHTML = pickedColor();
	resetButton.innerHTML = "New colors";
	messageDisplay.innerHTML = "";
		// change the colors of sqaure on page
	for(var i = 0; i < square.length; i++){
		if(colors[i]){
			square[i].style.display = "block";
			square[i].style.backgroundColor = colors[i];
		}
		else{
			square[i].style.display = "none";
		}
		}
		h1.style.backgroundColor = "steelblue";
	}

 //Grabbing the span element colorDisplay


 // easyBtn.addEventListener("click",function(){
 // 	hardBtn.classList.remove("selected");
 // 	easyBtn.classList.add("selected");
 // 	numSquares = 3;
 // 	colors = generateRandomColor(numSquares);
 // 	colorPicked = pickedColor();
 // 	colorDisplay.innerHTML = pickedColor();
 // 	for(var i = 0; i < square.length; i++){
 // 		if(colors[i]){
 // 		square[i].style.backgroundColor = colors[i];
 // 		}
 // 		else{
 // 			square[i].style.display = "none";
 // 		}
 // 	}
 // });

 // hardBtn.addEventListener("click",function(){
 // 	hardBtn.classList.add("selected");
 // 	easyBtn.classList.remove("selected");
 // 	numSquares = 6;
 // 	colors = generateRandomColor(numSquares);
 // 	colorPicked = pickedColor();
 // 	colorDisplay.innerHTML = pickedColor();
 // 	for(var i = 0; i < square.length; i++){
 // 		if(colors[i]){
 // 		square[i].style.backgroundColor = colors[i];
 // 		square[i].style.display = "block";
 // 		}
 // 	}
 // });


 	resetButton.addEventListener("click", function(){
		reset();
	})

	function changeColor(color){
 		for (var i = 0; i < square.length; i++){
		square[i].style.backgroundColor = color;
		}
	}

 	function pickedColor(){
		var random = Math.floor(Math.random() * colors.length);
		return colors[random];
	 }

	 function generateRandomColor(num){
	 	// make an array
	 	var arr =[];
	 	// add num amount of array
	 	for (var i = 0; i < num; i++){
	 		arr.push(randomColor());
	 	}
	 	// return array
	 	return arr;
	 }

	 function randomColor(){
	 	//Generate a number from 0 to 255 and save to a variable to have a rgb format
	 	// for red
	 	var r = Math.floor(Math.random() * 266);
	 	// for green
	 	var g = Math.floor(Math.random() * 266);
	 	// for blue
	 	var b = Math.floor(Math.random() * 266);
	 	return "rgb(" + r + ", " + g + ", " + b + ")"
	 }










