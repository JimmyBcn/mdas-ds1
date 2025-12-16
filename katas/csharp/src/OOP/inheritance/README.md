````markdown
# OOP: Herencia - Ejemplo

## 🎯 Objetivos de aprendizaje

- Entender qué es la herencia en OOP
- Reutilizar código mediante clases base
- Usar herencia y `protected` correctamente
- Evitar duplicación de código común

## 📋 El problema: Código duplicado

**Concepto:** _La herencia permite reutilizar código común en una clase padre_

### ¿Qué está mal aquí? 🚫

```csharp
public class Dog
{
    // ❌ Código duplicado
    private string name;
    public void Eat() { /* ... */ }
    public void Sleep() { /* ... */ }
    public void Bark() { /* específico */ }
}

public class Cat
{
    // ❌ Mismo código otra vez
    private string name;
    public void Eat() { /* ... */ } // ¡Duplicado!
    public void Sleep() { /* ... */ } // ¡Duplicado!
    public void Meow() { /* específico */ }
}
```

**Problemas:**

- **Duplicación masiva**: Mismo código en múltiples clases
- **Difícil de mantener**: Cambios deben hacerse en todos lados
- **Inconsistencias**: Fácil que las copias difieran
- **Más código**: Más líneas innecesarias

## 🔧 Tu tarea

1. **Estudia** `inheritance-bad.cs` - identifica código duplicado
2. **Implementa** tu solución en `inheritance-exercise.cs` antes de ver la propuesta
3. **Observa** `inheritance-good.cs` y compara con tu solución

## 🎯 Puntos clave

- Clase padre con código común
- Clases hijas heredan con `: base`
- `protected` para acceso en hijos
- Reutilización elimina duplicación

## ⏱️ Verificación rápida

Pregúntate:

- ¿Qué código se repite entre clases?
- ¿Qué comportamiento es común?
- ¿Puedo extraer una clase base?

## 🚀 Cómo ejecutar

```bash
# Ejecutar ejemplos
dotnet script inheritance-bad.cs
dotnet script inheritance-good.cs
```
````
