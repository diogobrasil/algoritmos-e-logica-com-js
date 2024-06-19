/**
 * Crie uma lista de pacientes.
 * 
 * Cada paciente devera conter :
 * - nome;
 * - idade;
 * - peso;
 * - altura.
 * 
 * Escreva uma lista com o nome, idade, peso e altura dos pacientes.
 */
let patients = [
  {
    name: 'Diogo',
    age: 24,
    weight: 70,
    height: 1.73,
  },
  {
    name: 'Pedro',
    age: 27,
    weight: 110,
    height: 1.85,
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

let patientsProperties = [];

for (let patient of patients) {
  patientsProperties.push(`\n\n${patient.name} tem ${patient.age} anos de idade. Pesa ${patient.weight} quilos e tem ${patient.height} de altura`);
}

alert(patientsProperties);
