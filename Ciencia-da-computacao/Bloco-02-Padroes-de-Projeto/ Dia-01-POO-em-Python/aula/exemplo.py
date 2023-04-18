class Exemplo:
    def __init__(self):
        print("Inicializando Exemplo")
        self.__privado = "Eu sou privado"

    def __new__(cls, *args, **kwargs):
        print("Criando uma nova instância de Exemplo")
        instance = super().__new__(cls)
        return instance

    def __metodo_privado(self):
        print("Este é um método privado")

    def metodo_publico(self):
        print("Este é um método público")
        self.__metodo_privado()


exemplo = Exemplo()
exemplo.__metodo_privado()
# Erro: AttributeError: 'Exemplo' object has no attribute '__metodo_privado'


# --------------------------------------------


class Liquidificador:
    def __init__(self, cor, potencia, tensao, preco):
        self.preco = preco
        self.cor = cor
        self._potencia = potencia
        self._tensao = tensao
        self.__ligado = False
        self.__velocidade = 0
        self.__velocidade_maxima = 3
        self.__corrente_atual_no_motor = 0

    def ligar(self, velocidade):
        if velocidade > self.__velocidade_maxima or velocidade < 0:
            raise ValueError(
                f"Velocidade deve estar entre 0 e {self.__velocidade_maxima}"
            )

        self.__velocidade = velocidade
        self.__corrente_atual_no_motor = (
            (self._potencia / self._tensao) / self.__velocidade_maxima
        ) * velocidade
        self.__ligado = True

    def desligar(self):
        self.__ligado = False
        self.__velocidade = 0

    def esta_ligado(self):
        return self.__ligado


meu_liquidificador = Liquidificador("Azul", 200, 127, 200)
seu_liquidificador = Liquidificador(
    cor="Vermelho", potencia=250, tensao=220, preco=100
)

liquidificador_vermelho = Liquidificador("Vermelho", 250, 220, 100)
liquidificador_vermelho.ligar(1)
print("Está ligado?", liquidificador_vermelho.esta_ligado())
# Está ligado? True
liquidificador_vermelho.desligar()
print("Está ligado?", liquidificador_vermelho.esta_ligado())
# Está ligado? False


# ------------------------------------


class Liquidificador:
    def get_cor(self):
        return self.__cor.upper()

    def set_cor(self, nova_cor):
        if nova_cor.lower() == "turquesa":
            raise ValueError("Não existe liquidificador turquesa")

        self.__cor = nova_cor

    def __init__(self, cor, potencia, tensao, preco):
        # Observe que usamos o setter para já validarmos o primeiro valor
        self.set_cor(cor)

        # Demais variáveis omitidas para este exemplo


liquidificador = Liquidificador("Azul", "110", "127", "200")

# print(f"A cor atual é {liquidificador.__cor}")
# AttributeError: 'Liquidificador' object has no attribute '__cor'

print(f"A cor atual é {liquidificador.get_cor()}")
# A cor atual é AZUL
liquidificador.set_cor("Preto")
print(f"Após pintarmos, a nova cor é {liquidificador.get_cor()}")
# Após pintarmos, a nova cor é PRETO


# ------------------------------------


class Liquidificador:
    # Getter
    @property
    def cor(self):
        return self.__cor.upper()

    @cor.setter  # Repare que é @cor.setter, e não @property.setter
    def cor(self, nova_cor):
        if nova_cor.lower() == "turquesa":
            raise ValueError("Não existe liquidificador turquesa")

        self.__cor = nova_cor

    def __init__(self, cor, potencia, tensao, preco):
        # Observe que usamos o setter para já validarmos o primeiro valor:
        # usamos self.cor, que chama o setter, e não self.__cor que manipula
        # o atributo diretamente
        self.cor = cor

        # Demais variáveis omitidas para este exemplo


liquidificador = Liquidificador("Rosa", "110", "127", "200")

print(liquidificador.cor)  # ROSA
liquidificador.cor = "Vermelho"
print(liquidificador.cor)  # VERMELHO


#  ------------------------


class Pessoa:
    def __init__(self, nome, saldo_na_conta):
        self.nome = nome
        self.saldo_na_conta = saldo_na_conta
        self.liquidificador = None

    def comprar_liquidificador(self, liquidificador):
        if liquidificador.preco <= self.saldo_na_conta:
            self.saldo_na_conta -= liquidificador.preco
            self.liquidificador = liquidificador


