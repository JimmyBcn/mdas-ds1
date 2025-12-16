# Patrón Strategy

## 🎯 Objetivo del Patrón

Encapsular algoritmos en clases separadas que pueden intercambiarse.

## 📖 El problema (strategy-bad.php)

Algoritmos mezclados con condicionales:

```php
class DiscountCalculator {
    public function calculateDiscount($type, $amount) {
        if ($type === 'regular') {
            return 0;
        } elseif ($type === 'premium') {
            return $amount * 0.1;
        } elseif ($type === 'vip') {
            return $amount * 0.2;
        }
        // ❌ Todos los algoritmos en una clase
    }
}
```

### ¿Por qué es esto malo?

- Algoritmos no son reutilizables
- Difícil agregar nuevos tipos
- No se pueden testear individualmente
- Viola principio Open/Closed

## ✅ La solución (strategy-good.php)

Extraer **cada algoritmo** a su propia clase:

```php
interface DiscountStrategy {
    public function calculateDiscount($amount);
}

class PremiumDiscount implements DiscountStrategy {
    public function calculateDiscount($amount) {
        return $amount * 0.1;
    }
}

class VIPDiscount implements DiscountStrategy {
    public function calculateDiscount($amount) {
        return $amount * 0.2;
    }
}

class DiscountCalculator {
    private $strategy;

    public function __construct(DiscountStrategy $strategy) {
        $this->strategy = $strategy;
    }

    public function setStrategy(DiscountStrategy $strategy) {
        $this->strategy = $strategy;
    }
}
```

### ¿Por qué es esto mejor?

- **Intercambiable**: Cambiar estrategia en runtime
- **Extensible**: Agregar nuevas estrategias fácilmente
- **Testeable**: Probar cada estrategia aisladamente
- **Reutilizable**: Estrategias independientes

## 🔧 Tu tarea

1. **Estudia** `strategy-bad.php` - identifica algoritmos mezclados
2. **Implementa** tu solución en `strategy-exercise.php`
3. **Observa** `strategy-good.php` y compara

## 🎯 Puntos clave

- Interfaz común para estrategias
- Cada algoritmo en su propia clase
- Contexto acepta cualquier estrategia
- Cambio de estrategia en runtime

## ⏱️ Verificación rápida

Pregúntate:

- ¿Hay múltiples algoritmos en condicionales?
- ¿Puedo extraerlos a clases separadas?
- ¿Necesito cambiar algoritmos en runtime?
