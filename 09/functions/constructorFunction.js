/** Constructor function
 * Usadas para criar objetos com mais eficiência.
*/
function Person (name) {
  this.name = name
  this.walk = () => {
    return name + ' pode andar!'
  }
}

const person1 = new Person('Diogo')
const person2 = new Person('João')
console.log(person1.walk())
console.log(person2.walk())
