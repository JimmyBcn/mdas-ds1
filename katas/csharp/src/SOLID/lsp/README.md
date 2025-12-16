````markdown
# Principio de Sustitución de Liskov (LSP) - Ejemplo

## 🎯 Objetivos de aprendizaje

- Entender cuándo la herencia rompe las expectativas de la clase padre
- Aprender a identificar violaciones LSP que causan errores en tiempo de ejecución
- Practicar el diseño de jerarquías de herencia apropiadas
- Ver cómo las interfaces resuelven desajustes de capacidades

## 📋 El problema: Sustitución rota

**Regla:** _Los objetos deben ser reemplazables con instancias de sus subtipos sin romper la funcionalidad_

### ¿Qué está mal aquí? 🚫

```csharp
public class Bird
{
    public virtual string Fly()
    {
        return "¡Volando!";
    }
}

public class Penguin : Bird
{
    public override string Fly()
    {
        throw new Exception("¡Los pingüinos no pueden volar!"); // ❌ ¡SE ROMPE!
    }
}
```

**Problemas:**

- `Penguin` ES-UN `Bird` pero rompe el comportamiento de `Fly()`
- El código que espera que cualquier `Bird` vuele fallará con `Penguin`
- Viola el principio de "sustitución"

## 🔧 Tu tarea

1. **Estudia** `lsp-bad.cs` - identifica cómo Penguin rompe el contrato
2. **Implementa** tu solución en `lsp-exercise.cs` antes de ver la propuesta
3. **Observa** `lsp-good.cs` y compara con tu solución

## 🎯 Puntos clave

- Herencia debe modelar relaciones "ES-UN" verdaderas
- Los hijos no deben romper comportamiento del padre
- Usa interfaces para capacidades diferentes
- La sustitución no debe causar errores

## ⏱️ Verificación rápida

Pregúntate:

- ¿Puedo sustituir el padre por el hijo sin problemas?
- ¿El hijo cambia el comportamiento esperado?
- ¿Necesito una interfaz en lugar de herencia?

## 🚀 Cómo ejecutar

```bash
# Ejecutar ejemplos
dotnet script lsp-bad.cs
dotnet script lsp-good.cs
```
````
