# Clean Code: Funciones - Ejemplo

## 🎯 Objetivos de aprendizaje

- Crear funciones que hacen UNA sola cosa
- Mantener funciones pequeñas y legibles
- Usar el mismo nivel de abstracción en cada función
- Evitar efectos secundarios inesperados
- Aplicar early return para mejorar legibilidad

## 📋 El problema: Funciones que hacen demasiado

**Regla:** _Las funciones deben hacer una sola cosa, hacerla bien, y ser lo único que hagan_

### ¿Qué está mal aquí? 🚫

```python
def process_order(name, email, items, payment):
    # ❌ Valida
    if not name:
        return False
    if "@" not in email:
        return False

    # ❌ Calcula
    total = 0
    for item in items:
        total += item["price"] * item["quantity"]

    # ❌ Aplica descuento
    if total > 100:
        total = total * 0.9

    # ❌ Guarda
    self.orders.append({...})

    # ❌ Envía email
    print("Sending email...")
    self.emails_sent += 1  # ❌ Efecto secundario
```

**Problemas:**

- **Hace muchas cosas**: valida, calcula, guarda, envía email
- **Muy grande**: difícil de leer y probar
- **Niveles mezclados**: alto nivel (guardar) + bajo nivel (loop)
- **Efectos secundarios**: modifica `emails_sent` sin avisar
- **Sin early return**: muchos niveles de anidación

## 🔧 Tu tarea

1. **Estudia** `functions_bad.py` - identifica funciones grandes con múltiples responsabilidades
2. **Implementa** tu solución en `functions_exercise.py` antes de ver la propuesta
3. **Observa** `functions_good.py` y compara con tu solución

## 🎯 Puntos clave

- Una función = una responsabilidad
- Funciones pequeñas (5-20 líneas)
- Mismo nivel de abstracción
- Sin efectos secundarios inesperados
- Early return para validaciones

## ⏱️ Verificación rápida

Pregúntate:

- ¿Esta función hace una sola cosa?
- ¿Es pequeña y fácil de entender?
- ¿Mezcla niveles de abstracción?
