# 🎓 Clean Code, OOP, Principios SOLID y Patrones de Diseño en Java

Este proyecto presenta ejemplos prácticos de Clean Code, OOP, Principios SOLID y Patrones de Diseño usando Java. Cada concepto incluye ejemplos "malos" (violando principios) y "buenos" (siguiendo buenas prácticas) para facilitar el aprendizaje.

## 📚 Contenido del proyecto

### ✨ 1. Clean Code (`src/CleanCode/`)

Principios de código limpio y legible:

- **Naming** - Nombrado descriptivo (sin magic numbers, encodings)
- **Functions** - Funciones pequeñas y enfocadas (una responsabilidad)
- **Format** - Formato horizontal y vertical consistente

### 🎯 2. Programación Orientada a Objetos (`src/OOP/`)

Los 4 pilares fundamentales de OOP:

- **Abstraction** - Abstracción (ocultar detalles de implementación)
- **Encapsulation** - Encapsulamiento (proteger el estado interno)
- **Inheritance** - Herencia (reutilización de código)
- **Polymorphism** - Polimorfismo (comportamiento específico sin condicionales)

### 🔷 3. Principios SOLID (`src/SOLID/`)

Los 5 principios fundamentales de diseño orientado a objetos:

- **S** - Single Responsibility Principle (SRP) - Responsabilidad Única
- **O** - Open/Closed Principle (OCP) - Abierto/Cerrado
- **L** - Liskov Substitution Principle (LSP) - Sustitución de Liskov
- **I** - Interface Segregation Principle (ISP) - Segregación de Interfaces
- **D** - Dependency Inversion Principle (DIP) - Inversión de Dependencias

### 🏗️ 4. Patrones de Diseño (`src/Patterns/`)

Soluciones probadas para problemas comunes de diseño:

- **Factory** - Patrón creacional para creación de objetos
- **Builder** - Patrón creacional para construcción compleja (Pizza)
- **Adapter** - Patrón estructural para compatibilidad de interfaces
- **Strategy** - Patrón de comportamiento para selección de algoritmos

## 🚀 Preparativos

### 1. Instalar JDK y Maven

**Windows (Chocolatey):**

```bash
choco install openjdk11 -y
choco install maven -y
```

**Linux/macOS:**

```bash
# Ubuntu/Debian
sudo apt update
sudo apt install openjdk-11-jdk maven -y

# macOS (Homebrew)
brew install openjdk@11 maven
```

**Verificar:**

```bash
java --version   # Debe mostrar 11+
javac --version
mvn --version
```

### 2. Ejecutar ejemplos

```bash
cd katas/java
javac src/CleanCode/naming/NamingBad.java
java CleanCode.naming.NamingBad
```

## 🎯 Formato de aprendizaje (20 minutos por concepto)

Cada carpeta incluye:

1. **README.md** - Guía de aprendizaje
2. **EjemploBad.java** - Código que viola el principio
3. **EjemploExercise.java** - Archivo para tu práctica
4. **EjemploGood.java** - Código que sigue el principio

### Cómo estudiar cada concepto

1. Lee el README del concepto
2. Compila y ejecuta el ejemplo malo:
   ```bash
   javac src/.../EjemploBad.java
   java Paquete.EjemploBad
   ```
3. Refactoriza en el archivo Exercise
4. Compila y ejecuta tu solución
5. Compara con el ejemplo bueno

## 🧪 Tests Unitarios

**Con Maven (recomendado):**

```bash
mvn test                      # Todos los tests
mvn test -Dtest=NamingTests   # Test específico
mvn test -Dtest=SOLID.**      # Categoría completa
```

**Configurar Maven:** Agrega JUnit al `pom.xml`

```xml
<dependency>
    <groupId>org.junit.jupiter</groupId>
    <artifactId>junit-jupiter</artifactId>
    <version>5.9.3</version>
    <scope>test</scope>
</dependency>
```

## 🔍 Beneficios demostrados

### ✅ Clean Code:

- **Legibilidad**: Código fácil de entender
- **Menos Bugs**: Nombres claros reducen errores
- **Colaboración**: Otros desarrolladores entienden rápidamente
- **Mantenimiento**: Cambios futuros más simples

### ✅ OOP:

- **Abstracción**: Interfaces simples, complejidad oculta
- **Encapsulamiento**: Datos protegidos y validados
- **Herencia**: Código compartido, menos duplicación
- **Polimorfismo**: Extensible sin modificar código existente

### ✅ SOLID:

