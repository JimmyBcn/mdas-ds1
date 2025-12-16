# Violación de Abstracción: Expone detalles de implementación innecesarios
# ❌ Problema: El usuario debe conocer cómo funciona internamente la clase


class EmailSender:
    def __init__(self):
        self.smtp_server: str = "smtp.gmail.com"
        self.smtp_port: int = 587
        self.username: str = ""
        self.password: str = ""
        self.is_connected: bool = False
        self.connection_attempts: int = 0
        self.last_error: str = ""

    # ❌ Usuario debe manejar todos los detalles de la conexión
    def connect_to_server(self) -> bool:
        print(f"Conectando a {self.smtp_server}:{self.smtp_port}...")
        self.connection_attempts += 1

        # Simulación de conexión
        if self.username and self.password:
            self.is_connected = True
            self.last_error = ""
            return True
        else:
            self.last_error = "Credenciales inválidas"
            self.is_connected = False
            return False

    # ❌ Usuario debe manejar autenticación manualmente
    def authenticate(self, username: str, password: str) -> bool:
        self.username = username
        self.password = password
        print(f"Autenticando usuario {username}...")
        return len(username) > 0 and len(password) > 0

    # ❌ Usuario debe construir el mensaje manualmente
    def build_message(self, to: str, subject: str, body: str) -> str:
        return f"To: {to}\nSubject: {subject}\n\n{body}"

    # ❌ Usuario debe enviar mensaje después de conectar y construir
    def send_raw_message(self, message: str) -> bool:
        if not self.is_connected:
            self.last_error = "No conectado al servidor"
            return False
        print(f"Enviando mensaje:\n{message}")
        return True

    # ❌ Usuario debe desconectar manualmente
    def disconnect_from_server(self) -> None:
        print("Desconectando del servidor...")
        self.is_connected = False

    # ❌ Método con lógica condicional para diferentes proveedores
    def send_email(self, provider: str, to: str, message: str) -> str:
        if provider == "gmail":
            return f"Enviando con Gmail a {to}: {message}"
        elif provider == "outlook":
            return f"Enviando con Outlook a {to}: {message}"
        elif provider == "yahoo":
            return f"Enviando con Yahoo a {to}: {message}"
        else:
            return f"Proveedor desconocido: {provider}"


if __name__ == "__main__":
    # ❌ Usuario debe conocer TODOS los pasos internos
    print("=== Violación de Abstracción ===")

    email_sender = EmailSender()

    # ❌ Muchos pasos manuales y conocimiento de detalles internos
    email_sender.authenticate("usuario@gmail.com", "password123")
    email_sender.connect_to_server()

    message = email_sender.build_message(
        "destinatario@gmail.com", "Hola", "Este es el cuerpo del mensaje"
    )

    email_sender.send_raw_message(message)
    email_sender.disconnect_from_server()

    # ❌ Si algo falla, el usuario debe verificar propiedades internas
    if email_sender.last_error:
        print(f"Error: {email_sender.last_error}")
