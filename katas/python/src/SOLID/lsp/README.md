# 🎯 LSP - Liskov Substitution Principle

**Tiempo estimado:** 20 minutos

## 📋 Descripción

El Principio de Sustitución de Liskov establece que los objetos de una clase derivada deben poder reemplazar a objetos de la clase base sin alterar el comportamiento correcto del programa.

**En palabras simples:** Si usas una clase padre, deberías poder usar cualquier clase hija sin que nada se rompa.

## ❌ El Problema (lsp_bad.py)

```python
class Bird:
    def fly(self) -> str:
        return "¡Volando alto en el cielo!"

class Penguin(Bird):  # ❌ Penguin ES-UN Bird, ¡pero no puede volar!
    def fly(self) -> str:
        raise Exception("¡Los pingüinos no pueden volar!")  # ¡Comportamiento roto!

def make_bird_fly(bird: Bird) -> str:
    return bird.fly()  # ❌ ¡Esto lanza error para Penguin!

penguin = Penguin()
make_bird_fly(penguin)  # ❌ ¡SE ROMPE!
```

**Problemas:**

- `Penguin` hereda de `Bird` pero no puede cumplir con el contrato de `fly()`
- Viola las expectativas: si algo ES-UN `Bird`, debería poder volar
- El código cliente que espera un `Bird` se rompe con `Penguin`

## ✅ La Solución (lsp_good.py)

```python
from abc import ABC, abstractmethod

class Animal(ABC):
    @abstractmethod
    def eat(self) -> str:
        pass

class Flyable(ABC):
    @abstractmethod
    def fly(self) -> str:
        pass

class Swimmable(ABC):
    @abstractmethod
    def swim(self) -> str:
        pass

class Eagle(Animal, Flyable):  # ✅ Solo implementa lo que puede hacer
    def eat(self) -> str:
        return "Águila comiendo pescado"

    def fly(self) -> str:
        return "¡Águila volando alto!"

class Penguin(Animal, Swimmable):  # ✅ Solo implementa lo que puede hacer
    def eat(self) -> str:
        return "Pingüino comiendo pescado"

    def swim(self) -> str:
        return "Pingüino nadando con gracia"

def make_flyable_creature_fly(creature: Flyable) -> str:
    return creature.fly()  # ✅ Solo cosas que SÍ pueden volar
```

**Beneficios:**

- Cada clase implementa solo lo que realmente puede hacer
- No hay excepciones inesperadas
- Las interfaces definen contratos claros
- Seguro en tiempo de desarrollo con type hints

## 🔧 Tarea Práctica

1. **Ejecuta el mal ejemplo:**

   ```bash
   python lsp_bad.py
   ```

   Observa cómo el código se rompe cuando usas `Penguin` como `Bird`.

2. **Abre lsp_exercise.py:**

   - Analiza por qué `Penguin` viola LSP
   - Diseña interfaces apropiadas (`Flyable`, `Swimmable`)
   - Implementa la solución antes de ver `lsp_good.py`

3. **Compara con la solución:**

   ```bash
   python lsp_good.py
   ```

4. **Desafío extra:**
   Agrega un `Ostrich` (avestruz) que:
   - Puede comer y correr
   - NO puede volar ni nadar
   - Crea una interfaz `Runnable` si es necesario

## 🎯 Puntos Clave

### Violación de LSP

- ❌ Clases hijas que no pueden cumplir el contrato del padre
- ❌ Lanzar excepciones en métodos heredados
- ❌ Cambiar comportamiento esperado del padre

### Cumplimiento de LSP

- ✅ Usar composición e interfaces en lugar de herencia forzada
- ✅ Cada clase implementa solo lo que puede hacer realmente
- ✅ Las sustituciones funcionan sin romper el código cliente

### Señales de Alerta

```python
# ❌ Señal de violación LSP
class ChildClass(ParentClass):
    def inherited_method(self):
        raise NotImplementedError("¡No puedo hacer esto!")
```

### Solución

```python
# ✅ Solo implementa lo que necesitas
class MyClass(Interface1, Interface2):
    # Implementa solo las interfaces que realmente cumples
    pass
```

## 🔗 Relación con Otros Conceptos

- **OCP:** LSP ayuda a cumplir OCP - las jerarquías correctas permiten extensión
- **ISP:** Interfaces segregadas hacen más fácil cumplir LSP
- **Herencia:** LSP te dice cuándo la herencia es apropiada
- **Composición sobre Herencia:** LSP favorece interfaces y composición

## ⏱️ Verificación Rápida

¿Entendiste LSP? Responde:

1. ¿Por qué `Penguin` no debería heredar de `Bird` si `Bird` tiene `fly()`?
2. ¿Cómo las interfaces (`Flyable`, `Swimmable`) solucionan el problema?
3. ¿Qué significa que un subtipo sea "sustituible"?
4. ¿Cuándo preferirías interfaces múltiples sobre herencia simple?

## 💡 Regla de Oro

**"Si parece un pato, nada como un pato, pero necesita baterías - probablemente tienes la abstracción incorrecta"**

Las clases hijas deben poder hacer TODO lo que el padre promete, sin excepciones ni sorpresas.

---

_Siguiente: ISP - Interface Segregation Principle_
