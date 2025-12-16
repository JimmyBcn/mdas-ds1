# OOP: Abstracción - Ejemplo

## 🎯 Objetivos de aprendizaje

- Entender qué es la abstracción en OOP
- Aprender a ocultar detalles de implementación
- Usar convenciones de Python (prefijo `_`) para atributos/métodos privados
- Crear interfaces simples para funcionalidad compleja

## 📋 El problema: Exponer detalles innecesarios

**Concepto:** _La abstracción oculta los detalles complejos y muestra solo lo esencial_

### ¿Qué está mal aquí? 🚫

```python
email_sender = EmailSender()

# ❌ Usuario debe conocer todos los pasos internos
email_sender.authenticate("user@email.com", "pass")
email_sender.connect_to_server()
message = email_sender.build_message("to@email.com", "Hi", "Body")
email_sender.send_raw_message(message)
email_sender.disconnect_from_server()

# ❌ Usuario tiene acceso a detalles internos
email_sender.smtp_server = "otro-servidor.com"  # ¿Debería poder hacer esto?
email_sender.is_connected = False  # ¿Y esto?
```

**Problemas:**

- **Demasiada exposición**: Usuario ve todos los detalles internos
- **Complejidad**: Usuario debe conocer 5+ pasos para enviar un email
- **Propenso a errores**: Fácil olvidar pasos u orden incorrecto
- **Difícil mantenimiento**: Cambios internos afectan a todos los usuarios

## 🔧 Tu tarea

1. **Estudia** `abstraction_bad.py` - identifica detalles innecesariamente expuestos
2. **Implementa** tu solución en `abstraction_exercise.py` antes de ver la propuesta
3. **Observa** `abstraction_good.py` y compara con tu solución

## 🎯 Puntos clave

- Oculta complejidad con `_` (prefijo privado)
- Interfaz pública simple y clara
- Usuario no necesita saber cómo funciona
- Menos pasos = menos errores

## ⏱️ Verificación rápida

Pregúntate:

- ¿Cuántos pasos debe hacer el usuario?
- ¿Qué detalles son innecesarios exponer?
- ¿Puedo simplificar la interfaz pública?
