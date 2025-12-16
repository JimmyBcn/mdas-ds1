"""
Tests para el concepto de Format en Clean Code
Valida tanto las implementaciones malas como las buenas
"""

import pytest
from format_bad import Calculator as CalculatorBad
from format_good import Calculator as CalculatorGood


class TestFormatBad:
    """Tests para la implementación con mal formato"""

    def test_add(self):
        """Verifica la suma de dos números"""
        calc = CalculatorBad()
        assert calc.add(5, 3) == 8

    def test_subtract(self):
        """Verifica la resta de dos números"""
        calc = CalculatorBad()
        assert calc.subtract(10, 4) == 6

    def test_multiply(self):
        """Verifica la multiplicación de dos números"""
        calc = CalculatorBad()
        assert calc.multiply(6, 7) == 42

    def test_divide(self):
        """Verifica la división de dos números"""
        calc = CalculatorBad()
        assert calc.divide(15, 3) == 5

    def test_divide_by_zero(self):
        """Verifica el manejo de división por cero"""
        calc = CalculatorBad()
        result = calc.divide(10, 0)
        assert "Error" in result


class TestFormatGood:
    """Tests para la implementación con buen formato"""

    def test_add(self):
        """Verifica la suma de dos números"""
        calc = CalculatorGood()
        assert calc.add(5, 3) == 8

    def test_add_negative_numbers(self):
        """Verifica la suma con números negativos"""
        calc = CalculatorGood()
        assert calc.add(-5, 3) == -2

    def test_subtract(self):
        """Verifica la resta de dos números"""
        calc = CalculatorGood()
        assert calc.subtract(10, 4) == 6

    def test_multiply(self):
        """Verifica la multiplicación de dos números"""
        calc = CalculatorGood()
        assert calc.multiply(6, 7) == 42

    def test_multiply_by_zero(self):
        """Verifica la multiplicación por cero"""
        calc = CalculatorGood()
        assert calc.multiply(5, 0) == 0

    def test_divide(self):
        """Verifica la división de dos números"""
        calc = CalculatorGood()
        assert calc.divide(15, 3) == 5

    def test_divide_float_result(self):
        """Verifica la división con resultado decimal"""
        calc = CalculatorGood()
        assert calc.divide(10, 4) == 2.5

    def test_divide_by_zero(self):
        """Verifica el manejo de división por cero"""
        calc = CalculatorGood()
        result = calc.divide(10, 0)
        assert "Error" in result


if __name__ == "__main__":
    pytest.main([__file__, "-v"])
