# Principio Abierto/Cerrado (OCP)

## 🎯 Definición del Principio

> "Las entidades de software deben estar abiertas para extensión pero cerradas para modificación"

Las clases deben estar **abiertas para extensión** (puedes agregar nueva funcionalidad) pero **cerradas para modificación** (no deberías cambiar el código existente).

## 📖 El problema (OcpBad.java)

La clase `Communication` debe ser **modificada** cada vez que agregamos un nuevo animal:

```java
class Communication {
    public String communicate(Object animal) {
        if (animal instanceof Dog) {
            return ((Dog) animal).makeSound();
        } else if (animal instanceof Cat) {
            return ((Cat) animal).makeSound();
        } else if (animal instanceof Fox) {
            return ((Fox) animal).makeSound();
        } else {
            throw new IllegalArgumentException("Animal desconocido"); // ❌ Debe agregar nuevo if/else
        }
    }
}
```

### ¿Por qué es esto malo?

- Agregar `Cow` requiere **modificar** `Communication` ❌
- Debe agregar nuevas ramas `if/else` ❌
- Riesgo de romper el código existente ❌
- Viola la regla "cerrado para modificación" ❌

## ✅ La solución (OcpGood.java)

Usar una **interfaz** para que se puedan agregar nuevos animales **sin cambiar** el código existente:

```java
// Definir qué deben hacer todos los animales ✅
interface Communicable {
    String communicate();
}

// Cada animal sabe cómo comunicarse ✅
class Dog implements Communicable {
    public String communicate() {
        return "woof woof";
    }
}

// ¡El comunicador nunca necesita cambiar! ✅
class Communication {
    public String communicate(Communicable animal) {
        return animal.communicate(); // Solo llamar al método de la interfaz
    }
}

// ¡Agregar nuevos animales sin modificar código existente! ✅
class Cow implements Communicable {
    public String communicate() {
        return "moo moo";
    }
}
```

### ¿Por qué es esto mejor?

- **Abierto para extensión**: Fácil de agregar nuevos animales ✅
- **Cerrado para modificación**: Nunca cambiar código existente ✅
- Sin riesgo de romper funcionalidad existente ✅
- Cada animal gestiona su propia comunicación ✅

## 🔧 Tu tarea

1. **Estudia** `OcpBad.java` - ve cómo agregar animales requiere modificación
2. **Implementa** tu solución en `OcpExercise.java` antes de ver la propuesta
3. **Observa** `OcpGood.java` y compara con tu solución

## 🎯 Puntos clave

- Abierto para extensión, cerrado para modificación
- Usa interfaces para comportamiento polimórfico
- Nuevas funcionalidades sin cambiar código existente
- Reduce riesgo de romper lo que funciona

## ⏱️ Verificación rápida

Pregúntate:

- ¿Qué comportamiento comparten las clases?
- ¿Cómo hago el código extensible sin modificarlo?
- ¿Qué interfaz necesito?

## 🚀 Cómo ejecutar

```bash
# Compilar
javac SOLID/ocp/OcpBad.java
javac SOLID/ocp/OcpGood.java
javac SOLID/ocp/OcpExercise.java

# Ejecutar
java SOLID.ocp.OcpBad
java SOLID.ocp.OcpGood
java SOLID.ocp.OcpExercise
```

## Ejecutar Tests

### Java

```bash
# Compilar y ejecutar tests con JUnit
javac -cp .:junit-platform-console-standalone.jar OcpTests.java
java -jar junit-platform-console-standalone.jar --class-path . --scan-class-path

# O con Maven
mvn test

# O con Gradle
gradle test
```

### PHP

```bash
# Ejecutar tests con PHPUnit
phpunit OcpTests.php

# O todos los tests
phpunit .
```

``
