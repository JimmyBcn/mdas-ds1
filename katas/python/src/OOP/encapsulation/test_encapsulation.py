"""
Tests para el concepto de Encapsulación en OOP
Valida tanto las implementaciones malas como las buenas
"""

import pytest
from encapsulation_bad import BankAccount as BankAccountBad
from encapsulation_good import BankAccount as BankAccountGood


class TestEncapsulationBad:
    """Tests para la implementación con mala encapsulación"""

    def test_direct_balance_access(self):
        """Verifica el acceso directo al balance (violación de encapsulación)"""
        account = BankAccountBad("123456", 1000)
        assert account.balance == 1000

        # Problema: se puede modificar el balance directamente
        account.balance = 5000
        assert account.balance == 5000

    def test_deposit(self):
        """Verifica el depósito de dinero"""
        account = BankAccountBad("123456", 1000)
        account.deposit(500)
        assert account.balance == 1500

    def test_withdraw(self):
        """Verifica el retiro de dinero"""
        account = BankAccountBad("123456", 1000)
        result = account.withdraw(300)
        assert result == True
        assert account.balance == 700


class TestEncapsulationGood:
    """Tests para la implementación con buena encapsulación"""

    def test_balance_is_private(self):
        """Verifica que el balance es privado"""
        account = BankAccountGood("123456", 1000)

        # El balance no es accesible directamente
        assert not hasattr(account, 'balance')
        # Solo accesible a través de getter
        assert account.get_balance() == 1000

    def test_deposit(self):
        """Verifica el depósito de dinero"""
        account = BankAccountGood("123456", 1000)
        account.deposit(500)
        assert account.get_balance() == 1500

    def test_deposit_negative_amount(self):
        """Verifica que no se pueden depositar cantidades negativas"""
        account = BankAccountGood("123456", 1000)
        account.deposit(-100)
        assert account.get_balance() == 1000  # Balance no cambia

    def test_withdraw_sufficient_funds(self):
        """Verifica el retiro con fondos suficientes"""
        account = BankAccountGood("123456", 1000)
        result = account.withdraw(300)
        assert result == True
        assert account.get_balance() == 700

    def test_withdraw_insufficient_funds(self):
        """Verifica que no se puede retirar más del balance disponible"""
        account = BankAccountGood("123456", 1000)
        result = account.withdraw(1500)
        assert result == False
        assert account.get_balance() == 1000  # Balance no cambia

    def test_withdraw_negative_amount(self):
        """Verifica que no se pueden retirar cantidades negativas"""
        account = BankAccountGood("123456", 1000)
        result = account.withdraw(-100)
        assert result == False
        assert account.get_balance() == 1000  # Balance no cambia

    def test_data_integrity(self):
        """Verifica que la encapsulación protege la integridad de los datos"""
        account = BankAccountGood("123456", 1000)

        # Intentar acceder directamente debería fallar o no estar disponible
        with pytest.raises(AttributeError):
            account.balance = 5000


if __name__ == "__main__":
    pytest.main([__file__, "-v"])
