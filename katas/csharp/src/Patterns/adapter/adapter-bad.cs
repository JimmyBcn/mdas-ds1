using System;

// Violación del Patrón Adapter: Interfaces incompatibles sin adaptación
// ❌ Problema: Trabajar con diferentes reproductores de medios con interfaces diferentes

// Reproductor de MP3 con su propia interfaz
public class MP3Player
{
  public string PlayMP3(string filename)
  {
    return $"Reproduciendo MP3: {filename}";
  }
}

// Reproductor de WAV con interfaz diferente
public class WAVPlayer
{
  public string PlayWAV(string filename)
  {
    return $"Reproduciendo WAV: {filename}";
  }
}

// ❌ El código cliente tiene que conocer todas las interfaces
public class MediaApp
{
  public void Play(string type, string filename)
  {
    // ❌ Código duplicado para cada tipo de reproductor
    if (type == "mp3")
    {
      var player = new MP3Player();
      Console.WriteLine(player.PlayMP3(filename)); // ❌ Interfaz diferente
    }
    else if (type == "wav")
    {
      var player = new WAVPlayer();
      Console.WriteLine(player.PlayWAV(filename)); // ❌ Interfaz diferente
    }
    else
    {
      Console.WriteLine($"Formato no soportado: {type}");
    }
  }
}

// ❌ Problemas:
// 1. El código cliente debe conocer todos los tipos de reproductores
// 2. Cada reproductor tiene su propia interfaz (PlayMP3, PlayWAV, etc.)
// 3. Agregar nuevos formatos requiere modificar MediaApp

Console.WriteLine("=== Violación del Patrón Adapter ===");
var app = new MediaApp();
app.Play("mp3", "cancion.mp3");
app.Play("wav", "cancion.wav");
