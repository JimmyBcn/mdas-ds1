# 🎓 Clean Code, OOP, Principios SOLID y Patrones de Diseño en C#

Este proyecto presenta ejemplos prácticos de Clean Code, OOP, Principios SOLID y Patrones de Diseño usando C#. Cada concepto incluye ejemplos "malos" (violando principios) y "buenos" (siguiendo buenas prácticas) para facilitar el aprendizaje.

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

### 1. Instalar .NET SDK y dotnet-script

**Windows (Chocolatey):**

```bash
choco install dotnet-sdk -y
dotnet tool install -g dotnet-script
```

**Linux/macOS:**

```bash
# Ubuntu/Debian
wget https://dot.net/v1/dotnet-install.sh
sudo bash dotnet-install.sh --channel 8.0

# macOS (Homebrew)
brew install dotnet-sdk

# Ambos sistemas
dotnet tool install -g dotnet-script
```

**Verificar:**

```bash
dotnet --version        # Debe mostrar 6.0+
dotnet script --version # Debe mostrar versión instalada
```

### 2. Ejecutar ejemplos

```bash
cd katas/csharp
dotnet script src/CleanCode/naming/naming-bad.cs
dotnet script src/SOLID/srp/srp-good.cs
dotnet script src/Patterns/factory/factory-good.cs
```

## 🎯 Formato de aprendizaje (20 minutos por concepto)

Cada carpeta incluye:

1. **README.md** - Guía de aprendizaje
2. **ejemplo-bad.cs** - Código que viola el principio
3. **ejemplo-exercise.cs** - Archivo para tu práctica
4. **ejemplo-good.cs** - Código que sigue el principio

### Cómo estudiar cada concepto

1. Lee el README del concepto en `src/`
2. Ejecuta el ejemplo malo: `dotnet script src/.../ejemplo-bad.cs`
3. Refactoriza en el archivo exercise
4. Ejecuta tu solución: `dotnet script src/.../ejemplo-exercise.cs`
5. Compara con el ejemplo bueno: `dotnet script src/.../ejemplo-good.cs`

## 🧪 Tests Unitarios

Los archivos `Tests.cs` están disponibles para revisar, pero requieren configuración de proyecto xUnit para ejecutarse.

**Recomendación:** Ejecuta los ejemplos directamente con `dotnet script` para verificar el comportamiento.

````bash
# Ver comportamiento del código
dotnet script src/Patterns/factory/factory-bad.cs
dotnet script src/Patterns/factory/factory-good.cs
```## 🔍 Beneficios demostrados

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

**Problema:** `dotnet: command not found`
**Solución:** Instalar .NET SDK desde https://dotnet.microsoft.com/download

**Problema:** `dotnet script: command not found`
**Solución:** Ejecutar `dotnet tool install -g dotnet-script`

**Problema:** Namespace conflicts
**Solución:** Usar namespaces únicos o `global using` en C# 10+

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
# Ejecutar un archivo individual con dotnet script
dotnet script src/CleanCode/naming/naming-good.cs

# Limpiar builds
dotnet clean
````

## 📚 Recursos Adicionales

### Documentación de Frameworks

- **xUnit**: https://xunit.net/
- **C# Documentation**: https://docs.microsoft.com/en-us/dotnet/csharp/
- **.NET CLI**: https://docs.microsoft.com/en-us/dotnet/core/tools/

### Tutoriales

- xUnit: https://xunit.net/docs/getting-started/netcore/cmdline
- C# Testing: https://docs.microsoft.com/en-us/dotnet/core/testing/

### Buenas Prácticas de Testing

- Arrange-Act-Assert (AAA) pattern
- Tests independientes y aislados
- Un concepto por test
- Nombres descriptivos
- Setup y Teardown cuando sea necesario

### Libros y Recursos

- **Clean Code (libro)**: Robert C. Martin
- **Design Patterns in C#**: https://refactoring.guru/design-patterns/csharp

## 🎯 Características de C# Utilizadas

- **Properties**: Para encapsulamiento elegante
- **Interfaces**: Para abstracción y polimorfismo
- **Abstract Classes**: Para herencia con comportamiento base
- **Static Members**: Para constantes y métodos utilitarios
- **Constructor Chaining**: En el patrón Builder
- **Object Initializers**: Para inicialización clara
- **String Interpolation**: Para concatenación legible
- **Nullable Reference Types**: Para evitar null reference exceptions (C# 8+)
- **Record Types**: Para objetos inmutables (C# 9+)
- **Top-level Statements**: Para código más conciso (C# 9+)

---

**¡Disfruta aprendiendo C# con buenas prácticas!** 🔷
