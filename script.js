const CALCULAR = document.getElementById("calcular");
const PESO = document.getElementById("peso");
const ERROR = document.getElementById("error");
const FLU = document.getElementById("flu");
const MAN = document.getElementById("man");

if (
  PESO.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      calculadora();
    }
  })
) {
} else {
  CALCULAR.addEventListener("click", () => {
    calculadora();
  });
}

function calculadora() {
  let peso = document.getElementById("peso").valueAsNumber;
  if (isNaN(peso) || peso <= 0) {
    ERROR.style.display = "block";
  } else {
    // Método de Holliday-Segar
    if (peso > 0 && peso <= 30) {
      ERROR.style.display = "none";
      if (peso > 20) {
        resultado = (peso - 20) * 20 + 1500;
      } else if (peso > 10 && peso <= 20) {
        resultado = (peso - 10) * 50 + 1000;
      } else {
        resultado = peso * 100;
      }
      mantenimiento = resultado / 24;
      mantenimiento = mantenimiento.toFixed();
      mantenimiento2 = mantenimiento * 1.5;
      FLU.style.display = "block";
      FLU.innerHTML =
        "Flujo diario " +
        resultado +
        " cc " +
        " mantenimiento " +
        mantenimiento +
        " cc/h";
      MAN.style.display = "block";
      MAN.innerHTML = "m+m/2 " + mantenimiento2 + " cc/h";
    } else {
      // Método de Superficie Corporal
      sc = (peso * 4 + 7) / (peso + 90);
      resultado1 = sc * 1500;
      resultado1 = resultado1.toFixed();
      resultado2 = sc * 2000;
      resultado2 = resultado2.toFixed();
      FLU.style.display = "block";
      FLU.innerHTML =
        "Flujo diario " + resultado1 + " cc (superficie por 1500)";
      MAN.style.display = "block";
      MAN.innerHTML =
        "Flujo diario " + resultado2 + " cc (superficie por 2000)";
    }
  }
}
