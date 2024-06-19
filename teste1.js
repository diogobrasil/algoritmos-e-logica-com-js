let name = 'Diogo'
let age = 22

//Template string
let text = `O ${name} tem ${age} anos`

console.log(text)

//Object
const person = {
  name: 'David',
  age: 34,
  height: 1.80,
  isAdmin: true
}

console.log(person)

let toStringObject = `${person.name} tem ${person.age} anos e ${person.height} metros de altura.`
console.log(toStringObject)

//Array 
//Array of persons
const persons = [
  person,
  {
    name: 'Diogo',
    age: 24,
    height: 1.73,
    isAdmin: false
  },
  {
    name: 'Maria',
    age: 34,
    height: 1.60,
    isAdmin: false
  }
]
console.log(persons)
console.log(persons[2].name)
