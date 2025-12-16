<?php
// Implementación del Patrón Adapter: Interfaz unificada para clases incompatibles
// ✅ Solución: Los adaptadores hacen que interfaces incompatibles trabajen juntas

// Mismas clases de terceros (no podemos modificar estas)
class MP3Player {
    public function playMP3(string $filename): string {
        return "Reproduciendo MP3: $filename";
    }
}

class WAVPlayer {
    public function playWAVFile(string $file): string {
        return "Reproduciendo archivo WAV: $file";
    }
}

// ✅ Interfaz objetivo que nuestro reproductor multimedia espera
interface AudioPlayer {
    public function play(string $filename): string;
}

// ✅ Los adaptadores convierten interfaces incompatibles a nuestra interfaz objetivo
class MP3Adapter implements AudioPlayer {
    private MP3Player $mp3Player;

    public function __construct() {
        $this->mp3Player = new MP3Player();
    }

    public function play(string $filename): string {
        // ✅ El adaptador convierte la llamada a la interfaz
        return $this->mp3Player->playMP3($filename);
    }
}

class WAVAdapter implements AudioPlayer {
    private WAVPlayer $wavPlayer;

    public function __construct() {
        $this->wavPlayer = new WAVPlayer();
    }

    public function play(string $filename): string {
        // ✅ El adaptador convierte la llamada a la interfaz
        return $this->wavPlayer->playWAVFile($filename);
    }
}

// ✅ El código cliente trabaja con interfaz uniforme
class MediaPlayer {
    private array $adapters;

    public function __construct() {
        // ✅ Registrar adaptadores para diferentes formatos
        $this->adapters = [
            'mp3' => new MP3Adapter(),
            'wav' => new WAVAdapter()
        ];
    }

    public function playAudio(string $filename): string {
        $parts = explode('.', $filename);
        $extension = strtolower(end($parts));
        
        $adapter = $this->adapters[$extension] ?? null;

        if ($adapter) {
            return $adapter->play($filename); // ✅ ¡El mismo método para todos los tipos!
        } else {
            return "Tipo de archivo no soportado: $extension";
        }
    }
}

// ✅ Beneficios:
// 1. Interfaz uniforme para diferentes reproductores de audio
// 2. Fácil agregar nuevos formatos de audio (solo crear nuevo adaptador)
// 3. El código cliente no necesita conocer implementaciones específicas

echo "=== Solución con Patrón Adapter ===" . PHP_EOL;
$player = new MediaPlayer();
echo $player->playAudio("cancion.mp3") . PHP_EOL;
echo $player->playAudio("sonido.wav") . PHP_EOL;

// ✅ ¡Agregar nuevo formato es fácil - solo crear nuevo adaptador!
class FLACPlayer {
    public function playFLACTrack(string $trackName): string {
        return "Reproduciendo pista FLAC: $trackName";
    }
}

class FLACAdapter implements AudioPlayer {
    private FLACPlayer $flacPlayer;

    public function __construct() {
        $this->flacPlayer = new FLACPlayer();
    }

    public function play(string $filename): string {
        return $this->flacPlayer->playFLACTrack($filename);
    }
}
