# Patrón Builder

## 🎯 Objetivo del Patrón

Construir objetos complejos paso a paso con una interfaz fluida.

## 📖 El problema (builder-bad.php)

Constructor con demasiados parámetros:

```php
class Pizza {
    public function __construct(
        $size,
        $crust,
        $sauce,
        $cheese,
        $toppings,
        $extraCheese,
        $spicyLevel
    ) { ... }
}

// ❌ Difícil recordar orden de parámetros
$pizza = new Pizza(
    "grande",
    "delgada",
    "tomate",
    "mozzarella",
    ["albahaca"],
    false,
    0
);
```

### ¿Por qué es esto malo?

- Difícil recordar orden de parámetros
- No es auto-documentado
- Valores por defecto complicados
- Propenso a errores

## ✅ La solución (builder-good.php)

Usar **Builder** con interfaz fluida:

```php
class PizzaBuilder {
    public function setSize($size): self {
        $this->size = $size;
        return $this; // ✅ Permite encadenamiento
    }

    public function addTopping($topping): self {
        $this->toppings[] = $topping;
        return $this;
    }

    public function build(): Pizza {
        return new Pizza(...);
    }
}

// ✅ Código legible y auto-documentado
$pizza = (new PizzaBuilder())
    ->setSize("grande")
    ->addTopping("albahaca")
    ->addTopping("tomates")
    ->build();
```

### ¿Por qué es esto mejor?

- **Legible**: Auto-documentado
- **Flexible**: Orden no importa
- **Valores por defecto**: Fácil de implementar
- **Encadenable**: Interfaz fluida

## 🔧 Tu tarea

1. **Estudia** `builder-bad.php` - identifica constructor complejo
2. **Implementa** tu solución en `builder-exercise.php`
3. **Observa** `builder-good.php` y compara

## 🎯 Puntos clave

- Métodos retornan `$this`
- Interfaz fluida (method chaining)
- Valores por defecto en builder
- Método `build()` crea el objeto

## ⏱️ Verificación rápida

Pregúntate:

- ¿El constructor tiene muchos parámetros?
- ¿Puedo construir el objeto paso a paso?
- ¿Es claro qué hace cada parámetro?
