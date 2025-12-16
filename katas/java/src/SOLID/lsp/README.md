# Principio de Sustitución de Liskov (LSP) - Ejemplo

## 🎯 Objetivos de aprendizaje

- Entender cuándo la herencia rompe las expectativas de la clase padre
- Aprender a identificar violaciones LSP que causan errores en tiempo de ejecución
- Practicar el diseño de jerarquías de herencia apropiadas
- Ver cómo las interfaces resuelven desajustes de capacidades

## 📋 El problema: Sustitución rota

**Regla:** _Los objetos deben ser reemplazables con instancias de sus subtipos sin romper la funcionalidad_

### ¿Qué está mal aquí? 🚫

```java
class Bird {
    String fly() {
        return "¡Volando!";
    }
}

class Penguin extends Bird {
    @Override
    String fly() {
        throw new UnsupportedOperationException("¡Los pingüinos no pueden volar!"); // ❌ ¡SE ROMPE!
    }
}
```

**Problemas:**

- `Penguin` ES-UN `Bird` pero rompe el comportamiento de `fly()`
- El código que espera que cualquier `Bird` vuele fallará con `Penguin`
- Viola el principio de "sustitución"

## 🔧 Tu tarea

1. **Estudia** `LspBad.java` - identifica cómo Penguin rompe el contrato
2. **Implementa** tu solución en `LspExercise.java` antes de ver la propuesta
3. **Observa** `LspGood.java` y compara con tu solución

## 🎯 Puntos clave

- Herencia debe modelar relaciones "ES-UN" verdaderas
- Los hijos no deben romper comportamiento del padre
- Usa interfaces para capacidades diferentes
- La sustitución no debe causar errores

## ⏱️ Verificación rápida

Pregúntate:

- ¿Puedo sustituir el padre por el hijo sin problemas?
- ¿El hijo cambia el comportamiento esperado?
- ¿Necesito una interfaz en lugar de herencia?

## 🚀 Cómo ejecutar

```bash
# Compilar
javac SOLID/lsp/LspBad.java
javac SOLID/lsp/LspGood.java
javac SOLID/lsp/LspExercise.java

# Ejecutar
java SOLID.lsp.LspBad
java SOLID.lsp.LspGood
java SOLID.lsp.LspExercise
```

## Ejecutar Tests

### Java

```bash
# Compilar y ejecutar tests con JUnit
javac -cp .:junit-platform-console-standalone.jar LspTests.java
java -jar junit-platform-console-standalone.jar --class-path . --scan-class-path

# O con Maven
mvn test

# O con Gradle
gradle test
```

### PHP

```bash
# Ejecutar tests con PHPUnit
phpunit LspTests.php

# O todos los tests
phpunit .
```

``
