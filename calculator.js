
var display = document.getElementById("display");
var equation = [];
var numberHolder = "";
var sum = 0;


function buttonPressed(button){
  if (!isNaN(button)||button == "."){
    numberHolder += button;
  } else if(button == "ac"){
    resetCalc();
  }else if(button == "ce"){
    numberHolder = "";
  } else if(button == "="){
    equation[equation.length] = parseFloat(numberHolder);
    solve();
    return;
  } else { //ie. if operator

    //toggle negative
    if(button == "-" && numberHolder == ""){
        numberHolder = "-";
        updateDisplay();
        return;
    } else if (numberHolder == "-") {
        numberHolder = "";
        updateDisplay();
        return;
    }

    //unexpected operator
    if(isOperator(equation[equation.length-1])){
      displayError(); return;
    }

    if(equation.length == 0 && numberHolder == ""){
      numberHolder = sum;
    }
    equation[equation.length] = parseFloat(numberHolder);
    equation[equation.length] = button;
    numberHolder = "";
  }

  updateDisplay();

}


function solve(){ // remem to accomodate for negatives
  var total = equation[0];
  for(var i = 1; i+1 < equation.length; i = i+2){
    var symbol = equation[i];
    var num = 0;
    if(isNaN(equation[i+1])){
      if(!isNaN(equation[i+3])){
        num = 0 - equation[i+3];
        i = i+2;
      } else {
        displayError();
        return;
      }
    } else {
      num = equation[i+1];
    }
    switch(symbol) {
      case '+':
        total += num;
        break;
      case '-':
        total -= num;
        break;
      case '*':
        total *= num;
        break;
      case '/':
        total /= num;
        break;
      default:
        break;
    }
  }
  sum = total;
  numberHolder = "";
  updateDisplay();
  equation = [];
}

function isOperator(op){
  switch(op){
    case '+':
    case '-':
    case '*':
    case '/':
      return true;
    default:
      return false;
  }
}

function resetCalc(){
  equation = [];
  numberHolder = "";
  sum = 0;
}


function displayError(){
  console.log("You did a boo boo");
  document.getElementById('mainScreen').innerHTML = "err";
  document.getElementById('minorScreen').innerHTML = sum;
  equation = [];
  numberHolder = "";
}

function checkNeg(arr){
  for(var i = 2; i < arr.length; i++){
    if(arr[i]=="-"){

    }
  }
}


function updateDisplay(){
  var current = numberHolder;
  if(current == ""){ current = sum; }
  else if(isNaN(current) && current != "-"){ current = 0; }
  document.getElementById('mainScreen').innerHTML = current;

  var eq = equation;
  //if(eq != ""){ checkNeg(eq); }
  eq = eq.join(" ");

  document.getElementById('minorScreen').innerHTML = eq;

  console.log("E: " + eq);
  console.log("N: " + numberHolder);
  console.log("S: " + sum);
}
