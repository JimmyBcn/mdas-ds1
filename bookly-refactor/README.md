# Bookly Refactor Journey

"You have been assigned to improve a code script that does its job but was written quickly, con prisas y bajo presión." Bienvenido/a a Bookly: un mini-sistema de cálculo de pedidos (subtotal, impuestos, envío, descuentos y total) que evoluciona a través de 5 etapas consecutivas. El reto: refactorizar progresivamente SIN alterar el comportamiento observable ni la salida por consola. Los tests son idénticos en todas las etapas para garantizar invariancia.

## Historia Breve

Alguien montó un script rápido para responder a una necesidad urgente de negocio. Funciona, genera un informe y números correctos… pero es difícil de mantener, extender o probar. Tu misión es llevarlo desde código apresurado hasta una arquitectura limpia y flexible, demostrando cada salto sin romper nada.

## Etapas

1. Clean Code (Legado): Punto de partida; lógica mezclada y responsabilidades confusas.
2. OOP: Separación mediante clases y pequeños objetos de cálculo.
3. SOLID: Introducción de interfaces y servicios para reducir acoplamiento.
4. Patrones: Strategy, Factory, Builder, Facade para estructurar variaciones y orquestación.
5. Summary: Validación final de invariancia; simplemente delega y cierra el recorrido.

## Reglas Inmutables

- Los 5 pedidos y sus totales deben permanecer exactamente iguales.
- El informe por consola conserva formato y líneas clave.
- Los archivos de test son idénticos (mismo contenido línea a línea) en cada etapa.
- No se agregan parámetros ni se cambia la firma de `processOrders()`.

## Qué Puedes Mejorar en Cada Paso

- Legado → OOP: nombrado, separar cálculo de impuestos/descuentos/envío, evitar duplicaciones.
- OOP → SOLID: invertir dependencias, abstraer variaciones, aislar reglas de negocio.
- SOLID → Patrones: encapsular estrategias, centralizar construcción, añadir una fachada simple.
- Patrones → Summary: documentar recorrido y asegurar que ningún cambio de refactor rompió resultados.

## Siguiente Desafío (Ideas)

- Añadir nuevos tipos de envío sin tocar cálculos existentes.
- Introducir internacionalización de moneda y formato.
- Persistir pedidos en almacenamiento (sin romper tests actuales).

## Ejecutar Tests

```bash
npm test
```

Todos deben pasar en cada etapa (salida esperada: 5 suites, 69 tests en verde).

## Estructura

```
bookly-refactor/
  src/
    clean-code/
    oop/
    solid/
    patterns/
    summary/
```

¡Disfruta el viaje y refactoriza con intención! Cada mejora debe justificar su coste y conservar la confianza que proporcionan los tests.

# Bookly - Historia de una Refactorización

Imagina que te acaban de asignar mantener el script de pedidos de una pequeña librería online. Funciona y trae dinero, pero fue escrito "a la carrera" un fin de semana para salir del paso. Ahora tu misión es elevar su calidad sin romper nada: refactorizar paso a paso, demostrando que cada mejora preserva el comportamiento.

## Visión General

Refactorizarás el mismo proceso (`processOrders`) a través de varias etapas. Los tests son idénticos en todas las fases y actúan como red de seguridad: si pasan, no rompiste la lógica. Si fallan, tu refactor cambió el resultado y debes revisarlo.

## Fases

1. Clean Code: Del código espagueti a nombres claros y funciones pequeñas.
2. OOP: Introducir clases, encapsulación, herencia y polimorfismo.
3. SOLID: Reorganizar dependencias con interfaces y principios de diseño.
4. Patrones: Aplicar Factory, Builder, Strategy y Facade donde aporten.
5. Summary: Última verificación de que todo sigue igual en comportamiento.

## Reglas del ejercicio

No adelantes cambios de fases futuras. Cada etapa sólo aplica sus propias metas y corrige cosas previas si es necesario (p.ej. un nombre ambiguo). La lógica y resultados finales NO deben variar.

## Tests Idénticos

Los archivos `.test.ts` en cada fase contienen el mismo conjunto de casos verificando:

- Cantidad de pedidos
- Estructura del resultado
- Cálculos detallados de cada pedido
- Acumulados totales
- Salida del informe en consola

## Requisitos

- Node.js y npm

## Cómo ejecutar todos los tests

```powershell
cd bookly-refactor
npm install
npm test
```

## Ejecutar una fase específica

```powershell
npm run test -- bookly-legacy.test.ts
npm run test -- bookly-clean-code.test.ts
npm run test -- bookly-oop.test.ts
npm run test -- bookly-solid.test.ts
npm run test -- bookly-patterns.test.ts
```

## Sugerencia de Trabajo

Avanza una fase, refactoriza, ejecuta los tests. Si todo pasa: commit. Si algo falla: compara tu versión con la anterior e identifica qué cambio alteró la lógica.

¡Disfruta el proceso y piensa como un médico que mejora la salud del código sin alterar sus órganos funcionales!
