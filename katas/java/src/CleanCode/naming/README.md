# Naming - Nombrado Descriptivo

Aprende a crear nombres de variables, funciones y clases que revelen su intención.

## 🎯 Objetivo

Eliminar números mágicos, strings mágicos, encodings y nombres poco claros del código.

## 📋 Problemas Comunes

### ❌ Mal Nombrado

```java
int d; // ¿días? ¿distancia? ¿duración?
Set<String> userList; // ¡Información falsa! No es una List
String strFirstName; // Codificación innecesaria
if (user.age < 18) // Número mágico
```

### ✅ Buen Nombrado

```java
int daysUntilExpiration;
Set<String> activeUsers; // Correcto: es un Set
String firstName; // Sin prefijo innecesario
if (user.age < MINIMUM_AGE) // Constante descriptiva
```

## 🔧 Ejercicio

1. Abre `NamingBad.java`
2. Identifica todos los problemas de nombrado
3. Refactoriza en `NamingExercise.java`
4. Compara con `NamingGood.java`

## 🎯 Puntos Clave

- Los nombres deben revelar la intención
- No usar información falsa (userList para un Set)
- Nombres pronunciables (currentDateString vs yyyymmdstr)
- Sin encodings (firstName vs strFirstName)
- Constantes descriptivas en lugar de magic numbers

## ⏱️ Tiempo Estimado

20 minutos

## Ejecutar Tests

### Java

```bash
# Compilar y ejecutar tests con JUnit
javac -cp .:junit-platform-console-standalone.jar NamingTests.java
java -jar junit-platform-console-standalone.jar --class-path . --scan-class-path

# O con Maven
mvn test

# O con Gradle
gradle test
```

### PHP

```bash
# Ejecutar tests con PHPUnit
phpunit NamingTests.php

# O todos los tests
phpunit .
```

``

## Ejecutar Tests

### Java

```bash
# Compilar y ejecutar tests con JUnit
javac -cp .:junit-platform-console-standalone.jar NamingTests.java
java -jar junit-platform-console-standalone.jar --class-path . --scan-class-path

# O con Maven
mvn test

# O con Gradle
gradle test
```

### PHP

```bash
# Ejecutar tests con PHPUnit
phpunit NamingTests.php

# O todos los tests
phpunit .
```

``
