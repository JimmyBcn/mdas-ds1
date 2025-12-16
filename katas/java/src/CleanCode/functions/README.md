# Functions - Funciones Pequeñas y Enfocadas

Aprende a crear funciones que hacen una sola cosa y la hacen bien.

## 🎯 Objetivo

Dividir funciones grandes en funciones pequeñas con una sola responsabilidad.

## 📋 Problemas Comunes

### ❌ Funciones Mal Diseñadas

```java
public void processUserScore(User user, int newScore, int timeInSeconds) {
    // Calcula bonus
    // Actualiza score
    // Envía notificación
    // Guarda en log
    // ¡Hace demasiado!
}
```

### ✅ Funciones Bien Diseñadas

```java
public void processUserScore(User user, int newScore, int timeInSeconds) {
    int bonus = calculateBonus(timeInSeconds);
    int finalScore = user.score + newScore + bonus;
    updateScore(user, finalScore);
    sendNotification(user);
    logActivity(user, newScore);
}
```

## 🔧 Ejercicio

1. Abre `FunctionsBad.java`
2. Identifica las múltiples responsabilidades
3. Refactoriza en `FunctionsExercise.java`
4. Compara con `FunctionsGood.java`

## 🎯 Puntos Clave

- Cada función hace una sola cosa
- Funciones pequeñas (5-20 líneas)
- Mismo nivel de abstracción
- Sin efectos secundarios inesperados
- Nombres descriptivos que revelan la intención

## ⏱️ Tiempo Estimado

20 minutos

## Ejecutar Tests

### Java

```bash
# Compilar y ejecutar tests con JUnit
javac -cp .:junit-platform-console-standalone.jar FunctionsTests.java
java -jar junit-platform-console-standalone.jar --class-path . --scan-class-path

# O con Maven
mvn test

# O con Gradle
gradle test
```

### PHP

```bash
# Ejecutar tests con PHPUnit
phpunit FunctionsTests.php

# O todos los tests
phpunit .
```

``
