# Implementación del Patrón Adapter: Interfaz unificada para clases incompatibles
# ✅ Solución: Los adaptadores hacen que interfaces incompatibles trabajen juntas

from abc import ABC, abstractmethod
from typing import Dict


# Reproductor de audio de terceros (no podemos modificar esto)
class MP3Player:
    def play_mp3(self, filename: str) -> str:
        return f"Reproduciendo MP3: {filename}"


class WAVPlayer:
    def play_wav_file(self, file: str) -> str:
        return f"Reproduciendo archivo WAV: {file}"


# ✅ Interfaz objetivo que nuestro reproductor multimedia espera
class AudioPlayer(ABC):
    @abstractmethod
    def play(self, filename: str) -> str:
        pass


# ✅ Los adaptadores convierten interfaces incompatibles a nuestra interfaz objetivo
class MP3Adapter(AudioPlayer):
    def __init__(self):
        self.mp3_player = MP3Player()

    def play(self, filename: str) -> str:
        # ✅ El adaptador convierte la llamada a la interfaz
        return self.mp3_player.play_mp3(filename)


class WAVAdapter(AudioPlayer):
    def __init__(self):
        self.wav_player = WAVPlayer()

    def play(self, filename: str) -> str:
        # ✅ El adaptador convierte la llamada a la interfaz
        return self.wav_player.play_wav_file(filename)


# ✅ El código cliente trabaja con interfaz uniforme
class MediaPlayer:
    def __init__(self):
        # ✅ Registrar adaptadores para diferentes formatos
        self.adapters: Dict[str, AudioPlayer] = {
            "mp3": MP3Adapter(),
            "wav": WAVAdapter(),
        }

    def play_audio(self, filename: str) -> str:
        extension = filename.split(".")[-1].lower()
        adapter = self.adapters.get(extension)

        if adapter:
            # ✅ ¡El mismo método para todos los tipos!
            return adapter.play(filename)
        else:
            return f"Tipo de archivo no soportado: {extension}"


# ✅ Beneficios:
# 1. Interfaz uniforme para diferentes reproductores de audio
# 2. Fácil agregar nuevos formatos de audio (solo crear nuevo adaptador)
# 3. El código cliente no necesita conocer implementaciones específicas

if __name__ == "__main__":
    print("=== Solución con Patrón Adapter ===")
    player = MediaPlayer()
    print(player.play_audio("cancion.mp3"))
    print(player.play_audio("sonido.wav"))

    # ✅ ¡Agregar nuevo formato es fácil - solo crear nuevo adaptador!
    class FLACPlayer:
        def play_flac_track(self, track_name: str) -> str:
            return f"Reproduciendo pista FLAC: {track_name}"

    class FLACAdapter(AudioPlayer):
        def __init__(self):
            self.flac_player = FLACPlayer()

        def play(self, filename: str) -> str:
            return self.flac_player.play_flac_track(filename)
