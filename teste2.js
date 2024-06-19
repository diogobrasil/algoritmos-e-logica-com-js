//Removendo caracteres não numericos de um CPF.
function cpfConversionNumber (cpf) {

  const cpfString = Array.from(cpf).filter(char => char !== '.' && char !== '-' ).join('');

  const cpfNumber = Number.parseInt(cpfString);

  return cpfNumber;
}

const cpf = '622.546.563-41';

console.log(cpfConversionNumber(cpf));
