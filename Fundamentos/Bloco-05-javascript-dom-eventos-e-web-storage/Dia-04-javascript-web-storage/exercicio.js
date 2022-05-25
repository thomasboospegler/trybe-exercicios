window.onload = () => {
  const inputBack = document.getElementById('background-color');
  const inputColor = document.getElementById('colorText');
  const inputSize = document.getElementById('font-size');
  const inputSpace = document.getElementById('space-lines');
  const inputFamily = document.getElementById('font-family');
  const body = document.getElementsByTagName('body');
  const main = document.getElementsByTagName('main');

  body[0].style.backgroundColor = localStorage.getItem('backgroundColor');
  body[0].style.color = localStorage.getItem('colorText');
  main[0].style.fontSize = localStorage.getItem('font-size');
  main[0].style.lineHeight = localStorage.getItem('space-lines');
  main[0].style.fontFamily = localStorage.getItem('font-family');

  inputBack.addEventListener('input', function(color) {
    let colorStorage  = color.target.value;
    body[0].style.backgroundColor = color.target.value;
    localStorage.setItem('backgroundColor', colorStorage);
  })
  
  inputColor.addEventListener('input', function(color) {
    let textColorStorage = color.target.value;
    body[0].style.color = color.target.value;
    localStorage.setItem('colorText', textColorStorage);
  })
  
  inputSize.addEventListener('input', function(size) {
    let fontSizeStorage = size.target.value + 'px';
    main[0].style.fontSize = size.target.value + 'px';
    localStorage.setItem('font-size', fontSizeStorage);
  })
  
  inputSpace.addEventListener('input', function(size) {
    let lineSizeStorage = size.target.value;
    main[0].style.lineHeight = size.target.value;
    localStorage.setItem('space-lines', lineSizeStorage);
  })
  
  inputFamily.addEventListener('input', function(font) {
    let fontStorage = font.target.value;
    main[0].style.fontFamily = font.target.value;
    localStorage.setItem('font-family', fontStorage);
  })
}