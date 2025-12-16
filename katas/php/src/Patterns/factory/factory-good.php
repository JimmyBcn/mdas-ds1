<?php
// Implementación del Patrón Factory: Creación centralizada de objetos
// ✅ Solución: Crear una fábrica que maneje la creación de objetos

// Interfaz común ✅
interface Notification {
    public function send(string $message): string;
}

// Implementaciones concretas ✅
class EmailNotification implements Notification {
    public function send(string $message): string {
        return "EMAIL: $message";
    }
}

class SMSNotification implements Notification {
    public function send(string $message): string {
        return "SMS: $message";
    }
}

class PushNotification implements Notification {
    public function send(string $message): string {
        return "PUSH: $message";
    }
}

// ✅ La fábrica centraliza la creación de objetos
class NotificationFactory {
    public static function create(string $type): Notification {
        return match($type) {
            'email' => new EmailNotification(),
            'sms' => new SMSNotification(),
            'push' => new PushNotification(),
            default => throw new Exception("Tipo de notificación desconocido: $type")
        };
    }
}

// ✅ El código cliente no conoce las clases concretas
class NotificationService {
    public function sendNotification(string $type, string $message): string {
        // ✅ La fábrica maneja la creación de objetos
        $notification = NotificationFactory::create($type);
        return $notification->send($message);
    }
}

// ✅ Beneficios:
// 1. Creación centralizada de objetos
// 2. Fácil agregar nuevos tipos de notificación (solo actualizar la fábrica)
// 3. El código cliente depende de la interfaz, no de clases concretas

echo "=== Solución con Patrón Factory ===" . PHP_EOL;
$service = new NotificationService();
echo $service->sendNotification("email", "Hola Mundo") . PHP_EOL;
echo $service->sendNotification("sms", "Hola Mundo") . PHP_EOL;
echo $service->sendNotification("push", "Hola Mundo") . PHP_EOL;

// ¡Agregar un nuevo tipo es fácil - solo cambiar la fábrica!
class SlackNotification implements Notification {
    public function send(string $message): string {
        return "SLACK: $message";
    }
}
