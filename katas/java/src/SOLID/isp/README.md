# Principio de Segregación de Interfaces (ISP) - Ejemplo

## 🎯 Objetivos de aprendizaje

- Entender qué hace que una interfaz sea "ancha" o "sobrecargada"
- Aprender a identificar implementaciones forzadas que no deberían existir
- Practicar la división de interfaces grandes en otras más pequeñas y enfocadas
- Ver cómo ISP mejora la seguridad en tiempo de compilación

## 📋 El problema: Interfaces anchas

**Regla:** _Ningún cliente debería ser forzado a implementar métodos que no usa_

### ¿Qué está mal aquí? 🚫

```java
// Interfaz ancha - fuerza a TODOS los trabajadores a implementar TODOS los métodos
interface Worker {
    String work();
    String eat(); // ❌ ¡Los robots no comen!
    String sleep(); // ❌ ¡Los robots no duermen!
}
```

**Problemas:**

- La clase `Robot` se ve forzada a implementar `eat()` y `sleep()`
- Debe escribir métodos sin sentido o lanzar errores
- Viola el principio de interfaces limpias y enfocadas

## 🔧 Tu tarea

1. **Estudia** `IspBad.java` - identifica la interfaz "ancha"
2. **Implementa** tu solución en `IspExercise.java` antes de ver la propuesta
3. **Observa** `IspGood.java` y compara con tu solución

## 🎯 Puntos clave

- No fuerces implementaciones innecesarias
- Divide interfaces grandes en específicas
- Cada clase implementa solo lo que necesita
- Mejora limpieza y seguridad del código

## ⏱️ Verificación rápida

Pregúntate:

- ¿Esta interfaz obliga a implementar métodos no usados?
- ¿Puedo dividirla en interfaces más pequeñas?
- ¿Cada clase necesita todos estos métodos?

## 🚀 Cómo ejecutar

```bash
# Compilar
javac SOLID/isp/IspBad.java
javac SOLID/isp/IspGood.java
javac SOLID/isp/IspExercise.java

# Ejecutar
java SOLID.isp.IspBad
java SOLID.isp.IspGood
java SOLID.isp.IspExercise
```

## Ejecutar Tests

### Java

```bash
# Compilar y ejecutar tests con JUnit
javac -cp .:junit-platform-console-standalone.jar IspTests.java
java -jar junit-platform-console-standalone.jar --class-path . --scan-class-path

# O con Maven
mvn test

# O con Gradle
gradle test
```

### PHP

```bash
# Ejecutar tests con PHPUnit
phpunit IspTests.php

# O todos los tests
phpunit .
```

``
