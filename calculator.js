
var display = document.getElementById("display");
var equation = [];
var numberHolder = "";
var sum = 0;

function buttonPressed(button){
  if (!isNaN(button)||button == "."){
    numberHolder += button;
  } else if(button == "ac"){
    equation = [];
    numberHolder = "";
    sum = 0;
  }else if(button == "ce"){
    numberHolder = "";
  } else if(button == "="){
    solve();
  } else {
    if(equation.length == 0 && numberHolder == ""){
      numberHolder = sum;
    }
    equation[equation.length] = numberHolder;
    equation[equation.length] = button;
    numberHolder = "";
    //sum = 0 ??
  }
  updateDisplay();
}

function solve(){
  updateDisplay();
}

function updateDisplay(){
  var eq = equation.join();
  //display.innerHTML = "Equation: " + eq + "</br>Number: " + numberHolder + "</br>Sum: " + sum;
  console.log("E: " + eq);
  console.log("N: " + numberHolder);
  console.log("S: " + sum);
}
