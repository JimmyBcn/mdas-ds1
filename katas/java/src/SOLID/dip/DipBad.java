package SOLID.dip;

// Violación del DIP: Clase de alto nivel depende directamente de clase de bajo nivel
// ❌ Problema: OrderService está fuertemente acoplado a MySQLDatabase

public class DipBad {
    public static void main(String[] args) {
        // ❌ Problemas con este enfoque:
        // 1. No se puede cambiar fácilmente a PostgreSQL, MongoDB, etc.
        // 2. Difícil de probar (no se puede hacer mock de la base de datos fácilmente)
        // 3. OrderService sabe demasiado sobre los detalles de la base de datos

        MySQLDatabase database = new MySQLDatabase();
        OrderService orderService = new OrderService(database);
        orderService.processOrder("12345");
    }
}

// Módulo de bajo nivel (implementación concreta)
class MySQLDatabase {
    public void save(String data) {
        System.out.println("Guardando en base de datos MySQL: " + data);
    }
}

// ❌ Módulo de alto nivel depende de módulo concreto de bajo nivel
class OrderService {
    private MySQLDatabase database; // ❌ ¡Acoplamiento fuerte!

    public OrderService(MySQLDatabase database) {
        this.database = database;
    }

    public void processOrder(String orderId) {
        System.out.println("Procesando pedido " + orderId);

        // ❌ ¡Directamente ligado a MySQL - no se puede cambiar de base de datos!
        database.save("Pedido " + orderId + " procesado");
    }
}
