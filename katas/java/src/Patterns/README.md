# 🏗️ Patrones de Diseño (Design Patterns)

Ejemplos prácticos de patrones de diseño comunes, diseñados para aprender en 20 minutos cada uno.

## 📚 Contenido

### 1. Factory - Patrón creacional

**Carpeta:** `factory/`
**Problema:** Lógica de creación de objetos dispersa por toda la aplicación

- ❌ **Mal ejemplo:** Creación de objetos con if/else en múltiples lugares
- ✅ **Buen ejemplo:** `NotificationFactory` centraliza la creación

### 2. Builder - Patrón creacional

**Carpeta:** `builder/`
**Problema:** Constructores con demasiados parámetros (telescoping constructor)

- ❌ **Mal ejemplo:** Constructor de Pizza con 10+ parámetros
- ✅ **Buen ejemplo:** `PizzaBuilder` con interfaz fluida paso a paso

### 3. Adapter - Patrón estructural

**Carpeta:** `adapter/`
**Problema:** Interfaces incompatibles entre sistemas

- ❌ **Mal ejemplo:** Código cliente maneja múltiples interfaces diferentes
- ✅ **Buen ejemplo:** Adaptadores proporcionan interfaz unificada

### 4. Strategy - Patrón de comportamiento

**Carpeta:** `strategy/`
**Problema:** Múltiples algoritmos con lógica condicional repetida

- ❌ **Mal ejemplo:** Clase con switch/case para diferentes descuentos
- ✅ **Buen ejemplo:** Estrategias intercambiables para cada tipo de descuento

## 🚀 Cómo usar este material

Cada carpeta incluye:

- `README.md` - Guía de aprendizaje
- `*Bad.java` - Violación del patrón
- `*Good.java` - Implementación del patrón
- `*Exercise.java` - Práctica

### Ejecutar los Ejemplos

```bash
javac Patterns/factory/FactoryGood.java
java Patterns.factory.FactoryGood

javac Patterns/builder/BuilderGood.java
java Patterns.builder.BuilderGood
```

## 📋 Checklist de Aprendizaje

- [ ] **Factory**: ¿Puedo centralizar la creación de objetos?
- [ ] **Builder**: ¿Puedo construir objetos complejos paso a paso?
- [ ] **Adapter**: ¿Puedo unificar interfaces incompatibles?
- [ ] **Strategy**: ¿Puedo hacer algoritmos intercambiables?

## 🎯 Clasificación de Patrones

### 🔷 Patrones Creacionales

**Factory** y **Builder** - Cómo crear objetos

### 🔶 Patrones Estructurales

**Adapter** - Cómo componer objetos

### 🔴 Patrones de Comportamiento

**Strategy** - Cómo interactúan objetos

## 🎨 Resumen Visual de Patrones

| Patrón       | Problema                 | Solución                   | Ejemplo Real              |
| ------------ | ------------------------ | -------------------------- | ------------------------- |
| **Factory**  | Creación dispersa        | Fábrica centralizada       | Sistema de notificaciones |
| **Builder**  | Muchos parámetros        | Construcción paso a paso   | Configurador de producto  |
| **Adapter**  | Interfaces incompatibles | Envoltorio unificador      | Integración de APIs       |
| **Strategy** | Muchos if/else           | Algoritmos intercambiables | Sistema de descuentos     |

## 📖 Orden de estudio recomendado

1. **Factory** - El más intuitivo
2. **Strategy** - Fácil de entender y muy útil
3. **Builder** - Útil para constructores complejos
4. **Adapter** - Importante para integraciones
