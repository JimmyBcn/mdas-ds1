# Violación de Encapsulamiento: Datos expuestos sin protección
# ❌ Problema: Cualquiera puede modificar el estado sin validación

from typing import List


class BankAccount:
    # ❌ Propiedades públicas permiten acceso directo sin control
    def __init__(self, account_number: str, initial_balance: float):
        self.account_number = account_number
        self.balance = initial_balance
        self.is_active = True
        self.transaction_history: List[str] = []

    # ❌ Método sin validaciones
    def deposit(self, amount: float) -> None:
        self.balance += amount
        self.transaction_history.append(f"Depósito: {amount}")

    # ❌ Método sin validaciones
    def withdraw(self, amount: float) -> bool:
        self.balance -= amount
        self.transaction_history.append(f"Retiro: {amount}")
        return True


if __name__ == "__main__":
    # ❌ Sin encapsulamiento, cualquiera puede romper las reglas
    print("=== Violación de Encapsulamiento ===")

    account = BankAccount("001", 1000)
    print(f"Balance inicial: ${account.balance}")

    # ❌ Modificación directa sin validación
    account.balance = -5000  # ¡Balance negativo!
    print(f"Balance después de modificación directa: ${account.balance}")

    # ❌ Cambiar número de cuenta directamente
    account.account_number = "999"  # ¡No debería ser posible!
    print(f"Número de cuenta modificado: {account.account_number}")

    # ❌ Desactivar cuenta sin proceso adecuado
    account.is_active = False  # Bypass de reglas de negocio
    print(f"Cuenta activa: {account.is_active}")

    # ❌ Modificar historial directamente
    account.transaction_history = []  # ¡Borrar evidencia!
    print(
        f"Historial manipulado: {len(account.transaction_history)} transacciones")

    # ❌ Retiro sin validación de fondos suficientes
    account.balance = 100
    account.withdraw(1000)  # ¡Retiro mayor al balance!
    print(f"Balance después de retiro excesivo: ${account.balance}")
