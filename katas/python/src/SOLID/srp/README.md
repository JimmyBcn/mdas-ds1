# Principio de Responsabilidad Única (SRP)

## 🎯 Definición del Principio

> "Una clase debe tener una única razón para cambiar"

Cada clase debe tener solo **una responsabilidad** y solo **una razón para cambiar**.

## 📖 El problema (srp_bad.py)

La clase `User` tiene **múltiples responsabilidades**:

1. **Gestión de datos de usuario** (nombre, email)
2. **Operaciones de email** (envío de correos)
3. **Operaciones de archivos** (guardar/cargar)

```python
class User:
    # ✅ Datos de usuario (pertenecen aquí)
    def __init__(self, name: str, email: str):
        self.name = name
        self.email = email

    # ❌ Operaciones de email (no pertenecen aquí)
    def send_welcome_email(self):
        ...

    # ❌ Operaciones de archivos (no pertenecen aquí)
    def save_to_file(self):
        ...
```

### ¿Por qué es esto malo?

- Si el sistema de email cambia → modificamos la clase `User`
- Si el formato de archivo cambia → modificamos la clase `User`
- La clase se vuelve grande y difícil de mantener
- Es difícil probar características individuales

## ✅ La solución (srp_good.py)

Dividir en **clases separadas** con **responsabilidades únicas**:

```python
# Solo maneja datos de usuario ✅
class User:
    def __init__(self, name: str, email: str):
        self.name = name
        self.email = email

# Solo maneja emails ✅
class EmailService:
    def send_welcome_email(self, user: User):
        ...

# Solo maneja archivos ✅
class UserFileManager:
    def save_to_file(self, user: User):
        ...
```

### ¿Por qué es esto mejor?

- Cada clase tiene **una razón para cambiar**
- Fácil de **probar** responsabilidades individuales
- Se pueden **reutilizar** servicios con otras clases
- El código está más **organizado** y es más **mantenible**

## 🔧 Tu tarea

1. **Estudia** `srp_bad.py` - identifica las diferentes responsabilidades
2. **Implementa** tu solución en `srp_exercise.py` antes de ver la propuesta
3. **Observa** `srp_good.py` y compara con tu solución

## 🎯 Puntos clave

- Una clase = una responsabilidad
- Una clase = una razón para cambiar
- Separar preocupaciones en clases enfocadas
- Mejora testabilidad y reutilización

## ⏱️ Verificación rápida

Pregúntate:

- ¿Qué cosas diferentes hace esta clase?
- ¿Cuántas razones hay para cambiarla?
- ¿Cómo puedo dividir estas responsabilidades?
