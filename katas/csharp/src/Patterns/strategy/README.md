````markdown
# Patrón Strategy - Ejemplo

## 🎯 Objetivos de aprendizaje

- Entender el problema de las cadenas if/else para algoritmos
- Aprender cómo el patrón Strategy encapsula algoritmos
- Practicar la creación de estrategias intercambiables
- Ver cómo las estrategias facilitan agregar nuevos comportamientos

## 📋 El problema: Cadenas if/else para algoritmos

**Objetivo:** _Encapsular algoritmos en clases separadas e intercambiables_

### ¿Qué está mal aquí? 🚫

```csharp
public double CalculateTotal(double amount, string customerType)
{
    if (customerType == "regular")
    {
        return amount; // ❌ Algoritmo mezclado
    }
    else if (customerType == "premium")
    {
        return amount * 0.9; // ❌ Algoritmo mezclado
    }
    // Más if/else...
}
```

**Problemas:**

- Todos los algoritmos mezclados en una clase
- Agregar nuevos tipos requiere modificar el código existente
- Difícil probar cada algoritmo por separado

## 🔧 Tu tarea

1. **Estudia** `strategy-bad.cs` - identifica las cadenas if/else
2. **Implementa** tu solución en `strategy-exercise.cs` antes de ver la propuesta
3. **Observa** `strategy-good.cs` y compara con tu solución

## 🎯 Puntos clave

- Crea una interfaz común para todas las estrategias
- Cada estrategia es una clase independiente
- El contexto (ShoppingCart) usa la estrategia intercambiable
- Permite cambiar estrategias en tiempo de ejecución

## ⏱️ Verificación rápida

Pregúntate:

- ¿Tengo cadenas if/else para diferentes algoritmos?
- ¿Los algoritmos cambian independientemente?
- ¿Necesito probar cada algoritmo por separado?

## 🚀 Cómo ejecutar

```bash
# Ejecutar ejemplos
dotnet script strategy-bad.cs
dotnet script strategy-good.cs
```
````
