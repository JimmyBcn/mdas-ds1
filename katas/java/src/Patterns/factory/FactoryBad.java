package Patterns.factory;

// Violación del Patrón Factory: El código cliente crea objetos directamente con cadenas if/else
// ❌ Problema: Lógica de creación de objetos dispersa por todas partes

public class FactoryBad {
    public static void main(String[] args) {
        System.out.println("=== Violación del Patrón Factory ===");
        NotificationService service = new NotificationService();
        System.out.println(service.sendNotification("email", "Hola Mundo"));
        System.out.println(service.sendNotification("sms", "Hola Mundo"));
        System.out.println(service.sendNotification("push", "Hola Mundo"));
    }
}

// Clases de notificación simples
class EmailNotification {
    public String send(String message) {
        return "EMAIL: " + message;
    }
}

class SMSNotification {
    public String send(String message) {
        return "SMS: " + message;
    }
}

class PushNotification {
    public String send(String message) {
        return "PUSH: " + message;
    }
}

// ❌ El código cliente tiene que conocer todas las clases concretas
class NotificationService {
    public String sendNotification(String type, String message) {
        // ❌ Creación de objetos dispersa con cadenas if/else
        if ("email".equals(type)) {
            EmailNotification notification = new EmailNotification(); // ❌ Creación directa
            return notification.send(message);
        } else if ("sms".equals(type)) {
            SMSNotification notification = new SMSNotification(); // ❌ Creación directa
            return notification.send(message);
        } else if ("push".equals(type)) {
            PushNotification notification = new PushNotification(); // ❌ Creación directa
            return notification.send(message);
        } else {
            throw new IllegalArgumentException("Tipo de notificación desconocido: " + type);
        }
    }
}

// ❌ Problemas:
// 1. Cada nuevo tipo de notificación requiere modificar NotificationService
// 2. Lógica de creación de objetos duplicada en toda la aplicación
// 3. Difícil de probar - el cliente conoce todas las clases concretas
