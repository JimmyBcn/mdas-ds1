"""
Tests para el patrón Strategy
Valida tanto las implementaciones malas como las buenas
"""

import pytest
from strategy_bad import DiscountCalculator as DiscountCalculatorBad
from strategy_good import (
    DiscountCalculator as DiscountCalculatorGood,
    RegularCustomerDiscount,
    PremiumCustomerDiscount,
    VIPCustomerDiscount,
    EmployeeDiscount
)


class TestStrategyBad:
    """Tests para la implementación sin el patrón Strategy"""

    def test_regular_customer(self):
        """Verifica el cálculo de descuento para cliente regular"""
        calculator = DiscountCalculatorBad()
        discount = calculator.calculate_discount("regular", 100)
        assert discount == 0

    def test_premium_customer(self):
        """Verifica el cálculo de descuento para cliente premium"""
        calculator = DiscountCalculatorBad()
        discount = calculator.calculate_discount("premium", 100)
        assert discount == 10.0

    def test_vip_customer(self):
        """Verifica el cálculo de descuento para cliente VIP"""
        calculator = DiscountCalculatorBad()
        discount = calculator.calculate_discount("vip", 100)
        assert discount == 20.0

    def test_employee(self):
        """Verifica el cálculo de descuento para empleado"""
        calculator = DiscountCalculatorBad()
        discount = calculator.calculate_discount("employee", 100)
        assert discount == 50.0

    def test_unknown_customer_type(self):
        """Verifica que tipos desconocidos lanzan error"""
        calculator = DiscountCalculatorBad()
        with pytest.raises(ValueError) as exc_info:
            calculator.calculate_discount("unknown", 100)
        assert "Tipo de cliente desconocido" in str(exc_info.value)

    def test_supported_types(self):
        """Verifica los tipos de cliente soportados"""
        calculator = DiscountCalculatorBad()
        types = calculator.get_supported_customer_types()
        assert set(types) == {"regular", "premium", "vip", "employee"}


class TestStrategyGood:
    """Tests para la implementación con el patrón Strategy"""

    def test_regular_customer(self):
        """Verifica el cálculo de descuento para cliente regular"""
        strategy = RegularCustomerDiscount()
        calculator = DiscountCalculatorGood(strategy)
        discount = calculator.calculate_discount(100)
        assert discount == 0

    def test_premium_customer(self):
        """Verifica el cálculo de descuento para cliente premium"""
        strategy = PremiumCustomerDiscount()
        calculator = DiscountCalculatorGood(strategy)
        discount = calculator.calculate_discount(100)
        assert discount == 10.0

    def test_vip_customer(self):
        """Verifica el cálculo de descuento para cliente VIP"""
        strategy = VIPCustomerDiscount()
        calculator = DiscountCalculatorGood(strategy)
        discount = calculator.calculate_discount(100)
        assert discount == 20.0

    def test_employee(self):
        """Verifica el cálculo de descuento para empleado"""
        strategy = EmployeeDiscount()
        calculator = DiscountCalculatorGood(strategy)
        discount = calculator.calculate_discount(100)
        assert discount == 50.0

    def test_switch_strategy(self):
        """Verifica que se puede cambiar la estrategia en tiempo de ejecución"""
        calculator = DiscountCalculatorGood(RegularCustomerDiscount())
        assert calculator.calculate_discount(100) == 0

        calculator.set_strategy(VIPCustomerDiscount())
        assert calculator.calculate_discount(100) == 20.0

        calculator.set_strategy(EmployeeDiscount())
        assert calculator.calculate_discount(100) == 50.0

    def test_get_description(self):
        """Verifica que cada estrategia tiene su descripción"""
        regular = RegularCustomerDiscount()
        assert "regular" in regular.get_description().lower()

        premium = PremiumCustomerDiscount()
        assert "premium" in premium.get_description().lower()

        vip = VIPCustomerDiscount()
        assert "vip" in vip.get_description().lower()

        employee = EmployeeDiscount()
        assert "empleado" in employee.get_description().lower()


if __name__ == "__main__":
    pytest.main([__file__, "-v"])
