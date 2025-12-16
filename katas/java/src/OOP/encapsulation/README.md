# Encapsulation - Encapsulamiento

Proteger el estado interno y controlar el acceso a los datos.

## 🎯 Objetivo

Garantizar que el objeto siempre esté en un estado válido mediante validaciones.

## 📋 Problemas Comunes

### ❌ Sin Encapsulamiento

```java
public class BankAccount {
    public double balance; // ¡Cualquiera puede modificarlo!
}

account.balance = -5000; // ¡Balance negativo!
```

### ✅ Con Encapsulamiento

```java
public class BankAccount {
    private double balance; // Protegido

    public boolean withdraw(double amount) {
        if (amount > balance) {
            return false; // Validación
        }
        balance -= amount;
        return true;
    }
}
```

## 🔧 Ejercicio

1. Abre `EncapsulationBad.java`
2. Identifica datos sin protección
3. Refactoriza en `EncapsulationExercise.java`
4. Compara con `EncapsulationGood.java`

## 🎯 Puntos Clave

- Propiedades `private` para proteger datos
- Getters para lectura controlada
- Setters con validaciones (o métodos específicos)
- `final` para valores inmutables
- Copias defensivas para colecciones

## ⏱️ Tiempo Estimado

20 minutos

## Ejecutar Tests

### Java

```bash
# Compilar y ejecutar tests con JUnit
javac -cp .:junit-platform-console-standalone.jar EncapsulationTests.java
java -jar junit-platform-console-standalone.jar --class-path . --scan-class-path

# O con Maven
mvn test

# O con Gradle
gradle test
```

### PHP

```bash
# Ejecutar tests con PHPUnit
phpunit EncapsulationTests.php

# O todos los tests
phpunit .
```

``
