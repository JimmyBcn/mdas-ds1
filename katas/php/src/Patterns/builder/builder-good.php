<?php
// Implementación del Patrón Builder: Construcción paso a paso con interfaz fluida
// ✅ Solución: Builder permite creación de objetos legible y flexible

// Clase Pizza con muchas propiedades opcionales
class Pizza {
    public string $size;
    public string $crust;
    public string $sauce;
    public string $cheese;
    public array $toppings;
    public bool $extraCheese;
    public int $spicyLevel;

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

// ✅ Builder con interfaz fluida
class PizzaBuilder {
    private string $size = "mediana";
    private string $crust = "regular";
    private string $sauce = "tomate";
    private string $cheese = "mozzarella";
    private array $toppings = [];
    private bool $extraCheese = false;
    private int $spicyLevel = 0;

    public function setSize(string $size): self {
        $this->size = $size;
        return $this; // ✅ Retorna $this para encadenamiento de métodos
    }

    public function setCrust(string $crust): self {
        $this->crust = $crust;
        return $this;
    }

    public function setSauce(string $sauce): self {
        $this->sauce = $sauce;
        return $this;
    }

    public function setCheese(string $cheese): self {
        $this->cheese = $cheese;
        return $this;
    }

    public function addTopping(string $topping): self {
        $this->toppings[] = $topping;
        return $this;
    }

    public function withExtraCheese(): self {
        $this->extraCheese = true;
        return $this;
    }

    public function setSpicyLevel(int $level): self {
        $this->spicyLevel = $level;
        return $this;
    }

    public function build(): Pizza {
        return new Pizza(
            $this->size,
            $this->crust,
            $this->sauce,
            $this->cheese,
            $this->toppings,
            $this->extraCheese,
            $this->spicyLevel
        );
    }

    public function reset(): self {
        $this->size = "mediana";
        $this->crust = "regular";
        $this->sauce = "tomate";
        $this->cheese = "mozzarella";
        $this->toppings = [];
        $this->extraCheese = false;
        $this->spicyLevel = 0;
        return $this;
    }
}

// ✅ Beneficios del patrón builder:
echo "=== Solución con Patrón Builder ===" . PHP_EOL;

// Código legible y auto-documentado ✅
$margherita = (new PizzaBuilder())
    ->setSize("grande")      // ✅ Claro qué es cada parámetro
    ->setCrust("delgada")
    ->setSauce("tomate")
    ->setCheese("mozzarella")
    ->addTopping("albahaca") // ✅ Fácil agregar ingredientes uno por uno
    ->addTopping("tomates")
    ->build();

// Fácil crear variaciones complejas ✅
$carnivora = (new PizzaBuilder())
    ->setSize("extra grande")
    ->setCrust("gruesa")
    ->setSauce("BBQ")
    ->addTopping("pepperoni")
    ->addTopping("salchicha")
    ->addTopping("tocino")
    ->addTopping("jamón")
    ->withExtraCheese()      // ✅ Características opcionales cuando se necesitan
    ->setSpicyLevel(3)
    ->build();

// Configuración mínima con valores por defecto ✅
$pizzaSimple = (new PizzaBuilder())
    ->setSize("pequeña")
    ->addTopping("champiñones")
    ->build(); // ✅ Usa masa, salsa y queso por defecto

echo "Margherita: " . $margherita->getDescription() . PHP_EOL;
echo "Carnívora: " . $carnivora->getDescription() . PHP_EOL;
echo "Pizza Simple: " . $pizzaSimple->getDescription() . PHP_EOL;
