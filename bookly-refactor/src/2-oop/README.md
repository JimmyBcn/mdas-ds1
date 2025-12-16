# 🎯 De OOP a SOLID

## Tu punto de partida
Tienes clases bien organizadas con responsabilidades claras. ¡Genial! Pero hay acoplamiento fuerte entre ellas.

## 🎯 Tu Desafío: Ir a 3-SOLID

### Pistas y Consejos

#### 1. Detecta el Acoplamiento Fuerte
**Pregúntate**: ¿Mi código depende de implementaciones concretas?

**Problema actual**:
```typescript
class OrderProcessor {
  private taxCalculator: TaxCalculator;          // ← Clase concreta
  private discountCalculator: DiscountCalculator; // ← Clase concreta
  
  constructor() {
    this.taxCalculator = new TaxCalculator();    // ← new explícito
  }
}
```

**¿Por qué es un problema?**
- No puedo testear con mocks fácilmente
- No puedo cambiar la implementación sin modificar OrderProcessor
- Viola el principio de Inversión de Dependencias

#### 2. Principio ISP: Crea Interfaces Pequeñas
**Pregúntate**: ¿Qué necesita realmente cada cliente?

**Pista**: Crea una interfaz para cada calculadora con **solo** los métodos necesarios.

```typescript
// ✅ Interface enfocada
export interface ITaxCalculator {
  calculate(subtotal: number, taxType: string): number;
}

// ✅ Implementación
export class TaxCalculator implements ITaxCalculator {
  calculate(subtotal: number, taxType: string): number {
    // implementación
  }
}
```

**Tip**: Crea carpeta `interfaces/` con un archivo por interfaz:
- `ITaxCalculator.ts`
- `IDiscountCalculator.ts`
- `IShippingCalculator.ts`
- `IReporter.ts`

#### 3. Principio DIP: Inyecta Dependencias
**Pregúntate**: ¿Quién debería crear las dependencias?

**❌ Antes (OOP)**:
```typescript
class OrderProcessor {
  constructor() {
    this.taxCalculator = new TaxCalculator(); // OrderProcessor crea sus dependencias
  }
}
```

**✅ Después (SOLID)**:
```typescript
class OrderProcessor {
  constructor(
    private readonly taxCalculator: ITaxCalculator,      // ← Interfaz, no clase
    private readonly discountCalculator: IDiscountCalculator,
    private readonly shippingCalculator: IShippingCalculator
  ) {}
  // No hay "new" aquí - las dependencias vienen de afuera
}
```

**Tip**: El punto de entrada (`bookly-solid.ts`) crea todo:
```typescript
const taxCalculator = new TaxCalculator();
const discountCalculator = new DiscountCalculator();
const shippingCalculator = new ShippingCalculator();

const processor = new OrderProcessor(
  taxCalculator,
  discountCalculator,
  shippingCalculator
);
```

#### 4. Principio SRP: Una Razón para Cambiar
**Pregúntate**: ¿Esta clase tiene más de una razón para cambiar?

**Pista**: Cada clase debe hacer **una sola cosa**:
- `TaxCalculator` → Solo calcula impuestos
- `OrderProcessor` → Solo orquesta (no calcula nada)
- `Reporter` → Solo formatea y muestra reportes

**Señal de alerta**: Si tu clase tiene constantes de impuestos Y de descuentos, probablemente hace demasiado.

#### 5. Principio OCP: Abierto/Cerrado
**Pregúntate**: ¿Puedo extender sin modificar?

**Pista**: Con interfaces, puedes crear nuevas implementaciones sin tocar el código existente.

```typescript
// Nueva implementación - no tocas TaxCalculator original
class EuropeanTaxCalculator implements ITaxCalculator {
  calculate(subtotal: number, taxType: string): number {
    // Lógica europea diferente
  }
}

// OrderProcessor no necesita cambios
const processor = new OrderProcessor(
  new EuropeanTaxCalculator(), // ← Nueva implementación
  discountCalculator,
  shippingCalculator
);
```

#### 6. Principio LSP: Sustitución de Liskov
**Pregúntate**: ¿Cualquier implementación de la interfaz funciona igual?

**Pista**: Todas las implementaciones de `ITaxCalculator` deben:
- Aceptar los mismos parámetros
- Devolver el mismo tipo
- No romper expectativas del cliente

```typescript
// ✅ Ambas son intercambiables
const calc1: ITaxCalculator = new TaxCalculator();
const calc2: ITaxCalculator = new EuropeanTaxCalculator();

// El cliente no nota la diferencia
processor.process(order); // funciona con cualquiera
```

#### 7. Elimina lo Innecesario
**Pregúntate**: ¿Realmente necesito esta clase?

**Pista**: La clase `Customer` puede no ser necesaria en SOLID puro.
- En OOP: Encapsulaba `customerType` y `orderCount`
- En SOLID: Estos valores se pasan directamente a `DiscountCalculator`

**Simplifica**: Si una clase solo almacena datos sin lógica real, considera eliminarla.

### Checklist para 3-SOLID
- [ ] Carpeta `interfaces/` creada
- [ ] `ITaxCalculator` interface definida
- [ ] `IDiscountCalculator` interface definida
- [ ] `IShippingCalculator` interface definida
- [ ] `IReporter` interface definida
- [ ] Todas las clases implementan sus interfaces
- [ ] OrderProcessor recibe interfaces en constructor (DIP)
- [ ] Ninguna clase crea sus propias dependencias con `new`
- [ ] Cada clase tiene una sola responsabilidad (SRP)
- [ ] Constantes son de instancia, no static (mejor para testing)
- [ ] Archivo `index.ts` en `interfaces/` para exports
- [ ] Tests pasan ✅

### ⚠️ Recuerda
- **Programa contra interfaces, no contra implementaciones**
- **Las dependencias fluyen hacia afuera**: OrderProcessor no conoce TaxCalculator, solo ITaxCalculator
- **El main crea todo**: Solo en `bookly-solid.ts` verás `new`

### 💡 Preguntas Clave

**P1**: ¿Cómo testeo OrderProcessor con un mock de TaxCalculator?
**R**: ✅ Fácil - creas una clase que implemente `ITaxCalculator` y devuelva valores fijos.

**P2**: ¿Dónde cambio si quiero una nueva forma de calcular impuestos?
**R**: ✅ Creas nueva clase que implemente `ITaxCalculator`. OrderProcessor no cambia.

**P3**: ¿Por qué usar interfaces si solo hay una implementación?
**R**: ✅ Flexibilidad futura + testabilidad + bajo acoplamiento.

## Recursos de Ayuda
- **SOLID Principles** (Uncle Bob)
  - SRP: Single Responsibility Principle
  - OCP: Open/Closed Principle
  - LSP: Liskov Substitution Principle
  - ISP: Interface Segregation Principle
  - DIP: Dependency Inversion Principle
- Mira el código en `src/3-solid/` si necesitas inspiración
