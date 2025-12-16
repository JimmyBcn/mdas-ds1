# Violación de Clean Code: Mal Nombrado
# ❌ Problemas: Nombres sin intención, información falsa, difícil pronunciar, codificaciones

# ❌ Sin intención clara
d: int = 0  # ¿Qué es 'd'?
x: str = ""  # ¿Qué es 'x'?
arr = [1, 2, 3]  # ¿Array de qué?

# ❌ Información falsa
user_list: set = set()  # ¡No es una List, es un Set!
accounts_array = {"name": "John", "balance": 1000}  # ¡No es un array!

# ❌ Difícil de pronunciar
yyyymmdstr = "20251102"  # ¿Cómo pronuncias esto?
genymdhms = "2025-11-02 10:30:45"  # ¿Gen-y-m-d-h-m-s?

# ❌ Codificaciones innecesarias (notación húngara)
str_first_name = "John"  # El 'str_' es redundante en Python
int_age = 25  # El 'int_' es redundante
bool_is_active = True  # El 'bool_' es redundante


# ❌ Números y strings mágicos
class UserService:
    def validate_user(self, user: dict) -> bool:
        if user["age"] < 18:  # ❌ ¿Qué significa 18?
            return False

        if user["status"] == "ACT":  # ❌ ¿Qué significa "ACT"?
            return True

        if user["points"] > 1000:  # ❌ ¿Por qué 1000?
            return True

        return False

    def calculate_discount(self, total: float, customer_type: str) -> float:
        if customer_type == "VIP":
            return total * 0.2  # ❌ ¿Qué significa 0.2?
        elif customer_type == "REG":
            return total * 0.05  # ❌ ¿Qué significa 0.05?
        return 0.0


if __name__ == "__main__":
    # Uso
    print("=== Violación de Nombrado en Clean Code ===")

    d = 86400  # ¿Segundos? ¿Milisegundos? ¿Días?
    x = "usuario@email.com"

    service = UserService()
    user = {"age": 20, "status": "ACT", "points": 1200}
    print(f"Usuario válido: {service.validate_user(user)}")
    print(f"Descuento: {service.calculate_discount(100, 'VIP')}")
