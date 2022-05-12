let operador1 = document.getElementById("dato1");
let operador2 = document.getElementById("dato2");

btnDatos1.addEventListener("click", () => {
  console.log("Operador 1: " + operador1.value);
});

btnDatos2.addEventListener("click", () => {
  console.log("Operador 2: " + operador2.value);
});

sumar.addEventListener("click", () => {
  let guion = "";
  for (let i = 0; i <= 40; i++) {
    guion = guion + "-";
  }
  console.log(guion);
  let suma: number = Number(operador1.value) + Number(operador2.value);
  console.log("El resultado es: " + suma));
  let guion = "";
  for (let i = 0; i <= 40; i++) {
    guion = guion + "-";
  }
  console.log(guion);
});

restar.addEventListener("click", () => {
  let guion = "";
  for (let i = 0; i <= 40; i++) {
    guion = guion + "-";
  }
  console.log(guion);
  console.log("El resultado es: " + Number(operador1.value - operador2.value));
  let guion = "";
  for (let i = 0; i <= 40; i++) {
    guion = guion + "-";
  }
  console.log(guion);
});
