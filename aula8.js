//Desafio - Procurando na Lista
//- Crie uma função que recebe como argumento o nome de um aluno.
//- Verifique se o aluno está presente na lista e retorbe a média final que se encontra no mesmo índice.
//- Caso o nome do aluno não esteja na lista, retorne uma mensgem indicando que o aluno não foi encontrado.

const alunos = ["João", "Juliana", "Caio", "Ana"];

const mediasDosAlunos = [10, 8, 7.5, 9];

let listaDeNotasEAlunos = [alunos, mediasDosAlunos];

const exibeNomeNota = (nomeDoAluno) => {
  if (listaDeNotasEAlunos[0].includes(nomeDoAluno)) {
    let indice = listaDeNotasEAlunos[0].indexOf(nomeDoAluno);
    return (
      listaDeNotasEAlunos[0][indice] +
      ", sua media é " +
      listaDeNotasEAlunos[1][indice]
    );
  } else {
    return "Aluno não esta cadastrado";
  }
};

console.log(exibeNomeNota("Ana"));
