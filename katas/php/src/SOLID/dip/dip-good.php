<?php
// Cumplimiento del DIP: Módulos de alto y bajo nivel dependen de la abstracción
// ✅ Solución: Introducir interfaz de la que ambos módulos dependan

// ✅ Abstracción de la que ambos módulos dependen
interface Database {
    public function save(string $data): void;
}

// ✅ Módulos de bajo nivel implementan la abstracción
class MySQLDatabase implements Database {
    public function save(string $data): void {
        echo "Guardando en MySQL: $data" . PHP_EOL;
    }
}

class PostgreSQLDatabase implements Database {
    public function save(string $data): void {
        echo "Guardando en PostgreSQL: $data" . PHP_EOL;
    }
}

class MongoDatabase implements Database {
    public function save(string $data): void {
        echo "Guardando en MongoDB: $data" . PHP_EOL;
    }
}

// ✅ Módulo de alto nivel depende de la abstracción, no de la implementación concreta
class OrderService {
    private Database $database; // ✅ ¡Depende de la interfaz!

    public function __construct(Database $database) {
        $this->database = $database;
    }

    public function processOrder(string $orderId): void {
        echo "Procesando pedido $orderId" . PHP_EOL;

        // ✅ ¡Puede trabajar con CUALQUIER implementación de base de datos!
        $this->database->save("Pedido $orderId procesado");
    }
}

// ✅ Beneficios: Fácil de intercambiar bases de datos, probar y extender
echo "=== Uso Cumpliendo el DIP ===" . PHP_EOL;

$mysqlDb = new MySQLDatabase();
$postgresDb = new PostgreSQLDatabase();
$mongoDb = new MongoDatabase();

// ¡El mismo OrderService funciona con diferentes bases de datos! ✅
$orderService1 = new OrderService($mysqlDb);
$orderService2 = new OrderService($postgresDb);
$orderService3 = new OrderService($mongoDb);

$orderService1->processOrder("001");
$orderService2->processOrder("002");
$orderService3->processOrder("003");
