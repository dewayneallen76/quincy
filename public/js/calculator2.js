(function() {
  'use strict';
  console.log('linked');

  var leftInput = document.getElementById('leftInput');
  var operatorInput = document.getElementById('operatorInput');
  var rightInput = document.getElementById('rightInput');
  var number = document.getElementsByClassName('number');
  var operator = document.getElementsByClassName('operator');

  for(var i = 0; i < number.length; i++) {
    number[i].addEventListener('click', buttonHandler)
  }

  for(var i = 0; i < operator.length; i++) {
    operator[i].addEventListener('click', buttonHandler);
  }

  function buttonHandler() {
    if (this.className.includes('number')) {
      var displayValue = leftInput.getAttribute('value');
      displayValue += this.innerText;
      leftInput.setAttribute('value', displayValue);
    } else if (this.className.includes('operator')) {
      operatorInput.setAttribute('value', this.innerText);
    } else if (operatorInput.value != '') {
      var displayValue = rightInput.getAttribute('value');
      displayValue += this.innerText;
      rightInput.setAttribute('value', displayValue);
    }
  };


}());
