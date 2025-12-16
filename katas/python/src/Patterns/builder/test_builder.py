"""
Tests para el patrón Builder
Valida tanto las implementaciones malas como las buenas
"""

import pytest
from builder_bad import create_basic_user, create_admin_user
from builder_good import User, UserBuilder


class TestBuilderBad:
    """Tests para la implementación sin patrón Builder"""

    def test_create_basic_user(self):
        """Verifica la creación de usuario básico"""
        user = create_basic_user("John", "john@example.com")
        assert "John" in user
        assert "john@example.com" in user
        assert "Role: user" in user

    def test_create_admin_user(self):
        """Verifica la creación de usuario administrador"""
        user = create_admin_user("Admin", "admin@example.com", "secret123")
        assert "Admin" in user
        assert "admin@example.com" in user
        assert "Role: admin" in user
        assert "secret123" in user


class TestBuilderGood:
    """Tests para la implementación con patrón Builder"""

    def test_build_minimal_user(self):
        """Verifica la construcción de usuario con datos mínimos"""
        user = (UserBuilder()
                .with_name("John")
                .with_email("john@example.com")
                .build())

        info = user.get_info()
        assert "John" in info
        assert "john@example.com" in info

    def test_build_user_with_phone(self):
        """Verifica la construcción de usuario con teléfono"""
        user = (UserBuilder()
                .with_name("John")
                .with_email("john@example.com")
                .with_phone("123-456-7890")
                .build())

        info = user.get_info()
        assert "123-456-7890" in info

    def test_build_user_with_address(self):
        """Verifica la construcción de usuario con dirección"""
        user = (UserBuilder()
                .with_name("John")
                .with_email("john@example.com")
                .with_address("123 Main St")
                .build())

        info = user.get_info()
        assert "123 Main St" in info

    def test_build_user_with_role(self):
        """Verifica la construcción de usuario con rol"""
        user = (UserBuilder()
                .with_name("Admin")
                .with_email("admin@example.com")
                .with_role("admin")
                .build())

        info = user.get_info()
        assert "admin" in info.lower()

    def test_build_complete_user(self):
        """Verifica la construcción de usuario con todos los datos"""
        user = (UserBuilder()
                .with_name("John Doe")
                .with_email("john@example.com")
                .with_phone("123-456-7890")
                .with_address("123 Main St")
                .with_role("admin")
                .build())

        info = user.get_info()
        assert "John Doe" in info
        assert "john@example.com" in info
        assert "123-456-7890" in info
        assert "123 Main St" in info
        assert "admin" in info.lower()

    def test_builder_fluent_interface(self):
        """Verifica que el builder tiene interfaz fluida"""
        builder = UserBuilder()

        # Cada método debería retornar el builder
        assert isinstance(builder.with_name("Test"), UserBuilder)
        assert isinstance(builder.with_email("test@test.com"), UserBuilder)
        assert isinstance(builder.with_phone("123"), UserBuilder)

    def test_build_multiple_users_independently(self):
        """Verifica que se pueden construir múltiples usuarios independientes"""
        user1 = (UserBuilder()
                 .with_name("User1")
                 .with_email("user1@example.com")
                 .build())

        user2 = (UserBuilder()
                 .with_name("User2")
                 .with_email("user2@example.com")
                 .with_role("admin")
                 .build())

        info1 = user1.get_info()
        info2 = user2.get_info()

        assert "User1" in info1
        assert "User2" in info2
        assert "admin" not in info1.lower()
        assert "admin" in info2.lower()


if __name__ == "__main__":
    pytest.main([__file__, "-v"])
