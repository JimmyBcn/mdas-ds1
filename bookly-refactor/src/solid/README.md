# 3. SOLID

Aplicamos principios SOLID para reducir el acoplamiento y abrir el código a extensión sin modificar lo estable.

## Principios relevantes

- SRP: Cada clase con una razón de cambio.
- OCP: Añadir nuevos tipos de envío sin tocar clases existentes.
- LSP: Sustitución transparente de implementaciones de calculadoras.
- ISP: Interfaces pequeñas (cálculo de impuestos, descuentos, envío).
- DIP: `OrderService` depende de abstracciones, no implementaciones concretas.

## Objetivos

- Introducir interfaces claras: `ITaxCalculator`, `IDiscountCalculator`, `IShippingCalculator`.
- Centralizar lógica de pedido sin conocer detalles concretos.

## Indicadores de éxito

- Añadir un nuevo tipo de envío requiere sólo crear su clase y tocar la fábrica.
- Tests siguen idénticos.

## Próximo desafío → Etapa 4 (Patrones)

Usar patrones para expresar variaciones y construcción sin proliferar condicionales.
