# Violación del Patrón Factory: El código cliente crea objetos directamente con cadenas if/else
# ❌ Problema: Lógica de creación de objetos dispersa por todas partes


# Clases de notificación simples
class EmailNotification:
    def send(self, message: str) -> str:
        return f"EMAIL: {message}"


class SMSNotification:
    def send(self, message: str) -> str:
        return f"SMS: {message}"


class PushNotification:
    def send(self, message: str) -> str:
        return f"PUSH: {message}"


# ❌ El código cliente tiene que conocer todas las clases concretas
class NotificationService:
    def send_notification(self, type: str, message: str) -> str:
        # ❌ Creación de objetos dispersa con cadenas if/else
        if type == "email":
            notification = EmailNotification()  # ❌ Creación directa
            return notification.send(message)
        elif type == "sms":
            notification = SMSNotification()  # ❌ Creación directa
            return notification.send(message)
        elif type == "push":
            notification = PushNotification()  # ❌ Creación directa
            return notification.send(message)
        else:
            raise ValueError(f"Tipo de notificación desconocido: {type}")


# ❌ Problemas:
# 1. Cada nuevo tipo de notificación requiere modificar NotificationService
# 2. Lógica de creación de objetos duplicada en toda la aplicación
# 3. Difícil de probar - el cliente conoce todas las clases concretas

if __name__ == "__main__":
    print("=== Violación del Patrón Factory ===")
    service = NotificationService()
    print(service.send_notification("email", "Hola Mundo"))
    print(service.send_notification("sms", "Hola Mundo"))
    print(service.send_notification("push", "Hola Mundo"))
