/**Jogo da adivinhação.
 * Solicite um número ao usuário com a seguinte mensagem :
 * "Adivinhe o número que estou pensando entre 0 e 10 : "
 * Crie uma lógica para que o sistema gere um número aleatório.
 * Faça uma comparação entre o número digitado pelo usuário e o número gerado pelo sistema.
 * 
 * Enquanto o usuário não adivinhar o número gerado, exiba a mensagem : "Você errou! Tente novamente : "
 * 
 * Caso o usuário adivinhe o número gerado, exiba a mensagem : "Parabéns! Eu pensei em ${numeroGerado} e você acertou em ${numeroDeTentativas} !"
 */
let result = prompt('Adivinhe o número que estou pensando! Esta entre 0 e 10 : ');

const numberRandom = Math.round(Math.random() * 10);

let attempts = 1;

while (numberRandom != Number(result)) {
  result = prompt('Você errou! Tente novamente : ');
  attempts++;
}
alert(`Parabéns! Eu pensei no número ${numberRandom} e você acertou em ${attempts} ${attempts == 1 ? 'tentativa!' : 'tentativas!'}`);
