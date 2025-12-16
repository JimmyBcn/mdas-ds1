# 🎓 Clean Code, OOP, Principios SOLID y Patrones de Diseño en TypeScript

Este proyecto presenta ejemplos prácticos de Clean Code, OOP, Principios SOLID y Patrones de Diseño usando TypeScript. Cada concepto incluye ejemplos "malos" (violando principios) y "buenos" (siguiendo buenas prácticas) para facilitar el aprendizaje.

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

### 1. Instalar Node.js

**Windows (Chocolatey):**

```bash
choco install nodejs-lts -y
```

**Linux/macOS:**

```bash
# Ubuntu/Debian
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs

# macOS (Homebrew)
brew install node
```

**Verificar:**

```bash
node --version  # Debe mostrar v16+
npm --version   # Debe mostrar 7.0+
```

### 2. Instalar dependencias y ejecutar ejemplos

```bash
cd katas/typescript
npm install
npx ts-node src/CleanCode/naming/naming-bad.ts
```

## 🧪 Tests Unitarios

```bash
npm test                    # Todos los tests
npm test -- naming          # Tests específicos
npm run test:coverage       # Con cobertura
```

## 🎯 Formato de aprendizaje (20 minutos por concepto)

Cada carpeta incluye:

1. **README.md** - Guía de aprendizaje
2. **ejemplo-bad.ts** - Código que viola el principio
3. **ejemplo-exercise.ts** - Archivo para tu práctica
4. **ejemplo-good.ts** - Código que sigue el principio

### Cómo estudiar cada concepto

1. Lee el README del concepto
2. Ejecuta el ejemplo malo: `npx ts-node src/.../ejemplo-bad.ts`
3. Refactoriza en el archivo exercise
4. Ejecuta tu solución: `npx ts-node src/.../ejemplo-exercise.ts`
5. Compara con el ejemplo bueno: `npx ts-node src/.../ejemplo-good.ts`

---

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

## 🎓 Ruta de Aprendizaje Recomendada

1. **Clean Code** (60 minutos)

   - Naming → Functions → Format

2. **OOP** (80 minutos)

   - Abstraction → Encapsulation → Inheritance → Polymorphism

3. **SOLID** (100 minutos)

   - SRP → OCP → DIP → ISP → LSP

4. **Patterns** (80 minutos)
   - Factory → Strategy → Builder → Adapter

## 🛠️ Comandos Útiles

```bash
# Ejecutar un ejemplo específico
npx ts-node src/CleanCode/naming/naming-good.ts

# Ejecutar tests con verbose
npm test -- --verbose

# Ejecutar tests y generar reporte HTML de coverage
npm run test:coverage
# Abre coverage/lcov-report/index.html en el navegador

# Ejecutar en modo watch (re-ejecuta tests al guardar)
npm run test:watch

# Ejecutar solo tests que fallaron
npm test -- --onlyFailures
```

## 📚 Recursos Adicionales

### Documentación de Frameworks

- **Jest**: https://jestjs.io/
- **TypeScript**: https://www.typescriptlang.org/docs/
- **ts-node**: https://typestrong.org/ts-node/

### Tutoriales

- Jest: https://jestjs.io/docs/getting-started
- TypeScript: https://www.typescriptlang.org/docs/handbook/intro.html

### Buenas Prácticas de Testing

- Arrange-Act-Assert (AAA) pattern
- Tests independientes y aislados
- Un concepto por test
- Nombres descriptivos
- Setup y Teardown cuando sea necesario

### Libros y Recursos

- **Clean Code (libro)**: Robert C. Martin
- **Design Patterns**: Gang of Four

---

**¡Disfruta aprendiendo TypeScript con buenas prácticas!** 🚀
