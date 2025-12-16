<?php
// Violación del DIP: Clase de alto nivel depende directamente de clase de bajo nivel
// ❌ Problema: OrderService está fuertemente acoplado a MySQLDatabase

// Módulo de bajo nivel (implementación concreta)
class MySQLDatabase {
    public function save(string $data): void {
        echo "Guardando en base de datos MySQL: $data" . PHP_EOL;
    }
}

// ❌ Módulo de alto nivel depende de módulo concreto de bajo nivel
class OrderService {
    private MySQLDatabase $database; // ❌ ¡Acoplamiento fuerte!

    public function __construct(MySQLDatabase $database) {
        $this->database = $database;
    }

    public function processOrder(string $orderId): void {
        echo "Procesando pedido $orderId" . PHP_EOL;

        // ❌ ¡Directamente ligado a MySQL - no se puede cambiar de base de datos!
        $this->database->save("Pedido $orderId procesado");
    }
}

// ❌ Problemas con este enfoque:
// 1. No se puede cambiar fácilmente a PostgreSQL, MongoDB, etc.
// 2. Difícil de probar (no se puede hacer mock de la base de datos fácilmente)
// 3. OrderService sabe demasiado sobre los detalles de la base de datos

$database = new MySQLDatabase();
$orderService = new OrderService($database);
$orderService->processOrder("12345");
