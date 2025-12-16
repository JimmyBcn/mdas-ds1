````markdown
# Patrón Builder - Ejemplo

## 🎯 Objetivos de aprendizaje

- Entender el problema de constructores telescópicos
- Aprender cómo el patrón Builder simplifica la creación de objetos
- Practicar la creación de builders con interfaz fluida
- Ver cómo los builders mejoran la legibilidad del código

## 📋 El problema: Constructor telescópico

**Objetivo:** _Crear objetos complejos paso a paso con una interfaz fluida_

### ¿Qué está mal aquí? 🚫

```csharp
public Pizza(string size, bool cheese, bool pepperoni, bool mushrooms,
             bool olives, bool extraCheese, bool thinCrust)
{
    // ...
}

// ❌ ¿Qué significa esto?
var pizza = new Pizza("grande", true, true, false, true, false, true);
```

**Problemas:**

- Imposible entender qué significa cada parámetro booleano
- Fácil confundir el orden de los parámetros
- Agregar opciones requiere cambiar el constructor

## 🔧 Tu tarea

1. **Estudia** `builder-bad.cs` - identifica el constructor telescópico
2. **Implementa** tu solución en `builder-exercise.cs` antes de ver la propuesta
3. **Observa** `builder-good.cs` y compara con tu solución

## 🎯 Puntos clave

- Usa métodos con nombres claros (WithCheese, WithPepperoni)
- Retorna `this` en cada método para encadenar llamadas
- El método `Build()` retorna el objeto final
- El código se vuelve auto-documentado y legible

## ⏱️ Verificación rápida

Pregúntate:

- ¿Mi constructor tiene muchos parámetros?
- ¿Son varios parámetros del mismo tipo (bool, string)?
- ¿Un builder haría el código más legible?

## 🚀 Cómo ejecutar

```bash
# Ejecutar con dotnet script
dotnet script builder-bad.cs
dotnet script builder-good.cs
```
````
