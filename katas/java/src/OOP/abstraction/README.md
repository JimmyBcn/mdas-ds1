# Abstraction - Abstracción

Ocultar detalles de implementación y exponer solo lo esencial.

## 🎯 Objetivo

Simplificar interfaces ocultando la complejidad interna.

## 📋 Problemas Comunes

### ❌ Sin Abstracción

```java
emailSender.authenticate("user@email.com", "pass");
emailSender.connectToServer();
String msg = emailSender.buildMessage("to", "subj", "body");
emailSender.sendRawMessage(msg);
emailSender.disconnectFromServer();
// ¡5 pasos para enviar un email!
```

### ✅ Con Abstracción

```java
emailSender.sendEmail("to", "subject", "body");
// ¡Un solo paso!
```

## 🔧 Ejercicio

1. Abre `AbstractionBad.java`
2. Identifica los detalles expuestos innecesariamente
3. Refactoriza en `AbstractionExercise.java`
4. Compara con `AbstractionGood.java`

## 🎯 Puntos Clave

- Usa `private` para detalles internos
- Expón solo lo necesario con métodos públicos
- Interfaz simple = fácil de usar
- El usuario no debe conocer los detalles internos

## ⏱️ Tiempo Estimado

20 minutos

## Ejecutar Tests

### Java

```bash
# Compilar y ejecutar tests con JUnit
javac -cp .:junit-platform-console-standalone.jar AbstractionTests.java
java -jar junit-platform-console-standalone.jar --class-path . --scan-class-path

# O con Maven
mvn test

# O con Gradle
gradle test
```

### PHP

```bash
# Ejecutar tests con PHPUnit
phpunit AbstractionTests.php

# O todos los tests
phpunit .
```

``
