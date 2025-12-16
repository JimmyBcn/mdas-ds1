# Cumplimiento de Clean Code: Buen Nombrado
# ✅ Solución: Nombres con intención, sin información falsa, pronunciables, sin codificaciones

from typing import Dict

# ✅ Nombres con intención clara
seconds_in_day: int = 0
user_email_address: str = ""
product_prices: list[float] = [1.0, 2.0, 3.0]

# ✅ Sin información falsa
active_users: set = set()  # Correcto: es un Set
user_account = {"name": "John", "balance": 1000}  # Correcto: es un diccionario

# ✅ Pronunciables
current_date_string = "20251102"
generated_timestamp = "2025-11-02 10:30:45"

# ✅ Sin codificaciones innecesarias
first_name = "John"  # Python ya sabe que es string
age = 25  # Python ya sabe que es number
is_active = True  # Python ya sabe que es boolean


# ✅ Constantes con nombre en lugar de números/strings mágicos
class UserService:
    # Constantes descriptivas
    MINIMUM_AGE = 18
    ACTIVE_STATUS = "ACT"
    PREMIUM_POINTS_THRESHOLD = 1000

    VIP_CUSTOMER_TYPE = "VIP"
    REGULAR_CUSTOMER_TYPE = "REG"

    VIP_DISCOUNT_RATE = 0.2
    REGULAR_DISCOUNT_RATE = 0.05

    def validate_user(self, user: Dict[str, any]) -> bool:
        if user["age"] < self.MINIMUM_AGE:  # ✅ Claro: edad mínima requerida
            return False

        if user["status"] == self.ACTIVE_STATUS:  # ✅ Claro: estado activo
            return True

        if user["points"] > self.PREMIUM_POINTS_THRESHOLD:  # ✅ Claro: umbral de puntos premium
            return True

        return False

    def calculate_discount(self, total_amount: float, customer_type: str) -> float:
        if customer_type == self.VIP_CUSTOMER_TYPE:
            return total_amount * self.VIP_DISCOUNT_RATE  # ✅ Claro: tasa de descuento VIP
        elif customer_type == self.REGULAR_CUSTOMER_TYPE:
            # ✅ Claro: tasa de descuento regular
            return total_amount * self.REGULAR_DISCOUNT_RATE
        return 0.0


if __name__ == "__main__":
    # Uso
    print("=== Cumplimiento de Nombrado en Clean Code ===")

    seconds_in_day = 86400  # ✅ Claro: segundos en un día
    # ✅ Claro: dirección de email del usuario
    user_email_address = "usuario@email.com"

    user_service = UserService()
    valid_user = {"age": 20, "status": "ACT", "points": 1200}
    print(f"Usuario válido: {user_service.validate_user(valid_user)}")
    print(f"Descuento: {user_service.calculate_discount(100, 'VIP')}")
