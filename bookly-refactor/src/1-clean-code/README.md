# 🎯 De CLEAN-CODE a OOP

## Tu punto de partida
Tienes código limpio con funciones bien nombradas y constantes descriptivas. ¡Excelente! Pero todo sigue siendo procedural.

## 🎯 Tu Desafío: Ir a 2-OOP

### Pistas y Consejos

#### 1. Identifica "Cosas" del Dominio (Sustantivos)
**Pregúntate**: ¿Qué entidades existen en mi negocio?

**Pista**: Busca sustantivos en tu código y requisitos:
- `Order` → Pedido
- `Customer` → Cliente  
- `OrderResult` → Resultado de procesamiento

**Tip**: Estas "cosas" serán tus clases de modelo.

```typescript
// ✅ Modelo de dominio
class Order {
  constructor(
    public id: number,
    public items: { quantity: number; unitPrice: number }[],
    public taxType: string,
    public shippingType: string,
    public customerType: string,
    public orderCount: number
  ) {}

  calculateSubtotal(): number {
    return this.items.reduce((sum, item) => sum + item.quantity * item.unitPrice, 0);
  }
}
```

#### 2. Identifica Responsabilidades (Verbos)
**Pregúntate**: ¿Quién debería hacer qué?

**Pista**: Cada cálculo es una responsabilidad:
- Calcular impuestos → `TaxCalculator`
- Calcular descuentos → `DiscountCalculator`
- Calcular envío → `ShippingCalculator`
- Procesar pedidos → `OrderProcessor`
- Generar reportes → `Reporter`

**Tip**: Si tienes una función `calculateTax()`, probablemente necesitas una clase `TaxCalculator`.

```typescript
class TaxCalculator {
  private static readonly GENERAL_TAX_RATE = 0.1;
  private static readonly REDUCED_TAX_RATE = 0.04;

  calculate(subtotal: number, taxType: string): number {
    return taxType === 'gen' 
      ? subtotal * TaxCalculator.GENERAL_TAX_RATE
      : subtotal * TaxCalculator.REDUCED_TAX_RATE;
  }
}
```

#### 3. Agrupa Datos y Comportamiento
**Pregúntate**: ¿Estos datos y esta lógica van juntos?

**Pista**: Si una función solo opera sobre ciertos datos, deberían estar en la misma clase.

```typescript
// ❌ Antes: datos y comportamiento separados
type Order = { quantity: number; unitPrice: number };
function calculateSubtotal(order: Order) { ... }

// ✅ Después: datos y comportamiento juntos
class Order {
  calculateSubtotal(): number {
    return this.quantity * this.unitPrice;
  }
}
```

#### 4. Organiza en Carpetas por Tipo
**Pregúntate**: ¿Dónde debería vivir cada clase?

**Pista**: Crea estructura de carpetas:
```
2-oop/
├── models/           # Entidades del dominio
│   ├── Order.ts
│   ├── Customer.ts
│   └── OrderResult.ts
├── services/         # Lógica de negocio
│   ├── TaxCalculator.ts
│   ├── DiscountCalculator.ts
│   ├── ShippingCalculator.ts
│   └── OrderProcessor.ts
└── utils/            # Utilidades
    └── Reporter.ts
```

#### 5. Encapsula las Constantes
**Pregúntate**: ¿Quién necesita conocer estos valores?

**Pista**: Las constantes deben vivir dentro de la clase que las usa.

```typescript
class TaxCalculator {
  // ✅ Constantes privadas - solo esta clase las conoce
  private static readonly GENERAL_TAX_RATE = 0.1;
  private static readonly REDUCED_TAX_RATE = 0.04;
  private static readonly TAX_TYPE_GENERAL = 'gen';

  // ✅ Método público - la interfaz
  calculate(subtotal: number, taxType: string): number {
    // Usa las constantes privadas
  }
}
```

#### 6. Crea Métodos Helper
**Pregúntate**: ¿Puedo hacer el código más expresivo?

**Pista**: Métodos como `isPremium()` o `isRegular()` hacen el código más legible.

```typescript
class Customer {
  isPremium(): boolean {
    return this.type === 'premium';
  }

  isRegular(): boolean {
    return this.type === 'regular';
  }
}

// Uso más expresivo
if (customer.isPremium()) { ... }
```

### Checklist para 2-OOP
- [ ] Clase `Order` con método `calculateSubtotal()`
- [ ] Clase `Customer` con métodos `isPremium()` e `isRegular()`
- [ ] Clase `OrderResult` con método factory `create()`
- [ ] Clase `TaxCalculator` con método `calculate()`
- [ ] Clase `DiscountCalculator` con método `calculate()`
- [ ] Clase `ShippingCalculator` con método `calculate()`
- [ ] Clase `OrderProcessor` que orquesta todo
- [ ] Clase `Reporter` para reportes
- [ ] Constantes encapsuladas como `private static readonly`
- [ ] Métodos internos marcados como `private`
- [ ] Estructura de carpetas: `models/`, `services/`, `utils/`
- [ ] Archivos `index.ts` para exports limpios
- [ ] Tests pasan ✅

### ⚠️ Recuerda
- **Cada clase debe tener una responsabilidad clara**
- **Encapsula todo lo que puedas** (private por defecto)
- **El constructor de OrderProcessor debe crear sus dependencias**
- Ejecuta `npm test -- src/2-oop` para verificar

### 💡 Pregunta Clave
Si necesitas cambiar cómo se calcula el descuento premium, ¿en qué **única clase** deberías buscar?

**Respuesta**: `DiscountCalculator` - ese es el poder de OOP.

## Recursos de Ayuda
- **Clean Code** - Capítulo 10: Classes
- **The Principles of OOD** (Uncle Bob)
- Mira el código en `src/2-oop/` si necesitas inspiración
