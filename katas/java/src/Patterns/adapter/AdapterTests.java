package Patterns.adapter;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

/**
 * Tests para el patrón Adapter
 * Valida que el patrón Adapter permita que interfaces incompatibles trabajen juntas
 */
public class AdapterTests {
    
    @Test
    public void testMediaPlayer_PlaysMP3() {
        // Arrange
        MediaPlayer player = new AudioPlayer();
        
        // Act
        String result = player.play("mp3", "song.mp3");
        
        // Assert
        assertNotNull(result, "Debe poder reproducir MP3");
        assertTrue(result.contains("mp3") || result.contains("MP3"), "El resultado debe mencionar MP3");
    }
    
    @Test
    public void testMediaPlayer_PlaysMP4_ThroughAdapter() {
        // Arrange
        MediaPlayer player = new AudioPlayer();
        
        // Act
        String result = player.play("mp4", "video.mp4");
        
        // Assert
        assertNotNull(result, "Debe poder reproducir MP4 a través del adapter");
        assertTrue(result.contains("mp4") || result.contains("MP4"), "El resultado debe mencionar MP4");
    }
    
    @Test
    public void testMediaPlayer_PlaysVLC_ThroughAdapter() {
        // Arrange
        MediaPlayer player = new AudioPlayer();
        
        // Act
        String result = player.play("vlc", "movie.vlc");
        
        // Assert
        assertNotNull(result, "Debe poder reproducir VLC a través del adapter");
        assertTrue(result.contains("vlc") || result.contains("VLC"), "El resultado debe mencionar VLC");
    }
    
    @Test
    public void testMediaPlayer_RejectsInvalidFormat() {
        // Arrange
        MediaPlayer player = new AudioPlayer();
        
        // Act
        String result = player.play("avi", "file.avi");
        
        // Assert
        assertNotNull(result, "Debe retornar un mensaje para formato inválido");
        assertTrue(result.contains("Invalid") || result.contains("inválido") || result.contains("no soportado"), 
                   "Debe indicar que el formato no es soportado");
    }
    
    @Test
    public void testAdapter_MP4Player_PlaysMP4() {
        // Arrange
        AdvancedMediaPlayer mp4Player = new MP4Player();
        
        // Act
        String result = mp4Player.playMP4("video.mp4");
        
        // Assert
        assertNotNull(result, "MP4Player debe poder reproducir MP4");
        assertTrue(result.contains("mp4") || result.contains("MP4"), "Debe mencionar MP4");
    }
    
    @Test
    public void testAdapter_VLCPlayer_PlaysVLC() {
        // Arrange
        AdvancedMediaPlayer vlcPlayer = new VLCPlayer();
        
        // Act
        String result = vlcPlayer.playVLC("movie.vlc");
        
        // Assert
        assertNotNull(result, "VLCPlayer debe poder reproducir VLC");
        assertTrue(result.contains("vlc") || result.contains("VLC"), "Debe mencionar VLC");
    }
    
    @Test
    public void testMediaAdapter_AdaptsMP4Player() {
        // Arrange
        MediaAdapter adapter = new MediaAdapter("mp4");
        
        // Act
        String result = adapter.play("mp4", "video.mp4");
        
        // Assert
        assertNotNull(result, "El adapter debe adaptar MP4Player correctamente");
    }
    
    @Test
    public void testMediaAdapter_AdaptsVLCPlayer() {
        // Arrange
        MediaAdapter adapter = new MediaAdapter("vlc");
        
        // Act
        String result = adapter.play("vlc", "movie.vlc");
        
        // Assert
        assertNotNull(result, "El adapter debe adaptar VLCPlayer correctamente");
    }
}
