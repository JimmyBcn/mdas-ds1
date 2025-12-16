# OOP: Herencia - Ejemplo

## 🎯 Objetivos de aprendizaje

- Entender qué es la herencia en OOP
- Reutilizar código mediante clases base
- Usar herencia correctamente en Python
- Evitar duplicación de código común

## 📋 El problema: Código duplicado

**Concepto:** _La herencia permite reutilizar código común en una clase padre_

### ¿Qué está mal aquí? 🚫

```python
class Dog:
    # ❌ Código duplicado
    def __init__(self, name: str, age: int, weight: float):
        self.name = name
        self.age = age
        self.weight = weight

    def eat(self):
        # ...

    def sleep(self):
        # ...

    def bark(self):
        # específico

class Cat:
    # ❌ Mismo código otra vez
    def __init__(self, name: str, age: int, weight: float):
        self.name = name
        self.age = age
        self.weight = weight

    def eat(self):
        # ... ¡Duplicado!

    def sleep(self):
        # ... ¡Duplicado!

    def meow(self):
        # específico
```

**Problemas:**

- **Duplicación masiva**: Mismo código en múltiples clases
- **Difícil de mantener**: Cambios deben hacerse en todos lados
- **Inconsistencias**: Fácil que las copias difieran
- **Más código**: Más líneas innecesarias

## 🔧 Tu tarea

1. **Estudia** `inheritance_bad.py` - identifica código duplicado
2. **Implementa** tu solución en `inheritance_exercise.py` antes de ver la propuesta
3. **Observa** `inheritance_good.py` y compara con tu solución

## 🎯 Puntos clave

- Clase padre con código común
- Clases hijas heredan automáticamente
- Atributos protegidos (`_`) para acceso en hijos
- Reutilización elimina duplicación

## ⏱️ Verificación rápida

Pregúntate:

- ¿Qué código se repite entre clases?
- ¿Qué comportamiento es común?
- ¿Puedo extraer una clase base?
