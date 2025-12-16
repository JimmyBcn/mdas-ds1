# 🎓 Katas Multi-Language Implementation - Complete Summary

This document provides a comprehensive overview of the multi-language kata implementation for Clean Code, OOP, SOLID principles, and Design Patterns.

# Prerequisitos y ejecución

## TypeScript

### Prerequisitos

```bash
# Verificar Node.js instalado
node --version  # Debe ser v16 o mayor

# Verificar npm
npm --version
```

### Instalación

```bash
cd katas/typescript
npm install
```

### Ejecutar Ejemplos

```bash
# Ejecutar cualquier archivo
npx ts-node src/CleanCode/naming/naming-bad.ts
npx ts-node src/SOLID/srp/srp-good.ts
npx ts-node src/Patterns/factory/factory-good.ts
```

### Ejemplo Completo

```bash
# 1. Instalar dependencias
cd katas/typescript
npm install

# 2. Ejecutar un ejemplo
npx ts-node src/OOP/abstraction/abstraction-bad.ts

# 3. Modificar el ejercicio
code src/OOP/abstraction/abstraction-exercise.ts

# 4. Ejecutar tu solución
npx ts-node src/OOP/abstraction/abstraction-exercise.ts

# 5. Ver la solución
npx ts-node src/OOP/abstraction/abstraction-good.ts
```

---

## C#

### Prerequisitos

```bash
# Verificar .NET instalado
dotnet --version  # Debe ser 6.0 o mayor
```

### Instalación

```bash
# No se requiere instalación adicional
# Solo necesitas el .NET SDK
```

### Ejecutar Ejemplos

**Opción 1: Compilar y Ejecutar**

```bash
# Compilar
csc CleanCode/naming/naming-bad.cs

# Ejecutar
./naming-bad.exe  # Windows
./naming-bad      # Linux/Mac
```

**Opción 2: Usar dotnet script**

```bash
# Instalar dotnet-script (solo una vez)
dotnet tool install -g dotnet-script

# Ejecutar
dotnet script CleanCode/naming/naming-bad.cs
```

**Opción 3: Usar dotnet run**

```bash
dotnet run --project CleanCode/naming/naming-bad.cs
```

### Ejemplo Completo

```bash
# 1. Navegar a la carpeta
cd katas/csharp

# 2. Ejecutar ejemplo malo
csc SOLID/srp/srp-bad.cs && ./srp-bad.exe

# 3. Modificar el ejercicio
code SOLID/srp/srp-exercise.cs

# 4. Ejecutar tu solución
csc SOLID/srp/srp-exercise.cs && ./srp-exercise.exe

# 5. Ver la solución
csc SOLID/srp/srp-good.cs && ./srp-good.exe
```

---

## Java

### Prerequisitos

```bash
# Verificar Java instalado
java --version   # Debe ser 11 o mayor
javac --version  # Debe ser 11 o mayor
```

### Instalación

```bash
# No se requiere instalación adicional
# Solo necesitas el JDK
```

### Ejecutar Ejemplos

**Opción 1: Compilar y Ejecutar (Recomendado para aprender)**

```bash
# Compilar
javac CleanCode/naming/NamingBad.java

# Ejecutar
java CleanCode.naming.NamingBad
```

**Opción 2: Usar Maven (Para proyectos completos)**

```bash
# Crear proyecto Maven (solo una vez)
mvn archetype:generate -DgroupId=com.katas -DartifactId=solid-katas

# Compilar y ejecutar
mvn compile exec:java -Dexec.mainClass="NamingBad"
```

**Opción 3: Usar Gradle**

```bash
# Crear proyecto Gradle (solo una vez)
gradle init

# Ejecutar
gradle run
```

### Ejemplo Completo

```bash
# 1. Navegar a la carpeta
cd katas/java

# 2. Ejecutar ejemplo malo
javac OOP/abstraction/AbstractionBad.java
java OOP.abstraction.AbstractionBad

# 3. Modificar el ejercicio
code OOP/abstraction/AbstractionExercise.java

# 4. Compilar y ejecutar tu solución
javac OOP/abstraction/AbstractionExercise.java
java OOP.abstraction.AbstractionExercise

# 5. Ver la solución
javac OOP/abstraction/AbstractionGood.java
java OOP.abstraction.AbstractionGood
```

---

## PHP

### Prerequisitos

```bash
# Verificar PHP instalado
php --version  # Debe ser 8.0 o mayor
```

### Instalación

```bash
# No se requiere instalación adicional
# Solo necesitas PHP 8.0+
```

### Ejecutar Ejemplos

```bash
# Ejecutar cualquier archivo directamente
php CleanCode/naming/naming-bad.php
php SOLID/srp/srp-good.php
php Patterns/factory/factory-good.php
```

### Ejemplo Completo

