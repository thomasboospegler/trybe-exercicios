//Crie uma página que contenha:
//Um botão ao qual será associado um event listener;
//Uma variável clickCount no arquivo JavaScript que acumule o número de clicks no botão;
//Um campo no HTML que vá atualizando a quantidade de clicks no botão conforme a variável clickCount é atualizada.

const button = document.getElementById('button');
const counter = document.getElementById('counter');
let contador = 0;

button.addEventListener('click', () => {
  contador = contador + 1;
  counter.innerHTML = contador;
});