````markdown
# Principio Abierto/Cerrado (OCP)

## 🎯 Definición del Principio

> "Las entidades de software deben estar abiertas para extensión pero cerradas para modificación"

Las clases deben estar **abiertas para extensión** (puedes agregar nueva funcionalidad) pero **cerradas para modificación** (no deberías cambiar el código existente).

## 📖 El problema (ocp-bad.cs)

La clase `AreaCalculator` debe ser **modificada** cada vez que agregamos una nueva forma:

```csharp
public class AreaCalculator
{
    public double CalculateArea(object shape)
    {
        if (shape is Rectangle rect)
        {
            return rect.Width * rect.Height;
        }
        else if (shape is Circle circle)
        {
            return Math.PI * circle.Radius * circle.Radius;
        }
        else
        {
            throw new Exception("Forma desconocida"); // ❌ Debe agregar nuevo if/else
        }
    }
}
```

### ¿Por qué es esto malo?

- Agregar `Triangle` requiere **modificar** `AreaCalculator` ❌
- Debe agregar nuevas ramas `if/else` ❌
- Riesgo de romper el código existente ❌
- Viola la regla "cerrado para modificación" ❌

## ✅ La solución (ocp-good.cs)

Usar una **interfaz** para que se puedan agregar nuevas formas **sin cambiar** el código existente:

```csharp
// Definir qué deben hacer todas las formas ✅
public interface IShape
{
    double CalculateArea();
}

// Cada forma sabe cómo calcular su propia área ✅
public class Rectangle : IShape
{
    public double CalculateArea()
    {
        return Width * Height;
    }
}

// ¡El calculador nunca necesita cambiar! ✅
public class AreaCalculator
{
    public double CalculateArea(IShape shape)
    {
        return shape.CalculateArea(); // Solo llamar al método de la interfaz
    }
}

// ¡Agregar nuevas formas sin modificar código existente! ✅
public class Triangle : IShape
{
    public double CalculateArea()
    {
        return (Base * Height) / 2;
    }
}
```

### ¿Por qué es esto mejor?

- **Abierto para extensión**: Fácil de agregar nuevas formas ✅
- **Cerrado para modificación**: Nunca cambiar código existente ✅
- Sin riesgo de romper funcionalidad existente ✅
- Cada forma gestiona su propio cálculo ✅

## 🔧 Tu tarea

1. **Estudia** `ocp-bad.cs` - ve cómo agregar animales requiere modificación
2. **Implementa** tu solución en `ocp-exercise.cs` antes de ver la propuesta
3. **Observa** `ocp-good.cs` y compara con tu solución

## 🎯 Puntos clave

- Abierto para extensión, cerrado para modificación
- Usa interfaces para comportamiento polimórfico
- Nuevas funcionalidades sin cambiar código existente
- Reduce riesgo de romper lo que funciona

## ⏱️ Verificación rápida

Pregúntate:

- ¿Qué comportamiento comparten las clases?
- ¿Cómo hago el código extensible sin modificarlo?
- ¿Qué interfaz necesito?

## 🚀 Cómo ejecutar

```bash
# Ejecutar ejemplos
dotnet script ocp-bad.cs
dotnet script ocp-good.cs
```
````
