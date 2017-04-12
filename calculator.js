
var display = document.getElementById("display");
var equation = [];
var numberHolder = "";
var sum = 0;

function buttonPressed(button){
  if (!isNan(button)||button == "."){
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
}

function solve(){

}
