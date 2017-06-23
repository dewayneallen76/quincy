(function() {
  'use strict';
  console.log('linked');

  var leftInput = document.getElementById('leftInput');
  var operatorInput = document.getElementById('operatorInput');
  var rightInput = document.getElementById('rightInput');
  var number = document.getElementsByClassName('number');
  var operator = document.getElementsByClassName('operator');
  var clear = document.getElementById('btnClear');
  var equal = document.getElementById('btnEquals');
  var answer;

  for(var i = 0; i < number.length; i++) {
    number[i].addEventListener('click', buttonHandler)
  }

  for(var i = 0; i < operator.length; i++) {
    operator[i].addEventListener('click', buttonHandler);
  }

  function buttonHandler() {
    if (this.className.includes('operator')) {
    operatorInput.setAttribute('value', this.innerText);
    } else if (operatorInput.value != '' && leftInput.value != '') {
      var displayValue = rightInput.getAttribute('value');
      displayValue += this.innerText;
      rightInput.setAttribute('value', displayValue);
    } else if (this.className.includes('number')) {
      var displayValue = leftInput.getAttribute('value');
      displayValue += this.innerText;
      leftInput.setAttribute('value', displayValue);
    }
  };

  clear.addEventListener('click', function() {
    leftInput.setAttribute('value', '');
    operatorInput.setAttribute('value', '');
    rightInput.setAttribute('value', '');
  })


  equal.addEventListener('click', function() {
    var leftInputNumber = parseFloat(leftInput.value);
    var rightInputNumber = parseFloat(rightInput.value);

    switch(operatorInput.value) {
      case '+':
        answer = leftInputNumber + rightInputNumber;
        break;
      case '-':
        answer = leftInputNumber - rightInputNumber;
        break;
      case '*':
        answer = leftInputNumber * rightInputNumber;
        break;
      case '/':
        if(leftInputNumber === 0 || rightInputNumber === 0) {
          alert('Cannot divide by 0');
        }
        answer = leftInputNumber / rightInputNumber;
        break;
    }
    console.log(answer);
    leftInput.setAttribute('value', answer);
    rightInput.setAttribute('value', '');
  })

}());
