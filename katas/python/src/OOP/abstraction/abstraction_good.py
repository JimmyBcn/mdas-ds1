# Cumplimiento de Abstracción: Oculta detalles de implementación
# ✅ Solución: Interfaz simple que oculta la complejidad interna

from abc import ABC, abstractmethod


# ✅ Abstracción de proveedores de email
class EmailProvider(ABC):
    @abstractmethod
    def send(self, to: str, message: str) -> str:
        pass


class GmailSender(EmailProvider):
    def send(self, to: str, message: str) -> str:
        return f"Enviando con Gmail a {to}: {message}"


class OutlookSender(EmailProvider):
    def send(self, to: str, message: str) -> str:
        return f"Enviando con Outlook a {to}: {message}"


class EmailSender:
    # ✅ Detalles internos son privados
    def __init__(self, username: str = "", password: str = ""):
        self._smtp_server: str = "smtp.gmail.com"
        self._smtp_port: int = 587
        self._username: str = username
        self._password: str = password
        self._is_connected: bool = False

    # ✅ Método público simple que oculta toda la complejidad
    def send_email(self, to: str, subject: str, body: str) -> bool:
        try:
            # Internamente maneja todos los detalles
            self._connect()
            self._authenticate()
            message = self._build_message(to, subject, body)
            self._send(message)
            self._disconnect()

            print(f"Email enviado exitosamente a {to}")
            return True
        except Exception as error:
            print(f"Error al enviar email: {error}")
            return False

    # ✅ Métodos privados ocultan la implementación
    def _connect(self) -> None:
        print(f"Conectando a {self._smtp_server}:{self._smtp_port}...")
        self._is_connected = True

    def _authenticate(self) -> None:
        if not self._username or not self._password:
            raise Exception("Credenciales inválidas")
        print(f"Autenticando usuario {self._username}...")

    def _build_message(self, to: str, subject: str, body: str) -> str:
        return f"To: {to}\nSubject: {subject}\n\n{body}"

    def _send(self, message: str) -> None:
        if not self._is_connected:
            raise Exception("No conectado al servidor")
        print("Enviando mensaje...")

    def _disconnect(self) -> None:
        print("Desconectando del servidor...")
        self._is_connected = False

    # ✅ Método para usar proveedores polimórficos
    def send_email(self, provider: EmailProvider, to: str, message: str) -> str:
        return provider.send(to, message)


if __name__ == "__main__":
    # ✅ Usuario solo necesita saber la interfaz pública simple
    print("=== Cumplimiento de Abstracción ===")

    email_sender = EmailSender("usuario@gmail.com", "password123")

    # ✅ Un solo método simple - toda la complejidad está oculta
    email_sender.send_email(
        "destinatario@gmail.com", "Hola", "Este es el cuerpo del mensaje"
    )

    # ✅ Usuario no necesita conocer detalles internos como:
    # - Conexión al servidor
    # - Autenticación
    # - Construcción del mensaje
    # - Desconexión
    # Todo está abstraído en un método simple
