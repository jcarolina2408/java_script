const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingrese el primer número (A): ', (numA) => {
  rl.question('Ingrese el segundo número (B): ', (numB) => {
    numA = parseFloat(numA);
    numB = parseFloat(numB);

    if (!isNaN(numA) && !isNaN(numB)) {
      if (numB === 0) {
        console.log("La división por cero no está definida. No es posible calcular el cociente.");
      } else {
        const cociente = numA / numB;
        console.log(`El cociente entre ${numA} y ${numB} es: ${cociente}`);
      }
    } else {
      console.log("Por favor, ingrese números válidos.");
    }

    rl.close();
  });
});
