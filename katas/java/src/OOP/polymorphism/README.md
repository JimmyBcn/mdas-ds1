# Polymorphism - Polimorfismo

Diferentes clases responden al mismo mensaje de forma específica.

## 🎯 Objetivo

Eliminar condicionales usando comportamiento polimórfico.

## 📋 Problemas Comunes

### ❌ Sin Polimorfismo

```java
void makeSound(Animal animal) {
    if (animal.type == "dog") {
        System.out.println("Guau");
    } else if (animal.type == "cat") {
        System.out.println("Miau");
    }
    // ¡Muchos if/else!
}
```

### ✅ Con Polimorfismo

```java
abstract class Animal {
    abstract void makeSound();
}

class Dog extends Animal {
    void makeSound() { System.out.println("Guau"); }
}

// Uso: animal.makeSound(); // Sin if/else!
```

## 🔧 Ejercicio

1. Abre `PolymorphismBad.java`
2. Identifica los if/else repetitivos
3. Refactoriza en `PolymorphismExercise.java`
4. Compara con `PolymorphismGood.java`

## 🎯 Puntos Clave

- Clase `abstract` con métodos abstractos
- Cada hijo implementa su versión
- Código cliente usa tipo base
- Sin if/else ni switch
- Fácil agregar nuevos tipos

## ⏱️ Tiempo Estimado

20 minutos

## Ejecutar Tests

### Java

```bash
# Compilar y ejecutar tests con JUnit
javac -cp .:junit-platform-console-standalone.jar PolymorphismTests.java
java -jar junit-platform-console-standalone.jar --class-path . --scan-class-path

# O con Maven
mvn test

# O con Gradle
gradle test
```

### PHP

```bash
# Ejecutar tests con PHPUnit
phpunit PolymorphismTests.php

# O todos los tests
phpunit .
```

``