pessoa_cozinheira = Pessoa("Jacquin", 1000)
pessoa_cozinheira.comprar_liquidificador(liquidificador_vermelho)

print(pessoa_cozinheira)
# retorno: Pessoa object at 0x7f53bbe1b580>


class Pessoa:
    # ....
    def __str__(self):
        return f"""
        {self.nome} - possui {self.saldo_na_conta} reais em sua conta.
        """


print(pessoa_cozinheira)
# retorno: Jacquin - possui 800 reais em sua conta.


#  --------------------------


class Eletrodomestico:
    def __init__(self, cor, potencia, tensao, preco):
        self.preco = preco
        self.cor = cor
        self._potencia = potencia
        self._tensao = tensao
        self.__ligado = False
        self.__velocidade = 0
        self.__velocidade_maxima = 3
        self.__corrente_atual_no_motor = 0

    def ligar(self, velocidade):
        if velocidade > self.__velocidade_maxima or velocidade < 0:
            raise ValueError(
                f"Velocidade deve estar entre 0 e {self.__velocidade_maxima}"
            )

        self.__velocidade = velocidade
        self.__corrente_atual_no_motor = (
            (self._potencia / self._tensao) / self.__velocidade_maxima
        ) * velocidade
        self.__ligado = True

    def desligar(self):
        self.__ligado = False
        self.__velocidade = 0

    def esta_ligado(self):
        return self.__ligado

    @property
    def cor(self):
        return self.__cor.upper()

    @cor.setter
    def cor(self, nova_cor):
        self.__cor = nova_cor


class Liquidificador(Eletrodomestico):
    pass


class A:
    def faz_algo(self, valor):
        print(valor)


class B(A):
    def faz_outra_coisa(self):
        print("Vou printar o valor pelo método criado em A")
        # Chama o método da classe A, que neste caso é a superclasse, passando
        # o `self` explicitamente
        A.faz_algo(self, valor=1)


b = B()
b.faz_outra_coisa()
# Vou printar o valor pelo método criado em A
# 1


class C:  # C
    def x(self):  # método de exemplo
        print(1)


class B(C):  # B herda de C
    pass


class A(B):  # A herda de B
    pass


a = A()
a.x()
# 1


class A(B, C):
    pass


#  --------------------------------


class Pessoa:
    def __init__(self, nome, idade=None, saldo_na_conta=None):
        self.idade = idade
        self.nome = nome
        self.saldo_na_conta = saldo_na_conta
        self.brinquedos = []


pessoa_1 = Pessoa("Marcelo", 22, 700)
pessoa_2 = Pessoa("Matheus")
pessoa_3 = Pessoa("Maria", 33)
pessoa_4 = Pessoa("Márcia", saldo_na_conta=100)


#  --------------------------------


class Liquidificador(Eletrodomestico):
    def esta_ligado(self):
        return False


class Liquidificador(Eletrodomestico):
    def esta_ligado(self):
        return "Sim" if super().esta_ligado() else "Não"


#  --------------------------------


class Liquidificador(Eletrodomestico):
    pass


class Ventilador(Eletrodomestico):
    def __init__(self, cor, potencia, tensao, preco, quantidade_de_portas=1):
        # Chamada ao construtor da superclasse
        super().__init__(cor, potencia, tensao, preco)

        # Faz outras coisas específicas dessa subclasse
        self.quantidade_de_portas = quantidade_de_portas


class Pessoa:
    def __init__(self, nome, saldo_na_conta):
        self.nome = nome
        self.saldo_na_conta = saldo_na_conta
        self.eletrodomesticos = []

    # Permite a aquisição de qualquer eletrodoméstico
    def comprar_eletrodomestico(self, eletrodomestico):
        if eletrodomestico.preco <= self.saldo_na_conta:
            self.saldo_na_conta -= eletrodomestico.preco
            self.eletrodomestico.append(eletrodomestico)


#  -----------------------------


from abc import ABC


class Database(ABC):
    pass


#  -----------------------------


from abc import ABC, abstractmethod


class Database(ABC):
    @abstractmethod
    def execute(self, query):
        ...


