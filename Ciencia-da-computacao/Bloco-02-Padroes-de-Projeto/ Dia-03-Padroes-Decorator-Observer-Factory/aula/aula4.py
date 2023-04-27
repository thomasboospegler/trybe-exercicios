# Middle Man

class Player:
    # ...

    def tournaments(self, game_id):
        """Retorna os torneios de um jogo da pessoa"""
        return Game(game_id).tournaments()


class Game:
    """Classe que só possui o método de filtrar os torneios"""
    def __init__(self, game_id):
        self.game_id = game_id

    def tournaments(self):
        return Tournament.query.filter(game_id=self.game_id).all()


class Tournament:
    """Classe contendo vários métodos e que herda de algum banco de dados"""


# Código cliente
player = Player(id=1)
print(player.tournaments(1))


# Soluções
class Player:
    # ...

    def tournaments(self, game_id):
        """Retorna os torneios de um jogo da pessoa"""
        return Tournament.query.filter(game_id=game_id, user_id=self.id).all()


class Tournament:
    """Classe contendo vários métodos e que herda de algum banco de dados"""


# Código cliente
player = Player(id=1)
print(player.tournaments(1))


# ====================================================================================================

# Data Clumps

class User:
    def __init__(self, name, age, street, number, district):
        self.name = name
        self.age = age
        self.address_street = street
        self.address_number = number
        self.address_district = district

    # ...


# Em algum outro lugar do código
class Company:
    def __init__(self, name, street, number, district):
        self.name = name
        self.address_street = street
        self.address_number = number
        self.address_district = district

    # ...


# Soluções
class Address:
    def __init__(self, street, number, district):
        self.street = street
        self.number = number
        self.district = district


class User:
    def __init__(self, name, age, address):
        self.name = name
        self.age = age
        self.address = address


class Company:
    def __init__(self, name, address):
        self.name = name
        self.address = address


# ====================================================================================================

# Classes de dados

from dataclasses import dataclass


@dataclass
class Address:
    # Podemos colocar um valor padrão
    street = "Street"
    number = 0
    # Ou especificar o tipo do campo com anotações de tipo
    district: str


address = Address(district="District")

print(address.street, address.number, address.district)
# Street 0 District


@dataclass
class Address:
    street: str
    number: int
    district: str


# A ordem de parâmetros pro construtor é a mesma da definição dos atributos
address = Address("Street", 0, "District")


# ====================================================================================================

# Tuplas nomeadas


address1 = ("Street", 0, "District")
address2 = ("Street2", 1, "District2")
print(address1[0], address1[1], address1[2])
# Street 0 District


from collections import namedtuple

# Definimos a tupla nomeada passando o nome dela e uma lista com os nomes dos
# atributos
Address = namedtuple("Address", ["street", "number", "district"])

# Criamos "instâncias" da tupla tal como criamos instâncias de classes normais
address1 = Address("Street", 0, "District")
# Podemos nomear os parâmetros para passá-los fora de ordem
address2 = Address("Street2", district="District2", number=1)

# Podemos acessar utilizando a sintaxe `objeto.atributo`
print(address1.street, address1.number, address1.district)
# Street 0 District

# Observe que o acesso por índice numérico ainda funciona, pois são tuplas
print(address1[0], address1[1], address1[2])
# Street 0 District

address1.district = "Aloha" # ! AttributeError, pois tuplas são imutáveis
