//Diferença entre for in e for of
let names = ['diogo', 'pedro', 'joão'];

console.log('\nUsando for in :')
for (let i in names) {

  console.log(names[i]);
}

console.log('\nUsando for of :');
for (let name of names) {

  console.log(name);
}

let person = {
  name: 'David',
  age: 34,
  height: 1.80,
}

console.log('\nUsando for in para percorrer um objeto:');
for (let property in person) {
  console.log(property+':'+person[property]);
}

//O for of não é usado para percorrer um objeto
