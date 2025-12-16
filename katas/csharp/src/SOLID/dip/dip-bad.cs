using System;

// Violación del DIP: Clase de alto nivel depende directamente de clase de bajo nivel
// ❌ Problema: OrderService está fuertemente acoplado a MySQLDatabase

// Módulo de bajo nivel (implementación concreta)
public class MySQLDatabase
{
  public void Save(string data)
  {
    Console.WriteLine($"Guardando en base de datos MySQL: {data}");
  }
}

// ❌ Módulo de alto nivel depende de módulo concreto de bajo nivel
public class OrderService
{
  private MySQLDatabase database; // ❌ ¡Acoplamiento fuerte!

  public OrderService(MySQLDatabase database)
  {
    this.database = database;
  }

  public void ProcessOrder(string orderId)
  {
    Console.WriteLine($"Procesando pedido {orderId}");

    // ❌ ¡Directamente ligado a MySQL - no se puede cambiar de base de datos!
    database.Save($"Pedido {orderId} procesado");
  }
}

// ❌ Problemas con este enfoque:
// 1. No se puede cambiar fácilmente a PostgreSQL, MongoDB, etc.
// 2. Difícil de probar (no se puede hacer mock de la base de datos fácilmente)
// 3. OrderService sabe demasiado sobre los detalles de la base de datos

var database = new MySQLDatabase();
var orderService = new OrderService(database);
orderService.ProcessOrder("12345");
