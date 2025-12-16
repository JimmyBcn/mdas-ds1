using System;

// Implementación del Patrón Adapter: Interfaz unificada para reproductores incompatibles
// ✅ Solución: Adaptar interfaces incompatibles a una interfaz común

// ✅ Interfaz común para todos los reproductores
public interface IMediaPlayer
{
  string Play(string filename);
}

// Reproductores originales con sus propias interfaces
public class MP3Player
{
  public string PlayMP3(string filename)
  {
    return $"Reproduciendo MP3: {filename}";
  }
}

public class WAVPlayer
{
  public string PlayWAV(string filename)
  {
    return $"Reproduciendo WAV: {filename}";
  }
}

// ✅ Adapter para MP3Player
public class MP3PlayerAdapter : IMediaPlayer
{
  private MP3Player _mp3Player = new MP3Player();

  public string Play(string filename)
  {
    // ✅ Adapta la interfaz PlayMP3 a Play
    return _mp3Player.PlayMP3(filename);
  }
}

// ✅ Adapter para WAVPlayer
public class WAVPlayerAdapter : IMediaPlayer
{
  private WAVPlayer _wavPlayer = new WAVPlayer();

  public string Play(string filename)
  {
    // ✅ Adapta la interfaz PlayWAV a Play
    return _wavPlayer.PlayWAV(filename);
  }
}

// ✅ El código cliente trabaja con la interfaz común
public class MediaApp
{
  public void Play(IMediaPlayer player, string filename)
  {
    // ✅ Interfaz unificada - no necesita saber el tipo concreto
    Console.WriteLine(player.Play(filename));
  }
}

// ✅ Beneficios:
// 1. El código cliente trabaja con una interfaz unificada
// 2. Fácil agregar nuevos reproductores (solo crear un adapter)
// 3. Los reproductores originales no necesitan modificarse

Console.WriteLine("=== Solución con Patrón Adapter ===");
var app = new MediaApp();

// ✅ Todos los reproductores usan la misma interfaz
app.Play(new MP3PlayerAdapter(), "cancion.mp3");
app.Play(new WAVPlayerAdapter(), "cancion.wav");

// ¡Agregar un nuevo formato es fácil!
Console.WriteLine("\n=== Nuevo formato agregado ===");
app.Play(new FLACPlayerAdapter(), "cancion.flac");

// ✅ Agregar un nuevo formato (ejemplo)
public class FLACPlayer
{
  public string PlayFLAC(string filename)
  {
    return $"Reproduciendo FLAC: {filename}";
  }
}

public class FLACPlayerAdapter : IMediaPlayer
{
  private FLACPlayer _flacPlayer = new FLACPlayer();

  public string Play(string filename)
  {
    return _flacPlayer.PlayFLAC(filename);
  }
}
