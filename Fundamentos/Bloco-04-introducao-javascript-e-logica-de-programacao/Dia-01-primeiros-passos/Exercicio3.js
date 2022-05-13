const notaCandidato = 70;

if (notaCandidato >= 80 && notaCandidato <= 100) {
  console.log("Parabéns, você foi aprovada(o)!")
} 
else if (notaCandidato < 80 && notaCandidato >= 60) {
  console.log("Você esta na lista de espera");
}
else if (notaCandidato < 60) {
  console.log("Você foi reprovada(o)");
}
else {
  console.log("Digite um valor valido");
}