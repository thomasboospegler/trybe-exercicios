let estadoPessoa;

switch (estadoPessoa){
  case 'aprovada':
    console.log('Parabéns, você foi aprovada(o)!');
    break;

  case 'lista':
    console.log('Você esta na lista de espera');
    break;

  case 'reprovada':
    console.log('Você foi reprovada(o)');
    break;

  default:
    console.log('Digite um valor valido');
}