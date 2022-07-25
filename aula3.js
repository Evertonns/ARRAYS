//Desafio - Adicionando elementos.
// Um professor acidentalemente lançou 5 notas no sistema para um aluno: 10, 6, 5.5 e 10. Para corrigir, remova a última nota e fça o calculo da média correta.

const notas = [10, 6, 5.5, 10];
notas.pop(10);
console.log(notas);

let media = (notas[0] + notas[1] + notas[2]) / notas.length;

console.log(media);
