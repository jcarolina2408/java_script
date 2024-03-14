function esBisiesto(ano) {
    if ((ano % 4 == 0 && ano % 100 != 0) || ano % 400 == 0) {
        return true;
    } else {
        return false;
    }
}

// Solicitar al usuario que ingrese el año
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingrese el año: ', (ano) => {
  ano = parseInt(ano);
  
  if (!isNaN(ano)) {
    if (esBisiesto(ano)) {
        console.log(`${ano} es un año bisiesto.`);
    } else {
        console.log(`${ano} no es un año bisiesto.`);
    }
  } else {
    console.log("Por favor, ingrese un año válido.");
  }

  rl.close();
});
