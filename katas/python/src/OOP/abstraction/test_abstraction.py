"""
Tests para el concepto de Abstracción en OOP
Valida tanto las implementaciones malas como las buenas
"""

import pytest
from abstraction_bad import EmailSender as EmailSenderBad
from abstraction_good import EmailSender as EmailSenderGood, GmailSender, OutlookSender


class TestAbstractionBad:
    """Tests para la implementación con poca abstracción"""

    def test_send_email_gmail(self):
        """Verifica el envío de email usando Gmail"""
        sender = EmailSenderBad()
        result = sender.send_email("gmail", "test@example.com", "Hello")
        assert "Enviando con Gmail" in result

    def test_send_email_outlook(self):
        """Verifica el envío de email usando Outlook"""
        sender = EmailSenderBad()
        result = sender.send_email("outlook", "test@example.com", "Hello")
        assert "Enviando con Outlook" in result

    def test_send_email_yahoo(self):
        """Verifica el envío de email usando Yahoo"""
        sender = EmailSenderBad()
        result = sender.send_email("yahoo", "test@example.com", "Hello")
        assert "Enviando con Yahoo" in result


class TestAbstractionGood:
    """Tests para la implementación con buena abstracción"""

    def test_gmail_sender(self):
        """Verifica el envío con implementación de Gmail"""
        sender = GmailSender()
        result = sender.send("test@example.com", "Hello")
        assert "Enviando con Gmail" in result

    def test_outlook_sender(self):
        """Verifica el envío con implementación de Outlook"""
        sender = OutlookSender()
        result = sender.send("test@example.com", "Hello")
        assert "Enviando con Outlook" in result

    def test_polymorphism_through_abstraction(self):
        """Verifica que la abstracción permite polimorfismo"""
        email_service = EmailSenderGood()

        # Prueba con diferentes implementaciones
        gmail = GmailSender()
        outlook = OutlookSender()

        result1 = email_service.send_email(gmail, "test@example.com", "Hello")
        result2 = email_service.send_email(
            outlook, "test@example.com", "Hello")

        assert "Gmail" in result1
        assert "Outlook" in result2

    def test_extensibility(self):
        """Verifica que se pueden agregar nuevas implementaciones fácilmente"""
        from abstraction_good import EmailProvider

        class YahooSender(EmailProvider):
            def send(self, to: str, message: str) -> str:
                return f"Enviando con Yahoo a {to}: {message}"

        email_service = EmailSenderGood()
        yahoo = YahooSender()
        result = email_service.send_email(yahoo, "test@example.com", "Hello")
        assert "Yahoo" in result


if __name__ == "__main__":
    pytest.main([__file__, "-v"])
