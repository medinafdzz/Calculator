document.addEventListener("DOMContentLoaded", function() {
  const display = document.getElementById("display");
  const buttons = document.querySelectorAll(".buttons button");
  let previousAnswer = null;
  let isResultCleared = false;

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const buttonText = button.innerText;


      //Remove "Result" by pressing the first key
      if (!isResultCleared) {
        display.value = "";
        isResultCleared = false;
        if (["x", "÷", "+", "-","x10","^2"].includes(buttonText)){
          display.value +=previousAnswer;
          isResultCleared = true;
        }
      }

     // Button control
if (buttonText === "=") {
  try {
    previousAnswer = eval(display.value);
    display.value = previousAnswer;
    isResultCleared = false;
  } catch (error) {
    display.value = "Error";
    isResultCleared = false;
  }
} else if (buttonText === "AC") {
  display.value = "";
} else if (buttonText === "DEL") {
  display.value = display.value.slice(0, -1);
  isResultCleared = true;
} else if (buttonText === "x") {
  display.value += "*";
} else if (buttonText === "÷") {
  display.value += "/";
  isResultCleared = true;
} else if (buttonText === "Ans") {
  if (previousAnswer !== null) {
    display.value += previousAnswer;
    isResultCleared = true;
  }
} else if (buttonText === "√") {
  display.value += "Math.sqrt(";
  isResultCleared = true;
} else if (buttonText === "x10") {
  display.value += "*10";
  isResultCleared = true;
} else if (buttonText === ".") {
  display.value += ".";
  isResultCleared = true;
} else if (buttonText === "^2") {
  display.value = display.value ** 2;
  isResultCleared = true;
} else if (buttonText === "^x") {
  display.value = display.value+="**";
  isResultCleared = true;
}else if (!isNaN(buttonText)) {
  //To check if there is already a "Math.sqrt(" operation and add ")" automatically
  if (display.value.endsWith("Math.sqrt(")) {
    display.value += buttonText+")";
  } else {
    display.value += buttonText;
  }
  isResultCleared = true;
} else {
  display.value += buttonText;
  isResultCleared = true;
}

    });
  });
});


function toggleDarkMode() {
  const body = document.body;
  const darkModeButton = document.getElementById("darkModeButton");

  if (darkModeButton.textContent === "🌙") {
    // Cambiar a Dark Mode
    body.classList.remove("light-mode");
    body.classList.add("dark-mode");
    darkModeButton.textContent = "🔅";
  } else if (darkModeButton.textContent === "🔅") {
    // Cambiar a Light Mode
    body.classList.remove("dark-mode");
    body.classList.add("light-mode");
    darkModeButton.textContent = "🌙";
  }
}
