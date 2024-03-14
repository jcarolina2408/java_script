const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingrese el primer número: ', (num1) => {
  rl.question('Ingrese el segundo número: ', (num2) => {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    if (isNaN(num1) || isNaN(num2)) {
      console.log("Por favor, ingrese números válidos.");
    } else {
      if (num1 > num2) {
        console.log(`${num1} es mayor que ${num2}`);
        console.log(`${num2} es menor que ${num1}`);
      } else if (num2 > num1) {
        console.log(`${num2} es mayor que ${num1}`);
        console.log(`${num1} es menor que ${num2}`);
      } else {
        console.log("Ambos números son iguales.");
      }
    }
    rl.close();
  });
});
