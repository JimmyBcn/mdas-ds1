<?php
// Violación del Patrón Builder: Demasiados parámetros en el constructor
// ❌ Problema: Objetos complejos con muchos parámetros opcionales

class Pizza {
    public string $size;
    public string $crust;
    public string $sauce;
    public string $cheese;
    public array $toppings;
    public bool $extraCheese;
    public int $spicyLevel;

    // ❌ ¡Constructor telescópico - demasiados parámetros!
    public function __construct(
        string $size,
        string $crust,
        string $sauce,
        string $cheese,
        array $toppings,
        bool $extraCheese,
        int $spicyLevel
    ) {
        $this->size = $size;
        $this->crust = $crust;
        $this->sauce = $sauce;
        $this->cheese = $cheese;
        $this->toppings = $toppings;
        $this->extraCheese = $extraCheese;
        $this->spicyLevel = $spicyLevel;
    }

    public function getDescription(): string {
        $toppingsStr = implode(", ", $this->toppings);
        $extraCheeseStr = $this->extraCheese ? ", queso extra" : "";
        return "Pizza {$this->size} con masa {$this->crust}, salsa {$this->sauce}, " .
               "queso {$this->cheese}, ingredientes: {$toppingsStr}{$extraCheeseStr}, " .
               "nivel picante: {$this->spicyLevel}/5";
    }
}

// ❌ Problemas al crear pizzas:
echo "=== Violación del Patrón Builder ===" . PHP_EOL;

// Difícil recordar el orden de los parámetros ❌
$margherita = new Pizza(
    "grande",
    "delgada",
    "tomate",
    "mozzarella",
    ["albahaca", "tomates"], // ❌ Debe crear array manualmente
    false, // ❌ ¿Qué significa este booleano?
    0      // ❌ ¿Y este número?
);

// Orden de parámetros confuso ❌
$carnivora = new Pizza(
    "extra grande",
    "gruesa",
    "BBQ",
    "mozzarella",
    ["pepperoni", "salchicha", "tocino", "jamón"],
    true,
    3
);

echo "Margherita: " . $margherita->getDescription() . PHP_EOL;
echo "Carnívora: " . $carnivora->getDescription() . PHP_EOL;
