# Ejercicio de Refactorización - ShipFast

Este proyecto contiene una serie de ejercicios progresivos de refactorización del código de un sistema de procesamiento de envíos llamado **ShipFast**. El objetivo es demostrar cómo mejorar gradualmente la calidad del código aplicando diferentes principios y patrones de diseño de software.

## 📋 Descripción del Ejercicio

El ejercicio consiste en refactorizar un código legacy (heredado) que calcula precios de envío con descuentos, aplicando progresivamente:

1. **Clean Code** - Nombres descriptivos, funciones pequeñas, constantes
2. **Programación Orientada a Objetos (OOP)** - Clases, herencia, encapsulación, abstracción
3. **Principios SOLID** - Single Responsibility, Open/Closed, etc.
4. **Patrones de Diseño** - Factory, Strategy

### Datos del Sistema

El sistema procesa 5 envíos con las siguientes características:

| ID  | Tipo     | Peso  | Distancia | Cliente | Pedidos |
| --- | -------- | ----- | --------- | ------- | ------- |
| 1   | Standard | 2.5kg | 150km     | Premium | 5       |
| 2   | Express  | 1.2kg | 300km     | Regular | 2       |
| 3   | Standard | 5.0kg | 50km      | Premium | 12      |
| 4   | Same Day | 0.8kg | 500km     | Regular | 1       |
| 5   | Express  | 3.0kg | 200km     | Premium | 8       |

### Lógica de Negocio

**Precios Base:**

- Standard: $5 + peso×$2 + distancia×$0.01
- Express: $10 + peso×$3 + distancia×$0.02
- Same Day: $3 + peso×$1.5 + distancia×$0.005

**Recargos:**

- Peso > 5kg: +$10 (Standard), +$15 (Express)
- Distancia > 200km: +$20 (solo Express)

**Descuentos por Volumen:**

- Cliente Premium: 10% (<5 pedidos), 15% (5-9 pedidos), 20% (10+ pedidos)
- Cliente Regular: 0% (<5 pedidos), 5% (5-9 pedidos), 10% (10+ pedidos)

## 🚀 Instalación del Proyecto

Para instalar las dependencias del proyecto:

```bash
npm install
```

## 📂 Estructura del Proyecto

```
refactor/
├── src/
│   ├── clean-code/
│   │   ├── shipfast-legacy.ts          # Código original
│   │   └── shipfast-legacy.test.ts     # Tests
│   ├── oop/
│   │   ├── shipfast-clean-code.ts      # Refactor con Clean Code
│   │   └── shipfast-clean-code.test.ts # Tests
│   ├── solid/
│   │   ├── shipfast-oop.ts             # Refactor con OOP
│   │   └── shipfast-oop.test.ts        # Tests
│   ├── patterns/
│   │   ├── shipfast-solid.ts           # Refactor con SOLID
│   │   └── shipfast-solid.test.ts      # Tests
│   └── summary/
│       ├── shipfast-patterns.ts        # Refactor con Patrones
│       └── shipfast-patterns.test.ts   # Tests
├── jest.config.js
├── package.json
├── tsconfig.json
└── README.md
```

## ▶️ Ejecutar los Ejercicios

### Opción 1: Con Node.js

```bash
node src/clean-code/shipfast-legacy.js
```

👉 Ejecuta archivos JavaScript. **No funciona con TypeScript** directamente.

### Opción 2: Con ts-node

```bash
ts-node src/clean-code/shipfast-legacy.ts
```

👉 Ejecuta TypeScript directamente y verifica tipos según `tsconfig.json`.
⚠️ Requiere tener instalados globalmente `ts-node` y `typescript`.

### Opción 3: Con npx ts-node (Recomendado)

```bash
npx ts-node src/clean-code/shipfast-legacy.ts
npx ts-node src/oop/shipfast-clean-code.ts
npx ts-node src/solid/shipfast-oop.ts
npx ts-node src/patterns/shipfast-solid.ts
npx ts-node src/summary/shipfast-patterns.ts
```

👉 Es el comando más común en proyectos TypeScript modernos.

### Opción 4: Sin verificación de tipos

```bash
npx ts-node --transpile-only src/clean-code/shipfast-legacy.ts
```

👉 Solo transpila, sin verificar tipos (más rápido).

## 🧪 Tests Unitarios

### ¿Por qué Tests en un Ejercicio de Refactorización?

Los tests unitarios son **fundamentales** en procesos de refactorización porque:

