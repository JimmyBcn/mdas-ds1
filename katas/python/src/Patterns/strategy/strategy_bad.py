# Violación del Patrón Strategy: Algoritmos codificados con cadenas if/else
# ❌ Problema: Toda la lógica de cálculo de descuentos mezclada en una clase

from typing import List


class DiscountCalculator:
    def calculate_discount(self, customer_type: str, order_amount: float) -> float:
        # ❌ Todos los algoritmos mezclados con lógica condicional
        if customer_type == "regular":
            # Cliente regular - sin descuento
            return 0
        elif customer_type == "premium":
            # Cliente premium - 10% de descuento
            return order_amount * 0.1
        elif customer_type == "vip":
            # Cliente VIP - 20% de descuento
            return order_amount * 0.2
        elif customer_type == "employee":
            # Empleado - 50% de descuento
            return order_amount * 0.5
        else:
            raise ValueError(f"Tipo de cliente desconocido: {customer_type}")

    # ❌ Agregar nuevos tipos de cliente requiere modificar esta clase
    def get_supported_customer_types(self) -> List[str]:
        return ["regular", "premium", "vip", "employee"]


# Uso mostrando los problemas
if __name__ == "__main__":
    print("=== Violación del Patrón Strategy ===")

    calculator = DiscountCalculator()
    order_amount = 100

    print(f"Monto del pedido: ${order_amount}")
    print(
        f"Descuento regular: ${calculator.calculate_discount('regular', order_amount)}")
    print(
        f"Descuento premium: ${calculator.calculate_discount('premium', order_amount)}")
    print(
        f"Descuento VIP: ${calculator.calculate_discount('vip', order_amount)}")
    print(
        f"Descuento empleado: ${calculator.calculate_discount('employee', order_amount)}")

    # ❌ Problemas:
    # 1. Todos los algoritmos de descuento en una clase
    # 2. Agregar nuevo tipo de cliente requiere modificar DiscountCalculator
    # 3. No se pueden probar algoritmos de descuento individuales por separado
    # 4. Viola el Principio Abierto/Cerrado
