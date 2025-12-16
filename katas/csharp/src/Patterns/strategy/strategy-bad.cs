using System;

// Violación del Patrón Strategy: Lógica condicional para diferentes algoritmos
// ❌ Problema: Cadenas if/else para aplicar descuentos diferentes

// ❌ Todas las estrategias de descuento están mezcladas en una clase
public class ShoppingCart
{
  public double CalculateTotal(double amount, string customerType)
  {
    // ❌ Cadena if/else con diferentes algoritmos de descuento
    if (customerType == "regular")
    {
      // Sin descuento
      return amount;
    }
    else if (customerType == "premium")
    {
      // 10% de descuento
      return amount * 0.9;
    }
    else if (customerType == "vip")
    {
      // 20% de descuento
      return amount * 0.8;
    }
    else if (customerType == "employee")
    {
      // 30% de descuento
      return amount * 0.7;
    }
    else
    {
      throw new Exception($"Tipo de cliente desconocido: {customerType}");
    }
  }
}

// ❌ Problemas:
// 1. Agregar nuevos tipos de descuento requiere modificar ShoppingCart
// 2. Los algoritmos de descuento no se pueden reutilizar
// 3. Difícil de probar cada estrategia por separado

Console.WriteLine("=== Violación del Patrón Strategy ===");
var cart = new ShoppingCart();
Console.WriteLine($"Regular: ${cart.CalculateTotal(100, "regular")}");
Console.WriteLine($"Premium: ${cart.CalculateTotal(100, "premium")}");
Console.WriteLine($"VIP: ${cart.CalculateTotal(100, "vip")}");
Console.WriteLine($"Employee: ${cart.CalculateTotal(100, "employee")}");
