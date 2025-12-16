````markdown
# Patrón Factory - Ejemplo

## 🎯 Objetivos de aprendizaje

- Entender cuándo la lógica de creación de objetos se dispersa
- Aprender cómo el patrón Factory centraliza la creación de objetos
- Practicar la creación de fábricas que retornan tipos de interfaz
- Ver cómo las fábricas facilitan agregar nuevos tipos

## 📋 El problema: Creación de objetos dispersa

**Objetivo:** _Centralizar la lógica de creación de objetos en un solo lugar_

### ¿Qué está mal aquí? 🚫

```csharp
public class NotificationService
{
    public string SendNotification(string type, string message)
    {
        if (type == "email")
        {
            var notification = new EmailNotification(); // ❌ ¡Disperso!
            return notification.Send(message);
        }
        else if (type == "sms")
        {
            var notification = new SMSNotification(); // ❌ ¡Disperso!
            return notification.Send(message);
        }
        // Más cadenas if/else por todas partes...
    }
}
```

**Problemas:**

- Lógica de creación de objetos duplicada en toda la aplicación
- Agregar nuevos tipos requiere cambiar múltiples lugares
- El código cliente conoce todas las clases concretas

## 🔧 Tu tarea

1. **Estudia** `factory-bad.cs` - identifica la creación dispersa
2. **Implementa** tu solución en `factory-exercise.cs` antes de ver la propuesta
3. **Observa** `factory-good.cs` y compara con tu solución

## 🎯 Puntos clave

- Centraliza la creación de objetos en un lugar
- El código cliente depende de interfaces, no de concretos
- Agregar tipos solo requiere actualizar la fábrica
- Mejora consistencia y mantenibilidad

## ⏱️ Verificación rápida

Pregúntate:

- ¿Creo objetos similares en múltiples lugares?
- ¿Puedo centralizar esta lógica?
- ¿Facilita agregar nuevos tipos?

## 🚀 Cómo ejecutar

```bash
# Ejecutar ejemplos
dotnet script factory-bad.cs
dotnet script factory-good.cs
```
````
