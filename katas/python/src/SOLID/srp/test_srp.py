"""
Tests para el principio SRP (Single Responsibility Principle)
Valida tanto las implementaciones malas como las buenas
"""

import pytest
from srp_bad import User as UserBad
from srp_good import User as UserGood, EmailService, UserFileManager


class TestSRPBad:
    """Tests para la implementación que viola SRP"""

    def test_user_creation(self):
        """Verifica la creación de usuario"""
        user = UserBad("Juan Pérez", "juan@ejemplo.com")
        assert user.get_name() == "Juan Pérez"
        assert user.get_email() == "juan@ejemplo.com"

    def test_send_welcome_email(self):
        """Verifica el envío de email de bienvenida (responsabilidad extra)"""
        user = UserBad("Juan Pérez", "juan@ejemplo.com")
        result = user.send_welcome_email()
        assert "Enviando email de bienvenida" in result
        assert "juan@ejemplo.com" in result

    def test_send_password_reset_email(self):
        """Verifica el envío de email de restablecimiento (responsabilidad extra)"""
        user = UserBad("Juan Pérez", "juan@ejemplo.com")
        result = user.send_password_reset_email()
        assert "Enviando email de restablecimiento" in result
        assert "juan@ejemplo.com" in result

    def test_save_to_file(self):
        """Verifica el guardado en archivo (responsabilidad extra)"""
        user = UserBad("Juan Pérez", "juan@ejemplo.com")
        result = user.save_to_file()
        assert "Guardando usuario" in result
        assert "Juan Pérez" in result

    def test_load_from_file(self):
        """Verifica la carga desde archivo (responsabilidad extra)"""
        user = UserBad("Juan Pérez", "juan@ejemplo.com")
        result = user.load_from_file()
        assert "Cargando datos de usuario" in result


class TestSRPGood:
    """Tests para la implementación que cumple con SRP"""

    def test_user_creation(self):
        """Verifica la creación de usuario (única responsabilidad de User)"""
        user = UserGood("Juan Pérez", "juan@ejemplo.com")
        assert user.get_name() == "Juan Pérez"
        assert user.get_email() == "juan@ejemplo.com"

    def test_email_service_welcome_email(self):
        """Verifica el servicio de email para envío de bienvenida"""
        user = UserGood("Juan Pérez", "juan@ejemplo.com")
        email_service = EmailService()
        result = email_service.send_welcome_email(user)
        assert "Enviando email de bienvenida" in result
        assert "juan@ejemplo.com" in result

    def test_email_service_password_reset(self):
        """Verifica el servicio de email para restablecimiento de contraseña"""
        user = UserGood("Juan Pérez", "juan@ejemplo.com")
        email_service = EmailService()
        result = email_service.send_password_reset_email(user)
        assert "Enviando email de restablecimiento" in result
        assert "juan@ejemplo.com" in result

    def test_file_manager_save(self):
        """Verifica el servicio de archivos para guardar"""
        user = UserGood("Juan Pérez", "juan@ejemplo.com")
        file_manager = UserFileManager()
        result = file_manager.save_to_file(user)
        assert "Guardando usuario" in result
        assert "Juan Pérez" in result

    def test_file_manager_load(self):
        """Verifica el servicio de archivos para cargar"""
        file_manager = UserFileManager()
        result = file_manager.load_from_file("users.txt")
        assert "Cargando datos de usuario" in result
        assert "users.txt" in result

    def test_separation_of_concerns(self):
        """Verifica que cada clase tenga una sola responsabilidad"""
        user = UserGood("Juan Pérez", "juan@ejemplo.com")
        email_service = EmailService()
        file_manager = UserFileManager()

        # User solo maneja datos
        assert hasattr(user, 'get_name')
        assert hasattr(user, 'get_email')
        assert not hasattr(user, 'send_welcome_email')
        assert not hasattr(user, 'save_to_file')

        # EmailService solo maneja emails
        assert hasattr(email_service, 'send_welcome_email')
        assert hasattr(email_service, 'send_password_reset_email')

        # UserFileManager solo maneja archivos
        assert hasattr(file_manager, 'save_to_file')
        assert hasattr(file_manager, 'load_from_file')


if __name__ == "__main__":
    pytest.main([__file__, "-v"])
