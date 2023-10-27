// Obtén una referencia al elemento de visualización de la calculadora
const display = document.getElementById("display");

// Obtén una referencia a todos los botones de la calculadora
const buttons = document.querySelectorAll(".buttons button");

// Variable para almacenar el resultado anterior
let ANS = 0;

// Variable para verificar si se debe borrar la pantalla después de pulsar "=" o después de ingresar un nuevo número
let clearDisplay = false;

// Recorre todos los botones y agrega un evento click a cada uno
buttons.forEach((button) => {
  button.addEventListener("click", function () {
    // Verifica qué botón se ha hecho clic
    if (button.textContent === "=") {
        ANS=display.value;
      // Si se hace clic en "=", evalúa la expresión en el display y muestra el resultado
      try {
        const funciones = ["sin(", "cos(", "tan(", "√", "^2", "ANS"];
        let removedString = "";

        for (const trigFunc of funciones) {
          if (display.value.includes(trigFunc)) {
            display.value = display.value.replace(trigFunc, "");
            removedString = trigFunc;
            break;
          }
        }

        let result = parseFloat(display.value);

        switch (removedString) {
          case "sin(":
            //result = Math.sin(result)
            display.value = result;
            break;
          case "cos(":
            result = Math.cos(result);
            display.value = result;
            break;
          case "tan(":
            result = Math.tan(result);
            display.value = result;
            break;
          case "√":
            result = Math.sqrt(result);
            display.value = result;
            break;
          case "^2":
            result = result ** 2;
            display.value = result;
            break;
          case "ANS":
            display.value = display.value.replace("ANS", ANS);
            display.value = eval(display.value);
            break;
          default:
            parseFloat(display.value);
            display.value = eval(display.value);
        }

        if (/^[1-9]$/.test(button.textContent)) {
          display.value = "ANS"; // Agrega "ANS" si se pulsa un número del 1 al 9
          clearDisplay = false;
        }
      } catch (error) {
        display.value = "Error";
        clearDisplay = true;
        currentOperation = ""; // Restablece la operación actual
      }
    } else if (button.textContent === "DEL") {
      display.value = display.value.slice(0, -1); // Elimina el último carácter
      clearDisplay = false; // Restablece la bandera
    } else if (button.textContent === "AC") {
      display.value = ""; // Borra todo el contenido en pantalla
      clearDisplay = false; // Restablece la bandera
    } else if (button.textContent === "x10") {
      // Si se hace clic en "x10", multiplica el valor actual por 10
      if (!isNaN(display.value)) {
        display.value = (parseFloat(display.value) * 10).toString();
      }
    } else if (button.textContent === "ANS") {
      // Si se hace clic en "ANS", agrega el resultado anterior al display
      display.value += "ANS";
    } else if (button.textContent === "√") {
      display.value += "√";
    } else if (button.textContent === "^2") {
      display.value += "^2";
    } else if (button.textContent === "sin") {
      display.value += "sin(";
    } else if (button.textContent === "cos") {
      display.value += "cos(";
    } else if (button.textContent === "tan") {
      display.value += "tan(";
    } else {
      if (clearDisplay) {
        display.value = ""; // Borra el contenido en pantalla después de "=" o después de ingresar un nuevo número
        clearDisplay = false; // Restablece la bandera
      }
      display.value += button.textContent;
    }
  });
});
