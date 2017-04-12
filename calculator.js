
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
  } else {
    if(equation.length == 0 && numberHolder == ""){
      numberHolder = sum;
    }
    equation[equation.length] = parseFloat(numberHolder);
    equation[equation.length] = button;
    numberHolder = "";
    //sum = 0 ??
  }
  updateDisplay();
}


function resetCalc(){
  equation = [];
  numberHolder = "";
  sum = 0;
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
  updateDisplay();
  equation = [];
  numberHolder = "";
}


function displayError(){
  console.log("You did a boo boo");
  equation = [];
  numberHolder = "";
}


function updateDisplay(){
  var eq = equation.join(" ");
  if(eq == ""){eq = numberHolder + eq;}
  document.getElementById('minorScreen').innerHTML = eq;

  
  //display.innerHTML = "Equation: " + eq + "</br>Number: " + numberHolder + "</br>Sum: " + sum;
  console.log("E: " + eq);
  console.log("N: " + numberHolder);
  console.log("S: " + sum);
}