- ✅ **Garantizan que la funcionalidad no cambie** - Aunque el código se reorganice, los tests aseguran que el comportamiento sea idéntico
- ✅ **Permiten refactorizar con confianza** - Puedes hacer cambios sabiendo que los tests detectarán cualquier error
- ✅ **Documentan el comportamiento esperado** - Los tests sirven como especificación viva del sistema
- ✅ **Facilitan la comprensión del código** - Los tests muestran cómo se usa el código y qué hace

### Estructura de los Tests

Cada ejercicio tiene su propio archivo de tests que verifica:

1. **clean-code/shipfast-legacy.test.ts** - Tests del código original
2. **oop/shipfast-clean-code.test.ts** - Tests del refactor con Clean Code
3. **solid/shipfast-oop.test.ts** - Tests del refactor con OOP
4. **patterns/shipfast-solid.test.ts** - Tests del refactor con SOLID
5. **summary/shipfast-patterns.test.ts** - Tests del refactor con Patrones

**Todos los archivos de tests contienen las mismas pruebas**, lo que demuestra que a pesar de las diferentes implementaciones, la funcionalidad se mantiene constante.

### Cobertura de los Tests

Cada suite de tests incluye 15 pruebas que verifican:

**Funcionalidad Básica:**

- ✅ Procesa los 5 envíos correctamente
- ✅ Devuelve resultados con la estructura correcta
- ✅ Procesa los envíos en orden por ID

**Cálculos de Precios:**

- ✅ Envío #1: Standard, Premium, 5 pedidos
- ✅ Envío #2: Express, Regular, 2 pedidos
- ✅ Envío #3: Standard, Premium, 12 pedidos
- ✅ Envío #4: Same Day, Regular, 1 pedido
- ✅ Envío #5: Express, Premium, 8 pedidos

**Lógica de Descuentos:**

- ✅ Clientes Premium reciben descuentos correctos según volumen
- ✅ Clientes Regular reciben descuentos correctos según volumen

**Recargos:**

- ✅ Envíos Express aplican recargo por larga distancia (>200km)
- ✅ Envíos pesados aplican recargo por peso (>5kg)

**Totales:**

- ✅ Calcula ingresos totales correctos ($88.02)
- ✅ Calcula descuentos totales correctos ($8.28)
- ✅ Verifica que precio final = precio base - descuento

**Reportes:**

- ✅ Imprime el reporte formateado en consola

### Ejecutar los Tests

#### Ejecutar todos los tests

```bash
npm test
```

#### Ejecutar tests en modo vigilancia (watch)

```bash
npm run test:watch
```

👉 Los tests se re-ejecutan automáticamente al guardar cambios.

#### Ejecutar tests con reporte de cobertura

```bash
npm run test:coverage
```

👉 Genera un reporte detallado de qué líneas de código están cubiertas por tests.

#### Ejecutar una suite específica

```bash
npm test -- clean-code/shipfast-legacy.test.ts
npm test -- oop/shipfast-clean-code.test.ts
npm test -- solid/shipfast-oop.test.ts
npm test -- patterns/shipfast-solid.test.ts
npm test -- summary/shipfast-patterns.test.ts
```

### Resultados Esperados

Cuando todos los tests pasan correctamente, verás:

```
Test Suites: 5 passed, 5 total
Tests:       75 passed, 75 total
Snapshots:   0 total
Time:        ~4-5s
```

Esto confirma que **todos los ejercicios de refactorización mantienen la misma lógica de negocio** y producen resultados idénticos, demostrando el valor de los tests unitarios en el refactorización segura del código.

## 🎯 Objetivo Pedagógico

Este ejercicio demuestra que:

1. **El código puede mejorar sin cambiar su funcionalidad** - Los tests lo prueban
2. **Los buenos tests permiten refactorizar con confianza** - Cada cambio se valida automáticamente
3. **Diferentes diseños pueden resolver el mismo problema** - Legacy, Clean Code, OOP, SOLID y Patterns
4. **La calidad del código mejora progresivamente** - Cada paso aplica mejores prácticas
5. **Los tests son documentación ejecutable** - Muestran cómo funciona el sistema

## 📝 Notas Técnicas

- Los tests usan **Jest** con **ts-jest** para soporte de TypeScript
- La salida de consola se mockea para evitar contaminar la salida de los tests
- Los cálculos monetarios usan `toBeCloseTo()` para manejar precisión de punto flotante
- Se usa la directiva `@ts-nocheck` en archivos fuente para evitar verificación estricta de TypeScript en código de ejercicio/legacy
