document.getElementById('text-1').innerText = 'Projetos Trybe';
document.getElementById('text-2').innerText = 'Viajem para o Brasil';
document.getElementById('text-3').innerText = 'Provas Faculdade';
document.getElementById('text-4').innerText = 'Conversar com a Sofia';

let emergency = document.getElementsByClassName('emergency-tasks-text');
for (let i in emergency) {
  emergency[i].innerText += ' - Feito';
}
