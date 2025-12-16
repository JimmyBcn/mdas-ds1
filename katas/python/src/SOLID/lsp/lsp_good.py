# Cumplimiento del LSP: Las subclases pueden sustituir a la clase base sin problemas
# ✅ Solución: Separar jerarquías según capacidades reales

from abc import ABC, abstractmethod


# ✅ Clase base con comportamiento común a TODAS las aves
class Animal(ABC):
    def __init__(self, name: str):
        self.name = name

    # ✅ Comportamiento que TODAS las aves comparten
    def eat(self) -> str:
        return f"{self.name} está comiendo"

    def sleep(self) -> str:
        return f"{self.name} está durmiendo"


# ✅ Clase para aves que SÍ pueden volar
class FlyingBird(Animal):
    # ✅ Ahora fly() solo está en aves que pueden volar
    def fly(self) -> str:
        return f"{self.name} está volando"


# ✅ Clase para aves que NO pueden volar
class FlightlessBird(Animal):
    # ✅ Comportamiento específico de aves que no vuelan
    def walk(self) -> str:
        return f"{self.name} está caminando"


# ✅ Eagle es un ave voladora
class Eagle(FlyingBird):
    def fly(self) -> str:
        return f"{self.name} vuela alto en el cielo"


# ✅ Duck es un ave voladora
class Duck(FlyingBird):
    def fly(self) -> str:
        return f"{self.name} vuela sobre el lago"

    def swim(self) -> str:
        return f"{self.name} está nadando"


# ✅ Penguin es un ave que no vuela - hereda de FlightlessBird
class Penguin(FlightlessBird):
    def swim(self) -> str:
        return f"{self.name} está nadando"

    def walk(self) -> str:
        return f"{self.name} está caminando sobre el hielo"


# ✅ Funciones que trabajan con las jerarquías correctas
def make_flying_bird_fly(bird: FlyingBird) -> str:
    return bird.fly()  # ✅ Siempre funciona - todas pueden volar


def feed_animal(animal: Animal) -> str:
    return animal.eat()  # ✅ Funciona con TODAS las aves


# Uso que demuestra el cumplimiento
if __name__ == "__main__":
    print("=== Cumplimiento del LSP ===")

    eagle = Eagle("Águila Real")
    duck = Duck("Pato Silvestre")
    penguin = Penguin("Pingüino Emperador")

    # ✅ Funciones tipadas correctamente
    print(make_flying_bird_fly(eagle))  # ✅ Funciona
    print(make_flying_bird_fly(duck))  # ✅ Funciona
    # make_flying_bird_fly(penguin)  # ✅ Error de tipo - ¡no compila!

    # ✅ Todas las aves pueden comer
    all_animals = [eagle, duck, penguin]
    for animal in all_animals:
        print(feed_animal(animal))  # ✅ Funciona para todas

    # ✅ Aves voladoras pueden volar
    flying_birds = [eagle, duck]
    for bird in flying_birds:
        print(bird.fly())  # ✅ Seguro - todas vuelan

    # ✅ Penguin tiene sus propios métodos
    print(penguin.swim())
    print(penguin.walk())

# ✅ Beneficios:
# 1. Cada subclase puede sustituir a su clase base correctamente
# 2. No hay excepciones ni comportamientos inesperados
# 3. El sistema de tipos ayuda a prevenir errores
# 4. Cumple perfectamente el Liskov Substitution Principle
