# Factory Pattern - Patrón Fábrica

Centralizar la creación de objetos en una fábrica.

## 🎯 Objetivo

Eliminar la lógica de creación dispersa usando una fábrica.

## 📋 Ejemplo

### ❌ Sin Factory

```java
if (type.equals("email")) {
    return new EmailNotification();
} else if (type.equals("sms")) {
    return new SMSNotification();
}
// Repetido en múltiples lugares
```

### ✅ Con Factory

```java
class NotificationFactory {
    static Notification create(String type) {
        switch(type) {
            case "email": return new EmailNotification();
            case "sms": return new SMSNotification();
        }
    }
}
```

## 🔧 Ejercicio

1. Abre `FactoryBad.java`
2. Identifica creación dispersa
3. Refactoriza en `FactoryExercise.java`
4. Compara con `FactoryGood.java`

## 🎯 Puntos Clave

- Creación centralizada
- Interfaz común
- Fácil agregar nuevos tipos
- Cliente independiente de concretos

## ⏱️ Tiempo Estimado

20 minutos

## Ejecutar Tests

### Java

```bash
# Compilar y ejecutar tests con JUnit
javac -cp .:junit-platform-console-standalone.jar FactoryTests.java
java -jar junit-platform-console-standalone.jar --class-path . --scan-class-path

# O con Maven
mvn test

# O con Gradle
gradle test
```

### PHP

```bash
# Ejecutar tests con PHPUnit
phpunit FactoryTests.php

# O todos los tests
phpunit .
```

``
