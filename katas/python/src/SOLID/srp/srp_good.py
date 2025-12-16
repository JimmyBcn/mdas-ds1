# Cumplimiento del SRP: Cada clase tiene una única responsabilidad
# Solución: Clases separadas para diferentes responsabilidades


class User:
    def __init__(self, name: str, email: str):
        self.name = name
        self.email = email

    # Solo gestión de datos de usuario aquí ✅
    def get_name(self) -> str:
        return self.name

    def get_email(self) -> str:
        return self.email


# Clase separada para operaciones de email ✅
class EmailService:
    def send_welcome_email(self, user: User) -> str:
        return f"Enviando email de bienvenida a {user.get_email()}"

    def send_password_reset_email(self, user: User) -> str:
        return f"Enviando email de restablecimiento de contraseña a {user.get_email()}"


# Clase separada para operaciones de archivos ✅
class UserFileManager:
    def save_to_file(self, user: User) -> str:
        return f"Guardando usuario {user.get_name()} en archivo"

    def load_from_file(self, file_name: str) -> str:
        return f"Cargando datos de usuario desde {file_name}"


if __name__ == "__main__":
    # Ejemplo de uso
    user = User("Juan Pérez", "juan@ejemplo.com")
    email_service = EmailService()
    file_manager = UserFileManager()

    # Cada servicio maneja su propia responsabilidad
    print(email_service.send_welcome_email(user))
    print(file_manager.save_to_file(user))

    # Beneficios:
    # 1. Cada clase tiene solo una razón para cambiar
    # 2. Fácil de probar responsabilidades individuales
    # 3. Se pueden reutilizar servicios para diferentes tipos de usuario
    # 4. El código está más organizado y es más mantenible
