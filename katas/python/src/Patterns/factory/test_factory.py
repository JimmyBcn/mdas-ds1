"""
Tests para el patrón Factory
Valida tanto las implementaciones malas como las buenas
"""

import pytest
from factory_bad import NotificationService as NotificationServiceBad, EmailNotification, SMSNotification, PushNotification
from factory_good import NotificationService as NotificationServiceGood, NotificationFactory


class TestFactoryBad:
    """Tests para la implementación sin patrón Factory"""

    def test_send_email_notification(self):
        """Verifica el envío de notificación por email"""
        service = NotificationServiceBad()
        result = service.send_notification("email", "Test message")
        assert "EMAIL: Test message" in result

    def test_send_sms_notification(self):
        """Verifica el envío de notificación por SMS"""
        service = NotificationServiceBad()
        result = service.send_notification("sms", "Test message")
        assert "SMS: Test message" in result

    def test_send_push_notification(self):
        """Verifica el envío de notificación push"""
        service = NotificationServiceBad()
        result = service.send_notification("push", "Test message")
        assert "PUSH: Test message" in result

    def test_unknown_notification_type(self):
        """Verifica el manejo de tipos desconocidos"""
        service = NotificationServiceBad()
        with pytest.raises(ValueError):
            service.send_notification("unknown", "Test message")


class TestFactoryGood:
    """Tests para la implementación con patrón Factory"""

    def test_factory_creates_email_notification(self):
        """Verifica que la fábrica crea notificaciones de email"""
        notification = NotificationFactory.create("email")
        result = notification.send("Test message")
        assert "EMAIL: Test message" in result

    def test_factory_creates_sms_notification(self):
        """Verifica que la fábrica crea notificaciones SMS"""
        notification = NotificationFactory.create("sms")
        result = notification.send("Test message")
        assert "SMS: Test message" in result

    def test_factory_creates_push_notification(self):
        """Verifica que la fábrica crea notificaciones push"""
        notification = NotificationFactory.create("push")
        result = notification.send("Test message")
        assert "PUSH: Test message" in result

    def test_factory_unknown_type(self):
        """Verifica que la fábrica maneja tipos desconocidos"""
        with pytest.raises(ValueError):
            NotificationFactory.create("unknown")

    def test_notification_service_uses_factory(self):
        """Verifica que el servicio usa la fábrica para crear notificaciones"""
        service = NotificationServiceGood()

        result_email = service.send_notification("email", "Test 1")
        result_sms = service.send_notification("sms", "Test 2")
        result_push = service.send_notification("push", "Test 3")

        assert "EMAIL" in result_email
        assert "SMS" in result_sms
        assert "PUSH" in result_push

    def test_extensibility(self):
        """Verifica que se pueden agregar nuevos tipos fácilmente"""
        from factory_good import Notification

        class SlackNotification(Notification):
            def send(self, message: str) -> str:
                return f"SLACK: {message}"

        # Solo necesitamos actualizar la fábrica, no el servicio
        original_create = NotificationFactory.create

        def new_create(type: str):
            if type == "slack":
                return SlackNotification()
            return original_create(type)

        NotificationFactory.create = staticmethod(new_create)

        notification = NotificationFactory.create("slack")
        assert "SLACK" in notification.send("Test")


if __name__ == "__main__":
    pytest.main([__file__, "-v"])
