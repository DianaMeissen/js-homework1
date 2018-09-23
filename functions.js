function sum() {
	var firstNumber = prompt("Enter first number", 'first number'), 
		secondNumber = prompt("Enter second number", 'second number');

	alert( +(firstNumber + secondNumber) );
}

function priceSum() {
	var firstPrice = 29.6, 
		secondPrice = 0.47;

	alert("first price = " +firstPrice + ", second price = " +secondPrice + ", SUM = " +(firstPrice + secondPrice).toFixed(2) );
}

function loop() {
	var i = 0;
	while(i >= 0){
		i += 1;
		alert("It is infinite process, but you can try ;D  " +i);
		if(i == 5){
			alert("Ok, I will stop this");
			break;
		}
	}
}

function random() {
	alert("Random number is: " + Math.random().toFixed(5));
}

function random1(min, max) {

	var round = min + Math.random() * (max - min);
	round = Math.round(round);

	return round;
}

function random2() {
	var min = 1, max = 4; 
	alert("Min = " + min +", max = " + max + " random = " + random1(min, max));
}