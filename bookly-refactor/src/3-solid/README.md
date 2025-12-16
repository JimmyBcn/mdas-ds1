# 🎯 De SOLID a PATTERNS

## Tu punto de partida
Tienes código flexible con interfaces y dependency injection. ¡Perfecto! Pero aún hay margen para mejorar usabilidad y extensibilidad.

## 🎯 Tu Desafío: Ir a 4-PATTERNS

### Pistas y Consejos

#### 1. Patrón STRATEGY: Elimina Condicionales
**Pregúntate**: ¿Tengo muchos `if/else` o `switch` para elegir algoritmos?

**Problema actual en SOLID**:
```typescript
class ShippingCalculator {
  calculate(shippingType: string, quantity: number): number {
    if (shippingType === 'std') {
      return quantity > 10 ? 0 : 5.99;
    } else if (shippingType === 'exp') {
      return 15.99;
    } else if (shippingType === 'eco') {
      return 2.99;
    }
  }
}
```

**¿Por qué es un problema?**
- Viola OCP (agregar nuevo tipo requiere modificar la clase)
- Difícil de testear cada tipo por separado
- No usa polimorfismo real

**Pista**: Crea una estrategia por cada algoritmo.

```typescript
// ✅ Interfaz de estrategia
interface IShippingStrategy {
  calculate(quantity: number): number;
}

// ✅ Una clase por estrategia
class StandardShipping implements IShippingStrategy {
  calculate(quantity: number): number {
    return quantity > 10 ? 0 : 5.99;
  }
}

class ExpressShipping implements IShippingStrategy {
  calculate(quantity: number): number {
    return 15.99;
  }
}

class EconomyShipping implements IShippingStrategy {
  calculate(quantity: number): number {
    return 2.99;
  }
}
```

**Tip**: El calculador ahora DELEGA a la estrategia:
```typescript
class ShippingCalculator {
  calculate(shippingType: string, quantity: number): number {
    const strategy = ShippingFactory.create(shippingType);
    return strategy.calculate(quantity);
  }
}
```

#### 2. Patrón SIMPLE FACTORY: Centraliza Creación
**Pregúntate**: ¿Quién decide qué estrategia usar?

**Pista**: Crea una fábrica que encapsule la lógica de creación.

```typescript
class ShippingFactory {
  static create(shippingType: string): IShippingStrategy {
    switch (shippingType) {
      case SHIPPING_TYPE_STANDARD:
        return new StandardShipping();
      case SHIPPING_TYPE_EXPRESS:
        return new ExpressShipping();
      case SHIPPING_TYPE_ECONOMY:
        return new EconomyShipping();
    }
  }
}
```

**Beneficios**:
- El cliente no conoce las clases concretas
- Cambiar o agregar estrategias es fácil
- Un solo lugar para la lógica de creación

**Tip**: Haz lo mismo para descuentos:
- `PremiumDiscountStrategy`
- `RegularDiscountStrategy`
- `DiscountFactory`

#### 3. Patrón BUILDER: Construcción Fluida
**Pregúntate**: ¿Crear un Order es complicado?

**Problema**:
```typescript
const order = {
  id: '1',
  items: [{ id: '101', title: 'Book', price: 29.99, quantity: 2 }],
  taxType: TAX_TYPE_GENERAL,
  shippingType: SHIPPING_TYPE_STANDARD,
  customerType: CUSTOMER_TYPE_PREMIUM,
  orderCount: 5
};
```

**Pista**: Crea un builder con API fluida.

```typescript
class OrderBuilder {
  private order: Partial<Order> = {};

  withId(id: string): this {
    this.order.id = id;
    return this;
  }

  addItem(item: OrderItem): this {
    if (!this.order.items) this.order.items = [];
    this.order.items.push(item);
    return this;
  }

  withShippingType(type: string): this {
    this.order.shippingType = type;
    return this;
  }

  build(): Order {
    // Validaciones
    return this.order as Order;
  }
}

// Uso más expresivo
const order = new OrderBuilder()
  .withId('1')
  .addItem({ id: '101', title: 'Book', price: 29.99, quantity: 2 })
  .withShippingType(SHIPPING_TYPE_STANDARD)
  .build();
```

#### 4. Patrón FACADE: Simplifica el Clientemplejidad.

