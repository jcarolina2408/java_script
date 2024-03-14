const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingrese el primer número: ', (num1) => {
  rl.question('Ingrese el segundo número: ', (num2) => {
    rl.question('Ingrese el tercer número: ', (num3) => {
      num1 = parseInt(num1);
      num2 = parseInt(num2);
      num3 = parseInt(num3);

      if (num1 >= 0 && num2 >= 0 && num3 >= 0) {
        let menor = num1;
        let mayor = num1;

        if (num2 < menor) {
          menor = num2;
        } else if (num2 > mayor) {
          mayor = num2;
        }

        if (num3 < menor) {
          menor = num3;
        } else if (num3 > mayor) {
          mayor = num3;
        }

        console.log("El menor número es: " + menor);
        console.log("El mayor número es: " + mayor);
      } else {
        console.log("Por favor, ingrese números enteros positivos.");
      }

      rl.close();
    });
  });
});
