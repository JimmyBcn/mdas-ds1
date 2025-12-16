# Implementación del Patrón Factory: Creación centralizada de objetos
# ✅ Solución: Crear una fábrica que maneje la creación de objetos

from abc import ABC, abstractmethod


# Interfaz común ✅
class Notification(ABC):
    @abstractmethod
    def send(self, message: str) -> str:
        pass


# Implementaciones concretas ✅
class EmailNotification(Notification):
    def send(self, message: str) -> str:
        return f"EMAIL: {message}"


class SMSNotification(Notification):
    def send(self, message: str) -> str:
        return f"SMS: {message}"


class PushNotification(Notification):
    def send(self, message: str) -> str:
        return f"PUSH: {message}"


# ✅ La fábrica centraliza la creación de objetos
class NotificationFactory:
    @staticmethod
    def create(type: str) -> Notification:
        if type == "email":
            return EmailNotification()
        elif type == "sms":
            return SMSNotification()
        elif type == "push":
            return PushNotification()
        else:
            raise ValueError(f"Tipo de notificación desconocido: {type}")


# ✅ El código cliente no conoce las clases concretas
class NotificationService:
    def send_notification(self, type: str, message: str) -> str:
        # ✅ La fábrica maneja la creación de objetos
        notification = NotificationFactory.create(type)
        return notification.send(message)


# ✅ Beneficios:
# 1. Creación centralizada de objetos
# 2. Fácil agregar nuevos tipos de notificación (solo actualizar la fábrica)
# 3. El código cliente depende de la interfaz, no de clases concretas

if __name__ == "__main__":
    print("=== Solución con Patrón Factory ===")
    service = NotificationService()
    print(service.send_notification("email", "Hola Mundo"))
    print(service.send_notification("sms", "Hola Mundo"))
    print(service.send_notification("push", "Hola Mundo"))

    # ¡Agregar un nuevo tipo es fácil - solo cambiar la fábrica!
    class SlackNotification(Notification):
        def send(self, message: str) -> str:
            return f"SLACK: {message}"
