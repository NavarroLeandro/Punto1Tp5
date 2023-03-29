let numeroMag;
let adivinado = false;

const numeroMagico = () => {
  numeroMag = Math.floor(Math.random() * 10) + 1;
  console.log("El numero aleatorio es: " + numeroMag);
  adivinado = false;
}

function adivino() {
  const numeroIngresado = parseInt(document.querySelector("#numero-input").value);
  console.log(numeroIngresado);
  if (numeroIngresado === numeroMag) {
    adivinado = true;
    alert("¡Felicidades, adivinaste el número!");
  } else if (numeroIngresado > numeroMag) {
    alert("El número ingresado es mayor al número mágico.");
  } else {
    alert("El número ingresado es menor al número mágico.");
  }
}
