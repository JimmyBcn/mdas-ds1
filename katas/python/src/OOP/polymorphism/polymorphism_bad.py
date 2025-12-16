# Violación de Polimorfismo: Lógica condicional para tipos
# ❌ Problema: Usar if/else o switch para diferentes tipos

from typing import List, Literal, TypedDict


# ❌ Sin herencia ni polimorfismo - solo diccionarios
class DogData(TypedDict):
    type: Literal["dog"]
    name: str


class CatData(TypedDict):
    type: Literal["cat"]
    name: str


class BirdData(TypedDict):
    type: Literal["bird"]
    name: str


AnimalData = DogData | CatData | BirdData


# ❌ Clase que necesita conocer todos los tipos específicos
class AnimalProcessor:
    # ❌ Método lleno de condicionales para cada tipo
    def make_sound(self, animal: AnimalData) -> None:
        if animal["type"] == "dog":
            print(f"{animal['name']} dice: ¡Guau guau!")
        elif animal["type"] == "cat":
            print(f"{animal['name']} dice: ¡Miau miau!")
        elif animal["type"] == "bird":
            print(f"{animal['name']} dice: ¡Pío pío!")
        # ❌ Si agrego un nuevo animal, debo modificar este método

    # ❌ Más condicionales para cada comportamiento
    def feed(self, animal: AnimalData) -> None:
        if animal["type"] == "dog":
            print(f"{animal['name']} está comiendo croquetas")
        elif animal["type"] == "cat":
            print(f"{animal['name']} está comiendo pescado")
        elif animal["type"] == "bird":
            print(f"{animal['name']} está comiendo semillas")

    # ❌ Y más condicionales para movimiento
    def move(self, animal: AnimalData) -> None:
        if animal["type"] == "dog":
            print(f"{animal['name']} está corriendo")
        elif animal["type"] == "cat":
            print(f"{animal['name']} está saltando")
        elif animal["type"] == "bird":
            print(f"{animal['name']} está volando")


# ❌ Función con lógica condicional para tipos de pago (ejemplo secundario)
def process_payment_bad(payment_type: str, amount: float) -> str:
    if payment_type == "credit_card":
        return f"Procesando pago de ${amount} con tarjeta de crédito"
    elif payment_type == "paypal":
        return f"Procesando pago de ${amount} con PayPal"
    elif payment_type == "bitcoin":
        return f"Procesando pago de ${amount} con Bitcoin"
    else:
        return "Método de pago desconocido"


if __name__ == "__main__":
    # ❌ Uso con condicionales por todos lados
    print("=== Violación de Polimorfismo ===")

    processor = AnimalProcessor()

    dog: DogData = {"type": "dog", "name": "Rex"}
    cat: CatData = {"type": "cat", "name": "Luna"}
    bird: BirdData = {"type": "bird", "name": "Piolín"}

    animals: List[AnimalData] = [dog, cat, bird]

    # ❌ El procesador debe verificar el tipo constantemente
    for animal in animals:
        processor.make_sound(animal)
        processor.feed(animal)
        processor.move(animal)

    # ❌ Problemas:
    # - Muchos if/else y switch repetidos
    # - Agregar nuevo animal requiere modificar MUCHOS métodos
    # - Propenso a errores (olvidar un caso)
    # - Viola Open/Closed Principle
    # - Difícil de mantener y escalar
