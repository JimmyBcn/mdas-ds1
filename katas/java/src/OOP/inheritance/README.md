# Inheritance - Herencia

Reutilizar código mediante relaciones padre-hijo.

## 🎯 Objetivo

Eliminar duplicación de código usando herencia.

## 📋 Problemas Comunes

### ❌ Sin Herencia

```java
class Dog {
    void eat() { ... } // Duplicado
    void sleep() { ... } // Duplicado
    void bark() { ... }
}

class Cat {
    void eat() { ... } // Duplicado
    void sleep() { ... } // Duplicado
    void meow() { ... }
}
```

### ✅ Con Herencia

```java
class Animal {
    void eat() { ... } // Una sola vez
    void sleep() { ... } // Una sola vez
}

class Dog extends Animal {
    void bark() { ... } // Específico
}

class Cat extends Animal {
    void meow() { ... } // Específico
}
```

## 🔧 Ejercicio

1. Abre `InheritanceBad.java`
2. Identifica código duplicado
3. Refactoriza en `InheritanceExercise.java`
4. Compara con `InheritanceGood.java`

## 🎯 Puntos Clave

- Clase base con comportamiento común
- `extends` para heredar
- `protected` para acceso en hijos
- Comportamiento específico en cada hijo
- `super()` para llamar al constructor del padre

## ⏱️ Tiempo Estimado

20 minutos

## Ejecutar Tests

### Java

```bash
# Compilar y ejecutar tests con JUnit
javac -cp .:junit-platform-console-standalone.jar InheritanceTests.java
java -jar junit-platform-console-standalone.jar --class-path . --scan-class-path

# O con Maven
mvn test

# O con Gradle
gradle test
```

### PHP

```bash
# Ejecutar tests con PHPUnit
phpunit InheritanceTests.php

# O todos los tests
phpunit .
```

``
