package Patterns.adapter;

// Violación del Patrón Adapter: Interfaces incompatibles fuerzan llamadas a métodos diferentes
// ❌ Problema: Clases de terceros tienen interfaces diferentes

public class AdapterBad {
    public static void main(String[] args) {
        // ❌ Problemas:
        // 1. Debe recordar nombres de métodos diferentes para cada reproductor
        // 2. Código cliente acoplado a implementaciones específicas
        // 3. Agregar nuevo formato de audio requiere modificar MediaPlayer

        System.out.println("=== Violación del Patrón Adapter ===");
        MediaPlayer player = new MediaPlayer();
        System.out.println(player.playAudio("mp3", "cancion.mp3"));
        System.out.println(player.playAudio("wav", "sonido.wav"));
    }
}

// Reproductor de audio de terceros (no podemos modificar esto)
class MP3Player {
    public String playMP3(String filename) {
        return "Reproduciendo MP3: " + filename;
    }
}

// Otro reproductor de audio de terceros (tampoco podemos modificar esto)
class WAVPlayer {
    public String playWAVFile(String file) {
        return "Reproduciendo archivo WAV: " + file;
    }
}

// ❌ Nuestro reproductor multimedia debe manejar cada tipo de forma diferente
class MediaPlayer {
    public String playAudio(String fileType, String filename) {
        if (fileType.equals("mp3")) {
            MP3Player mp3Player = new MP3Player();
            return mp3Player.playMP3(filename); // ❌ Nombre de método diferente
        } else if (fileType.equals("wav")) {
            WAVPlayer wavPlayer = new WAVPlayer();
            return wavPlayer.playWAVFile(filename); // ❌ Nombre de método diferente
        } else {
            return "Tipo de archivo no soportado: " + fileType;
        }
    }
}
