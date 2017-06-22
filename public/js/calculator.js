(function(){
"use strict";
console.log('javascript linked');

var equals = document.getElementById('btnEquals');
var clear = document.getElementById('btnClear');
var numbers = document.getElementsByClassName('numbers');
var operators = document.getElementsByClassName('operators');

for (var i = 0; i < numbers.length; i++) {
	numbers[i].addEventListener('click',handleButton)
}
for (var i = 0; i < operators.length; i++) {
	operators[i].addEventListener('click',handleButton)
}

// Get the handleButton function to display in the inputs on top of the calculator
function handleButton(){
	if (this.className.includes("operators")) {
		document.getElementById('operatorInput').setAttribute('value', this.innerHTML);
	} else if (operatorInput.value != ''){
		var displayValue = document.getElementById('rightInput').getAttribute('value');
		displayValue += this.innerHTML;
		document.getElementById('rightInput').setAttribute('value', displayValue);
	} else if (this.className.includes("numbers")) {
		var displayValue = document.getElementById('leftInput').getAttribute('value');
		displayValue += this.innerHTML;
		document.getElementById('leftInput').setAttribute('value', displayValue);
	}

}
// Clear
clear.addEventListener('click',function(){
	document.getElementById('leftInput').setAttribute('value', '');
	document.getElementById('rightInput').setAttribute('value', '');
	document.getElementById('operatorInput').setAttribute('value', '');
})
// Equals
equals.addEventListener('click',function(e){

var answer;
var leftInput = parseFloat(document.getElementById('leftInput').getAttribute('value'));
var rightInput = parseFloat(document.getElementById('rightInput').getAttribute('value'));
var operatorInput = document.getElementById('operatorInput').getAttribute('value')s;

switch (document.getElementById('operatorInput').getAttribute('value')) {

	case '+' :
		answer = leftInput + rightInput;
		break;
	case '-' :
		answer = leftInput - rightInput;
		break;
	case '*' :
		answer = leftInput * rightInput;
		break;
	case '/' :
		answer = leftInput / rightInput;
		break;
}
document.getElementById('leftInput').setAttribute('value', answer);
document.getElementById('rightInput').setAttribute('value', '');
document.getElementById('operatorInput').setAttribute('value', operatorInput);
})
//the answer needs to take the values of the leftInput and rightInput, and use the operatorInput to perform an action to get the answer
})();
