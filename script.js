 // -- variables:
 var display = document.getElementById('display'),
 inputs = document.getElementsByClassName('inputs'),
 operators = document.getElementsByClassName('operators'),
 equal = document.getElementById('equal'),
 clear = document.getElementById('clear'),
 backspace = document.getElementById('backspace'),
 currentInputValue,
 currentOperator,
 displayValue,
 result,
 backspaceValue,
 i,
 ii;

// -- functions:
// for data(numberic values) input
function dataInput() {
    if (display.value === ".") {
       return;
    }
    if (display.value === "0") {
       return;
    }
    currentInputValue = this.value;
    display.value += currentInputValue;
}

// for operator(+-*/) input
function operatorInput() {
    currentOperator = this.value;
    display.value += currentOperator;
}

// for displaying the calculated result
function displayResult() {
    if (display.value === "") {
        display.value = "";
    } else {
        displayValue = display.value;
        displayValue = displayValue.replace(/,/g, function (n) {
            return parseFloat(n);
        });
        result = eval(displayValue);
        display.value = handleRounding(result);
    }
}

// for Dividing By 10 
function handleRounding(number) {
    return Math.round(number * 100000) / 100000;
    }
    
// for deleting(backspace) single value
function deleteSingle() {
 backspaceValue = display.value;
 display.value = backspaceValue.substr(0, backspaceValue.length - 1);
}

// for clearing input field
function clearAll() {
 display.value = "";
}

// for blocking alphabets into input field and helping calculation through keyboard keys
function keyboardInput(key) {
 if ((key.which < 0 || key.which > 57) && (key.which !== 13 && key.which !== 99)) {
     return false;
 } else {
     key.preventDefault();
     if (key.which === 48) {
         display.value += "0";
     } else if (key.which === 49) {
         display.value += "1";
     } else if (key.which === 50) {
         display.value += "2";
     } else if (key.which === 51) {
         display.value += "3";
     } else if (key.which === 52) {
         display.value += "4";
     } else if (key.which === 53) {
         display.value += "5";
     } else if (key.which === 54) {
         display.value += "6";
     } else if (key.which === 55) {
         display.value += "7";
     } else if (key.which === 56) {
         display.value += "8";
     } else if (key.which === 57) {
         display.value += "9";
     } else if (key.which === 46) {
         display.value += ".";
     } else if (key.which === 40) {
         display.value += "(";
     } else if (key.which === 41) {
         display.value += ")";
     } else if (key.which === 42) {
         display.value += "*";
     } else if (key.which === 47) {
         display.value += "/";
     } else if (key.which === 43) {
         display.value += "+";
     } else if (key.which === 45) {
         display.value += "-";
     } else if (key.which === 13) {
         displayResult();
     } else if (key.which === 99) {
         clearAll();
     } else {
         display.value = display.value;
     }
     return true;
    }
}

// for deleting value using backspace
function backspaceKeyEvent (event) {
 if (event.which === 8) {
     deleteSingle();
    }
}

// -- code execution:
window.onload = function () {
 // -- function calling and stuff:
 // for blocking alphabets into input field and helping calculation through keyboard keys
 document.onkeypress = keyboardInput;

 // for deleting value using backspace
 document.onkeydown = backspaceKeyEvent;

 // for data(numberic values) input
 for (i = 0; i < inputs.length; i++) {
    inputs[i].onclick = dataInput;
};

// for operator(+-*/) input
for (ii = 0; ii < operators.length; ii++) {
    operators[ii].onclick = operatorInput;
};

 // for displaying the calculated result
 equal.onclick = displayResult;

 // for deleting(backspace) single value
 backspace.onclick = deleteSingle;

 // for clearing input field
 clear.onclick = clearAll;
};