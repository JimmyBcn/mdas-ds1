# Violación del SRP: La clase User tiene demasiadas responsabilidades
# Problema: Esta clase maneja datos de usuario Y envío de emails Y operaciones de archivos


class User:
    def __init__(self, name: str, email: str):
        self.name = name
        self.email = email

    # Responsabilidad 1: Gestión de datos de usuario ✅ (pertenece aquí)
    def get_name(self) -> str:
        return self.name

    def get_email(self) -> str:
        return self.email

    # Responsabilidad 2: Operaciones de email ❌ (no pertenece aquí)
    def send_welcome_email(self) -> str:
        return f"Enviando email de bienvenida a {self.email}"

    def send_password_reset_email(self) -> str:
        return f"Enviando email de restablecimiento de contraseña a {self.email}"

    # Responsabilidad 3: Operaciones de archivos ❌ (no pertenece aquí)
    def save_to_file(self) -> str:
        return f"Guardando usuario {self.name} en archivo"

    def load_from_file(self) -> str:
        return "Cargando datos de usuario desde archivo"


# Problemas con este enfoque:
# 1. Si el sistema de email cambia, modificamos la clase User
# 2. Si el formato de archivo cambia, modificamos la clase User
# 3. La clase se vuelve grande y difícil de mantener
# 4. Difícil de probar las responsabilidades individuales

if __name__ == "__main__":
    user = User("Juan Pérez", "juan@ejemplo.com")
    print(user.send_welcome_email())
    print(user.save_to_file())
