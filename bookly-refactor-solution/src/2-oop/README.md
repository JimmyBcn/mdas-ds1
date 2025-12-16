# 2-OOP: Aplicando Programación Orientada a Objetos

## Visión General

Esta etapa transforma el código limpio procedural en **Programación Orientada a Objetos** mediante la introducción de clases, encapsulación y separación adecuada de responsabilidades.

## Cambios Clave

### 1. Modelos de Dominio Creados

**Por qué**: Encapsular datos y comportamiento juntos.

- **Order**: Representa un pedido con el método `calculateSubtotal()`
- **OrderResult**: Encapsula resultados de cálculo con el método factory `create()`
- **Customer**: Encapsula tipo de cliente y conteo de pedidos con métodos auxiliares (`isPremium()`, `isRegular()`)

### 2. Clases de Servicio para Lógica de Negocio

**Por qué**: Cada responsabilidad de cálculo está aislada en su propia clase (Responsabilidad Única).

- **TaxCalculator**: Maneja todos los cálculos de impuestos
- **DiscountCalculator**: Maneja todos los cálculos de descuentos
- **ShippingCalculator**: Maneja todos los cálculos de costos de envío
- **OrderProcessor**: Orquesta el flujo de procesamiento de pedidos

### 3. Clases de Utilidad

**Por qué**: Separar presentación de lógica de negocio.

- **Reporter**: Maneja el formateo de reportes y salida a consola

### 4. Encapsulación

**Por qué**: Ocultar detalles internos, exponer solo la interfaz necesaria.

- Las constantes ahora son miembros de clase `private static readonly`
- Los métodos de cálculo internos son `private`
- Los métodos públicos proveen la interfaz

### 5. Instanciación por Constructor

**Por qué**: Los servicios son instanciados y pueden mantener estado.

- OrderProcessor crea instancias de calculadoras
- Mantiene totales (ingresos, descuentos, impuestos)

## Beneficios sobre Código Limpio

- **Organización**: El código relacionado está agrupado en clases
- **Encapsulación**: Datos y comportamiento están acoplados
- **Reusabilidad**: Las clases pueden ser reutilizadas en diferentes contextos
- **Extensibilidad**: Fácil agregar nuevas calculadoras o modelos

## Resultados

- Todos los tests pasan - invariancia de comportamiento mantenida
- Mejor organización del código
- Base para principios SOLID

## Ejecutar

```bash
npm test -- src/2-oop
```
