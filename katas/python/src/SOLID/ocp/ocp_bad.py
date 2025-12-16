# Violación del OCP: Debemos modificar el código existente para agregar nuevos animales
# ❌ Problema: Para agregar un nuevo animal, debemos modificar la clase Communication


class Dog:
    def make_sound(self) -> str:
        return "woof woof"


class Cat:
    def make_sound(self) -> str:
        return "meow meow"


class Fox:
    def make_sound(self) -> str:
        return "ring-ding-ding-ding-dingeringeding"


# ❌ Esta clase debe modificarse cada vez que agregamos un nuevo animal
class Communication:
    def communicate(self, animal) -> str:
        # ❌ Cadena de if/else que debe modificarse para cada nuevo animal
        if isinstance(animal, Dog):
            return animal.make_sound()
        elif isinstance(animal, Cat):
            return animal.make_sound()
        elif isinstance(animal, Fox):
            return animal.make_sound()
        else:
            raise ValueError("Animal desconocido")


# Uso
if __name__ == "__main__":
    communication = Communication()
    dog = Dog()
    cat = Cat()
    fox = Fox()

    print(communication.communicate(dog))  # "woof woof"
    print(communication.communicate(cat))  # "meow meow"
    # "ring-ding-ding-ding-dingeringeding"
    print(communication.communicate(fox))

    # ❌ Problema: Para agregar Cow, debemos:
    # 1. Crear la clase Cow
    # 2. Modificar el método communicate() ❌
    # 3. Agregar una nueva rama if/else ❌
