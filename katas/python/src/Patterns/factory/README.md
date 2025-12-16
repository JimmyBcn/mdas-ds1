# 🏭 Factory - Patrón Creacional

**Tiempo estimado:** 20 minutos

## 📋 Descripción

El patrón Factory proporciona una interfaz para crear objetos en una superclase, pero permite a las subclases alterar el tipo de objetos que se crearán.

**En palabras simples:** En lugar de crear objetos directamente con `new`, usa una fábrica que decide qué objeto crear.

## ❌ El Problema (factory_bad.py)

```python
class NotificationService:
    def send_notification(self, type: str, message: str) -> str:
        # ❌ Creación de objetos dispersa con if/else
        if type == "email":
            notification = EmailNotification()  # Creación directa
            return notification.send(message)
        elif type == "sms":
            notification = SMSNotification()
            return notification.send(message)
        elif type == "push":
            notification = PushNotification()
            return notification.send(message)
        # ... más if/else por todos lados
```

**Problemas:**

- Lógica de creación repetida en múltiples lugares
- Agregar nuevo tipo requiere modificar todas las funciones
- El cliente conoce todas las clases concretas
- Viola el principio Open/Closed

## ✅ La Solución (factory_good.py)

```python
from abc import ABC, abstractmethod

class Notification(ABC):
    @abstractmethod
    def send(self, message: str) -> str:
        pass

class NotificationFactory:
    @staticmethod
    def create(type: str) -> Notification:
        if type == "email":
            return EmailNotification()
        elif type == "sms":
            return SMSNotification()
        elif type == "push":
            return PushNotification()
        else:
            raise ValueError(f"Tipo desconocido: {type}")

class NotificationService:
    def send_notification(self, type: str, message: str) -> str:
        notification = NotificationFactory.create(type)  # ✅ Fábrica centralizada
        return notification.send(message)
```

**Beneficios:**

- Creación centralizada en un solo lugar
- Agregar nuevos tipos solo requiere actualizar la fábrica
- El cliente depende de interfaces, no de clases concretas
- Más fácil de testear con mocks

## 🔧 Tarea Práctica

1. **Ejecuta el mal ejemplo:**

   ```bash
   python factory_bad.py
   ```

   Observa cómo la lógica de creación está dispersa.

2. **Abre factory_exercise.py:**

   - Identifica las clases concretas que se crean directamente
   - Crea una interfaz `Notification` usando ABC
   - Implementa `NotificationFactory` con método `create()`
   - Modifica `NotificationService` para usar la fábrica

3. **Compara con la solución:**

   ```bash
   python factory_good.py
   ```

4. **Desafío extra:**
   Agrega `WhatsAppNotification`:
   - Implementa la interfaz `Notification`
   - Agrégalo a la fábrica
   - Verifica que funcione sin modificar el cliente

## 🎯 Puntos Clave

### Sin Factory

- ❌ `if type == "X": return new ClassX()`
- ❌ Lógica duplicada en múltiples lugares
- ❌ Cliente conoce clases concretas

### Con Factory

- ✅ Creación centralizada
- ✅ Un solo lugar para modificar
- ✅ Cliente depende de abstracción

### Cuándo Usar Factory

- Muchas clases relacionadas a crear
- No sabes de antemano qué tipo exacto crear
- Quieres centralizar la lógica de creación
- Necesitas cambiar implementaciones fácilmente

## 🔗 Relación con Otros Conceptos

- **OCP:** Factory permite agregar nuevos tipos sin modificar cliente
- **DIP:** Factory retorna abstracciones, no concretos
- **SRP:** Separa la responsabilidad de creación de la lógica de negocio
- **Strategy:** A menudo se usa con Factory para crear estrategias

## ⏱️ Verificación Rápida

¿Entendiste Factory? Responde:

1. ¿Qué problema resuelve el patrón Factory?
2. ¿Por qué centralizar la creación de objetos es beneficioso?
3. ¿Cómo Factory ayuda a cumplir el principio Open/Closed?
4. ¿Cuándo usarías Factory vs crear objetos directamente?

## 💡 Regla de Oro

**"Delega la creación de objetos a una fábrica centralizada"**

No disperses la lógica de creación - mantenla en un solo lugar.

---

_Siguiente: Builder Pattern_
