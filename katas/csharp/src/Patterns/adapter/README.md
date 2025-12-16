````markdown
# Patrón Adapter - Ejemplo

## 🎯 Objetivos de aprendizaje

- Entender el problema de interfaces incompatibles
- Aprender cómo el patrón Adapter unifica interfaces
- Practicar la creación de adapters para clases existentes
- Ver cómo los adapters facilitan integrar código de terceros

## 📋 El problema: Interfaces incompatibles

**Objetivo:** _Adaptar interfaces incompatibles a una interfaz común_

### ¿Qué está mal aquí? 🚫

```csharp
public void Play(string type, string filename)
{
    if (type == "mp3")
    {
        var player = new MP3Player();
        player.PlayMP3(filename); // ❌ Interfaz diferente
    }
    else if (type == "wav")
    {
        var player = new WAVPlayer();
        player.PlayWAV(filename); // ❌ Interfaz diferente
    }
}
```

**Problemas:**

- Cada reproductor tiene su propia interfaz (PlayMP3, PlayWAV)
- El código cliente debe conocer todos los tipos
- Agregar nuevos formatos requiere modificar el código cliente

## 🔧 Tu tarea

1. **Estudia** `adapter-bad.cs` - identifica las interfaces incompatibles
2. **Implementa** tu solución en `adapter-exercise.cs` antes de ver la propuesta
3. **Observa** `adapter-good.cs` y compara con tu solución

## 🎯 Puntos clave

- Crea una interfaz común (IMediaPlayer)
- Los adapters contienen las instancias originales
- Los adapters traducen las llamadas a la interfaz original
- El código cliente trabaja solo con la interfaz común

## ⏱️ Verificación rápida

Pregúntate:

- ¿Tengo clases con funcionalidad similar pero interfaces diferentes?
- ¿Necesito integrar código de terceros con interfaz diferente?
- ¿Un adapter simplificaría el código cliente?

## 🚀 Cómo ejecutar

```bash
# Ejecutar ejemplos
dotnet script adapter-bad.cs
dotnet script adapter-good.cs
```
````
