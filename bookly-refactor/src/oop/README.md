# 2. OOP

Ahora encapsulamos piezas: Pedido, calculadoras de Impuestos, Descuentos y clases de Envío. El objetivo es reducir mezcla y preparar extensión.

## Logros esperados

- Código más legible: cada concepto tiene su clase.
- Fábrica de envío simplifica selección por tipo.
- El flujo principal se centra en orquestar objetos.

## Mantén inmutable

- Formato y contenido del informe.
- Totales y reglas de cálculo.

## Sugerencias de mejora

- Evita lógica condicional larga moviéndola a métodos especializados.
- Asegúrate de que `processOrders()` queda más corto y declarativo.

## Próximo desafío → Etapa 3 (SOLID)

Separar contratos (interfaces) y aplicar inversión de dependencias para desacoplar decisiones concretas.