- **Mantenibilidad**: Fácil de modificar y extender
- **Testabilidad**: Clases pueden probarse aisladamente
- **Flexibilidad**: Código se adapta a cambios
- **Legibilidad**: Separación clara de responsabilidades
- **Reutilización**: Componentes reutilizables

### ✅ Patrones de Diseño:

- **Reutilización**: Soluciones probadas a problemas comunes
- **Comunicación**: Vocabulario compartido entre desarrolladores
- **Mejores Prácticas**: Enfoques probados en el tiempo
- **Flexibilidad**: Modificar comportamiento sin cambiar estructura
- **Mantenibilidad**: Código bien organizado y predecible

## 🔧 Solución de Problemas Comunes

**Problema:** `javac: command not found`
**Solución:** Instalar JDK y configurar JAVA_HOME

**Problema:** `package org.junit.jupiter does not exist`
**Solución:** Ejecutar `mvn install` o descargar JUnit manualmente

**Problema:** `Could not find or load main class`
**Solución:** Verificar el classpath y el nombre completo de la clase con paquete

**Problema:** Tests no corren
**Solución:** Verificar anotación `@Test` y imports correctos

**Problema:** `NoClassDefFoundError`
**Solución:** Compilar todas las clases dependientes

## 🎓 Ruta de Aprendizaje Recomendada

1. **Clean Code** (60 minutos)

   - naming → functions → format

2. **OOP** (80 minutos)

   - abstraction → encapsulation → inheritance → polymorphism

3. **SOLID** (100 minutos)

   - srp → ocp → dip → isp → lsp

4. **Patterns** (80 minutos)
   - factory → strategy → builder → adapter

## 🛠️ Comandos Útiles

```bash
# Compilar un archivo
javac src/CleanCode/naming/NamingGood.java

# Ejecutar (nota el formato con paquetes)
java CleanCode.naming.NamingGood

# Compilar múltiples archivos
javac src/CleanCode/naming/*.java

# Ejecutar con classpath
java -cp . CleanCode.naming.NamingGood

# Compilar con warnings
javac -Xlint:all src/CleanCode/naming/NamingGood.java

# Crear JAR
jar cvf katas.jar CleanCode/**/*.class

# Con Maven - limpiar y compilar
mvn clean compile

# Con Gradle
gradle build
gradle run
```

## 📚 Recursos Adicionales

### Documentación de Frameworks

- **JUnit 5**: https://junit.org/junit5/
- **Java Documentation**: https://docs.oracle.com/en/java/
- **Maven**: https://maven.apache.org/guides/
- **Gradle**: https://docs.gradle.org/

### Tutoriales

- JUnit: https://junit.org/junit5/docs/current/user-guide/
- Maven Getting Started: https://maven.apache.org/guides/getting-started/

### Buenas Prácticas de Testing

- Arrange-Act-Assert (AAA) pattern
- Tests independientes y aislados
- Un concepto por test
- Nombres descriptivos
- Setup y Teardown cuando sea necesario

### Libros y Recursos

- **Clean Code (libro)**: Robert C. Martin
- **Effective Java**: Joshua Bloch
- **Design Patterns in Java**: https://refactoring.guru/design-patterns/java

## 🎯 Características de Java Utilizadas

- **Interfaces**: Para abstracción y contratos
- **Abstract Classes**: Para herencia con implementación base
- **Encapsulation**: Con getters/setters y modificadores de acceso
- **Polymorphism**: Con @Override y interfaces
- **Static Members**: Para constantes y factory methods
- **Builder Pattern**: Con fluent interface
- **Generics**: Para type safety (cuando aplicable)
- **Collections Framework**: ArrayList, HashMap, etc.
- **Exception Handling**: Try-catch para manejo de errores
- **Java 11+ Features**: var, String methods, etc.

## 📦 Configuración de Maven (pom.xml)

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0">
    <modelVersion>4.0.0</modelVersion>

    <groupId>com.mdas.katas</groupId>
    <artifactId>java-katas</artifactId>
    <version>1.0-SNAPSHOT</version>

    <properties>
        <maven.compiler.source>11</maven.compiler.source>
        <maven.compiler.target>11</maven.compiler.target>
    </properties>

    <dependencies>
        <dependency>
            <groupId>org.junit.jupiter</groupId>
            <artifactId>junit-jupiter</artifactId>
            <version>5.9.0</version>
            <scope>test</scope>
        </dependency>
    </dependencies>
</project>
```

---

**¡Disfruta aprendiendo Java con buenas prácticas!** ☕
