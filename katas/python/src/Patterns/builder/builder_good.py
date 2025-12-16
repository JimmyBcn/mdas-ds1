# Implementación del Patrón Builder: Construcción paso a paso con interfaz fluida
# ✅ Solución: Builder permite creación de objetos legible y flexible

from typing import List, Optional


# ✅ Clase User simple (para tests)
class User:
    def __init__(self, name: str, email: str, phone: str = "", address: str = "", role: str = "user"):
        self.name = name
        self.email = email
        self.phone = phone
        self.address = address
        self.role = role

    def get_info(self) -> str:
        info = f"User: {self.name}, Email: {self.email}"
        if self.phone:
            info += f", Phone: {self.phone}"
        if self.address:
            info += f", Address: {self.address}"
        if self.role != "user":
            info += f", Role: {self.role}"
        return info


# ✅ Builder para construcción de usuarios
class UserBuilder:
    def __init__(self):
        self.name = ""
        self.email = ""
        self.phone = ""
        self.address = ""
        self.role = "user"

    def with_name(self, name: str) -> "UserBuilder":
        self.name = name
        return self

    def with_email(self, email: str) -> "UserBuilder":
        self.email = email
        return self

    def with_phone(self, phone: str) -> "UserBuilder":
        self.phone = phone
        return self

    def with_address(self, address: str) -> "UserBuilder":
        self.address = address
        return self

    def with_role(self, role: str) -> "UserBuilder":
        self.role = role
        return self

    def build(self) -> User:
        return User(self.name, self.email, self.phone, self.address, self.role)


# Clase Pizza con muchas propiedades opcionales
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


# ✅ Builder con interfaz fluida
class PizzaBuilder:
    def __init__(self):
        self.size = "mediana"
        self.crust = "regular"
        self.sauce = "tomate"
        self.cheese = "mozzarella"
        self.toppings: List[str] = []
        self.extra_cheese = False
        self.spicy_level = 0

    def set_size(self, size: str) -> "PizzaBuilder":
        self.size = size
        return self  # ✅ Retorna 'self' para encadenamiento de métodos

    def set_crust(self, crust: str) -> "PizzaBuilder":
        self.crust = crust
        return self

    def set_sauce(self, sauce: str) -> "PizzaBuilder":
        self.sauce = sauce
        return self

    def set_cheese(self, cheese: str) -> "PizzaBuilder":
        self.cheese = cheese
        return self

    def add_topping(self, topping: str) -> "PizzaBuilder":
        self.toppings.append(topping)
        return self

    def with_extra_cheese(self) -> "PizzaBuilder":
        self.extra_cheese = True
        return self

    def set_spicy_level(self, level: int) -> "PizzaBuilder":
        self.spicy_level = level
        return self

    def build(self) -> Pizza:
        return Pizza(
            self.size,
            self.crust,
            self.sauce,
            self.cheese,
            self.toppings.copy(),  # Copia la lista
            self.extra_cheese,
            self.spicy_level,
        )

    def reset(self) -> "PizzaBuilder":
        self.size = "mediana"
        self.crust = "regular"
        self.sauce = "tomate"
        self.cheese = "mozzarella"
        self.toppings = []
        self.extra_cheese = False
        self.spicy_level = 0
        return self


# ✅ Beneficios del patrón builder:
if __name__ == "__main__":
    print("=== Solución con Patrón Builder ===")

    # Código legible y auto-documentado ✅
    margherita = (
        PizzaBuilder()
        .set_size("grande")  # ✅ Claro qué es cada parámetro
        .set_crust("delgada")
        .set_sauce("tomate")
        .set_cheese("mozzarella")
        .add_topping("albahaca")  # ✅ Fácil agregar ingredientes uno por uno
        .add_topping("tomates")
        .build()
    )

    # Fácil crear variaciones complejas ✅
    carnivora = (
        PizzaBuilder()
        .set_size("extra grande")
        .set_crust("gruesa")
        .set_sauce("BBQ")
        .add_topping("pepperoni")
        .add_topping("salchicha")
        .add_topping("tocino")
        .add_topping("jamón")
        .with_extra_cheese()  # ✅ Características opcionales cuando se necesitan
        .set_spicy_level(3)
        .build()
    )

    # Configuración mínima con valores por defecto ✅
    pizza_simple = (
        PizzaBuilder().set_size("pequeña").add_topping("champiñones").build()
    )  # ✅ Usa masa, salsa y queso por defecto

    print("Margherita:", margherita.get_description())
    print("Carnívora:", carnivora.get_description())
    print("Pizza Simple:", pizza_simple.get_description())
