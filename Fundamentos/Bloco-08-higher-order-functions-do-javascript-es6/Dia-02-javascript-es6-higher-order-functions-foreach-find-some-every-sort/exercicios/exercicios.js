const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

console.log(`--------- Exercicio 1 ---------`);
// Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947
const authorBornIn1947 = books.find((book) => book.author.birthYear === 1947).author.name;

console.log(authorBornIn1947);


console.log(`--------- Exercicio 2 ---------`);
// Retorne o nome do livro de menor nome.
function smallerName() {
  let nameBook;
  books.forEach((book) => {
    if (!nameBook || book.name.length < nameBook.length) nameBook = book.name;
  });
  return nameBook;
}

console.log(smallerName());


console.log(`--------- Exercicio 3 ---------`);
// Encontre o primeiro livro cujo nome possui 26 caracteres.
const expectedResult3 = {
  author: {
    birthYear: 1948,
    name: 'George R. R. Martin',
  },
  genre: 'Fantasia',
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  releaseYear: 1991,
};

const getNamedBook = books.find((book) => book.name.length === 26);
console.log(getNamedBook);


console.log(`--------- Exercicio 4 ---------`);
// Ordene os livros por data de lançamento em ordem decrescente
const expectedResult4 = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: { name: 'George R. R. Martin', birthYear: 1948 },
    releaseYear: 1991,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: { name: 'Stephen King', birthYear: 1947 },
    releaseYear: 1986,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: { name: 'Frank Herbert', birthYear: 1920 },
    releaseYear: 1965,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: { name: 'Isaac Asimov', birthYear: 1920 },
    releaseYear: 1951,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: { name: 'H. P. Lovecraft', birthYear: 1890 },
    releaseYear: 1928,
  },
];

const booksOrderedByReleaseYearDesc = books.sort((bookA, bookB) => bookB.releaseYear - bookA.releaseYear);
console.log(booksOrderedByReleaseYearDesc);


console.log(`--------- Exercicio 5 ---------`);
// Faça uma função que retorne true, se todas as pessoas autoras nasceram no século XX, ou false, caso contrário
const expectedResult5 = false;

function everyoneWasBornOnSecXX() {
  return books.every((book) => book.author.birthYear > 1900 && book.author.birthYear <= 2000);
}
console.log(everyoneWasBornOnSecXX());


console.log(`--------- Exercicio 6 ---------`);
// Faça uma função que retorne true, se algum livro foi lançado na década de 80, e false, caso contrário
const expectedResult6 = true;

const someBookWasReleaseOnThe80s = books.some((book) => book.releaseYear >= 1980 && book.releaseYear);
console.log(someBookWasReleaseOnThe80s);


console.log(`--------- Exercicio 7 ---------`);
// Faça uma função que retorne true, caso nenhum author tenha nascido no mesmo ano, e false, caso contrário
const expectedResult7 = false;

function authorUnique() {
  return books.every((book) => 
    books.some((secondBook) => 
      (secondBook.author.name !== book.author.name)
      && (secondBook.author.birthYear === book.author.birthYear)));
}
console.log(authorUnique());