```bash
# 1. Navegar a la carpeta
cd katas/php

# 2. Ejecutar ejemplo malo
php Patterns/builder/builder-bad.php

# 3. Modificar el ejercicio
code Patterns/builder/builder-exercise.php

# 4. Ejecutar tu solución
php Patterns/builder/builder-exercise.php

# 5. Ver la solución
php Patterns/builder/builder-good.php
```

### Con Composer (Opcional)

```bash
# Si quieres usar Composer para autoloading
composer init
composer dump-autoload

# Luego puedes usar namespaces y autoloading
php -r "require 'vendor/autoload.php'; ..."
```

---

## Python

### Prerequisitos

```bash
# Verificar Python instalado
python --version   # o python3 --version
# Debe ser 3.10 o mayor
```

### Instalación

```bash
# Crear entorno virtual (recomendado)
cd katas/python
python -m venv venv

# Activar entorno virtual
# Windows:
venv\Scripts\activate
# Linux/Mac:
source venv/bin/activate

# No se requieren paquetes adicionales
```

### Ejecutar Ejemplos

```bash
# Ejecutar cualquier archivo
python CleanCode/naming/naming_bad.py
python3 SOLID/srp/srp_good.py
python Patterns/factory/factory_good.py
```

### Ejemplo Completo

```bash
# 1. Navegar a la carpeta y activar entorno virtual
cd katas/python
source venv/bin/activate  # Linux/Mac
venv\Scripts\activate     # Windows

# 2. Ejecutar ejemplo malo
python SOLID/dip/dip_bad.py

# 3. Modificar el ejercicio
code SOLID/dip/dip_exercise.py

# 4. Ejecutar tu solución
python SOLID/dip/dip_exercise.py

# 5. Ver la solución
python SOLID/dip/dip_good.py

# 6. Desactivar entorno virtual cuando termines
deactivate
```

## 🚀 Guías de Inicio Rápido

### TypeScript (Jest)

```bash
# 1. Instalar dependencias
cd katas/typescript
npm install

# 2. Ejecutar todos los tests
npm test

# 3. Ejecutar tests específicos
npm test -- naming
npm test -- srp
npm test -- factory

# 4. Modo watch (útil durante desarrollo)
npm run test:watch

# 5. Con coverage
npm run test:coverage
```

### Python (pytest)

```bash
# 1. Instalar pytest
pip install pytest

# 2. Ejecutar todos los tests
cd katas/python
pytest -v

# 3. Ejecutar tests específicos
pytest CleanCode/naming/test_naming.py -v
pytest SOLID/srp/test_srp.py -v

# 4. Con coverage
pip install pytest-cov
pytest --cov=. --cov-report=html
```

### C# (xUnit)

```bash
# 1. Navegar a una carpeta de concepto
cd katas/csharp/CleanCode/naming

# 2. Crear proyecto de test
dotnet new xunit -n NamingTests

# 3. Copiar archivos al proyecto
cp Tests.cs NamingTests/
cp naming-*.cs NamingTests/

# 4. Ejecutar tests
cd NamingTests
dotnet test -v detailed
```

### Java (JUnit 5)

```bash
# Opción 1: Con Maven
cd katas/java
mvn test

# Opción 2: Con JUnit standalone
# Descargar JUnit
wget https://repo1.maven.org/maven2/org/junit/platform/junit-platform-console-standalone/1.9.3/junit-platform-console-standalone-1.9.3.jar

# Compilar y ejecutar
cd CleanCode/naming
javac -cp .:../../junit-platform-console-standalone-1.9.3.jar *.java
java -jar ../../junit-platform-console-standalone-1.9.3.jar --class-path . --select-class NamingTests
```

### PHP (PHPUnit)

```bash
# 1. Instalar PHPUnit con Composer
cd katas/php
composer require --dev phpunit/phpunit ^10.0

# 2. Ejecutar todos los tests
vendor/bin/phpunit .

# 3. Ejecutar tests específicos
vendor/bin/phpunit CleanCode/naming/Tests.php
vendor/bin/phpunit SOLID/srp/Tests.php
```

## 📚 Recursos Adicionales

### Documentación de Frameworks

- **Jest**: https://jestjs.io/
- **pytest**: https://docs.pytest.org/
- **xUnit**: https://xunit.net/
- **JUnit 5**: https://junit.org/junit5/
- **PHPUnit**: https://phpunit.de/

### Tutoriales

- Jest: https://jestjs.io/docs/getting-started
- pytest: https://docs.pytest.org/en/stable/getting-started.html
- xUnit: https://xunit.net/docs/getting-started/netcore/cmdline
- JUnit: https://junit.org/junit5/docs/current/user-guide/
- PHPUnit: https://phpunit.readthedocs.io/

### Buenas Prácticas de Testing:

