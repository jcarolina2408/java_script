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
      let resultado;
      
      if (numA < numB) {
        resultado = numA + numB;
        console.log(`La suma de ${numA} y ${numB} es: ${resultado}`);
      } else {
        resultado = numA - numB;
        console.log(`La resta de ${numA} y ${numB} es: ${resultado}`);
      }
    } else {
      console.log("Por favor, ingrese números válidos.");
    }

    rl.close();
  });
});
