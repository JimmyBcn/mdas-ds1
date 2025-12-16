# Implementación del Patrón Strategy: Clases de algoritmos separadas que pueden intercambiarse
# ✅ Solución: Cada algoritmo de descuento en su propia clase

from abc import ABC, abstractmethod


# ✅ Interfaz de estrategia define comportamiento común
class DiscountStrategy(ABC):
    @abstractmethod
    def calculate_discount(self, order_amount: float) -> float:
        pass

    @abstractmethod
    def get_description(self) -> str:
        pass


# ✅ Cada algoritmo en su propia clase
class RegularCustomerDiscount(DiscountStrategy):
    def calculate_discount(self, order_amount: float) -> float:
        return 0  # Sin descuento

    def get_description(self) -> str:
        return "Cliente regular - sin descuento"


class PremiumCustomerDiscount(DiscountStrategy):
    def calculate_discount(self, order_amount: float) -> float:
        return order_amount * 0.1  # 10% de descuento

    def get_description(self) -> str:
        return "Cliente premium - 10% de descuento"


class VIPCustomerDiscount(DiscountStrategy):
    def calculate_discount(self, order_amount: float) -> float:
        return order_amount * 0.2  # 20% de descuento

    def get_description(self) -> str:
        return "Cliente VIP - 20% de descuento"


class EmployeeDiscount(DiscountStrategy):
    def calculate_discount(self, order_amount: float) -> float:
        return order_amount * 0.5  # 50% de descuento

    def get_description(self) -> str:
        return "Empleado - 50% de descuento"


# ✅ Clase contexto usa estrategia sin saber cuál es
class DiscountCalculator:
    def __init__(self, strategy: DiscountStrategy):
        self.strategy = strategy

    # ✅ Puede cambiar estrategia en tiempo de ejecución
    def set_strategy(self, strategy: DiscountStrategy) -> None:
        self.strategy = strategy

    def calculate_discount(self, order_amount: float) -> float:
        return self.strategy.calculate_discount(order_amount)

    def get_discount_info(self) -> str:
        return self.strategy.get_description()


# ✅ Uso - las estrategias pueden intercambiarse fácilmente
if __name__ == "__main__":
    print("=== Solución con Patrón Strategy ===")

    order_amount = 100
    print(f"Monto del pedido: ${order_amount}\n")

    # ✅ Fácil cambiar entre diferentes estrategias de descuento
    calculator = DiscountCalculator(RegularCustomerDiscount())
    print(f"{calculator.get_discount_info()}: ${calculator.calculate_discount(order_amount)}")

    calculator.set_strategy(PremiumCustomerDiscount())
    print(f"{calculator.get_discount_info()}: ${calculator.calculate_discount(order_amount)}")

    calculator.set_strategy(VIPCustomerDiscount())
    print(f"{calculator.get_discount_info()}: ${calculator.calculate_discount(order_amount)}")

    calculator.set_strategy(EmployeeDiscount())
    print(f"{calculator.get_discount_info()}: ${calculator.calculate_discount(order_amount)}")

    # ✅ ¡Agregar nueva estrategia es fácil - solo crear nueva clase!
    class StudentDiscount(DiscountStrategy):
        def calculate_discount(self, order_amount: float) -> float:
            return order_amount * 0.15  # 15% de descuento

        def get_description(self) -> str:
            return "Estudiante - 15% de descuento"

    calculator.set_strategy(StudentDiscount())
    print(f"{calculator.get_discount_info()}: ${calculator.calculate_discount(order_amount)}")
