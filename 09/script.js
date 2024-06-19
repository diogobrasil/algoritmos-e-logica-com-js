/**
 * Crie um programa que calcule o IMC dos pacientes de uma lista
 *  e apresente uma mensagem da seguinte forma:
 * "O paciente x tem o valor do IMC igual a y"
 * Onde x é o nome do paciente e y e o valor do IMC.
 * 
 * Crie uma função para calcular o IMC e outra para gerar a mensagem.
 */
const patients = [
  {
    name: 'Diogo',
    age: 24,
    weight: 70,
    height: 1.73,
  },
  {
    name: 'Pedro',
    age: 27,
    weight: 100,
    height: 1.90,
  },
  {
    name: 'João',
    age: 34,
    weight: 96,
    height: 1.81,
  },
  {
    name: 'Maria',
    age: 24,
    weight: 80,
    height: 1.73,
  },
  {
    name: 'José',
    age: 38,
    weight: 114,
    height: 1.79,
  },
];

function IMC (weight, height) {

  return (weight / (height ** 2)).toFixed(2);
};

function messagePatientIMC (patient) {
  return `
          O paciente ${patient.name} 
          tem o valor do IMC igual a ${IMC(patient.weight, patient.height)}
        `;
};

for (let patient of patients) {

  let message = messagePatientIMC(patient);
  alert(message);
}
