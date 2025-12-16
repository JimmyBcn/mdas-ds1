# Cumplimiento de Encapsulamiento: Datos protegidos con validación
# ✅ Solución: Propiedades privadas y métodos controlados

from typing import List


class BankAccount:
    # ✅ Propiedades privadas - no accesibles directamente
    def __init__(self, account_number: str, initial_balance: float):
        # ✅ Validación en constructor
        if initial_balance < 0:
            raise ValueError("El balance inicial no puede ser negativo")
        if not account_number or len(account_number) == 0:
            raise ValueError("Número de cuenta inválido")

        self.__account_number = account_number  # readonly - truly private
        self.__balance = initial_balance  # truly private
        self.__is_active = True  # truly private
        self.__transaction_history: List[str] = []  # truly private

    # ✅ Getter - solo lectura del balance
    def get_balance(self) -> float:
        return self.__balance
    
    # ✅ Prevent direct attribute setting
    def __setattr__(self, name: str, value) -> None:
        if name in ('balance', 'account_number', 'is_active', 'transaction_history'):
            raise AttributeError(f"No se puede modificar '{name}' directamente")
        super().__setattr__(name, value)

    # ✅ Getter - solo lectura del número de cuenta
    def get_account_number(self) -> str:
        return self.__account_number

    # ✅ Getter - estado de la cuenta
    def check_if_active(self) -> bool:
        return self.__is_active

    # ✅ Método con validación de negocio
    def deposit(self, amount: float) -> bool:
        if not self.__is_active:
            print("Error: Cuenta inactiva")
            return False
        if amount <= 0:
            print("Error: El monto debe ser positivo")
            return False

        self.__balance += amount
        self.__transaction_history.append(f"Depósito: ${amount}")
        print(f"Depósito exitoso: ${amount}. Nuevo balance: ${self.__balance}")
        return True

    # ✅ Método con validación de fondos suficientes
    def withdraw(self, amount: float) -> bool:
        if not self.__is_active:
            print("Error: Cuenta inactiva")
            return False
        if amount <= 0:
            print("Error: El monto debe ser positivo")
            return False
        if amount > self.__balance:
            print("Error: Fondos insuficientes")
            return False

        self.__balance -= amount
        self.__transaction_history.append(f"Retiro: ${amount}")
        print(f"Retiro exitoso: ${amount}. Nuevo balance: ${self.__balance}")
        return True

    # ✅ Método controlado para cerrar cuenta
    def close_account(self) -> bool:
        if self.__balance > 0:
            print("Error: Debe retirar todos los fondos antes de cerrar la cuenta")
            return False
        self.__is_active = False
        print("Cuenta cerrada exitosamente")
        return True

    # ✅ Copia del historial, no referencia directa
    def get_transaction_history(self) -> List[str]:
        return self.__transaction_history.copy()  # Copia defensiva


if __name__ == "__main__":
    # ✅ Con encapsulamiento, todas las reglas son respetadas
    print("=== Cumplimiento de Encapsulamiento ===")

    account = BankAccount("001", 1000)
    print(f"Balance inicial: ${account.get_balance()}")

    # ✅ No se puede modificar directamente - solo mediante métodos
    # account._balance = -5000  # ❌ Acceso a atributo privado (convención)

    # ✅ Intento de retiro excesivo es rechazado
    account.withdraw(2000)  # "Error: Fondos insuficientes"

    # ✅ Depósito con validación
    account.deposit(500)  # Funciona correctamente

    # ✅ Retiro válido
    account.withdraw(300)  # Funciona correctamente

    print(f"Balance final: ${account.get_balance()}")

    # ✅ No se puede cerrar cuenta con fondos
    account.close_account()  # "Error: Debe retirar todos los fondos..."
