# Violación del Patrón Builder: Demasiados parámetros en el constructor
# ❌ Problema: Objetos complejos con muchos parámetros opcionales

from typing import List


class Pizza:
    def __init__(
        self,
        size: str,
        crust: str,
        sauce: str,
        cheese: str,
        toppings: List[str],
        extra_cheese: bool,
        spicy_level: int,
    ):
        self.size = size
        self.crust = crust
        self.sauce = sauce
        self.cheese = cheese
        self.toppings = toppings
        self.extra_cheese = extra_cheese
        self.spicy_level = spicy_level

    def get_description(self) -> str:
        extra = ", queso extra" if self.extra_cheese else ""
        return (
            f"Pizza {self.size} con masa {self.crust}, salsa {self.sauce}, "
            f"queso {self.cheese}, ingredientes: {', '.join(self.toppings)}"
            f"{extra}, nivel picante: {self.spicy_level}/5"
        )


# ❌ Funciones con muchos parámetros (para tests)
def create_basic_user(name: str, email: str) -> str:
    return f"User: {name}, Email: {email}, Role: user"


def create_admin_user(name: str, email: str, password: str) -> str:
    return f"Admin: {name}, Email: {email}, Role: admin, Password: {password}"


# ❌ Problemas al crear pizzas:
if __name__ == "__main__":
    print("=== Violación del Patrón Builder ===")

    # Difícil recordar el orden de los parámetros ❌
    margherita = Pizza(
        "grande",
        "delgada",
        "tomate",
        "mozzarella",
        ["albahaca", "tomates"],  # ❌ Debe crear array manualmente
        False,  # ❌ ¿Qué significa este booleano?
        0,  # ❌ ¿Y este número?
    )

    # Orden de parámetros confuso ❌
    carnivora = Pizza(
        "extra grande",
        "gruesa",
        "BBQ",
        "mozzarella",
        ["pepperoni", "salchicha", "tocino", "jamón"],
        True,
        3,
    )

    print("Margherita:", margherita.get_description())
    print("Carnívora:", carnivora.get_description())
