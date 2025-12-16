package Patterns.adapter;

import java.util.HashMap;
import java.util.Map;

// Implementación del Patrón Adapter: Interfaz unificada para clases incompatibles
// ✅ Solución: Los adaptadores hacen que interfaces incompatibles trabajen juntas

public class AdapterGood {
    public static void main(String[] args) {
        // ✅ Beneficios:
        // 1. Interfaz uniforme para diferentes reproductores de audio
        // 2. Fácil agregar nuevos formatos de audio (solo crear nuevo adaptador)
        // 3. El código cliente no necesita conocer implementaciones específicas

        System.out.println("=== Solución con Patrón Adapter ===");
        MediaPlayer player = new MediaPlayer();
        System.out.println(player.playAudio("cancion.mp3"));
        System.out.println(player.playAudio("sonido.wav"));
    }
}

// Mismas clases de terceros (no podemos modificar estas)
class MP3Player {
    public String playMP3(String filename) {
        return "Reproduciendo MP3: " + filename;
    }
}

class WAVPlayer {
    public String playWAVFile(String file) {
        return "Reproduciendo archivo WAV: " + file;
    }
}

// ✅ Interfaz objetivo que nuestro reproductor multimedia espera
interface AudioPlayer {
    String play(String filename);
}

// ✅ Los adaptadores convierten interfaces incompatibles a nuestra interfaz objetivo
class MP3Adapter implements AudioPlayer {
    private MP3Player mp3Player;

    public MP3Adapter() {
        this.mp3Player = new MP3Player();
    }

    public String play(String filename) {
        // ✅ El adaptador convierte la llamada a la interfaz
        return mp3Player.playMP3(filename);
    }
}

class WAVAdapter implements AudioPlayer {
    private WAVPlayer wavPlayer;

    public WAVAdapter() {
        this.wavPlayer = new WAVPlayer();
    }

    public String play(String filename) {
        // ✅ El adaptador convierte la llamada a la interfaz
        return wavPlayer.playWAVFile(filename);
    }
}

// ✅ El código cliente trabaja con interfaz uniforme
class MediaPlayer {
    private Map<String, AudioPlayer> adapters = new HashMap<>();

    public MediaPlayer() {
        // ✅ Registrar adaptadores para diferentes formatos
        adapters.put("mp3", new MP3Adapter());
        adapters.put("wav", new WAVAdapter());
    }

    public String playAudio(String filename) {
        String extension = getExtension(filename).toLowerCase();
        AudioPlayer adapter = adapters.get(extension);

        if (adapter != null) {
            return adapter.play(filename); // ✅ ¡El mismo método para todos los tipos!
        } else {
            return "Tipo de archivo no soportado: " + extension;
        }
    }

    private String getExtension(String filename) {
        int lastDot = filename.lastIndexOf('.');
        if (lastDot > 0) {
            return filename.substring(lastDot + 1);
        }
        return "";
    }
}

// ✅ ¡Agregar nuevo formato es fácil - solo crear nuevo adaptador!
class FLACPlayer {
    public String playFLACTrack(String trackName) {
        return "Reproduciendo pista FLAC: " + trackName;
    }
}

class FLACAdapter implements AudioPlayer {
    private FLACPlayer flacPlayer;

    public FLACAdapter() {
        this.flacPlayer = new FLACPlayer();
    }

    public String play(String filename) {
        return flacPlayer.playFLACTrack(filename);
    }
}
