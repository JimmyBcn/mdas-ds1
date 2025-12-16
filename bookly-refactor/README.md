# Bookly Refactor Journey

Bienvenido/a a Bookly: un mini-sistema de cálculo de pedidos (subtotal, impuestos, envío, descuentos y total) que evoluciona a través de 4 etapas consecutivas. El reto: refactorizar progresivamente SIN alterar el comportamiento observable ni la salida por consola. Los tests son idénticos en todas las etapas para garantizar invariancia.

## Historia Breve

Alguien montó un script rápido para responder a una necesidad urgente de negocio. Funciona, genera un informe y números correctos… pero es difícil de mantener, extender o probar. Tu misión es llevarlo desde código apresurado hasta una arquitectura limpia y flexible, demostrando cada salto sin romper nada.

¡Disfruta el viaje y refactoriza con intención! Cada mejora debe justificar su coste y conservar la confianza que proporcionan los tests.

## Etapas

0. Legado: Punto de partida; lógica mezclada y responsabilidades confusas.
1. Clean Code: Reglas fundamentales de código limpio para preparar el terreno.
2. OOP: Separación mediante clases y pequeños objetos de cálculo.
3. SOLID: Introducción de interfaces y servicios para reducir acoplamiento.
4. Patrones: Strategy, Factory, Builder, Facade para estructurar variaciones y orquestación.

## Reglas Inmutables

- Los 5 pedidos y sus totales deben permanecer exactamente iguales.
- El informe por consola conserva formato y líneas clave.
- Los archivos de test son idénticos (mismo contenido línea a línea) en cada etapa.
- No se agregan parámetros ni se cambia la firma de `processOrders()`.

## Siguiente Desafío (Ideas)

- Añadir nuevos tipos de envío sin tocar cálculos existentes.
- Introducir internacionalización de moneda y formato.
- Persistir pedidos en almacenamiento (sin romper tests actuales).

## Requisitos

- Node.js y npm

## Cómo ejecutar todos los tests

```bash
cd bookly-refactor
npm install
npm test
```

Todos deben pasar en cada etapa (salida esperada: 5 suites, 69 tests en verde).
