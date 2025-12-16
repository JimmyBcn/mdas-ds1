"""
Tests para el concepto de Naming en Clean Code
Valida tanto las implementaciones malas como las buenas
"""

import pytest
from naming_bad import UserService as UserServiceBad
from naming_good import UserService as UserServiceGood


class TestNamingBad:
    """Tests para la implementación con mal nombrado"""

    def test_validate_user_under_age(self):
        """Verifica que usuarios menores de 18 años no sean válidos"""
        service = UserServiceBad()
        user = {"age": 17, "status": "ACT", "points": 1200}
        assert service.validate_user(user) == False

    def test_validate_user_active_status(self):
        """Verifica que usuarios con estado activo sean válidos"""
        service = UserServiceBad()
        user = {"age": 20, "status": "ACT", "points": 500}
        assert service.validate_user(user) == True

    def test_validate_user_premium_points(self):
        """Verifica que usuarios con puntos premium sean válidos"""
        service = UserServiceBad()
        user = {"age": 20, "status": "INA", "points": 1200}
        assert service.validate_user(user) == True

    def test_calculate_discount_vip(self):
        """Verifica el cálculo de descuento VIP"""
        service = UserServiceBad()
        discount = service.calculate_discount(100, "VIP")
        assert discount == 20.0  # 20% de descuento

    def test_calculate_discount_regular(self):
        """Verifica el cálculo de descuento regular"""
        service = UserServiceBad()
        discount = service.calculate_discount(100, "REG")
        assert discount == 5.0  # 5% de descuento

    def test_calculate_discount_unknown_type(self):
        """Verifica que tipos desconocidos no reciban descuento"""
        service = UserServiceBad()
        discount = service.calculate_discount(100, "UNKNOWN")
        assert discount == 0.0


class TestNamingGood:
    """Tests para la implementación con buen nombrado"""

    def test_validate_user_under_minimum_age(self):
        """Verifica que usuarios menores de la edad mínima no sean válidos"""
        service = UserServiceGood()
        user = {"age": 17, "status": "ACT", "points": 1200}
        assert service.validate_user(user) == False

    def test_validate_user_with_active_status(self):
        """Verifica que usuarios con estado activo sean válidos"""
        service = UserServiceGood()
        user = {"age": 20, "status": "ACT", "points": 500}
        assert service.validate_user(user) == True

    def test_validate_user_with_premium_points(self):
        """Verifica que usuarios con puntos por encima del umbral premium sean válidos"""
        service = UserServiceGood()
        user = {"age": 20, "status": "INA", "points": 1200}
        assert service.validate_user(user) == True

    def test_calculate_discount_vip_customer(self):
        """Verifica el cálculo de descuento para clientes VIP"""
        service = UserServiceGood()
        discount = service.calculate_discount(100, "VIP")
        assert discount == 20.0  # Tasa de descuento VIP: 20%

    def test_calculate_discount_regular_customer(self):
        """Verifica el cálculo de descuento para clientes regulares"""
        service = UserServiceGood()
        discount = service.calculate_discount(100, "REG")
        assert discount == 5.0  # Tasa de descuento regular: 5%

    def test_calculate_discount_unknown_customer_type(self):
        """Verifica que tipos de cliente desconocidos no reciban descuento"""
        service = UserServiceGood()
        discount = service.calculate_discount(100, "UNKNOWN")
        assert discount == 0.0

    def test_constants_are_properly_defined(self):
        """Verifica que las constantes estén correctamente definidas"""
        service = UserServiceGood()
        assert service.MINIMUM_AGE == 18
        assert service.ACTIVE_STATUS == "ACT"
        assert service.PREMIUM_POINTS_THRESHOLD == 1000
        assert service.VIP_DISCOUNT_RATE == 0.2
        assert service.REGULAR_DISCOUNT_RATE == 0.05


if __name__ == "__main__":
    pytest.main([__file__, "-v"])
