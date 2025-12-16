<?php
// Violación del Patrón Factory: El código cliente crea objetos directamente con cadenas if/else
// ❌ Problema: Lógica de creación de objetos dispersa por todas partes

// Clases de notificación simples
class EmailNotification {
    public function send(string $message): string {
        return "EMAIL: $message";
    }
}

class SMSNotification {
    public function send(string $message): string {
        return "SMS: $message";
    }
}

class PushNotification {
    public function send(string $message): string {
        return "PUSH: $message";
    }
}

// ❌ El código cliente tiene que conocer todas las clases concretas
class NotificationService {
    public function sendNotification(string $type, string $message): string {
        // ❌ Creación de objetos dispersa con cadenas if/else
        if ($type === "email") {
            $notification = new EmailNotification(); // ❌ Creación directa
            return $notification->send($message);
        } elseif ($type === "sms") {
            $notification = new SMSNotification(); // ❌ Creación directa
            return $notification->send($message);
        } elseif ($type === "push") {
            $notification = new PushNotification(); // ❌ Creación directa
            return $notification->send($message);
        } else {
            throw new Exception("Tipo de notificación desconocido: $type");
        }
    }
}

// ❌ Problemas:
// 1. Cada nuevo tipo de notificación requiere modificar NotificationService
// 2. Lógica de creación de objetos duplicada en toda la aplicación
// 3. Difícil de probar - el cliente conoce todas las clases concretas

echo "=== Violación del Patrón Factory ===" . PHP_EOL;
$service = new NotificationService();
echo $service->sendNotification("email", "Hola Mundo") . PHP_EOL;
echo $service->sendNotification("sms", "Hola Mundo") . PHP_EOL;
echo $service->sendNotification("push", "Hola Mundo") . PHP_EOL;
