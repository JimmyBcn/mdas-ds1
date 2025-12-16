<?php
// Violación del Patrón Adapter: Interfaces incompatibles fuerzan llamadas a métodos diferentes
// ❌ Problema: Clases de terceros tienen interfaces diferentes

// Reproductor de audio de terceros (no podemos modificar esto)
class MP3Player {
    public function playMP3(string $filename): string {
        return "Reproduciendo MP3: $filename";
    }
}

// Otro reproductor de audio de terceros (tampoco podemos modificar esto)
class WAVPlayer {
    public function playWAVFile(string $file): string {
        return "Reproduciendo archivo WAV: $file";
    }
}

// ❌ Nuestro reproductor multimedia debe manejar cada tipo de forma diferente
class MediaPlayer {
    public function playAudio(string $fileType, string $filename): string {
        if ($fileType === "mp3") {
            $mp3Player = new MP3Player();
            return $mp3Player->playMP3($filename); // ❌ Nombre de método diferente
        } elseif ($fileType === "wav") {
            $wavPlayer = new WAVPlayer();
            return $wavPlayer->playWAVFile($filename); // ❌ Nombre de método diferente
        } else {
            return "Tipo de archivo no soportado: $fileType";
        }
    }
}

// ❌ Problemas:
// 1. Debe recordar nombres de métodos diferentes para cada reproductor
// 2. Código cliente acoplado a implementaciones específicas
// 3. Agregar nuevo formato de audio requiere modificar MediaPlayer

echo "=== Violación del Patrón Adapter ===" . PHP_EOL;
$player = new MediaPlayer();
echo $player->playAudio("mp3", "cancion.mp3") . PHP_EOL;
echo $player->playAudio("wav", "sonido.wav") . PHP_EOL;
