# Clean Code: Formato - Ejemplo

## 🎯 Objetivos de aprendizaje

- Mantener líneas de código cortas (formato horizontal)
- Usar espaciado vertical para separar conceptos
- Aplicar formato consistente en todo el código
- Agrupar código relacionado y separar conceptos diferentes

## 📋 El problema: Código Difícil de Leer

**Regla:** _El formato del código debe facilitar su lectura y comprensión_

### ¿Qué está mal aquí? 🚫

```php
// ❌ Formato horizontal malo - línea demasiado larga
class ProductService {
  private $products = [['id' => 1, 'name' => 'Laptop', 'price' => 1200]];
  public function findProductById($id) { return array_filter($this->products, fn($p) => $p['id'] === $id); }
}

// ❌ Formato vertical malo - todo junto sin espacios
class OrderProcessor {
  private $orders = [];
  public function processOrder($items) {
    $total = 0;
    foreach ($items as $item) { $total += $item['price']; }
    $this->orders[] = ['total' => $total];
    return true;
  }
  public function getOrders() { return $this->orders; }
}
```

**Problemas:**

- **Horizontal**: Líneas demasiado largas, difíciles de leer
- **Vertical**: Sin espacios entre métodos, todo amontonado
- **Inconsistente**: Mezcla de estilos de formato
- **Agrupación**: Código relacionado está separado

## 🔧 Tu tarea

1. **Estudia** `format-bad.php` - intenta leer código con mal formato
2. **Implementa** tu solución en `format-exercise.php` antes de ver la propuesta
3. **Observa** `format-good.php` y compara con tu solución

## 🎯 Puntos clave

- Líneas cortas (80-120 caracteres)
- Espaciado vertical separa conceptos
- Formato consistente en todo el código
- Código relacionado agrupado junto

## ⏱️ Verificación rápida

Pregúntate:

- ¿Las líneas son cortas y legibles?
- ¿Hay espacios entre conceptos diferentes?
- ¿El formato es consistente?
