# Patrón Adapter - Ejemplo

## 🎯 Objetivos de aprendizaje

- Entender cuándo necesitas trabajar con interfaces incompatibles
- Aprender cómo los adaptadores convierten una interfaz en otra
- Practicar la creación de adaptadores que envuelven clases existentes
- Ver cómo los adaptadores permiten reutilización de código sin modificación

## 📋 El problema: Interfaces Incompatibles

**Objetivo:** _Hacer que clases incompatibles trabajen juntas sin modificarlas_

### ¿Qué está mal aquí? 🚫

```java
class MediaPlayer {
    String playAudio(String fileType, String filename) {
        if (fileType.equals("mp3")) {
            MP3Player player = new MP3Player();
            return player.playMP3(filename); // ❌ Nombre de método diferente
        } else if (fileType.equals("wav")) {
            WAVPlayer player = new WAVPlayer();
            return player.playWAVFile(filename); // ❌ Nombre de método diferente
        }
    }
}
```

**Problemas:**

- Cada reproductor de terceros tiene nombres de métodos diferentes
- El código cliente debe conocer cada interfaz específica
- No se puede tratar todos los reproductores de audio de la misma manera
- Agregar nuevos formatos requiere modificar código existente

## 🔧 Tu tarea

1. **Estudia** `AdapterBad.java` - identifica las interfaces incompatibles
2. **Implementa** tu solución en `AdapterExercise.java` antes de ver la propuesta
3. **Observa** `AdapterGood.java` y compara con tu solución

## 🎯 Puntos clave

- Convierte una interfaz en otra
- Permite reutilizar código sin modificarlo
- Proporciona interfaz uniforme a clientes
- Patrón envoltorio para compatibilidad

## ⏱️ Verificación rápida

Pregúntate:

- ¿Necesito integrar código con interfaz diferente?
- ¿Puedo crear un envoltorio para unificar?
- ¿Es mejor adaptar que modificar?

## 🚀 Cómo ejecutar

```bash
# Compilar
javac Patterns/adapter/AdapterBad.java
javac Patterns/adapter/AdapterGood.java
javac Patterns/adapter/AdapterExercise.java

# Ejecutar
java Patterns.adapter.AdapterBad
java Patterns.adapter.AdapterGood
java Patterns.adapter.AdapterExercise
```

## Ejecutar Tests

### Java

```bash
# Compilar y ejecutar tests con JUnit
javac -cp .:junit-platform-console-standalone.jar AdapterTests.java
java -jar junit-platform-console-standalone.jar --class-path . --scan-class-path

# O con Maven
mvn test

# O con Gradle
gradle test
```

### PHP

```bash
# Ejecutar tests con PHPUnit
phpunit AdapterTests.php

# O todos los tests
phpunit .
```

``
