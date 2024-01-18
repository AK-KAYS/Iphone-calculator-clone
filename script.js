// Get the button element using the name attribute
const numericButtons = document.getElementsByName("button");
const resultInput = document.getElementById("result");

let num1=0,num2=0,sign,answer=0 ;

document.getElementById("division").onclick = function(){
  num1 = parseFloat(resultInput.value);
  sign = "/";
  resultInput.value = "";
}
document.getElementById("percentage").onclick = function(){
  num1 = parseFloat(resultInput.value);
  num1 = num1 /100;
  resultInput.value = num1;
}

// Attach click event listeners to all buttons with the name "button"
numericButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        // Get the value of the button
        let buttonValue = button.textContent || button.innerText;
        switch(true){
          case buttonValue == "+":
            num1 = parseFloat(resultInput.value);
            sign = buttonValue;
            resultInput.value = " ";
            break;
          case buttonValue == "-":
            num1 = parseFloat(resultInput.value);
            sign = buttonValue;
            resultInput.value = " ";
            break;
          case buttonValue == "x":
            num1 = parseFloat(resultInput.value);
            sign = "*";
            resultInput.value = " ";
            break;
          case buttonValue == divisionSymbol:
            num1 = parseFloat(resultInput.value);
            sign = "/";
            resultInput.value = " ";
            break;
          case buttonValue == "&#43;/&#45":
            num1 = parseFloat(resultInput.value);
            resultInput.value = -num1;
            break;
          default:
            resultInput.value += buttonValue ;
            break;
        }
    });
});
function del() {
  resultInput.value = " ";
  num1 = 0;
  num2 = 0;
  sign = undefined;
  answer = 0;
}
function cal() {
  num2 = parseFloat(resultInput.value);
  switch(sign){
    case "+":
      answer = num1+num2;
      resultInput.value = answer;
      break;
    case "-":
      answer = num1-num2;
      resultInput.value = answer;
      break;
    case "*":
      answer = num1*num2;
      resultInput.value = answer;
      break;
    case "/":
      num2 != 0 ? answer = num1/num2 : window.alert("You know you Can't devide by Zero");
      resultInput.value = answer;
      break;
    default:
      break;
  }
}
