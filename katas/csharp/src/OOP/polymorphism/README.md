````markdown
# OOP: Polimorfismo - Ejemplo

## 🎯 Objetivos de aprendizaje

- Entender qué es el polimorfismo en OOP
- Eliminar condicionales usando comportamiento polimórfico
- Usar clases abstractas y métodos abstractos
- Aplicar el principio Open/Closed con polimorfismo

## 📋 El problema: Lógica condicional repetida

**Concepto:** _El polimorfismo permite que objetos de diferentes clases respondan al mismo mensaje de forma específica_

### ¿Qué está mal aquí? 🚫

```csharp
public class AnimalProcessor
{
    public void MakeSound(object animal)
    {
        if (animal is DogData)
        {
            Console.WriteLine("Guau!");
        }
        else if (animal is CatData)
        {
            Console.WriteLine("Miau!");
        }
        else if (animal is BirdData)
        {
            Console.WriteLine("Pío!");
        }
        // ❌ Si agrego un pez, debo modificar ESTE método
    }

    public void Feed(object animal)
    {
        if (animal is DogData) { /* ... */ }
        else if (animal is CatData) { /* ... */ }
        // ❌ Más if/else repetidos
    }
}
```

**Problemas:**

- **Condicionales repetidas**: if/else en muchos lugares
- **Difícil de extender**: Agregar tipo requiere modificar múltiples métodos
- **Viola OCP**: Código existente debe cambiar para nuevas funcionalidades
- **Propenso a errores**: Fácil olvidar actualizar un caso

## 🔧 Tu tarea

1. **Estudia** `polymorphism-bad.cs` - identifica múltiples if/else
2. **Implementa** tu solución en `polymorphism-exercise.cs` antes de ver la propuesta
3. **Observa** `polymorphism-good.cs` y compara con tu solución

## 🎯 Puntos clave

- Elimina if/else verificando tipos
- Clase abstracta con métodos abstractos
- Cada hijo implementa su comportamiento
- Fácil agregar nuevos tipos sin modificar

## ⏱️ Verificación rápida

Pregúntate:

- ¿Tengo if/else verificando tipos?
- ¿Cada clase puede saber su comportamiento?
- ¿Puedo usar clase abstracta?

## 🚀 Cómo ejecutar

```bash
# Ejecutar ejemplos
dotnet script polymorphism-bad.cs
dotnet script polymorphism-good.cs
```
````
