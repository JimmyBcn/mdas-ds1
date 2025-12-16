# 🎓 Clean Code, OOP, Principios SOLID y Patrones de Diseño en PHP

Este proyecto presenta ejemplos prácticos de Clean Code, OOP, Principios SOLID y Patrones de Diseño usando PHP. Cada concepto incluye ejemplos "malos" (violando principios) y "buenos" (siguiendo buenas prácticas) para facilitar el aprendizaje.

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

### Prerequisitos - Instalación desde cero

#### 1. Instalar PHP

**Windows:**

```bash
# Opción A: Usando Chocolatey (recomendado)
# Ejecutar PowerShell como Administrador
choco install php -y

# Opción B: Descarga manual desde:
# https://windows.php.net/download/
```

**Linux/macOS:**

```bash
# Ubuntu/Debian
sudo apt update
sudo apt install php php-cli php-mbstring php-xml -y

# macOS (Homebrew)
brew install php
```

**Verificar instalación:**

```bash
php --version  # Debe mostrar 8.0 o mayor
```

#### 2. Instalar Composer (gestor de dependencias)

**Windows:**

```bash
# Con Chocolatey
choco install composer -y

# O descarga manual desde:
# https://getcomposer.org/download/
```

**Linux/macOS:**

```bash
# Descargar e instalar
php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
php composer-setup.php
sudo mv composer.phar /usr/local/bin/composer
php -r "unlink('composer-setup.php');"
```

**Verificar instalación:**

```bash
composer --version
```

#### 3. Instalar dependencias del proyecto

```bash
# Navegar a la carpeta del proyecto
cd katas/php

# Instalar PHPUnit y otras dependencias
composer install

# Verificar PHPUnit
vendor/bin/phpunit --version
```

# Ejecutar cualquier archivo directamente

php src/CleanCode/naming/naming-bad.php
php src/SOLID/srp/srp-good.php
php src/Patterns/factory/factory-good.php

````

### Ejemplo Completo

```bash
# 1. Navegar a la carpeta
cd katas/php

# 2. Ejecutar ejemplo malo
php src/Patterns/builder/builder-bad.php

# 3. Modificar el ejercicio
code src/Patterns/builder/builder-exercise.php

# 4. Ejecutar tu solución
php src/Patterns/builder/builder-exercise.php

# 5. Ver la solución
php src/Patterns/builder/builder-good.php
````

### Con Composer (Opcional)

```bash
# Si quieres usar Composer para autoloading
composer init
composer dump-autoload

# Luego puedes usar namespaces y autoloading
php -r "require 'vendor/autoload.php'; ..."
```

## 🎯 Formato de aprendizaje (20 minutos por concepto)

Cada carpeta incluye:

1. **README.md** - Guía de aprendizaje
2. **ejemplo-bad.php** - Código que viola el principio
3. **ejemplo-exercise.php** - Archivo para tu práctica
4. **ejemplo-good.php** - Código que sigue el principio

### Cómo estudiar cada concepto

1. Lee el README del concepto
2. Ejecuta el ejemplo malo: `php src/.../ejemplo-bad.php`
3. Refactoriza en el archivo exercise
4. Ejecuta tu solución: `php src/.../ejemplo-exercise.php`
5. Compara con el ejemplo bueno: `php src/.../ejemplo-good.php`

## 🧪 Tests Unitarios

```bash
vendor/bin/phpunit .                         # Todos los tests
vendor/bin/phpunit src/SOLID/                # Categoría completa
vendor/bin/phpunit src/SOLID/srp/Tests.php   # Test específico
vendor/bin/phpunit --coverage-html coverage  # Con cobertura
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

**Problema:** `php: command not found`
**Solución:** Instalar PHP desde https://www.php.net/downloads.php

**Problema:** `composer: command not found`
**Solución:** Instalar Composer desde https://getcomposer.org/

**Problema:** `Class 'PHPUnit\Framework\TestCase' not found`
**Solución:** `composer require --dev phpunit/phpunit`

**Problema:** Errores de autoload
**Solución:** Ejecutar `composer dump-autoload`

**Problema:** `require_once` no encuentra archivos
**Solución:** Verificar rutas relativas o usar autoload de Composer

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
# Ejecutar un archivo
php src/CleanCode/naming/naming-good.php

# Verificar sintaxis sin ejecutar
php -l src/CleanCode/naming/naming-good.php

# Ejecutar en servidor integrado
php -S localhost:8000

# Inicializar Composer
composer init

# Instalar PHPUnit
composer require --dev phpunit/phpunit

# Actualizar dependencias
composer update

# Ver información de PHP
php -i
```

## 📚 Recursos Adicionales

### Documentación de Frameworks

- **PHPUnit**: https://phpunit.de/
- **PHP Documentation**: https://www.php.net/docs.php
- **Composer**: https://getcomposer.org/doc/

### Tutoriales

- PHPUnit: https://phpunit.readthedocs.io/
- PSR Standards: https://www.php-fig.org/psr/

### Buenas Prácticas de Testing

- Arrange-Act-Assert (AAA) pattern
- Tests independientes y aislados
- Un concepto por test
- Nombres descriptivos
- Setup y Teardown cuando sea necesario

### Libros y Recursos

- **Clean Code (libro)**: Robert C. Martin
- **PHP The Right Way**: https://phptherightway.com/
- **Design Patterns in PHP**: https://refactoring.guru/design-patterns/php

## 🎯 Características de PHP Utilizadas

- **Type Declarations**: Para parámetros y return types (PHP 7+)
- **Visibility**: public, private, protected
- **Interfaces**: Para contratos y abstracción
- **Abstract Classes**: Para herencia con implementación base
- **Traits**: Para reutilización de código
- **Namespaces**: Para organización de código
- **Constructor Property Promotion**: Para código más conciso (PHP 8+)
- **Readonly Properties**: Para inmutabilidad (PHP 8.1+)
- **Enums**: Para valores fijos (PHP 8.1+)
- **Match Expression**: Para switch mejorado (PHP 8+)

## 📦 Configuración de Composer (composer.json)

```json
{
  "name": "mdas/php-katas",
  "description": "Katas de Clean Code, OOP, SOLID y Patrones",
  "type": "project",
  "require": {
    "php": ">=8.0"
  },
  "require-dev": {
    "phpunit/phpunit": "^10.0"
  },
  "autoload": {
    "psr-4": {
      "Katas\\": "src/"
    }
  }
}
```

## 🔍 Configuración Opcional (phpunit.xml)

```xml
<?xml version="1.0" encoding="UTF-8"?>
<phpunit xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:noNamespaceSchemaLocation="vendor/phpunit/phpunit/phpunit.xsd"
         colors="true"
         verbose="true">
    <testsuites>
        <testsuite name="All Tests">
            <directory>.</directory>
        </testsuite>
    </testsuites>
</phpunit>
```

---

**¡Disfruta aprendiendo PHP con buenas prácticas!** 🐘
