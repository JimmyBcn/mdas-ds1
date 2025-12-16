# Violación del Patrón Adapter: Interfaces incompatibles fuerzan llamadas a métodos diferentes
# ❌ Problema: Clases de terceros tienen interfaces diferentes


# Reproductor de audio de terceros (no podemos modificar esto)
class MP3Player:
    def play_mp3(self, filename: str) -> str:
        return f"Reproduciendo MP3: {filename}"


# Otro reproductor de audio de terceros (tampoco podemos modificar esto)
class WAVPlayer:
    def play_wav_file(self, file: str) -> str:
        return f"Reproduciendo archivo WAV: {file}"


# ❌ Nuestro reproductor multimedia debe manejar cada tipo de forma diferente
class MediaPlayer:
    def play_audio(self, file_type: str, filename: str) -> str:
        if file_type == "mp3":
            mp3_player = MP3Player()
            # ❌ Nombre de método diferente
            return mp3_player.play_mp3(filename)
        elif file_type == "wav":
            wav_player = WAVPlayer()
            # ❌ Nombre de método diferente
            return wav_player.play_wav_file(filename)
        else:
            return f"Tipo de archivo no soportado: {file_type}"


# ❌ Problemas:
# 1. Debe recordar nombres de métodos diferentes para cada reproductor
# 2. Código cliente acoplado a implementaciones específicas
# 3. Agregar nuevo formato de audio requiere modificar MediaPlayer

if __name__ == "__main__":
    print("=== Violación del Patrón Adapter ===")
    player = MediaPlayer()
    print(player.play_audio("mp3", "cancion.mp3"))
    print(player.play_audio("wav", "sonido.wav"))
