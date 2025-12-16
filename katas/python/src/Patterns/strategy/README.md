# 🎯 Strategy - Patrón de Comportamiento

**Tiempo estimado:** 20 minutos

## 📋 Descripción

El patrón Strategy define una familia de algoritmos, encapsula cada uno y los hace intercambiables. Strategy permite que el algoritmo varíe independientemente de los clientes que lo usan.

**En palabras simples:** Encapsula algoritmos en clases separadas y hazlos intercambiables.

## ❌ El Problema (strategy_bad.py)

```python
class DiscountCalculator:
    def calculate_discount(self, customer_type: str, order_amount: float) -> float:
        # ❌ Todos los algoritmos mezclados con lógica condicional
        if customer_type == "regular":
            return 0
        elif customer_type == "premium":
            return order_amount * 0.1
        elif customer_type == "vip":
            return order_amount * 0.2
        elif customer_type == "employee":
            return order_amount * 0.5
        else:
            raise ValueError(f"Tipo desconocido: {customer_type}")
```

**Problemas:**

- Todos los algoritmos de descuento en una clase
- Cadena de if/elif que crece con cada nuevo tipo
- No se pueden probar algoritmos individuales
- Viola el principio Open/Closed

## ✅ La Solución (strategy_good.py)

```python
from abc import ABC, abstractmethod

class DiscountStrategy(ABC):  # ✅ Interfaz común
    @abstractmethod
    def calculate_discount(self, order_amount: float) -> float:
        pass

class RegularCustomerDiscount(DiscountStrategy):
    def calculate_discount(self, order_amount: float) -> float:
        return 0  # Sin descuento

class PremiumCustomerDiscount(DiscountStrategy):
    def calculate_discount(self, order_amount: float) -> float:
        return order_amount * 0.1  # 10% de descuento

class DiscountCalculator:
    def __init__(self, strategy: DiscountStrategy):
        self.strategy = strategy

    def set_strategy(self, strategy: DiscountStrategy) -> None:
        self.strategy = strategy  # ✅ Cambiar en runtime

    def calculate_discount(self, order_amount: float) -> float:
        return self.strategy.calculate_discount(order_amount)

# ✅ Uso
calculator = DiscountCalculator(RegularCustomerDiscount())
calculator.set_strategy(PremiumCustomerDiscount())  # Cambiar estrategia
```

**Beneficios:**

- Cada algoritmo en su propia clase
- Fácil agregar nuevas estrategias sin modificar código existente
- Estrategias pueden intercambiarse en runtime
- Fácil de testear individualmente

## 🔧 Tarea Práctica

1. **Ejecuta el mal ejemplo:**

   ```bash
   python strategy_bad.py
   ```

   Observa cómo todos los algoritmos están mezclados.

2. **Abre strategy_exercise.py:**

   - Crea interfaz `DiscountStrategy` con método `calculate_discount()`
   - Implementa estrategias concretas para cada tipo de cliente
   - Crea `DiscountCalculator` que use una estrategia
   - Agrega método `set_strategy()` para cambiar en runtime

3. **Compara con la solución:**

   ```bash
   python strategy_good.py
   ```

4. **Desafío extra:**
   Agrega `SeasonalDiscount`:
   - 25% de descuento durante temporada de rebajas
   - Implementa `DiscountStrategy`
   - Úsala sin modificar `DiscountCalculator`

## 🎯 Puntos Clave

### Sin Strategy

- ❌ if/elif para cada algoritmo
- ❌ Todos los algoritmos en una clase
- ❌ Difícil agregar nuevos algoritmos

### Con Strategy

- ✅ Cada algoritmo en su propia clase
- ✅ Intercambiables en runtime
- ✅ Fácil agregar nuevas estrategias

### Cuándo Usar Strategy

- Múltiples variantes de un algoritmo
- Muchos if/elif o switch/case
- Necesitas cambiar comportamiento en runtime
- Algoritmos que varían según contexto

## 🔗 Relación con Otros Conceptos

- **OCP:** Strategy permite agregar algoritmos sin modificar código
- **SRP:** Separa cada algoritmo en su propia clase
- **DIP:** Cliente depende de abstracción (DiscountStrategy)
- **Factory:** A menudo se usa con Factory para crear estrategias

## ⏱️ Verificación Rápida

¿Entendiste Strategy? Responde:

1. ¿Qué problema resuelve el patrón Strategy?
2. ¿Cómo Strategy elimina if/elif?
3. ¿Por qué las estrategias pueden cambiar en runtime?
4. ¿Cuál es la diferencia entre Strategy y herencia simple?

## 💡 Regla de Oro

**"Encapsula algoritmos variables en clases intercambiables"**

Si tienes múltiples if/elif para diferentes algoritmos, usa Strategy.

---

_¡Has completado todos los patrones de diseño!_
