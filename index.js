const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;

}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
       // Check if the expression contains division by zero
       if (display.value.includes('/0')) {
          throw new Error('error:divide by 0');
      }

      // Evaluate the expression
      display.value = eval(display.value);
  } catch (error) {
      display.value = error.message; // Display the error message
  }
}