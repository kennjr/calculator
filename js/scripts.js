var add = function(number1, number2) {
    return number1 + number2;
  };
  add(10, 6);
  var subtract = function(number1, number2) {
    return number1 - number2;
  };
  var multiply = function(number1, number2) {
    return number1 * number2;
  };
  
  var number1 = prompt("Enter a number:");
  var number2 = prompt("Enter another number:");
  alert(add(parseInt(number1), parseInt(number2)));
  