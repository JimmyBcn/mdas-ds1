# Violación de Herencia: Código duplicado sin reutilización
# ❌ Problema: Lógica repetida en cada clase


class Dog:
    # ❌ Código duplicado en todas las clases de animales
    def __init__(self, name: str):
        self.name = name

    # ❌ Métodos comunes duplicados
    def eat(self) -> str:
        return f"{self.name} está comiendo"

    def sleep(self) -> str:
        return f"{self.name} está durmiendo"

    # Método específico
    def bark(self) -> str:
        return f"{self.name} dice: Guau!"


class Cat:
    # ❌ Mismo código duplicado otra vez
    def __init__(self, name: str):
        self.name = name

    # ❌ Métodos comunes duplicados exactamente igual
    def eat(self) -> str:
        return f"{self.name} está comiendo"

    def sleep(self) -> str:
        return f"{self.name} está durmiendo"

    # Método específico
    def meow(self) -> str:
        return f"{self.name} dice: Miau!"


class Bird:
    # ❌ Y otra vez el mismo código duplicado
    def __init__(self, name: str, age: int, weight: float):
        self.name = name
        self.age = age
        self.weight = weight

    # ❌ Métodos comunes duplicados una tercera vez
    def eat(self) -> None:
        print(f"{self.name} está comiendo")
        self.weight += 0.5

    def sleep(self) -> None:
        print(f"{self.name} está durmiendo")

    def get_info(self) -> str:
        return f"Nombre: {self.name}, Edad: {self.age} años, Peso: {self.weight}kg"

    # Método específico
    def chirp(self) -> None:
        print(f"{self.name} dice: ¡Pío pío!")


if __name__ == "__main__":
    # ❌ Mucho código duplicado y difícil de mantener
    print("=== Violación de Herencia ===")

    dog = Dog("Rex", 5, 25)
    cat = Cat("Luna", 3, 4)
    bird = Bird("Piolín", 1, 0.5)

    print(dog.get_info())
    dog.eat()
    dog.bark()

    print(cat.get_info())
    cat.eat()
    cat.meow()

    print(bird.get_info())
    bird.eat()
    bird.chirp()

    # ❌ Si necesito cambiar eat() o sleep(), debo modificar 3 clases
    # ❌ Si agrego más animales, más duplicación
    # ❌ Propenso a inconsistencias
