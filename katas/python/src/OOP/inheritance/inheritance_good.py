# Cumplimiento de Herencia: Reutilización mediante clase base
# ✅ Solución: Código común en clase padre, específico en hijos

from typing import List


# ✅ Clase base con comportamiento común
class Animal:
    # ✅ Propiedades comunes protegidas (accesibles en hijos)
    def __init__(self, name: str):
        self._name = name

    # ✅ Métodos comunes definidos una sola vez
    def eat(self) -> str:
        return f"{self._name} está comiendo"

    def sleep(self) -> str:
        return f"{self._name} está durmiendo"


# ✅ Dog hereda de Animal - sin duplicación
class Dog(Animal):
    # ✅ Solo comportamiento específico de perros
    def bark(self) -> str:
        return f"{self._name} dice: Guau!"


# ✅ Cat hereda de Animal - sin duplicación
class Cat(Animal):
    # ✅ Solo comportamiento específico de gatos
    def meow(self) -> str:
        return f"{self._name} dice: Miau!"


if __name__ == "__main__":
    # ✅ Código reutilizado y fácil de mantener
    print("=== Cumplimiento de Herencia ===")

    dog = Dog("Rex", 5, 25)
    cat = Cat("Luna", 3, 4)
    bird = Bird("Piolín", 1, 0.5)

    # ✅ Métodos heredados funcionan igual
    print(dog.get_info())
    dog.eat()
    dog.make_sound()
    dog.fetch()

    print(cat.get_info())
    cat.eat()
    cat.make_sound()
    cat.purr()

    print(bird.get_info())
    bird.eat()
    bird.make_sound()
    bird.fly()

    # ✅ Si necesito cambiar eat() o sleep(), cambio una sola vez en Animal
    # ✅ Nuevos animales heredan automáticamente el comportamiento común
    # ✅ Consistencia garantizada

    # ✅ Bonus: Puedo trabajar con tipo Animal
    animals: List[Animal] = [dog, cat, bird]
    print("\n=== Todos los animales ===")
    for animal in animals:
        animal.eat()  # ✅ Funciona para todos
        animal.make_sound()  # ✅ Cada uno con su sonido específico
