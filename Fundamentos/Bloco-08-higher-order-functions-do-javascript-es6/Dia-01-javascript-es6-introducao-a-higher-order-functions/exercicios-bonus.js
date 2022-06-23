const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

// Função para registrar o ataque do dragão
const dragonAttack = () => {
  // Math.floor(Math.random() * ((dragon.strength + 1) - 15)) + 15;
  const min = 15;
  const max = dragon.strength;
  const dragonDamage = Math.floor(Math.random() * (max - min + 1) + min);
  return dragonDamage;
}

// Função para registrar o ataque do guerreiro
const warriorAttack = () => {
  // Math.floor(Math.random() * (((warrior.strength * warrior.weaponDmg) + 1) - warrior.strength) + warrior.strength);
  const min = warrior.strength;
  const max = warrior.strength * warrior.weaponDmg;
  const warriorDemage = Math.floor(Math.random() * ((max + 1) - min) + min);
  return warriorDemage;
}

// Função para registrar o ataque do mago
const mageAttack = () => {
  const min = mage.intelligence;
  const max = mage.intelligence * 2;
  const mageStats = {
    damage : 'Não possui mana suficiente',
    manaSpent: 0
  };
  const mageDamage = Math.floor(Math.random() * (max - min + 1) + min)
  if (mage.mana > 15) {
    mageStats.manaSpent = 15;
    mageStats.damage = mageDamage;
  }
  return mageStats
}

// Função que checa se o player passado como parametro esta morto, se sim adicioa o texto na key dos pontos de vida
const checkHealth = (player) => {
  player.healthPoints > 0 ? true : player.healthPoints = '** DEAD **';
  // if (player.healthPoints < 0) player.healthPoints = '** DEAD **';
}

// Objeto com todos as ações de todos os players em 1 turno
const gameActions = {
  warriorTurn: (warriorAttack) => {
    const warriorTurnDemage = warriorAttack();
    warrior.damage = warriorTurnDemage;
    dragon.healthPoints -= warriorTurnDemage;
    checkHealth(dragon);
  },
  mageTurn: (mageAttack) => {
    const mageTurnDemage = mageAttack();
    mage.damage = mageTurnDemage.damage;
    mage.mana -= mageTurnDemage.manaSpent;
    dragon.healthPoints -= mageTurnDemage.damage;
    checkHealth(dragon);
  },
  dragonTurn: (dragonAttack) => {
    const dragonTurnDemage = dragonAttack();
    dragon.damage = dragonTurnDemage;
    mage.healthPoints -= dragonTurnDemage;
    warrior.healthPoints -= dragonTurnDemage;
    checkHealth(warrior);
    checkHealth(mage);
  },
  resultsTurn: () => battleMembers,
};

console.log('---------- Status Inicial ----------');
console.log(battleMembers);

// Função que realiza os turnos 
const turns = () => {
  console.log('---------- Turno 1 ----------');
  gameActions.warriorTurn(warriorAttack);
  gameActions.mageTurn(mageAttack);
  gameActions.dragonTurn(dragonAttack);
  console.log(gameActions.resultsTurn());
  if (warrior.healthPoints === '** DEAD **') return console.log(`O Warrior morreu!!`);
  if (mage.healthPoints === '** DEAD **') return console.log(`O Mage morreu!!`);
  if (dragon.healthPoints === '** DEAD **') return console.log(`O Dragon morreu!!`);

  console.log('---------- Turno 2 ----------');
  gameActions.warriorTurn(warriorAttack);
  gameActions.mageTurn(mageAttack);
  gameActions.dragonTurn(dragonAttack);
  console.log(gameActions.resultsTurn());
  if (warrior.healthPoints === '** DEAD **') return console.log(`O Warrior morreu!!`);
  if (mage.healthPoints === '** DEAD **') return console.log(`O Mage morreu!!`);
  if (dragon.healthPoints === '** DEAD **') return console.log(`O Dragon morreu!!`);

  console.log('---------- Turno 3 ----------');
  gameActions.warriorTurn(warriorAttack);
  gameActions.mageTurn(mageAttack);
  gameActions.dragonTurn(dragonAttack);
  console.log(gameActions.resultsTurn());
  if (warrior.healthPoints === '** DEAD **') return console.log(`O Warrior morreu!!`);
  if (mage.healthPoints === '** DEAD **') return console.log(`O Mage morreu!!`);
  if (dragon.healthPoints === '** DEAD **') return console.log(`O Dragon morreu!!`);

  console.log('---------- Turno 4 ----------');
  gameActions.warriorTurn(warriorAttack);
  gameActions.mageTurn(mageAttack);
  gameActions.dragonTurn(dragonAttack);
  console.log(gameActions.resultsTurn());
  if (warrior.healthPoints === '** DEAD **') return console.log(`O Warrior morreu!!`);
  if (mage.healthPoints === '** DEAD **') return console.log(`O Mage morreu!!`);
  if (dragon.healthPoints === '** DEAD **') return console.log(`O Dragon morreu!!`);

  console.log('---------- Turno 5 ----------');
  gameActions.warriorTurn(warriorAttack);
  gameActions.mageTurn(mageAttack);
  gameActions.dragonTurn(dragonAttack);
  console.log(gameActions.resultsTurn());
  if (warrior.healthPoints === '** DEAD **') return console.log(`O Warrior morreu!!`);
  if (mage.healthPoints === '** DEAD **') return console.log(`O Mage morreu!!`);
  if (dragon.healthPoints === '** DEAD **') return console.log(`O Dragon morreu!!`);
};
turns();

// console.log('---------- Turno 1 ----------');
// gameActions.warriorTurn(warriorAttack);
// gameActions.mageTurn(mageAttack);
// gameActions.dragonTurn(dragonAttack);
// console.log(gameActions.resultsTurn());

// console.log('---------- Turno 2 ----------');
// gameActions.warriorTurn(warriorAttack);
// gameActions.mageTurn(mageAttack);
// gameActions.dragonTurn(dragonAttack);
// console.log(gameActions.resultsTurn());

// console.log('---------- Turno 3 ----------');
// gameActions.warriorTurn(warriorAttack);
// gameActions.mageTurn(mageAttack);
// gameActions.dragonTurn(dragonAttack);
// console.log(gameActions.resultsTurn());

// console.log('---------- Turno 4 ----------');
// gameActions.warriorTurn(warriorAttack);
// gameActions.mageTurn(mageAttack);
// gameActions.dragonTurn(dragonAttack);
// console.log(gameActions.resultsTurn());
