# 1-CLEAN-CODE: Aplicando Principios de Código Limpio

## Visión General

Esta etapa refactoriza el código procedural heredado aplicando **principios de código limpio** para mejorar la legibilidad y mantenibilidad sin cambiar el comportamiento.

## Cambios Clave

### 1. Reemplazo de Números y Strings Mágicos por Constantes

**Por qué**: Los valores mágicos hacen el código difícil de entender y mantener.

- Tipos de impuestos: `TAX_TYPE_GENERAL`, `TAX_TYPE_REDUCED`
- Tipos de envío: `SHIPPING_TYPE_STANDARD`, `SHIPPING_TYPE_EXPRESS`, `SHIPPING_TYPE_ECONOMY`
- Tipos de cliente: `CUSTOMER_TYPE_PREMIUM`, `CUSTOMER_TYPE_REGULAR`
- Todas las constantes de cálculo (tasas, umbrales, costos) ahora tienen nombres descriptivos

### 2. Nombres Significativos para Variables y Funciones

**Por qué**: El código auto-documentado reduce la necesidad de comentarios.

- `calculateTax()` en lugar de lógica de cálculo genérica
- `calculateDiscount()` con nombres de parámetros claros
- `calculateShippingCost()` para la lógica de envío
- Nombres descriptivos de parámetros: `subtotal`, `taxType`, `customerType`, `orderCount`

### 3. Funciones Extraídas Siguiendo Responsabilidad Única

**Por qué**: Cada función debe hacer una cosa bien.

- `calculateTax()`: Solo maneja el cálculo de impuestos
- `calculateDiscount()`: Solo maneja el cálculo de descuentos
- `calculateShippingCost()`: Solo maneja el cálculo de costos de envío
- `printReport()`: Solo maneja el formateo e impresión del reporte

### 4. Definiciones de Tipos TypeScript

**Por qué**: La seguridad de tipos previene errores y mejora el soporte del IDE.

- Tipo `Order`: Define la estructura de un pedido
- Tipo `OrderResult`: Define los resultados de cálculo
- Parámetros y valores de retorno tipados

### 5. Formato Vertical con Encabezados de Sección

**Por qué**: La organización visual ayuda a navegar el código.

- Sección TAX CONFIGURATION
- Sección SHIPPING CONFIGURATION
- Sección CUSTOMER & DISCOUNT CONFIGURATION
- Sección TYPE DEFINITIONS
- Sección CALCULATION FUNCTIONS
- Sección ORDER PROCESSING
- Sección REPORTING

### 6. Correcciones de Bugs

**Por qué**: El código limpio también debe ser código correcto.

- Corregido cálculo de impuestos faltante
- Corregidos valores de retorno incorrectos

## Resultados

- **Legibilidad**: Código auto-documentado con nombres claros
- **Mantenibilidad**: Fácil modificar tasas y agregar nuevos tipos
- **Testabilidad**: Las funciones pueden ser probadas independientemente
- **Mismo Comportamiento**: Todos los tests pasan - sin cambios funcionales

## Ejecutar

```bash
npm test -- src/1-clean-code
```
