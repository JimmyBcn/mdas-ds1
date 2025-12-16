# 3-SOLID: Aplicando Principios SOLID

## Visión General

Esta etapa mejora la implementación POO aplicando los cinco **principios SOLID**, enfocándose en interfaces, inyección de dependencias y abstracción adecuada sin introducir patrones de diseño.

## Cambios Clave

### 1. Principio de Segregación de Interfaces (ISP)

**Por qué**: Los clientes no deben depender de interfaces que no usan.

Interfaces enfocadas creadas:

- `ITaxCalculator` - solo `calculate(subtotal, taxType)`
- `IDiscountCalculator` - solo `calculate(subtotal, customerType, orderCount)`
- `IShippingCalculator` - solo `calculate(shippingType, quantity)`
- `IReporter` - solo `print(...)`

### 2. Principio de Inversión de Dependencias (DIP)

**Por qué**: Depender de abstracciones, no de concreciones.

**Antes (OOP)**:

```typescript
constructor() {
  this.taxCalculator = new TaxCalculator();
  this.discountCalculator = new DiscountCalculator();
  this.shippingCalculator = new ShippingCalculator();
}
```

**Después (SOLID)**:

```typescript
constructor(
  private readonly taxCalculator: ITaxCalculator,
  private readonly discountCalculator: IDiscountCalculator,
  private readonly shippingCalculator: IShippingCalculator
) {}
```

Las dependencias ahora son:

- Inyectadas vía constructor
- Tipadas con interfaces, no clases concretas
- Fáciles de intercambiar (ej., para testing)

### 3. Principio de Responsabilidad Única (SRP)

**Por qué**: Cada clase tiene una sola razón para cambiar.

Cada clase de servicio tiene exactamente una responsabilidad:

- TaxCalculator: solo cálculo de impuestos
- DiscountCalculator: solo cálculo de descuentos
- ShippingCalculator: solo cálculo de envío
- Reporter: solo reportes
- OrderProcessor: solo orquestación

### 4. Principio Abierto/Cerrado (OCP)

**Por qué**: Abierto para extensión, cerrado para modificación.

Todas las clases calculadoras:

- Pueden ser extendidas (crear subclases)
- No necesitan modificación (usan interfaces)
- Nuevos tipos de impuestos pueden agregarse extendiendo TaxCalculator

### 5. Principio de Sustitución de Liskov (LSP)

**Por qué**: Los objetos deben ser reemplazables por instancias de sus subtipos.

Cualquier clase que implemente `ITaxCalculator` puede reemplazar a `TaxCalculator`:

- Mismo contrato de interfaz
- Mismo comportamiento esperado
- Sin cambios incompatibles

## Cambios Estructurales

### Eliminada la Clase Customer

**Por qué**: No necesaria en SOLID puro - los datos se pasan directamente a las calculadoras.

### Cambiado de `static readonly` a Constantes de Instancia

**Por qué**: Mejor encapsulación y testabilidad.

### Carpeta de Interfaces

**Por qué**: Ubicación central para todos los contratos.

## Beneficios sobre OOP

- **Flexibilidad**: Fácil intercambiar implementaciones
- **Testabilidad**: Mock de interfaces para testing
- **Bajo Acoplamiento**: El código de alto nivel no depende de detalles de bajo nivel
- **Extensibilidad**: Agregar nuevas implementaciones sin modificar código existente

## Lo que NO está en Esta Versión

- ❌ Patrones de Diseño (Strategy, Factory, Builder, Facade) - reservados para 4-patterns
- ❌ Optimizaciones específicas de patrones

## Resultados

- Todos los tests pasan - invariancia de comportamiento mantenida
- Máxima flexibilidad mediante inyección de dependencias
- Listo para implementación de patrones

## Ejecutar

```bash
npm test -- src/3-solid
```
