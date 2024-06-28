/**
 * Faça um programa que tenha um menu e apresente a sequinte mensagem :
 * 
 * Olá, usuário! Digite o número da opção desejada :
 * 1. Cadastrar um item na lista;
 * 2. Mostrar itens cadastrados;
 * 3. Sair do programa.
 * __
 * 
 * O programa deverá capturar o número digitado pelo usuário 
 * e apresentar os seguintes cenários :
 * 
 * Caso o usuário digite 1, ele poderá cadastrar um item na lista.
 * Caso o usuário digite 2, ele poderá ver os itens cadastrados na lista.
 *  Se não houver itens cadastrados, apresentar a seguinte mensagem :
 *    "Não há itens cadastrados"
 * Caso o usuário digite 3, o programa deverá ser encerrado.
 * 
 */

let option;
let items = [];

while (option != 3) {

  option = prompt(` 
    Olá, usuário! Digite o número da opção desejada :
    
    1. Cadastrar um item na lista;
    2. Mostrar itens cadastrados;
    3. Sair do programa.
    `
  );

  switch (option) {

    case '1' : 

      items.push(prompt('Digite o item que deseja cadastrar:'));
      break;

    case '2' :

      if (items.length == 0) {

        alert('Não há itens cadastrados');
  
      } else {
  
        alert(items);
  
      }

      break;

    case '3' :

      alert('Programa encerrado');
      break;

    default :
    
      alert('Opção inválida');
      break;
  }

}
