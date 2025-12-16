# Clean Code: Formato - Ejemplo

## 🎯 Objetivos de aprendizaje

- Mantener líneas de código cortas (formato horizontal)
- Usar espaciado vertical para separar conceptos
- Aplicar formato consistente en todo el código
- Agrupar código relacionado y separar conceptos diferentes

## 📋 El problema: Código Difícil de Leer

**Regla:** _El formato del código debe facilitar su lectura y comprensión_

### ¿Qué está mal aquí? 🚫

```python
# ❌ Formato horizontal malo - línea demasiado larga
class ProductService:
    def __init__(self):
        self.products = [{"id": 1, "name": "Laptop", "price": 1200}]
    def find_product_by_id(self, product_id: int):
        return next((p for p in self.products if p["id"] == product_id), None)

# ❌ Formato vertical malo - todo junto sin espacios
class OrderProcessor:
    def __init__(self):
        self.orders = []
    def process_order(self, items):
        total = sum(item["price"] for item in items)
        self.orders.append({"total": total})
        return True
    def get_orders(self):
        return self.orders
```

**Problemas:**

- **Horizontal**: Líneas demasiado largas, difíciles de leer
- **Vertical**: Sin espacios entre métodos, todo amontonado
- **Inconsistente**: Mezcla de estilos de formato
- **Agrupación**: Código relacionado está separado

## 🔧 Tu tarea

1. **Estudia** `format_bad.py` - intenta leer código con mal formato
2. **Implementa** tu solución en `format_exercise.py` antes de ver la propuesta
3. **Observa** `format_good.py` y compara con tu solución

## 🎯 Puntos clave

- Líneas cortas (80-100 caracteres)
- Espaciado vertical separa conceptos
- Formato consistente en todo el código
- Código relacionado agrupado junto

## ⏱️ Verificación rápida

Pregúntate:

- ¿Las líneas son cortas y legibles?
- ¿Hay espacios entre conceptos diferentes?
- ¿El formato es consistente?
