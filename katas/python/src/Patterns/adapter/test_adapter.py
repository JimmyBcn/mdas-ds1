"""
Tests para el patrón Adapter
Valida tanto las implementaciones malas como las buenas
"""

import pytest
from adapter_bad import MediaPlayer as MediaPlayerBad
from adapter_good import MediaPlayer as MediaPlayerGood


class TestAdapterBad:
    """Tests para la implementación sin el patrón Adapter"""

    def test_play_mp3(self):
        """Verifica la reproducción de archivos MP3"""
        player = MediaPlayerBad()
        result = player.play_audio("mp3", "cancion.mp3")
        assert "Reproduciendo MP3: cancion.mp3" in result

    def test_play_wav(self):
        """Verifica la reproducción de archivos WAV"""
        player = MediaPlayerBad()
        result = player.play_audio("wav", "sonido.wav")
        assert "Reproduciendo archivo WAV: sonido.wav" in result

    def test_unsupported_format(self):
        """Verifica el manejo de formatos no soportados"""
        player = MediaPlayerBad()
        result = player.play_audio("flac", "audio.flac")
        assert "Tipo de archivo no soportado" in result


class TestAdapterGood:
    """Tests para la implementación con el patrón Adapter"""

    def test_play_mp3(self):
        """Verifica la reproducción de archivos MP3"""
        player = MediaPlayerGood()
        result = player.play_audio("cancion.mp3")
        assert "Reproduciendo MP3: cancion.mp3" in result

    def test_play_wav(self):
        """Verifica la reproducción de archivos WAV"""
        player = MediaPlayerGood()
        result = player.play_audio("sonido.wav")
        assert "Reproduciendo archivo WAV: sonido.wav" in result

    def test_unsupported_format(self):
        """Verifica el manejo de formatos no soportados"""
        player = MediaPlayerGood()
        result = player.play_audio("audio.flac")
        assert "Tipo de archivo no soportado" in result

    def test_adapter_interface(self):
        """Verifica que los adaptadores implementan la interfaz AudioPlayer"""
        from adapter_good import MP3Adapter, WAVAdapter, AudioPlayer

        mp3_adapter = MP3Adapter()
        wav_adapter = WAVAdapter()

        assert isinstance(mp3_adapter, AudioPlayer)
        assert isinstance(wav_adapter, AudioPlayer)

    def test_adapter_play_method(self):
        """Verifica que los adaptadores tienen el método play() uniforme"""
        from adapter_good import MP3Adapter, WAVAdapter

        mp3_adapter = MP3Adapter()
        wav_adapter = WAVAdapter()

        result_mp3 = mp3_adapter.play("test.mp3")
        result_wav = wav_adapter.play("test.wav")

        assert "Reproduciendo MP3" in result_mp3
        assert "Reproduciendo archivo WAV" in result_wav


if __name__ == "__main__":
    pytest.main([__file__, "-v"])