class MongoDatabase(Database):
    def execute(self, query):
        print(f"executando query '{query}' no mongo")


class MySQLDatabase(Database):
    def execute(self, query):
        print(f"executando query '{query}' no mysql")


#  -----------------------------


def minha_func(database):  # repare que o d é minúsculo
    if isinstance(database, Database):
        database.execute("query qualquer")
    else:
        print(f"{database} não é um Database válido")


db1 = MongoDatabase()
db2 = MySQLDatabase()

minha_func(db1)
minha_func(db2)
minha_func("db_inválido")

# executando query 'query qualquer' no mongo
# executando query 'query qualquer' no mysql
# db_inválido não é um Database válido


# repare que coloco o tipo do parâmetro, ou seja, `database` é do tipo
# `Database`


def minha_func(database: Database):
    database.execute("query qualquer")


#  ------------------------------------------------


class Classe:
    @staticmethod
    def método_estático():
        print("Olá")


objeto = Classe()
Classe.método_estático()
objeto.método_estático()
# Saída:
# Olá
# Olá


# -------------------------------------------------


class Classe:
    atributo_da_classe = 1


objeto_1 = Classe()
objeto_2 = Classe()

print(Classe.atributo_da_classe)  # Saída: 1
print(objeto_1.atributo_da_classe)  # Saída: 1
print(objeto_2.atributo_da_classe)  # Saída: 1

Classe.atributo_da_classe = 2
print(Classe.atributo_da_classe)  # Saída: 2
print(objeto_1.atributo_da_classe)  # Saída: 2
print(objeto_2.atributo_da_classe)  # Saída: 2

objeto_1.atributo_da_classe = 3
print(Classe.atributo_da_classe)  # Saída: 2
print(objeto_1.atributo_da_classe)  # Saída: 3
print(objeto_2.atributo_da_classe)  # Saída: 2


# --------------------------------------------------


class Classe:
    _atributo_da_classe = 1

    @classmethod
    def seta_atributo_da_classe(cls, valor):
        cls._atributo_da_classe = valor

    @classmethod
    def retorna_atributo_da_classe(cls):
        return cls._atributo_da_classe


objeto_1 = Classe()
objeto_2 = Classe()

print(Classe.retorna_atributo_da_classe())  # Saída: 1
print(objeto_1.retorna_atributo_da_classe())  # Saída: 1
print(objeto_2.retorna_atributo_da_classe())  # Saída: 1

Classe.seta_atributo_da_classe(2)
print(Classe.retorna_atributo_da_classe())  # Saída: 2
print(objeto_1.retorna_atributo_da_classe())  # Saída: 2
print(objeto_2.retorna_atributo_da_classe())  # Saída: 2

objeto_1.seta_atributo_da_classe(3)
print(Classe.retorna_atributo_da_classe())  # Saída: 3
print(objeto_1.retorna_atributo_da_classe())  # Saída: 3
print(objeto_2.retorna_atributo_da_classe())  # Saída: 3


# --------------------------------------------


# Arquivo main.py
class Classe:
    atributo_da_classe = 1

    def __init__(self):
        self.atributo_do_objeto = 2

    def método_normal(self):
        print(self)

    @classmethod
    def método_de_classe(cls):
        print(cls)

    @staticmethod
    def método_estático():
        print("Olá")


objeto = Classe()

# Acessando atributo do objeto
print(objeto.atributo_do_objeto)
# Não dá pra chamar usando a classe (Classe.atributo_do_objeto dá erro)
# Saída:
# 2

# Acessando atributo da classe
print(Classe.atributo_da_classe)
print(objeto.atributo_da_classe)
# Saída:
# 1
# 1

# Chamando o método normal
Classe.método_normal(objeto)  # Ou Classe.método_normal(self=objeto)
objeto.método_normal()  # Açúcar sintático para a forma da linha acima
# Saída:
# <__main__.Classe object at 0x7f2304ab3d30>
# <__main__.Classe object at 0x7f2304ab3d30>

# Chamando o método estático
Classe.método_estático()
objeto.método_estático()
# Saída:
# Olá
# Olá

# Chamando o método de classe
Classe.método_de_classe()  # Observe que não precisa passar nenhum parâmetro
objeto.método_de_classe()
# Saída:
# <class '__main__.Classe'>
# <class '__main__.Classe'>
