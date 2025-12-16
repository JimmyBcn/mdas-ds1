# 🎯 ISP - Interface Segregation Principle

**Tiempo estimado:** 20 minutos

## 📋 Descripción

El Principio de Segregación de Interfaces establece que ningún cliente debería verse forzado a depender de métodos que no utiliza.

**En palabras simples:** Es mejor tener muchas interfaces pequeñas y específicas que una interfaz grande y genérica.

## ❌ El Problema (isp_bad.py)

```python
from abc import ABC, abstractmethod

class Worker(ABC):
    @abstractmethod
    def work(self) -> str:
        pass

    @abstractmethod
    def eat(self) -> str:
        pass

    @abstractmethod
    def sleep(self) -> str:
        pass

class Robot(Worker):
    def work(self) -> str:
        return "Robot trabajando"

    # ❌ Forzado a implementar métodos que no usa
    def eat(self) -> str:
        raise Exception("¡Los robots no comen!")

    def sleep(self) -> str:
        raise Exception("¡Los robots no duermen!")
```

**Problemas:**

- `Robot` debe implementar `eat()` y `sleep()` aunque no los necesita
- Viola ISP: el cliente depende de una interfaz demasiado ancha
- Métodos que lanzan excepciones indican diseño incorrecto

## ✅ La Solución (isp_good.py)

```python
from abc import ABC, abstractmethod

class Workable(ABC):
    @abstractmethod
    def work(self) -> str:
        pass

class Eatable(ABC):
    @abstractmethod
    def eat(self) -> str:
        pass

class Sleepable(ABC):
    @abstractmethod
    def sleep(self) -> str:
        pass

class Human(Workable, Eatable, Sleepable):  # ✅ Implementa todo lo que necesita
    def work(self) -> str:
        return "Humano trabajando"

    def eat(self) -> str:
        return "Humano comiendo"

    def sleep(self) -> str:
        return "Humano durmiendo"

class Robot(Workable):  # ✅ Solo implementa lo que necesita
    def work(self) -> str:
        return "Robot trabajando"
```

**Beneficios:**

- Cada clase implementa solo las interfaces que necesita
- No hay métodos vacíos ni excepciones
- Interfaces pequeñas y enfocadas
- Más flexible para diferentes tipos de trabajadores

## 🔧 Tarea Práctica

1. **Ejecuta el mal ejemplo:**

   ```bash
   python isp_bad.py
   ```

   Observa cómo `Robot` está forzado a implementar métodos que no usa.

2. **Abre isp_exercise.py:**

   - Analiza qué métodos de `Worker` no todos necesitan
   - Divide `Worker` en interfaces más pequeñas
   - Implementa la solución antes de ver `isp_good.py`

3. **Compara con la solución:**

   ```bash
   python isp_good.py
   ```

4. **Desafío extra:**
   Agrega un `Intern` (pasante) que:
   - Puede trabajar
   - Puede dormir
   - NO puede comer durante horario laboral

## 🎯 Puntos Clave

### Violación de ISP

- ❌ Interfaces grandes con muchos métodos
- ❌ Clases forzadas a implementar métodos que no usan
- ❌ Métodos que lanzan `NotImplementedError`

### Cumplimiento de ISP

- ✅ Interfaces pequeñas y enfocadas
- ✅ Cada cliente implementa solo lo que necesita
- ✅ Composición de múltiples interfaces específicas

### Señales de Alerta

```python
# ❌ Señal de violación ISP
class MyClass(BigInterface):
    def method_i_dont_need(self):
        raise NotImplementedError("¡No necesito esto!")
```

### Solución

```python
# ✅ Solo implementa lo que necesitas
class MyClass(SmallInterface1, SmallInterface2):
    # Implementa solo las interfaces que realmente necesitas
    pass
```

## 🔗 Relación con Otros Conceptos

- **SRP:** ISP es SRP aplicado a interfaces
- **LSP:** Interfaces segregadas facilitan cumplir LSP
- **DIP:** Interfaces pequeñas son mejores abstracciones
- **Composición:** ISP favorece composición de múltiples interfaces

## ⏱️ Verificación Rápida

¿Entendiste ISP? Responde:

1. ¿Por qué `Worker` es una interfaz "ancha"?
2. ¿Cómo dividir `Worker` en interfaces más pequeñas?
3. ¿Por qué es mejor tener `Workable`, `Eatable`, `Sleepable` separadas?
4. ¿Cuándo una clase debería implementar múltiples interfaces pequeñas?

## 💡 Regla de Oro

**"Muchas interfaces específicas son mejores que una interfaz de propósito general"**

No fuerces a los clientes a implementar métodos que no necesitan.

---

_Siguiente: DIP - Dependency Inversion Principle_
