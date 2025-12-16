# Principio de Responsabilidad Única (SRP)

## 🎯 Definición del Principio

> "Una clase debe tener una única razón para cambiar"

Cada clase debe tener solo **una responsabilidad** y solo **una razón para cambiar**.

## 📖 El problema (srp-bad.cs)

La clase `User` tiene **múltiples responsabilidades**:

1. **Gestión de datos de usuario** (nombre, email)
2. **Operaciones de email** (envío de correos)
3. **Operaciones de archivos** (guardar/cargar)

```csharp
class User
{
    // ✅ Datos de usuario (pertenecen aquí)
    public string Name { get; set; }
    public string Email { get; set; }

    // ❌ Operaciones de email (no pertenecen aquí)
    public string SendWelcomeEmail() { ... }

    // ❌ Operaciones de archivos (no pertenecen aquí)
    public string SaveToFile() { ... }
}
```

### ¿Por qué es esto malo?

- Si el sistema de email cambia → modificamos la clase `User`
- Si el formato de archivo cambia → modificamos la clase `User`
- La clase se vuelve grande y difícil de mantener
- Es difícil probar características individuales

## ✅ La solución (srp-good.cs)

Dividir en **clases separadas** con **responsabilidades únicas**:

```csharp
// Solo maneja datos de usuario ✅
class User
{
    public string Name { get; private set; }
    public string Email { get; private set; }
}

// Solo maneja emails ✅
class EmailService
{
    public string SendWelcomeEmail(User user) { ... }
}

// Solo maneja archivos ✅
class UserFileManager
{
    public string SaveToFile(User user) { ... }
}
```

### ¿Por qué es esto mejor?

- Cada clase tiene **una razón para cambiar**
- Fácil de **probar** responsabilidades individuales
- Se pueden **reutilizar** servicios con otras clases
- El código está más **organizado** y es más **mantenible**

## 🔧 Tu tarea

1. **Estudia** `srp-bad.cs` - identifica las diferentes responsabilidades
2. **Implementa** tu solución en `srp-exercise.cs` antes de ver la propuesta
3. **Observa** `srp-good.cs` y compara con tu solución

## 🎯 Puntos clave

- Una clase = una responsabilidad
- Una clase = una razón para cambiar
- Separar preocupaciones en clases enfocadas
- Mejora testabilidad y reutilización

## ⏱️ Verificación rápida

Pregúntate:

- ¿Qué cosas diferentes hace esta clase?
- ¿Cuántas razones hay para cambiarla?
- ¿Cómo puedo dividir estas responsabilidades?

## 🚀 Cómo ejecutar

```bash
# Ejecutar el ejemplo malo
dotnet script srp-bad.cs

# Ejecutar el ejemplo bueno
dotnet script srp-good.cs
```
