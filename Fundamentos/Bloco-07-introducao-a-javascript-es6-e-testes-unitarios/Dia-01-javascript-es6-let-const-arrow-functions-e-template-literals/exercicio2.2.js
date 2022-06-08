//Crie uma função que receba uma frase e retorne qual a maior palavra.
//Exemplo:
//longestWord('Antônio foi no banheiro e não sabemos o que aconteceu') // retorna 'aconteceu'

const maiorPalavra = (frase) => {
  let fraseDividida = frase.split(' ');
  let result = '';
  for (let i in fraseDividida) {
    if (fraseDividida[i].length > result.length) {
      result = fraseDividida[i];
    }
  }
  return `A maior palavra é ${result}`;
}

console.log(maiorPalavra('Antônio foi no banheiro e não sabemos o que aconteceu'));