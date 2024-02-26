const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;

}

function clearDisplay(){
    display.value = "";
}

function deleteLastChar() {
    display.value = display.value.slice(0, -1);
}
function calculate(){
    try{
       // Check if the expression contains division by zero
       if (display.value.includes('/0')) {
          throw new Error('error: divide by 0');
        }

        // Evaluate the expression
      display.value = eval(display.value);
      
    }

  catch (error) {
    if (error instanceof SyntaxError && error.message === 'Unexpected end of input') {
        display.value = 'Invalid expression'; // Handle invalid expression error
    }else{
      display.value = error.message; // Display the error message
    }
      setTimeout(clearDisplay, 1000); // Clear the display after 1 seconds

  }
}































































    // Convert expressions starting with '.' to '0.'
    // if (/^\./.test(display.value.trim())) {
    // display.value = '0' + display.value;
    // }

    // Check if the expression is a single number or a negative number
    // if (/^-?\d+(\.\d+)?$/.test(display.value.trim())) {
    //     display.value = parseFloat(display.value); // Convert the number to float
    //     return; // Exit the function without evaluating
    // }

    // Check if the expression is a single positive number
    // if (/^\+\d+(\.\d+)?$/.test(display.value.trim())) {
    //     display.value = parseFloat(display.value.trim().substring(1)); // Extract the number without the '+' sign
    //     return; // Exit the function without evaluating
    // }

    // Check if the expression is empty.calculator evaluates the expression like "5 + 3 * 2"
    // if (!display.value.trim()) {
    //     throw new Error('Invalid expression');
    // }

    // Check if the expression contains only valid characters
    // if (!/^-?\d+(\.\d+)?[+\-*/]?-?\d+(\.\d+)?[+\-*/]*$/.test(display.value.trim())) {
    //     throw new Error('Invalid expression');
    // }

    // Check if the expression ends with an operator
    // if (/[+\-*/.]$/.test(display.value.trim())) {
    //     throw new Error('Invalid expression');
    // }






