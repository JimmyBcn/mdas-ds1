# 🎯 DIP - Dependency Inversion Principle

**Tiempo estimado:** 20 minutos

## 📋 Descripción

El Principio de Inversión de Dependencias establece que:

1. Los módulos de alto nivel no deben depender de módulos de bajo nivel. Ambos deben depender de abstracciones.
2. Las abstracciones no deben depender de detalles. Los detalles deben depender de abstracciones.

**En palabras simples:** Depende de interfaces (abstracciones), no de clases concretas.

## ❌ El Problema (dip_bad.py)

```python
class MySQLDatabase:
    def save(self, data: str) -> None:
        print(f"Guardando en MySQL: {data}")

class OrderService:
    def __init__(self, database: MySQLDatabase):  # ❌ Depende de concreto
        self.database = database

    def process_order(self, order_id: str) -> None:
        self.database.save(f"Pedido {order_id}")

# ❌ Problemas:
# - No puedes cambiar a PostgreSQL sin modificar OrderService
# - Difícil de probar (no puedes mockear MySQLDatabase fácilmente)
# - OrderService sabe demasiado sobre la implementación de la base de datos
```

**Problemas:**

- Alto acoplamiento entre `OrderService` y `MySQLDatabase`
- No se puede cambiar la base de datos sin modificar código
- Difícil de testear con mocks

## ✅ La Solución (dip_good.py)

```python
from abc import ABC, abstractmethod

class Database(ABC):  # ✅ Abstracción
    @abstractmethod
    def save(self, data: str) -> None:
        pass

class MySQLDatabase(Database):  # ✅ Implementa abstracción
    def save(self, data: str) -> None:
        print(f"Guardando en MySQL: {data}")

class PostgreSQLDatabase(Database):  # ✅ Implementa abstracción
    def save(self, data: str) -> None:
        print(f"Guardando en PostgreSQL: {data}")

class OrderService:
    def __init__(self, database: Database):  # ✅ Depende de abstracción
        self.database = database

    def process_order(self, order_id: str) -> None:
        self.database.save(f"Pedido {order_id}")

# ✅ Beneficios:
# - Puedes intercambiar bases de datos fácilmente
# - Fácil de testear con mocks
# - OrderService no sabe sobre implementación específica
```

**Beneficios:**

- Bajo acoplamiento - fácil cambiar implementaciones
- Alto en testabilidad - fácil usar mocks
- Flexible - agregar nuevas bases de datos sin modificar `OrderService`

## 🔧 Tarea Práctica

1. **Ejecuta el mal ejemplo:**

   ```bash
   python dip_bad.py
   ```

   Observa cómo `OrderService` está acoplado a `MySQLDatabase`.

2. **Abre dip_exercise.py:**

   - Analiza el acoplamiento fuerte
   - Crea una interfaz `Database` usando ABC
   - Implementa múltiples bases de datos
   - Haz que `OrderService` dependa de la abstracción

3. **Compara con la solución:**

   ```bash
   python dip_good.py
   ```

4. **Desafío extra:**
   Agrega un `MongoDatabase` que:
   - Implementa la interfaz `Database`
   - Funciona con `OrderService` sin modificarlo
   - Demuestra la flexibilidad del DIP

## 🎯 Puntos Clave

### Violación de DIP

- ❌ Clases de alto nivel dependen de clases concretas de bajo nivel
- ❌ `new ConcreteClass()` dentro de constructores
- ❌ Difícil cambiar implementaciones

### Cumplimiento de DIP

- ✅ Ambos niveles dependen de abstracciones (interfaces)
- ✅ Inyección de dependencias vía constructor
- ✅ Fácil intercambiar implementaciones

### Señales de Alerta

```python
# ❌ Señal de violación DIP
class HighLevelClass:
    def __init__(self):
        self.dependency = ConcreteLowLevelClass()  # ¡Acoplamiento!
```

### Solución

```python
# ✅ Depende de abstracción
class HighLevelClass:
    def __init__(self, dependency: AbstractInterface):
        self.dependency = dependency  # ¡Flexible!
```

## 🔗 Relación con Otros Conceptos

- **OCP:** DIP facilita OCP - nuevas implementaciones sin modificar código
- **ISP:** Interfaces pequeñas son mejores abstracciones para DIP
- **Inyección de Dependencias:** DIP es el principio, DI es la técnica
- **Testing:** DIP hace el código testeable con mocks

## ⏱️ Verificación Rápida

¿Entendiste DIP? Responde:

1. ¿Por qué `OrderService` no debería depender de `MySQLDatabase`?
2. ¿Cómo una interfaz `Database` invierte la dependencia?
3. ¿Qué es inyección de dependencias y cómo se relaciona con DIP?
4. ¿Cómo DIP facilita el testing unitario?

## 💡 Regla de Oro

**"Depende de abstracciones, no de concreciones"**

Las clases de alto nivel y bajo nivel deben depender de interfaces, no unas de otras.

---

_Has completado todos los principios SOLID!_
