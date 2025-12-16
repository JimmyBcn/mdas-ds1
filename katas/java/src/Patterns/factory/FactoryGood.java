package Patterns.factory;

// Implementación del Patrón Factory: Creación centralizada de objetos
// ✅ Solución: Crear una fábrica que maneje la creación de objetos

public class FactoryGood {
    public static void main(String[] args) {
        System.out.println("=== Solución con Patrón Factory ===");
        NotificationService service = new NotificationService();
        System.out.println(service.sendNotification("email", "Hola Mundo"));
        System.out.println(service.sendNotification("sms", "Hola Mundo"));
        System.out.println(service.sendNotification("push", "Hola Mundo"));
    }
}

// Interfaz común ✅
interface Notification {
    String send(String message);
}

// Implementaciones concretas ✅
class EmailNotification implements Notification {
    public String send(String message) {
        return "EMAIL: " + message;
    }
}

class SMSNotification implements Notification {
    public String send(String message) {
        return "SMS: " + message;
    }
}

class PushNotification implements Notification {
    public String send(String message) {
        return "PUSH: " + message;
    }
}

// ✅ La fábrica centraliza la creación de objetos
class NotificationFactory {
    public static Notification create(String type) {
        switch (type) {
            case "email":
                return new EmailNotification();
            case "sms":
                return new SMSNotification();
            case "push":
                return new PushNotification();
            default:
                throw new IllegalArgumentException("Tipo de notificación desconocido: " + type);
        }
    }
}

// ✅ El código cliente no conoce las clases concretas
class NotificationService {
    public String sendNotification(String type, String message) {
        // ✅ La fábrica maneja la creación de objetos
        Notification notification = NotificationFactory.create(type);
        return notification.send(message);
    }
}

// ✅ Beneficios:
// 1. Creación centralizada de objetos
// 2. Fácil agregar nuevos tipos de notificación (solo actualizar la fábrica)
// 3. El código cliente depende de la interfaz, no de clases concretas
