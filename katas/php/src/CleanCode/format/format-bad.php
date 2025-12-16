<?php
// Violación de Clean Code: Mal Formato
// ❌ Problemas: Formato horizontal y vertical incorrecto

// ❌ Líneas demasiado largas (formato horizontal malo)
class ProductService {
    private array $products = [
        ['id' => 1, 'name' => 'Laptop', 'price' => 1200, 'category' => 'Electronics', 'stock' => 50, 'supplier' => 'TechCorp', 'warranty' => '2 years'],
        ['id' => 2, 'name' => 'Mouse', 'price' => 25, 'category' => 'Accessories', 'stock' => 200, 'supplier' => 'TechCorp', 'warranty' => '1 year'],
    ];
    public function findProductByIdAndUpdateStockAndCalculateDiscountAndSendNotification(int $id, int $quantity, float $discountRate): ?array {
        foreach ($this->products as &$product) {
            if ($product['id'] === $id) {
                $product['stock'] -= $quantity;
                $discountedPrice = $product['price'] * $discountRate;
                echo "Producto {$product['name']} actualizado. Stock: {$product['stock']}, Precio con descuento: {$discountedPrice}" . PHP_EOL;
                return array_merge($product, ['discountedPrice' => $discountedPrice]);
            }
        }
        return null;
    }
}

// ❌ Sin espaciado vertical - todo junto
class OrderProcessor {
    private array $orders = [];
    public function processOrder(int $customerId, array $items, string $paymentMethod): bool {
        if (!$customerId || !$items || count($items) === 0) {
            return false;
        }
        $total = 0;
        for ($i = 0; $i < count($items); $i++) {
            $total += $items[$i]['price'] * $items[$i]['quantity'];
        }
        if ($total > 100) {
            $total = $total * 0.9;
        }
        $order = ['id' => time(), 'customerId' => $customerId, 'items' => $items, 'total' => $total, 'date' => new DateTime(), 'status' => 'pending'];
        $this->orders[] = $order;
        echo "Orden procesada: $$total" . PHP_EOL;
        return true;
    }
    public function getOrders(): array {
        return $this->orders;
    }
    public function cancelOrder(int $orderId): bool {
        foreach ($this->orders as $index => $order) {
            if ($order['id'] === $orderId) {
                unset($this->orders[$index]);
                return true;
            }
        }
        return false;
    }
}

// Uso
echo "=== Violación de Formato en Clean Code ===" . PHP_EOL;
$service = new ProductService();
$product = $service->findProductByIdAndUpdateStockAndCalculateDiscountAndSendNotification(1, 5, 0.8);
print_r($product);
