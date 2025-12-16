# Cumplimiento de Polimorfismo: Comportamiento específico sin condicionales
# ✅ Solución: Cada clase implementa su propio comportamiento

from abc import ABC, abstractmethod
from typing import List


# ✅ Clase base abstracta define la interfaz común
class Animal(ABC):
    def __init__(self, name: str):
        self._name = name

    # ✅ Métodos abstractos - cada hijo DEBE implementarlos
    @abstractmethod
    def make_sound(self) -> None:
        pass

    @abstractmethod
    def feed(self) -> None:
        pass

    @abstractmethod
    def move(self) -> None:
        pass

    # ✅ Método común para todos
    def introduce(self) -> None:
        print(f"\nSoy {self._name}:")


# ✅ Cada clase implementa su comportamiento específico
class Dog(Animal):
    def make_sound(self) -> None:
        print(f"{self._name} dice: ¡Guau guau!")

    def feed(self) -> None:
        print(f"{self._name} está comiendo croquetas")

    def move(self) -> None:
        print(f"{self._name} está corriendo")


class Cat(Animal):
    def make_sound(self) -> None:
        print(f"{self._name} dice: ¡Miau miau!")

    def feed(self) -> None:
        print(f"{self._name} está comiendo pescado")

    def move(self) -> None:
        print(f"{self._name} está saltando")


class Bird(Animal):
    def make_sound(self) -> None:
        print(f"{self._name} dice: ¡Pío pío!")

    def feed(self) -> None:
        print(f"{self._name} está comiendo semillas")

    def move(self) -> None:
        print(f"{self._name} está volando")


# ✅ Procesador sin condicionales - usa polimorfismo
class AnimalProcessor:
    # ✅ Método genérico - funciona con cualquier Animal
    def process_animals(self, animals: List[Animal]) -> None:
        for animal in animals:
            animal.introduce()
            animal.make_sound()  # ✅ Llama al método correcto automáticamente
            animal.feed()  # ✅ Sin if/else
            animal.move()  # ✅ Sin switch


if __name__ == "__main__":
    # ✅ Uso limpio sin condicionales
    print("=== Cumplimiento de Polimorfismo ===")

    dog = Dog("Rex")
    cat = Cat("Luna")
    bird = Bird("Piolín")

    # ✅ Lista de tipo Animal - polimorfismo en acción
    animals: List[Animal] = [dog, cat, bird]

    processor = AnimalProcessor()

    # ✅ Un solo método procesa todos los tipos sin verificar
    processor.process_animals(animals)

    # ✅ Agregar nuevo animal es fácil - solo crear la clase
    class Fish(Animal):
        def make_sound(self) -> None:
            print(f"{self._name} hace burbujas: glu glu")

        def feed(self) -> None:
            print(f"{self._name} está comiendo algas")

        def move(self) -> None:
            print(f"{self._name} está nadando")

    fish = Fish("Nemo")
    print("\n=== Nuevo animal agregado sin modificar código existente ===")

    # ✅ Funciona inmediatamente sin cambiar AnimalProcessor
    processor.process_animals([fish])

    # ✅ Beneficios:
    # - Sin if/else ni switch
    # - Agregar nuevos animales no modifica código existente
    # - Cada clase tiene su lógica encapsulada
    # - Respeta Open/Closed Principle
    # - Fácil de mantener y escalar
