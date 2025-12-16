<?php

use PHPUnit\Framework\TestCase;

require_once 'adapter-good.php';

/**
 * Tests para el patrón Adapter
 * Valida que el patrón Adapter permita que interfaces incompatibles trabajen juntas
 */
class AdapterTests extends TestCase
{
    public function testMediaPlayer_PlaysMP3()
    {
        // Arrange
        $player = new AudioPlayer();
        
        // Act
        $result = $player->play("mp3", "song.mp3");
        
        // Assert
        $this->assertNotNull($result, 'Debe poder reproducir MP3');
        $this->assertTrue(
            str_contains($result, 'mp3') || str_contains($result, 'MP3'),
            'El resultado debe mencionar MP3'
        );
    }
    
    public function testMediaPlayer_PlaysMP4_ThroughAdapter()
    {
        // Arrange
        $player = new AudioPlayer();
        
        // Act
        $result = $player->play("mp4", "video.mp4");
        
        // Assert
        $this->assertNotNull($result, 'Debe poder reproducir MP4 a través del adapter');
        $this->assertTrue(
            str_contains($result, 'mp4') || str_contains($result, 'MP4'),
            'El resultado debe mencionar MP4'
        );
    }
    
    public function testMediaPlayer_PlaysVLC_ThroughAdapter()
    {
        // Arrange
        $player = new AudioPlayer();
        
        // Act
        $result = $player->play("vlc", "movie.vlc");
        
        // Assert
        $this->assertNotNull($result, 'Debe poder reproducir VLC a través del adapter');
        $this->assertTrue(
            str_contains($result, 'vlc') || str_contains($result, 'VLC'),
            'El resultado debe mencionar VLC'
        );
    }
    
    public function testMediaPlayer_RejectsInvalidFormat()
    {
        // Arrange
        $player = new AudioPlayer();
        
        // Act
        $result = $player->play("avi", "file.avi");
        
        // Assert
        $this->assertNotNull($result, 'Debe retornar un mensaje para formato inválido');
        $this->assertTrue(
            str_contains($result, 'Invalid') || str_contains($result, 'inválido') || str_contains($result, 'no soportado'),
            'Debe indicar que el formato no es soportado'
        );
    }
    
    public function testAdapter_MP4Player_PlaysMP4()
    {
        // Arrange
        $mp4Player = new MP4Player();
        
        // Act
        $result = $mp4Player->playMP4("video.mp4");
        
        // Assert
        $this->assertNotNull($result, 'MP4Player debe poder reproducir MP4');
        $this->assertTrue(
            str_contains($result, 'mp4') || str_contains($result, 'MP4'),
            'Debe mencionar MP4'
        );
    }
    
    public function testAdapter_VLCPlayer_PlaysVLC()
    {
        // Arrange
        $vlcPlayer = new VLCPlayer();
        
        // Act
        $result = $vlcPlayer->playVLC("movie.vlc");
        
        // Assert
        $this->assertNotNull($result, 'VLCPlayer debe poder reproducir VLC');
        $this->assertTrue(
            str_contains($result, 'vlc') || str_contains($result, 'VLC'),
            'Debe mencionar VLC'
        );
    }
    
    public function testMediaAdapter_AdaptsMP4Player()
    {
        // Arrange
        $adapter = new MediaAdapter("mp4");
        
        // Act
        $result = $adapter->play("mp4", "video.mp4");
        
        // Assert
        $this->assertNotNull($result, 'El adapter debe adaptar MP4Player correctamente');
    }
    
    public function testMediaAdapter_AdaptsVLCPlayer()
    {
        // Arrange
        $adapter = new MediaAdapter("vlc");
        
        // Act
        $result = $adapter->play("vlc", "movie.vlc");
        
        // Assert
        $this->assertNotNull($result, 'El adapter debe adaptar VLCPlayer correctamente');
    }
}
