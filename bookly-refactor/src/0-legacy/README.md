# 0-LEGACY: Código Heredado

## ¿Qué es este código?
Este es el punto de partida: código **legacy** (heredado) que funciona pero es difícil de mantener y entender.

## Problemas que encontrarás
- ❌ Valores "mágicos" dispersos por el código (0.1, 0.04, 'std', 'exp')
- ❌ Lógica mezclada en un solo lugar
- ❌ Difícil de testear
- ❌ Difícil de modificar (¿qué pasa si quiero cambiar una tasa de impuestos?)
- ❌ Sin tipos definidos claramente

## 🎯 Tu Desafío: Ir a 1-CLEAN-CODE

### Pistas y Consejos

#### 1. Identifica los Números y Strings Mágicos
**Pregúntate**: ¿Qué significan estos valores?
- `0.1` → ¿Es una tasa de impuestos? ¿Cuál?
- `'std'` → ¿Es un tipo de envío? ¿Cuál?
- `5.99` → ¿Es un costo de envío? ¿Para qué tipo?

**Tip**: Crea constantes con nombres descriptivos en la parte superior del archivo.

```typescript
// ❌ Antes
if (taxType === 'gen') {
  tax = subtotal * 0.1;
}

// ✅ Después
const TAX_TYPE_GENERAL = 'gen';
const GENERAL_TAX_RATE = 0.1;
if (taxType === TAX_TYPE_GENERAL) {
  tax = subtotal * GENERAL_TAX_RATE;
}
```

#### 2. Extrae Funciones con Responsabilidad Única
**Pregúntate**: ¿Esta lógica hace una sola cosa?

**Tip**: Si ves bloques de código que calculan algo específico, extráelos a funciones.

```typescript
// ❌ Antes: todo en processOrders()
let tax = 0;
if (taxType === 'gen') {
  tax = subtotal * 0.1;
} else {
  tax = subtotal * 0.04;
}

// ✅ Después: función dedicada
function calculateTax(subtotal: number, taxType: string): number {
  return taxType === TAX_TYPE_GENERAL 
    ? subtotal * GENERAL_TAX_RATE 
    : subtotal * REDUCED_TAX_RATE;
}
```

#### 3. Usa Nombres Significativos
**Pregúntate**: ¿El nombre explica qué hace sin necesidad de comentarios?

**Tip**: Los nombres deben ser auto-explicativos.
- Variables: sustantivos descriptivos (`subtotal`, `taxRate`, `shippingCost`)
- Funciones: verbos que describen la acción (`calculateTax`, `processOrder`, `printReport`)

#### 4. Define Tipos
**Pregúntate**: ¿Qué estructura tienen mis datos?

**Tip**: Crea tipos TypeScript para tus estructuras de datos.

```typescript
type Order = {
  id: number;
  type: string;
  quantity: number;
  unitPrice: number;
  taxType: string;
  customerType: string;
  orderCount: number;
};
```

#### 5. Organiza Visualmente
**Pregúntate**: ¿Puedo encontrar rápidamente lo que busco?

**Tip**: Agrupa código relacionado y usa comentarios de sección.

```typescript
// ============================================================================
// TAX CONFIGURATION
// ============================================================================

// ============================================================================
// CALCULATION FUNCTIONS
// ============================================================================
```

### Checklist para 1-CLEAN-CODE
- [ ] Todas las constantes tienen nombres descriptivos
- [ ] Cálculo de impuestos en su propia función
- [ ] Cálculo de descuentos en su propia función
- [ ] Cálculo de envío en su propia función
- [ ] Reporte en su propia función
- [ ] Tipos TypeScript definidos para Order y OrderResult
- [ ] Código organizado en secciones
- [ ] Tests pasan ✅

### ⚠️ Recuerda
- **NO cambies el comportamiento**, solo mejora la estructura
- Ejecuta `npm test -- src/1-clean-code` para verificar que todo funciona
- Si los tests fallan, revisa que los cálculos sean exactamente iguales

## Recursos de Ayuda
- **Clean Code** (Robert C. Martin) - Capítulo 2: Meaningful Names
- **Clean Code** - Capítulo 3: Functions
- Mira el código en `src/1-clean-code/` si necesitas inspiración
