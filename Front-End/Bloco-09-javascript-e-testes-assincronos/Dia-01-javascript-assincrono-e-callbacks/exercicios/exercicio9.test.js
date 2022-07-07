// Verifique se a importação do arquivo correto está sendo feita.
const { getPokemonDetails } = require("./exercicio8");

describe("A função getPokemonDetails", () => {
  it("retorna erro quando procuramos um pokemon que não existe no banco de dados", (done) => {

    const result = new Error('Não temos esse pokémon para você :(');

    getPokemonDetails((pokemon) =>
    pokemon.name === 'Pikachu',
    (error, message) => {
      expect(error).toEqual(result);
      done();
    });
  });

  it("retorna um pokemon que existe no banco de dados", (done) => {

    const result = 'Olá, seu pokémon é o Bulbasaur, o tipo dele é Grass e a habilidade principal dele é Razor Leaf'

    getPokemonDetails((pokemon) =>
    pokemon.name === 'Bulbasaur',
    (error, message) => {
      expect(message).toEqual(result);
      done();
    });
  });
});
