# SRP - Single Responsibility Principle

Una clase debe tener una única razón para cambiar.

## 🎯 Objetivo

Separar responsabilidades en clases enfocadas.

## 📋 Ejemplo

### ❌ Violación SRP

```java
class User {
    void saveToDatabase() { } // Responsabilidad 1
    void sendEmail() { } // Responsabilidad 2
    void generateReport() { } // Responsabilidad 3
}
```

### ✅ Cumplimiento SRP

```java
class User { } // Solo datos
class UserRepository { void save(User u) { } }
class EmailService { void send(User u) { } }
class ReportGenerator { void generate(User u) { } }
```

## 🔧 Ejercicio

1. Abre `SrpBad.java`
2. Identifica responsabilidades
3. Refactoriza en `SrpExercise.java`
4. Compara con `SrpGood.java`

## 🎯 Puntos Clave

- Una clase = Una responsabilidad
- Fácil de mantener y probar
- Cambios localizados

## ⏱️ Tiempo Estimado

20 minutos

## Ejecutar Tests

### Java

```bash
# Compilar y ejecutar tests con JUnit
javac -cp .:junit-platform-console-standalone.jar SrpTests.java
java -jar junit-platform-console-standalone.jar --class-path . --scan-class-path

# O con Maven
mvn test

# O con Gradle
gradle test
```

### PHP

```bash
# Ejecutar tests con PHPUnit
phpunit SrpTests.php

# O todos los tests
phpunit .
```

``
