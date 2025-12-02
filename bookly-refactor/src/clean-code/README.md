# 1. Clean Code (Legado)

Bienvenido al punto cero. Aquí está el script original: funciona, imprime resultados correctos, pero mezcla cálculo, datos y formateo en un único bloque.

## Qué observar

- Lógica acoplada: impuestos, envío y descuentos en línea.
- Repetición de patrones (cálculo y agregación).
- Nombres poco expresivos y ausencia de límites claros.

## Objetivo de tu refactor posterior

Separar responsabilidades sin tocar la salida. Cada cambio debe mantener:

- Las mismas 13 líneas del informe final (formato y valores).
- Los mismos totales por pedido.

## Checklist de Code Smells (guía, no obligación)

- Duplicación de cálculo temporal.
- Variables con alcance excesivo.
- Mezcla de dominio y presentación (console.log dentro del bucle principal).

## Próximo desafío → Etapa 2 (OOP)

Introduce clases ligeras para aislar cálculo de impuestos, descuentos y envío. No cambies firmas públicas.
