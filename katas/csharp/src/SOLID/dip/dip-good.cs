using System;

// Cumplimiento del DIP: Módulos de alto y bajo nivel dependen de la abstracción
// ✅ Solución: Introducir interfaz de la que ambos módulos dependan

// ✅ Abstracción de la que ambos módulos dependen
public interface IDatabase
{
  void Save(string data);
}

// ✅ Módulos de bajo nivel implementan la abstracción
public class MySQLDatabase : IDatabase
{
  public void Save(string data)
  {
    Console.WriteLine($"Guardando en MySQL: {data}");
  }
}

public class PostgreSQLDatabase : IDatabase
{
  public void Save(string data)
  {
    Console.WriteLine($"Guardando en PostgreSQL: {data}");
  }
}

public class MongoDatabase : IDatabase
{
  public void Save(string data)
  {
    Console.WriteLine($"Guardando en MongoDB: {data}");
  }
}

// ✅ Módulo de alto nivel depende de la abstracción, no de la implementación concreta
public class OrderService
{
  private IDatabase database; // ✅ ¡Depende de la interfaz!

  public OrderService(IDatabase database)
  {
    this.database = database;
  }

  public void ProcessOrder(string orderId)
  {
    Console.WriteLine($"Procesando pedido {orderId}");

    // ✅ ¡Puede trabajar con CUALQUIER implementación de base de datos!
    database.Save($"Pedido {orderId} procesado");
  }
}

// ✅ Beneficios: Fácil de intercambiar bases de datos, probar y extender
Console.WriteLine("=== Uso Cumpliendo el DIP ===");

var mysqlDb = new MySQLDatabase();
var postgresDb = new PostgreSQLDatabase();
var mongoDb = new MongoDatabase();

// ¡El mismo OrderService funciona con diferentes bases de datos! ✅
var orderService1 = new OrderService(mysqlDb);
var orderService2 = new OrderService(postgresDb);
var orderService3 = new OrderService(mongoDb);

orderService1.ProcessOrder("001");
orderService2.ProcessOrder("002");
orderService3.ProcessOrder("003");