```typescript
class OrderProcessingFacade {
  private processor: OrderProcessor;

  constructor() {
    // La fachada crea y configura todo internamente
    const taxCalculator = new TaxCalculator();
    const discountCalculator = new DiscountCalculator();
    const shippingCalculator = new ShippingCalculator();
    
    this.processor = new OrderProcessor(
      taxCalculator,
      discountCalculator,
      shippingCalculator
    );
  }

  processAndPrint(order: Order): OrderResult {
    const result = this.processor.process(order);
    Reporter.print(result);
    return result;
  }
}

// Cliente super simple
const facade = new OrderProcessingFacade();
facade.processAndPrint(order);
```

#### 5. Organiza por Dominio, no por Tipo
**Pregúntate**: ¿Dónde están todas las clases relacionadas con descuentos?

**❌ Antes (por tipo técnico)**:
```
services/
├── TaxCalculator.ts
├── DiscountCalculator.ts
├── DiscountFactory.ts
├── PremiumDiscountStrategy.ts
├── RegularDiscountStrategy.ts
└── ...
```

**✅ Después (por dominio)**:
```
services/
├── discounts/
│   ├── DiscountCalculator.ts
│   ├── DiscountFactory.ts
│   ├── PremiumDiscountStrategy.ts
│   └── RegularDiscountStrategy.ts
├── shipping/
│   ├── ShippingCalculator.ts
│   ├── ShippingFactory.ts
│   ├── StandardShipping.ts
│   ├── ExpressShipping.ts
│   └── EconomyShipping.ts
└── taxes/
    └── TaxCalculator.ts
```

**Beneficio**: Todo lo relacionado con descuentos está junto.

**Tip**: Actualiza los imports:
```typescript
// En archivos dentro de subcarpetas
import { IDiscountCalculator } from '../../interfaces/IDiscountCalculator';
```

### Checklist para 4-PATTERNS
- [ ] **Strategy Pattern para Shipping**
  - [ ] `IShippingStrategy` interface
  - [ ] `StandardShipping`, `ExpressShipping`, `EconomyShipping`
  - [ ] `ShippingCalculator` delega a estrategia
- [ ] **Strategy Pattern para Discounts**
  - [ ] `IDiscountStrategy` interface
  - [ ] `PremiumDiscountStrategy`, `RegularDiscountStrategy`
  - [ ] `DiscountCalculator` delega a estrategia
- [ ] **Simple Factory Pattern**
  - [ ] `ShippingFactory.create()`
  - [ ] `DiscountFactory.create()`
- [ ] **Builder Pattern**
  - [ ] `OrderBuilder` con métodos fluidos
  - [ ] Validaciones en `build()`
- [ ] **Facade Pattern**
  - [ ] `OrderProcessingFacade` simplifica uso
  - [ ] Encapsula creación y configuración
- [ ] **Organización por dominio**
  - [ ] `services/discounts/`
  - [ ] `services/shipping/`
  - [ ] `services/taxes/`
- [ ] **Imports actualizados** con rutas correctas
- [ ] Tests pasan ✅

### ⚠️ Recuerda
- **Strategy**: Un algoritmo, múltiples implementaciones
- **Factory**: Encapsula creación de objetos
- **Builder**: Construcción paso a paso
- **Facade**: Interfaz simple para subsistema complejo

### 💡 Preguntas Clave

**P1**: ¿Cómo agrego un nuevo tipo de envío "overnight"?
**R**: ✅ Creas `OvernightShipping implements IShippingStrategy` y agregas caso en `ShippingFactory`. ShippingCalculator no cambia.

**P2**: ¿Por qué usar Factory si Strategy ya usa polimorfismo?
**R**: ✅ Factory encapsula la decisión de QUÉ estrategia crear. El calculador solo usa la estrategia, no decide cuál.

**P3**: ¿El Facade viola DIP (crea sus dependencias)?
**R**: ✅ Sí, pero es intencional - el Facade existe para OCULTAR esa complejidad al cliente.

## Recursos de Ayuda
- **Design Patterns** (Gang of Four)
  - Strategy Pattern
  - Factory Pattern
  - Builder Pattern
  - Facade Pattern
- **Refactoring** (Martin Fowler) - Replace Conditional with Polymorphism
- Mira el código en `src/4-patterns/` si necesitas inspiración
