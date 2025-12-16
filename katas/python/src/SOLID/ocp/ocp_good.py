# Cumplimiento del OCP: Abierto para extensión, cerrado para modificación
# ✅ Solución: Usar interfaces para que se puedan agregar nuevos animales sin cambiar el código existente

from abc import ABC, abstractmethod
from typing import List


class Communicable(ABC):
    @abstractmethod
    def communicate(self) -> str:
        pass


class Dog(Communicable):
    def communicate(self) -> str:
        return "woof woof"


class Cat(Communicable):
    def communicate(self) -> str:
        return "meow meow"


# ✅ Esta clase nunca necesita ser modificada al agregar nuevos animales
class Communication:
    def communicate(self, animal: Communicable) -> str:
        return animal.communicate()

    def communicate_multiple(self, animals: List[Communicable]) -> List[str]:
        return [animal.communicate() for animal in animals]


# ✅ Agregar nuevos animales sin modificar el código existente
class Fox(Communicable):
    def communicate(self) -> str:
        return "ring-ding-ding-ding-dingeringeding"


class Cow(Communicable):
    def communicate(self) -> str:
        return "moo moo"


class Duck(Communicable):
    def communicate(self) -> str:
        return "quack quack"


# Uso - ¡agregar Fox, Cow, Duck NO requirió cambios en las clases existentes!
if __name__ == "__main__":
    communication = Communication()
    dog = Dog()
    cat = Cat()
    fox = Fox()
    cow = Cow()
    duck = Duck()

    print(communication.communicate(dog))  # "woof woof"
    print(communication.communicate(cat))  # "meow meow"
    # "ring-ding-ding-ding-dingeringeding"
    print(communication.communicate(fox))
    print(communication.communicate(cow))  # "moo moo"
    print(communication.communicate(duck))  # "quack quack"

    all_animals = [dog, cat, fox, cow, duck]
    print(communication.communicate_multiple(all_animals))
