import json


# def retrieve_pokemons_by_type(type, reader):
#     # lê o conteudo de reader e o transforma de json
#     # para dicionário
#     pokemons = json.load(reader)["results"]
#     # filtra somente os pokemons do tipo escolhido
#     pokemons_by_type = [
#         pokemon for pokemon in pokemons if type in pokemon["type"]
#     ]
#     return pokemons_by_type


def retrieve_pokemons_by_type(type, filepath):
    with open(filepath) as file:
        pokemons = json.load(file)["results"]
        pokemons_by_type = [
            pokemon for pokemon in pokemons if type in pokemon["type"]
        ]
        return pokemons_by_type
