package SOLID.dip;

// Cumplimiento del DIP: Módulos de alto y bajo nivel dependen de la abstracción
// ✅ Solución: Introducir interfaz de la que ambos módulos dependan

public class DipGood {
    public static void main(String[] args) {
        // ✅ Beneficios: Fácil de intercambiar bases de datos, probar y extender
        System.out.println("=== Uso Cumpliendo el DIP ===");

        Database mysqlDb = new MySQLDatabase();
        Database postgresDb = new PostgreSQLDatabase();
        Database mongoDb = new MongoDatabase();

        // ¡El mismo OrderService funciona con diferentes bases de datos! ✅
        OrderService orderService1 = new OrderService(mysqlDb);
        OrderService orderService2 = new OrderService(postgresDb);
        OrderService orderService3 = new OrderService(mongoDb);

        orderService1.processOrder("001");
        orderService2.processOrder("002");
        orderService3.processOrder("003");
    }
}

// ✅ Abstracción de la que ambos módulos dependen
interface Database {
    void save(String data);
}

// ✅ Módulos de bajo nivel implementan la abstracción
class MySQLDatabase implements Database {
    public void save(String data) {
        System.out.println("Guardando en MySQL: " + data);
    }
}

class PostgreSQLDatabase implements Database {
    public void save(String data) {
        System.out.println("Guardando en PostgreSQL: " + data);
    }
}

class MongoDatabase implements Database {
    public void save(String data) {
        System.out.println("Guardando en MongoDB: " + data);
    }
}

// ✅ Módulo de alto nivel depende de la abstracción, no de la implementación concreta
class OrderService {
    private Database database; // ✅ ¡Depende de la interfaz!

    public OrderService(Database database) {
        this.database = database;
    }

    public void processOrder(String orderId) {
        System.out.println("Procesando pedido " + orderId);

        // ✅ ¡Puede trabajar con CUALQUIER implementación de base de datos!
        database.save("Pedido " + orderId + " procesado");
    }
}
