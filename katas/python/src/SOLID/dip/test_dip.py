"""
Tests para el principio DIP (Dependency Inversion Principle)
Valida tanto las implementaciones malas como las buenas
"""

import pytest
from dip_bad import EmailNotification as EmailNotificationBad, NotificationService as NotificationServiceBad
from dip_good import EmailNotification as EmailNotificationGood, SMSNotification, NotificationService as NotificationServiceGood


class TestDIPBad:
    """Tests para la implementación que viola DIP"""

    def test_email_notification(self):
        """Verifica el envío de notificación por email"""
        email = EmailNotificationBad()
        assert email.send("Test message") == "Enviando email: Test message"

    def test_notification_service_depends_on_concrete_class(self):
        """Demuestra la violación de DIP: dependencia de clase concreta"""
        service = NotificationServiceBad()
        result = service.send("Test message")
        assert "Enviando email" in result

        # Problema: NotificationService depende directamente de EmailNotification
        # Si queremos cambiar a SMS, tenemos que modificar NotificationService


class TestDIPGood:
    """Tests para la implementación que cumple con DIP"""

    def test_email_notification(self):
        """Verifica el envío de notificación por email"""
        email = EmailNotificationGood()
        assert email.send("Test message") == "Enviando email: Test message"

    def test_sms_notification(self):
        """Verifica el envío de notificación por SMS"""
        sms = SMSNotification()
        assert sms.send("Test message") == "Enviando SMS: Test message"

    def test_notification_service_with_email(self):
        """Verifica el servicio con notificación por email"""
        email_notifier = EmailNotificationGood()
        service = NotificationServiceGood(email_notifier)
        result = service.send("Test message")
        assert "Enviando email" in result

    def test_notification_service_with_sms(self):
        """Verifica el servicio con notificación por SMS"""
        sms_notifier = SMSNotification()
        service = NotificationServiceGood(sms_notifier)
        result = service.send("Test message")
        assert "Enviando SMS" in result

    def test_dependency_injection(self):
        """Verifica que se puede cambiar la dependencia sin modificar el servicio"""
        # Podemos inyectar diferentes implementaciones
        email_service = NotificationServiceGood(EmailNotificationGood())
        sms_service = NotificationServiceGood(SMSNotification())

        # Ambos servicios funcionan con diferentes notificadores
        assert "email" in email_service.send("Test").lower()
        assert "sms" in sms_service.send("Test").lower()

    def test_extensibility(self):
        """Verifica que se pueden agregar nuevas implementaciones sin modificar el servicio"""
        from dip_good import Notifier

        # Nueva implementación: Push Notification
        class PushNotification(Notifier):
            def send(self, message: str) -> str:
                return f"Enviando push: {message}"

        push_notifier = PushNotification()
        service = NotificationServiceGood(push_notifier)
        result = service.send("Test message")
        assert "Enviando push" in result


if __name__ == "__main__":
    pytest.main([__file__, "-v"])
