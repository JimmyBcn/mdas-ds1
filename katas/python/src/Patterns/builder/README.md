# 🏗️ Builder - Patrón Creacional

**Tiempo estimado:** 20 minutos

## 📋 Descripción

El patrón Builder separa la construcción de un objeto complejo de su representación, permitiendo que el mismo proceso de construcción pueda crear diferentes representaciones.

**En palabras simples:** Construye objetos complejos paso a paso de forma legible y flexible.

## ❌ El Problema (builder_bad.py)

```python
class Pizza:
    def __init__(self, size: str, crust: str, sauce: str, cheese: str,
                 toppings: List[str], extra_cheese: bool, spicy_level: int):
        # Constructor telescópico - ¡demasiados parámetros!
        pass

# ❌ Difícil recordar el orden de los parámetros
margherita = Pizza(
    "grande",
    "delgada",
    "tomate",
    "mozzarella",
    ["albahaca", "tomates"],
    False,  # ¿Qué significa este booleano?
    0       # ¿Y este número?
)
```

**Problemas:**

- Constructor con muchos parámetros (constructor telescópico)
- Difícil recordar el orden de los parámetros
- No es claro qué significa cada valor
- Parámetros opcionales complicados de manejar

## ✅ La Solución (builder_good.py)

```python
class PizzaBuilder:
    def __init__(self):
        self.size = "mediana"
        self.crust = "regular"
        # ... valores por defecto

    def set_size(self, size: str) -> "PizzaBuilder":
        self.size = size
        return self  # ✅ Retorna self para encadenamiento

    def add_topping(self, topping: str) -> "PizzaBuilder":
        self.toppings.append(topping)
        return self

    def build(self) -> Pizza:
        return Pizza(self.size, self.crust, ...)

# ✅ Código legible y auto-documentado
margherita = (
    PizzaBuilder()
    .set_size("grande")        # ✅ Claro qué es cada parámetro
    .set_crust("delgada")
    .add_topping("albahaca")   # ✅ Fácil agregar ingredientes
    .add_topping("tomates")
    .build()
)
```

**Beneficios:**

- Interfaz fluida (fluent interface) - fácil de leer
- Valores por defecto para parámetros opcionales
- Construcción paso a paso clara
- Reutilizable con `reset()`

## 🔧 Tarea Práctica

1. **Ejecuta el mal ejemplo:**

   ```bash
   python builder_bad.py
   ```

   Observa lo confuso que es el constructor con muchos parámetros.

2. **Abre builder_exercise.py:**

   - Identifica todos los parámetros del constructor de `Pizza`
   - Crea `PizzaBuilder` con valores por defecto
   - Implementa métodos que retornen `self` para encadenamiento
   - Agrega método `build()` que construya la `Pizza`

3. **Compara con la solución:**

   ```bash
   python builder_good.py
   ```

4. **Desafío extra:**
   Agrega validación en `build()`:
   - Tamaño debe ser válido ("pequeña", "mediana", "grande")
   - Debe tener al menos un ingrediente
   - Nivel picante entre 0 y 5

## 🎯 Puntos Clave

### Sin Builder

- ❌ Constructor con muchos parámetros
- ❌ Difícil recordar el orden
- ❌ Valores opcionales confusos

### Con Builder

- ✅ Construcción paso a paso
- ✅ Auto-documentado y legible
- ✅ Valores por defecto claros

### Cuándo Usar Builder

- Objetos con muchos parámetros (>4)
- Muchos parámetros opcionales
- Necesitas diferentes configuraciones del mismo objeto
- Quieres hacer la construcción más legible

## 🔗 Relación con Otros Conceptos

- **SRP:** Separa la construcción de la representación
- **Fluent Interface:** Métodos que retornan `self`
- **Immutability:** Puede crear objetos inmutables
- **Factory:** A menudo se usa junto con Builder

## ⏱️ Verificación Rápida

¿Entendiste Builder? Responde:

1. ¿Qué problema resuelve el patrón Builder?
2. ¿Por qué cada método del builder retorna `self`?
3. ¿Cómo Builder maneja parámetros opcionales?
4. ¿Cuál es la diferencia entre Builder y Factory?

## 💡 Regla de Oro

**"Construye objetos complejos paso a paso de forma legible"**

Si tu constructor tiene más de 3-4 parámetros, considera usar Builder.

---

_Siguiente: Adapter Pattern_
