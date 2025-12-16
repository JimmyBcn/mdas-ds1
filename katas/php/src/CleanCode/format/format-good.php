<?php
// Cumplimiento de Clean Code: Buen Formato
// ✅ Solución: Formato horizontal y vertical correcto

// ✅ Líneas cortas (idealmente max 80-120 caracteres)
// ✅ Espaciado apropiado entre operadores y elementos

class Product {
    public int $id;
    public string $name;
    public float $price;
    public string $category;
    public int $stock;
    public string $supplier;
    public string $warranty;
    public ?float $discountedPrice = null;
}

class ProductService {
    private array $products;

    public function __construct() {
        $this->products = [
            $this->createProduct(
                1,
                'Laptop',
                1200,
                'Electronics',
                50,
                'TechCorp',
                '2 years'
            ),
            $this->createProduct(
                2,
                'Mouse',
                25,
                'Accessories',
                200,
                'TechCorp',
                '1 year'
            ),
        ];
    }

    private function createProduct(
        int $id,
        string $name,
        float $price,
        string $category,
        int $stock,
        string $supplier,
        string $warranty
    ): Product {
        $product = new Product();
        $product->id = $id;
        $product->name = $name;
        $product->price = $price;
        $product->category = $category;
        $product->stock = $stock;
        $product->supplier = $supplier;
        $product->warranty = $warranty;
        return $product;
    }

    // ✅ Líneas cortas, una acción por línea
    public function updateProductStock(
        int $productId,
        int $quantity,
        float $discountRate
    ): ?Product {
        $product = $this->findProductById($productId);

        if (!$product) {
            return null;
        }

        $product->stock -= $quantity;
        $discountedPrice = $this->calculateDiscountedPrice(
            $product->price,
            $discountRate
        );

        echo "Producto {$product->name} actualizado. " .
             "Stock: {$product->stock}, " .
             "Precio con descuento: {$discountedPrice}" . PHP_EOL;

        $product->discountedPrice = $discountedPrice;
        return $product;
    }

    private function findProductById(int $id): ?Product {
        foreach ($this->products as $product) {
            if ($product->id === $id) {
                return $product;
            }
        }
        return null;
    }

    private function calculateDiscountedPrice(
        float $price,
        float $discountRate
    ): float {
        return $price * $discountRate;
    }
}

// ✅ Espaciado vertical apropiado
// ✅ Líneas en blanco separan conceptos relacionados

class OrderItem {
    public float $price;
    public int $quantity;
}

class Order {
    public int $id;
    public int $customerId;
    public array $items;
    public float $total;
    public DateTime $date;
    public string $status;
}

class OrderProcessor {
    private const DISCOUNT_THRESHOLD = 100;
    private const DISCOUNT_RATE = 0.9;

    private array $orders = [];

    // ✅ Grupo 1: Procesamiento de órdenes
    public function processOrder(
        int $customerId,
        array $items,
        string $paymentMethod
    ): bool {
        if (!$this->isValidOrder($customerId, $items)) {
            return false;
        }

        $total = $this->calculateTotal($items);
        $order = $this->createOrder($customerId, $items, $total);

        $this->saveOrder($order);
        $this->logOrderProcessed($total);

        return true;
    }

    private function isValidOrder(int $customerId, array $items): bool {
        return $customerId > 0 && !empty($items);
    }

    private function calculateTotal(array $items): float {
        $total = array_reduce(
            $items,
            fn($sum, $item) => $sum + ($item['price'] * $item['quantity']),
            0
        );

        if ($total > self::DISCOUNT_THRESHOLD) {
            $total = $total * self::DISCOUNT_RATE;
        }

        return $total;
    }

    private function createOrder(
        int $customerId,
        array $items,
        float $total
    ): Order {
        $order = new Order();
        $order->id = time();
        $order->customerId = $customerId;
        $order->items = $items;
        $order->total = $total;
        $order->date = new DateTime();
        $order->status = 'pending';
        return $order;
    }

    private function saveOrder(Order $order): void {
        $this->orders[] = $order;
    }

    private function logOrderProcessed(float $total): void {
        echo "Orden procesada: $$total" . PHP_EOL;
    }

    // ✅ Grupo 2: Consultas de órdenes
    public function getOrders(): array {
        return $this->orders;
    }

    // ✅ Grupo 3: Cancelación de órdenes
    public function cancelOrder(int $orderId): bool {
        foreach ($this->orders as $index => $order) {
            if ($order->id === $orderId) {
                unset($this->orders[$index]);
                return true;
            }
        }

        return false;
    }
}

// Uso - También con buen formato
echo "=== Cumplimiento de Formato en Clean Code ===" . PHP_EOL;

$service = new ProductService();
$product = $service->updateProductStock(1, 5, 0.8);
print_r($product);
