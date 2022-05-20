// 1 - Acesse o elemento elementoOndeVoceEsta.
console.log(document.getElementById('elementoOndeVoceEsta'));

// 2 - Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
let pai = document.getElementById('elementoOndeVoceEsta').parentNode;
pai.style.color = 'red';
console.log(document.getElementById('elementoOndeVoceEsta').parentNode);

// 3 - Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
let primeiroFilhoDoFilho = document.getElementById('elementoOndeVoceEsta').firstElementChild
primeiroFilhoDoFilho.innerText = 'Eu sou estudante da Trybe!'
console.log(document.getElementById('elementoOndeVoceEsta').firstElementChild);

// 4 - Acesse o primeiroFilho a partir de pai.
console.log(document.getElementById('pai').firstElementChild);

// 5 - Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
console.log(document.getElementById('elementoOndeVoceEsta').parentNode.firstElementChild);

// 6 - Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.
console.log(document.getElementById('elementoOndeVoceEsta').firstChild);

// 7 - Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.
console.log(document.getElementById('elementoOndeVoceEsta').parentNode.children[2]);

// 8 - Agora acesse o terceiroFilho a partir de pai.
console.log(document.getElementById('pai').children[2]);

// AULA 2

// 1 - Crie um irmão para elementoOndeVoceEsta.
document.getElementById('pai').appendChild(document.createElement('section'));

// 2 - Crie um filho para elementoOndeVoceEsta.
document.getElementById('elementoOndeVoceEsta').appendChild(document.createElement('section'));

// 3 - Crie um filho para primeiroFilhoDoFilho.
document.getElementById('elementoOndeVoceEsta').firstElementChild.appendChild(document.createElement('section'));
console.log(document.getElementById('pai'));

// 4 - A partir desse filho criado, acesse terceiroFilho.
let section4 = document.getElementById('elementoOndeVoceEsta').firstElementChild.firstElementChild;
console.log(section4.parentElement.parentElement.parentElement.children[2]);