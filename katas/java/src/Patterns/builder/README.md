# Patrón Builder - Ejemplo

## 🎯 Objetivos de aprendizaje

- Entender el problema del "constructor telescópico"
- Aprender cómo el patrón Builder proporciona creación de objetos fluida y legible
- Practicar encadenamiento de métodos con "return this"
- Ver cómo los builders manejan parámetros opcionales elegantemente

## 📋 El problema: Demasiados Parámetros

**Objetivo:** _Hacer que la creación de objetos complejos sea legible y flexible_

### ¿Qué está mal aquí? 🚫

```java
Pizza pizza = new Pizza(
    "grande",        // size
    "delgada",       // crust
    "tomate",        // sauce
    "mozzarella",    // cheese
    new String[]{"albahaca", "tomates"}, // toppings
    false,           // extraCheese (¿qué significa este booleano?)
    0                // spicyLevel (¡confuso!)
);
```

**Problemas:**

- Difícil recordar el orden de los parámetros
- Debe especificar parámetros opcionales incluso cuando no se necesitan
- No está claro qué significan los parámetros booleanos
- Fácil confundir el orden de los parámetros

## 🔧 Tu tarea

1. **Estudia** `BuilderBad.java` - identifica el constructor confuso
2. **Implementa** tu solución en `BuilderExercise.java` antes de ver la propuesta
3. **Observa** `BuilderGood.java` y compara con tu solución

## 🎯 Puntos clave

- Separa construcción de representación
- Interfaz fluida hace código auto-documentado
- Encadenamiento de métodos con `return this`
- Parámetros opcionales solo cuando se necesitan

## ⏱️ Verificación rápida

Pregúntate:

- ¿Tengo muchos parámetros en el constructor?
- ¿Es confuso el orden de los parámetros?
- ¿Necesito hacer la construcción más legible?

## 🚀 Cómo ejecutar

```bash
# Compilar
javac Patterns/builder/BuilderBad.java
javac Patterns/builder/BuilderGood.java
javac Patterns/builder/BuilderExercise.java

# Ejecutar
java Patterns.builder.BuilderBad
java Patterns.builder.BuilderGood
java Patterns.builder.BuilderExercise
```

## Ejecutar Tests

### Java

```bash
# Compilar y ejecutar tests con JUnit
javac -cp .:junit-platform-console-standalone.jar BuilderTests.java
java -jar junit-platform-console-standalone.jar --class-path . --scan-class-path

# O con Maven
mvn test

# O con Gradle
gradle test
```

### PHP

```bash
# Ejecutar tests con PHPUnit
phpunit BuilderTests.php

# O todos los tests
phpunit .
```

``
