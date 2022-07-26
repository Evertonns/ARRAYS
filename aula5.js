//Desafio - Atualizar elementos
//Crie uma lista de chamada com os seguintes alunos: 'João', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo'
//porém, a Ana e o Caio mudaram de sala. Atualize a lista.

const listaDeChamada = ["João", "Ana", "Caio", "Lara", "Marjorie", "Leo"];

listaDeChamada.splice(1, 2, "Rodrigo");

console.log(`Lista de chamada: ${listaDeChamada}`);
