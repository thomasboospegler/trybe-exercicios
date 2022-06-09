let proximoExercicio = '____________________________';
let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

//Exercicio 1
console.log('Bem-vinda,' , info.personagem);

console.log(proximoExercicio);

//Exercicio 2
info['recorrente'] = 'Sim';

console.log(info.recorrente); //Adiciona ao objeto

console.log(proximoExercicio);

//Exercicio 3
for (let key in info) {
  console.log(key);
};

console.log(proximoExercicio);

//Exercicio 4
for (let key in info) {
  console.log(info[key]);
};

console.log(proximoExercicio);

//Exercicios 5
let infoSecond = {
  personagem: 'Tio Patinhas',
  origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178', 
  nota: 'O último MacPatinhas',
  recorrente: 'Sim',
};
for (let key in info && infoSecond) {
  console.log(info[key], 'e', infoSecond[key]);
};

console.log(proximoExercicio);

//Exercicio 6
let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};
//"O livro favorito de Julia Pessoa se chama 'O Pior Dia de Todos'".
let tituloLivro = 
console.log('O livro favorito de' , leitor.nome , leitor.sobrenome , 'se chama' , leitor.livrosFavoritos[0].titulo);

console.log(proximoExercicio);

//Exercicio 7
let addArray = {
  titulo: 'Harry Potter e o Prisioneiro de Azkaban',
  autor: 'JK Rowling',
  editora: 'Rocco',
}
leitor.livrosFavoritos.push(addArray)
console.log(leitor.livrosFavoritos);

console.log(proximoExercicio);

//Exercicio 8
console.log(leitor.nome , 'tem' , leitor.livrosFavoritos.length , 'livros favoritos.');