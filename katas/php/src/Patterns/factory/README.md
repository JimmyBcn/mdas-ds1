# Patrón Factory

## 🎯 Objetivo del Patrón

Encapsular la creación de objetos en un lugar centralizado.

## 📖 El problema (factory-bad.php)

Creación de objetos dispersa con condicionales repetidos:

```php
class NotificationService {
    public function sendNotification($type, $message) {
        if ($type === 'email') {
            $notification = new EmailNotification();
            return $notification->send($message);
        } elseif ($type === 'sms') {
            $notification = new SMSNotification();
            return $notification->send($message);
        }
        // ❌ Creación dispersa y repetitiva
    }
}
```

### ¿Por qué es esto malo?

- Lógica de creación duplicada
- Difícil de mantener y extender
- Cliente conoce todas las clases concretas
- Viola el principio Open/Closed

## ✅ La solución (factory-good.php)

Centralizar la creación en una **Factory**:

```php
interface Notification {
    public function send($message);
}

class NotificationFactory {
    public static function create($type): Notification {
        return match($type) {
            'email' => new EmailNotification(),
            'sms' => new SMSNotification(),
            'push' => new PushNotification(),
            default => throw new Exception("Unknown type")
        };
    }
}

// Cliente solo usa la fábrica
$notification = NotificationFactory::create('email');
```

### ¿Por qué es esto mejor?

- **Centralizada**: Un solo lugar para creación
- **Mantenible**: Fácil agregar nuevos tipos
- **Desacoplada**: Cliente depende de interfaz
- **Testeable**: Fácil usar mocks

## 🔧 Tu tarea

1. **Estudia** `factory-bad.php` - identifica creación dispersa
2. **Implementa** tu solución en `factory-exercise.php`
3. **Observa** `factory-good.php` y compara

## 🎯 Puntos clave

- Interfaz común para productos
- Fábrica centraliza creación
- Cliente depende de abstracción
- Fácil agregar nuevos tipos

## ⏱️ Verificación rápida

Pregúntate:

- ¿La creación está dispersa en múltiples lugares?
- ¿Puedo centralizar en una fábrica?
- ¿Hay una interfaz común?
