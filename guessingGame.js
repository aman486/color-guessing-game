var numSquares = 6
var colors =generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var PickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var reset = document.getElementById("reset");
var h1 = document.querySelector("h1");
var esybtn = document.getElementById("esybtn");
var hrdbtn = document.getElementById("hrdbtn"); 
colorDisplay.textContent = PickedColor; 



esybtn.addEventListener("click",function(){
	hrdbtn.classList.remove("selected");
	esybtn.classList.add("selected");
	numSquares = 3;
	colors =generateRandomColors(numSquares);
	//pick a random color from all colors
	PickedColor = pickColor();
	//diaplay rgb value on h1 
	colorDisplay.textContent = PickedColor;
	for(var i=0;i<squares.length;i++){
		if(colors[i]){
			squares[i].style.backgroundColor=colors[i];
		}
		else{
			squares[i].style.display="none";
			h1.style.backgroundColor="steelblue";
		}
	}
	
});

hrdbtn.addEventListener("click",function(){
	esybtn.classList.remove("selected");
	hrdbtn.classList.add("selected");
	numSquares = 6;
	colors =generateRandomColors(numSquares);
	//pick a random color from all colors
	PickedColor = pickColor();
	//diaplay rgb value on h1 
	colorDisplay.textContent = PickedColor;
	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor=colors[i];
		squares[i].style.display="block";
	}
	h1.style.backgroundColor="steelblue";	
		
});


reset.addEventListener("click",function(){
	//generate all new colors
	colors =generateRandomColors(numSquares);
	//pick a random color from all colors
	PickedColor = pickColor();
	//diaplay rgb value on h1 
	colorDisplay.textContent = PickedColor;
	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor=colors[i];
	}
	h1.style.backgroundColor="steelblue";
	reset.textContent = "New Colors";	

});

for(var i=0;i<colors.length;i++){
	//give intial colors to squares
	squares[i].style.backgroundColor=colors[i];

	//event handler on click the squares
	squares[i].addEventListener("click",function(){
		// grab the colour of square that we click on it
		var clickedColor = this.style.backgroundColor;
		// match the clicked square color with the picked color
		if(clickedColor === PickedColor){
			messageDisplay.textContent = "Correct";
			reset.textContent = "Play Again?"
			for(var j=0;j<squares.length;j++){
				squares[j].style.backgroundColor=PickedColor;
			}
			var h1 = document.querySelector("h1");
			h1.style.backgroundColor = PickedColor;
		}
		else{
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try again!!";
		}
	});

}
// this function choose a random number from  array of colors 
function pickColor(){
	var random =  Math.floor(Math.random()*colors.length);
	return colors[random];
}
function generateRandomColors(num){
	var arr = []
	for(var k=0;k<num;k++){
		// pick a color from randomColor and push into arr
		arr.push(randomColor());

	}
	return arr;
}

function randomColor(){
	// pick a red color from 0-255
	var r = Math.floor(Math.random()*256);
	// pick a green color from 0-255
	var g = Math.floor(Math.random()*256);
	//pick a blue color fom 0-255
	var b = Math.floor(Math.random()*256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}