- Arrange-Act-Assert (AAA) pattern
- Tests independientes y aislados
- Un concepto por test
- Nombres descriptivos
- Setup y Teardown cuando sea necesario

## 🔧 Solución de Problemas Comunes

### TypeScript

**Problema:** `npm: command not found`
**Solución:** Instalar Node.js desde https://nodejs.org/

**Problema:** `Cannot find module 'jest'`
**Solución:** Ejecutar `npm install` en la carpeta typescript

**Problema:** Tests no se descubren
**Solución:** Verificar que están en carpetas `__tests__` y terminan en `.test.ts`

**Problema:** Errores de importación en los tests
**Solución:** Verificar que las clases están exportadas en los archivos fuente

**Problema:** `SyntaxError: Unexpected token 'export'`
**Solución:** Verificar que `jest.config.js` tiene `preset: 'ts-jest'`

### Python

**Problema:** `ModuleNotFoundError: No module named 'pytest'`
**Solución:** `pip install pytest`

**Problema:** Tests no se descubren
**Solución:** Asegurar que archivos empiezan con `test_` y funciones con `test_`

### C#

**Problema:** `dotnet: command not found`
**Solución:** Instalar .NET SDK

**Problema:** Referencias no encontradas
**Solución:** Verificar rutas en .csproj

### Java

**Problema:** `package org.junit.jupiter does not exist`
**Solución:** Ejecutar `mvn install` primero

**Problema:** Tests no corren
**Solución:** Verificar anotación `@Test` y imports

### PHP

**Problema:** `composer: command not found`
**Solución:** Instalar Composer

**Problema:** `Class 'PHPUnit\Framework\TestCase' not found`
**Solución:** `composer require --dev phpunit/phpunit`

## 🎯 Content Coverage

### Clean Code (3 concepts × 3 files each = 12 files per language)

1. **Naming** - Nombres descriptivos, sin magic numbers
2. **Functions** - Funciones pequeñas, una responsabilidad
3. **Format** - Formato horizontal y vertical

### OOP (4 pillars × 4 files each = 16 files per language)

1. **Abstraction** - Ocultar detalles de implementación (EmailSender)
2. **Encapsulation** - Proteger estado interno (BankAccount)
3. **Inheritance** - Reutilización de código (Animal hierarchy)
4. **Polymorphism** - Comportamiento específico (makeSound/feed/move)

### SOLID (5 principles × 4 files each = 20 files per language)

1. **SRP** - Single Responsibility (User/EmailService/FileManager)
2. **OCP** - Open/Closed (Communicable interface)
3. **LSP** - Liskov Substitution (Bird/Penguin → Flyable/Swimmable)
4. **ISP** - Interface Segregation (Worker → Workable/Eatable/Sleepable)
5. **DIP** - Dependency Inversion (OrderService → Database abstraction)

### Design Patterns (4 patterns × 4 files each = 16 files per language)

1. **Factory** - Creación centralizada (NotificationFactory)
2. **Builder** - Construcción paso a paso (PizzaBuilder)
3. **Adapter** - Interfaces compatibles (AudioPlayer adapters)
4. **Strategy** - Algoritmos intercambiables (DiscountStrategy)

## 🚀 How to Use

### For Students:

1. **Choose your language** (TypeScript, C#, Java, PHP, or Python)
2. **Read the main README.md** in your language folder
3. **Start with Clean Code** → OOP → SOLID → Patterns
4. **For each concept**:
   - Read the README
   - Run and analyze the `*-bad` file
   - Try to refactor in the `*-exercise` file
   - Compare with the `*-good` file

### For Instructors:

- All languages have identical content and structure
- Examples can be used for polyglot teaching
- Students can compare implementations across languages
- Each concept designed for ~20 minutes of study

## 🎓 Learning Path

Recommended order for all languages:

1. **Clean Code** (60 minutes)

   - Naming → Functions → Format

2. **OOP** (80 minutes)

   - Abstraction → Encapsulation → Inheritance → Polymorphism

3. **SOLID** (100 minutes)

   - SRP → OCP → DIP → ISP → LSP

4. **Patterns** (80 minutes)
   - Factory → Strategy → Builder → Adapter

## 📝 Notes

- All examples use modern language features (C# 10+, Java 11+, PHP 8+, Python 3.10+, TypeScript 5+)
- READMEs adapted for each language's ecosystem and tooling
- Code follows each language's conventions and best practices
- All files tested and verified to run correctly

##🎓 Instrucciones de Uso

1. **Leer el código de ejemplo (bad/good)**
2. **Ejecutar los tests** para ver cómo se valida
3. **Modificar el código** y ver cómo fallan los tests
4. **Refactorizar** hasta que todos los tests pasen
5. **Agregar nuevos tests** para casos adicionales
