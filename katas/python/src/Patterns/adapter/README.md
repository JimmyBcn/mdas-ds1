# 🔌 Adapter - Patrón Estructural

**Tiempo estimado:** 20 minutos

## 📋 Descripción

El patrón Adapter permite que interfaces incompatibles trabajen juntas. Actúa como un puente entre dos interfaces incompatibles.

**En palabras simples:** Convierte la interfaz de una clase en otra interfaz que el cliente espera.

## ❌ El Problema (adapter_bad.py)

```python
class MP3Player:
    def play_mp3(self, filename: str) -> str:  # Método específico
        return f"Reproduciendo MP3: {filename}"

class WAVPlayer:
    def play_wav_file(self, file: str) -> str:  # Método diferente
        return f"Reproduciendo WAV: {file}"

class MediaPlayer:
    def play_audio(self, file_type: str, filename: str) -> str:
        if file_type == "mp3":
            return MP3Player().play_mp3(filename)  # ❌ Método diferente
        elif file_type == "wav":
            return WAVPlayer().play_wav_file(filename)  # ❌ Método diferente
        # ... más if/else para cada formato
```

**Problemas:**

- Cada reproductor tiene una interfaz diferente
- El cliente debe conocer todos los métodos específicos
- Agregar nuevo formato requiere modificar `MediaPlayer`
- No hay interfaz común

## ✅ La Solución (adapter_good.py)

```python
from abc import ABC, abstractmethod

class AudioPlayer(ABC):  # ✅ Interfaz común
    @abstractmethod
    def play(self, filename: str) -> str:
        pass

class MP3Adapter(AudioPlayer):
    def __init__(self):
        self.mp3_player = MP3Player()

    def play(self, filename: str) -> str:
        return self.mp3_player.play_mp3(filename)  # ✅ Adapta la interfaz

class WAVAdapter(AudioPlayer):
    def __init__(self):
        self.wav_player = WAVPlayer()

    def play(self, filename: str) -> str:
        return self.wav_player.play_wav_file(filename)  # ✅ Adapta la interfaz

class MediaPlayer:
    def __init__(self):
        self.adapters = {
            "mp3": MP3Adapter(),
            "wav": WAVAdapter()
        }

    def play_audio(self, filename: str) -> str:
        extension = filename.split(".")[-1]
        adapter = self.adapters.get(extension)
        return adapter.play(filename)  # ✅ Mismo método para todos
```

**Beneficios:**

- Interfaz uniforme para diferentes reproductores
- Agregar nuevos formatos solo requiere crear un adaptador
- El cliente no conoce implementaciones específicas
- Respeta el principio Open/Closed

## 🔧 Tarea Práctica

1. **Ejecuta el mal ejemplo:**

   ```bash
   python adapter_bad.py
   ```

   Observa cómo cada reproductor tiene una interfaz diferente.

2. **Abre adapter_exercise.py:**

   - Crea interfaz común `AudioPlayer` con método `play()`
   - Implementa `MP3Adapter` que adapte `MP3Player`
   - Implementa `WAVAdapter` que adapte `WAVPlayer`
   - Modifica `MediaPlayer` para usar adaptadores

3. **Compara con la solución:**

   ```bash
   python adapter_good.py
   ```

4. **Desafío extra:**
   Agrega `FLACPlayer`:
   - Clase de terceros: `play_flac_track(track_name: str)`
   - Crea `FLACAdapter` que implemente `AudioPlayer`
   - Agrégalo al diccionario de adaptadores
   - Verifica que funcione sin modificar la lógica principal

## 🎯 Puntos Clave

### Sin Adapter

- ❌ Múltiples interfaces incompatibles
- ❌ Cliente conoce todas las implementaciones
- ❌ Switch/if-else para cada tipo

### Con Adapter

- ✅ Interfaz común para todos
- ✅ Cliente usa solo una interfaz
- ✅ Fácil agregar nuevos adaptadores

### Cuándo Usar Adapter

- Integrar código legacy o de terceros
- Diferentes librerías con interfaces similares pero incompatibles
- Necesitas una interfaz uniforme
- No puedes modificar las clases existentes

## 🔗 Relación con Otros Conceptos

- **OCP:** Adapter permite extensión sin modificación
- **DIP:** Adaptadores retornan abstracciones
- **ISP:** Adapter puede simplificar interfaces anchas
- **Facade:** Similar, pero Facade simplifica mientras Adapter adapta

## ⏱️ Verificación Rápida

¿Entendiste Adapter? Responde:

1. ¿Qué problema resuelve el patrón Adapter?
2. ¿Cuál es la diferencia entre la interfaz original y la adaptada?
3. ¿Por qué Adapter respeta el principio Open/Closed?
4. ¿Cuándo usarías Adapter vs modificar la clase directamente?

## 💡 Regla de Oro

**"Envuelve interfaces incompatibles para hacerlas compatibles"**

No modifiques código de terceros - adáptalo.

---

_Siguiente: Strategy Pattern_
