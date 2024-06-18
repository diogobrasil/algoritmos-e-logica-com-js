/**Solicitar o nome do aluno e as 3 notas do bimestre.
 * Calcular a média do aluno.
 * A média deverá ser maior que 6.
 * Se o aluno passou no bimestre, dar os parabéns.
 * Se o aluno reprovou, motivar para que ele dê o seu melhor na recuperação.
 * 
 * Mostrar uma mensagem com o nome do aluno e a nota.
 */
let name = prompt('Digite seu nome: ');

let n1 = Number(prompt('Digite a primeira nota: '));

let n2 = Number(prompt('Digite a segunda nota: '));

let n3 = Number(prompt('Digite a terceira nota: '));

let average = ((n1 + n2 + n3) / 3).toFixed(2);

if (average > 6) {
  alert(`Parabéns ${name}, você foi aprovado com média ${average}`);
}
else if (average < 3) {
  alert('Game over! Não há mais nada a ser feito no seu caso. Apenas aceite seu destino, que é repetir a matéria no proximo bimestre.');
}
else {
  alert(`Infelizmente ${name}, você foi reprovado com média ${average}. Mas não desanime! Dê o seu melhor na prova de recuperação!`);
}
