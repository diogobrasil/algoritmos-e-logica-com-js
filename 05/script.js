/**Capture 10 valores para compor uma lista.
 * Ao final, imprima esses valores separando-os por vírgula.
 */

let items = [];

for (let i =0; i < 10; i++) {
  let itemName = prompt('Digite o nome do item ' + (i+1));
  items[i] = itemName;
}
alert(items);
