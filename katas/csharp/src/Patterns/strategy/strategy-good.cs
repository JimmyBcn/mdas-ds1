using System;

// Implementación del Patrón Strategy: Encapsular algoritmos en clases separadas
// ✅ Solución: Cada estrategia de descuento es una clase independiente

// ✅ Interfaz común para todas las estrategias de descuento
public interface IDiscountStrategy
{
  double ApplyDiscount(double amount);
}

// ✅ Estrategias concretas - cada una encapsula su algoritmo
public class RegularCustomerDiscount : IDiscountStrategy
{
  public double ApplyDiscount(double amount)
  {
    return amount; // Sin descuento
  }
}

public class PremiumCustomerDiscount : IDiscountStrategy
{
  public double ApplyDiscount(double amount)
  {
    return amount * 0.9; // 10% de descuento
  }
}

public class VIPCustomerDiscount : IDiscountStrategy
{
  public double ApplyDiscount(double amount)
  {
    return amount * 0.8; // 20% de descuento
  }
}

public class EmployeeDiscount : IDiscountStrategy
{
  public double ApplyDiscount(double amount)
  {
    return amount * 0.7; // 30% de descuento
  }
}

// ✅ El carrito de compras usa una estrategia intercambiable
public class ShoppingCart
{
  private IDiscountStrategy _discountStrategy;

  public ShoppingCart(IDiscountStrategy discountStrategy)
  {
    _discountStrategy = discountStrategy;
  }

  public double CalculateTotal(double amount)
  {
    // ✅ Delega el cálculo a la estrategia
    return _discountStrategy.ApplyDiscount(amount);
  }

  // ✅ Opcionalmente, permite cambiar la estrategia en tiempo de ejecución
  public void SetDiscountStrategy(IDiscountStrategy discountStrategy)
  {
    _discountStrategy = discountStrategy;
  }
}

// ✅ Beneficios:
// 1. Cada estrategia es una clase independiente
// 2. Fácil agregar nuevas estrategias sin modificar ShoppingCart
// 3. Estrategias se pueden probar por separado

Console.WriteLine("=== Solución con Patrón Strategy ===");

// ✅ Cada cliente usa su estrategia de descuento
var regularCart = new ShoppingCart(new RegularCustomerDiscount());
Console.WriteLine($"Regular: ${regularCart.CalculateTotal(100)}");

var premiumCart = new ShoppingCart(new PremiumCustomerDiscount());
Console.WriteLine($"Premium: ${premiumCart.CalculateTotal(100)}");

var vipCart = new ShoppingCart(new VIPCustomerDiscount());
Console.WriteLine($"VIP: ${vipCart.CalculateTotal(100)}");

var employeeCart = new ShoppingCart(new EmployeeDiscount());
Console.WriteLine($"Employee: ${employeeCart.CalculateTotal(100)}");

// ✅ Se puede cambiar la estrategia dinámicamente
Console.WriteLine("\n=== Cambiando estrategia ===");
regularCart.SetDiscountStrategy(new VIPCustomerDiscount());
Console.WriteLine($"Regular -> VIP: ${regularCart.CalculateTotal(100)}");

// ✅ Agregar una nueva estrategia (ejemplo)
public class SeasonalDiscount : IDiscountStrategy
{
  public double ApplyDiscount(double amount)
  {
    return amount * 0.85; // 15% de descuento temporal
  }
}
