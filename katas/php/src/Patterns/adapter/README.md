# Patrón Adapter

## 🎯 Objetivo del Patrón

Hacer que interfaces incompatibles trabajen juntas mediante un adaptador.

## 📖 El problema (adapter-bad.php)

Clases de terceros con interfaces diferentes:

```php
class MP3Player {
    public function playMP3($filename) { ... }
}

class WAVPlayer {
    public function playWAVFile($file) { ... }
}

// ❌ Cliente debe conocer ambas interfaces
class MediaPlayer {
    public function playAudio($type, $filename) {
        if ($type === 'mp3') {
            $player = new MP3Player();
            return $player->playMP3($filename);
        } elseif ($type === 'wav') {
            $player = new WAVPlayer();
            return $player->playWAVFile($filename);
        }
    }
}
```

### ¿Por qué es esto malo?

- Cliente acoplado a múltiples interfaces
- Difícil agregar nuevos formatos
- Código repetitivo y condicionales
- No es extensible

## ✅ La solución (adapter-good.php)

Usar **adaptadores** para unificar interfaces:

```php
interface AudioPlayer {
    public function play($filename);
}

class MP3Adapter implements AudioPlayer {
    private $mp3Player;

    public function play($filename) {
        return $this->mp3Player->playMP3($filename);
    }
}

class WAVAdapter implements AudioPlayer {
    private $wavPlayer;

    public function play($filename) {
        return $this->wavPlayer->playWAVFile($filename);
    }
}

// ✅ Cliente solo conoce AudioPlayer
$adapter = new MP3Adapter();
$adapter->play("song.mp3");
```

### ¿Por qué es esto mejor?

- **Interfaz uniforme**: Un solo método `play()`
- **Desacoplado**: Cliente no conoce implementaciones
- **Extensible**: Fácil agregar nuevos formatos
- **Reutilizable**: Adaptadores independientes

## 🔧 Tu tarea

1. **Estudia** `adapter-bad.php` - identifica interfaces incompatibles
2. **Implementa** tu solución en `adapter-exercise.php`
3. **Observa** `adapter-good.php` y compara

## 🎯 Puntos clave

- Interfaz objetivo común
- Adaptadores implementan la interfaz
- Delegan al objeto adaptado
- Cliente solo conoce la interfaz

## ⏱️ Verificación rápida

Pregúntate:

- ¿Hay interfaces incompatibles?
- ¿Puedo crear una interfaz común?
- ¿Los adaptadores unifican el acceso?
