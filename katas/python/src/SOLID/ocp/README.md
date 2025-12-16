# Principio Abierto/Cerrado (OCP)

## 🎯 Definición del Principio

> "Las entidades de software deben estar abiertas para extensión pero cerradas para modificación"

Las clases deben estar **abiertas para extensión** (puedes agregar nueva funcionalidad) pero **cerradas para modificación** (no deberías cambiar el código existente).

## 📖 El problema (ocp_bad.py)

La clase `Communication` debe ser **modificada** cada vez que agregamos un nuevo animal:

```python
class Communication:
    def communicate(self, animal) -> str:
        if isinstance(animal, Dog):
            return animal.make_sound()
        elif isinstance(animal, Cat):
            return animal.make_sound()
        else:
            raise Exception("Animal desconocido")  # ❌ Debe agregar nuevo if/else
```

### ¿Por qué es esto malo?

- Agregar `Cow` requiere **modificar** `Communication` ❌
- Debe agregar nuevas ramas `if/else` ❌
- Riesgo de romper el código existente ❌
- Viola la regla "cerrado para modificación" ❌

## ✅ La solución (ocp_good.py)

Usar una **clase abstracta** para que se puedan agregar nuevos animales **sin cambiar** el código existente:

```python
from abc import ABC, abstractmethod

# Definir qué deben hacer todos los animales ✅
class Communicable(ABC):
    @abstractmethod
    def communicate(self) -> str:
        pass

# Cada animal implementa su comunicación ✅
class Dog(Communicable):
    def communicate(self) -> str:
        return "woof woof"

# ¡El comunicador nunca necesita cambiar! ✅
class Communication:
    def communicate(self, animal: Communicable) -> str:
        return animal.communicate()  # Solo llamar al método de la interfaz

# ¡Agregar nuevos animales sin modificar código existente! ✅
class Cow(Communicable):
    def communicate(self) -> str:
        return "moo moo"
```

### ¿Por qué es esto mejor?

- **Abierto para extensión**: Fácil de agregar nuevos animales ✅
- **Cerrado para modificación**: Nunca cambiar código existente ✅
- Sin riesgo de romper funcionalidad existente ✅
- Cada animal gestiona su propia comunicación ✅

## 🔧 Tu tarea

1. **Estudia** `ocp_bad.py` - ve cómo agregar animales requiere modificación
2. **Implementa** tu solución en `ocp_exercise.py` antes de ver la propuesta
3. **Observa** `ocp_good.py` y compara con tu solución

## 🎯 Puntos clave

- Abierto para extensión, cerrado para modificación
- Usa clases abstractas (ABC) para comportamiento polimórfico
- Nuevas funcionalidades sin cambiar código existente
- Reduce riesgo de romper lo que funciona

## ⏱️ Verificación rápida

Pregúntate:

- ¿Qué comportamiento comparten las clases?
- ¿Cómo hago el código extensible sin modificarlo?
- ¿Qué clase abstracta necesito?
