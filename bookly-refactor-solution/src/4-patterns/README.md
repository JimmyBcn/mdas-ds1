# 4-PATTERNS: Aplicando Patrones de Diseño

## Visión General

Esta etapa aplica **patrones de diseño** sobre la base sólida de principios SOLID, introduciendo Strategy, Simple Factory, Builder y Facade para mejorar la flexibilidad, mantenibilidad y usabilidad del código.

## Cambios Clave

### 1. Patrón Strategy (Estrategia)

**Por qué**: Permite cambiar algoritmos en tiempo de ejecución sin modificar el código cliente.

#### Strategy para Envíos

Antes (SOLID):

```typescript
calculate(shippingType: string, quantity: number): number {
  if (shippingType === SHIPPING_TYPE_STANDARD) {
    return quantity > 10 ? 0 : 5.99;
  } else if (shippingType === SHIPPING_TYPE_EXPRESS) {
    return 15.99;
  } else if (shippingType === SHIPPING_TYPE_ECONOMY) {
    return 2.99;
  }
}
```

Después (Patterns):

```typescript
calculate(shippingType: string, quantity: number): number {
  const strategy = ShippingFactory.create(shippingType);
  return strategy.calculate(quantity);
}
```

Estrategias creadas:

- `StandardShipping`: Envío estándar con descuento por volumen
- `ExpressShipping`: Envío express con tarifa fija
- `EconomyShipping`: Envío económico con tarifa reducida

#### Strategy para Descuentos

Aplica el mismo patrón a los descuentos:

- `PremiumDiscountStrategy`: Calcula descuentos para clientes premium
- `RegularDiscountStrategy`: Calcula descuentos para clientes regulares

**Beneficios**:

- Cada estrategia está en su propia clase
- Fácil agregar nuevos tipos de envío o descuento
- Polimorfismo puro sin condicionales

### 2. Patrón Simple Factory (Fábrica Simple)

**Por qué**: Centraliza la creación de objetos y oculta la lógica de instanciación.

#### ShippingFactory

```typescript
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
```

#### DiscountFactory

```typescript
static create(customerType: string): IDiscountStrategy {
  switch (customerType) {
    case CUSTOMER_TYPE_PREMIUM:
      return new PremiumDiscountStrategy();
    case CUSTOMER_TYPE_REGULAR:
      return new RegularDiscountStrategy();
  }
}
```

**Beneficios**:

- El cliente no necesita conocer las clases concretas
- Centraliza la lógica de creación
- Fácil modificar o extender sin afectar clientes

### 3. Patrón Builder (Constructor)

**Por qué**: Simplifica la creación de objetos complejos con una API fluida.

Antes (SOLID):

```typescript
const order = {
  id: "1",
  items: [{ id: "101", title: "Book 1", price: 29.99, quantity: 2 }],
  taxType: TAX_TYPE_GENERAL,
  shippingType: SHIPPING_TYPE_STANDARD,
  customerType: CUSTOMER_TYPE_PREMIUM,
  orderCount: 5,
};
```

Después (Patterns):

```typescript
const order = new OrderBuilder().withId("1").addItem({ id: "101", title: "Book 1", price: 29.99, quantity: 2 }).withTaxType(TAX_TYPE_GENERAL).withShippingType(SHIPPING_TYPE_STANDARD).withCustomerType(CUSTOMER_TYPE_PREMIUM).withOrderCount(5).build();
```

**Beneficios**:

- API más legible y expresiva
- Validación centralizada
- Inmutabilidad garantizada (objeto final es readonly)

### 4. Patrón Facade (Fachada)

**Por qué**: Simplifica el uso de subsistemas complejos con una interfaz unificada.

Antes (SOLID):

```typescript
const taxCalculator = new TaxCalculator();
const discountCalculator = new DiscountCalculator();
const shippingCalculator = new ShippingCalculator();
const processor = new OrderProcessor(taxCalculator, discountCalculator, shippingCalculator);
const result = processor.process(order);
Reporter.print(result);
```

Después (Patterns):

```typescript
const facade = new OrderProcessingFacade();
facade.processAndPrint(order);
```

**Beneficios**:

- Oculta la complejidad del sistema
- Punto de entrada único y simple
- Maneja toda la configuración internamente

### 5. Organización por Dominio

**Por qué**: Mejora la cohesión agrupando código relacionado.

```
services/
├── discounts/         # Todo lo relacionado con descuentos
│   ├── DiscountCalculator.ts
│   ├── DiscountFactory.ts
│   ├── PremiumDiscountStrategy.ts
│   └── RegularDiscountStrategy.ts
├── shipping/          # Todo lo relacionado con envíos
│   ├── ShippingCalculator.ts
│   ├── ShippingFactory.ts
│   ├── StandardShipping.ts
│   ├── ExpressShipping.ts
│   └── EconomyShipping.ts
└── taxes/             # Todo lo relacionado con impuestos
    └── TaxCalculator.ts
```

## Beneficios sobre SOLID

| Aspecto            | SOLID (3-solid)               | Patterns (4-patterns)            |
| ------------------ | ----------------------------- | -------------------------------- |
| **Extensibilidad** | Buena con interfaces          | Excelente con Strategy + Factory |
| **Usabilidad**     | Requiere configuración manual | Simple con Builder + Facade      |
| **Polimorfismo**   | Inyección de dependencias     | Delegación dinámica con Strategy |
| **Creación**       | `new Class()` explícito       | Factory encapsula creación       |
| **Complejidad**    | Visible al cliente            | Oculta por Facade                |

## Resultados

- Todos los tests pasan - invariancia de comportamiento mantenida
- Código más flexible y extensible
- API más simple y expresiva
- Mejor organización por dominio

## Ejecutar

```bash
npm test -- src/4-patterns
```
