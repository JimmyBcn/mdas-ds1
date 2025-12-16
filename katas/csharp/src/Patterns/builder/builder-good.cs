using System;
using System.Collections.Generic;

// Implementación del Patrón Builder: Construcción fluida paso a paso
// ✅ Solución: Builder que permite configurar objetos con métodos claros

// ✅ La clase Pizza tiene solo propiedades
public class Pizza
{
  public string Size { get; set; }
  public bool Cheese { get; set; }
  public bool Pepperoni { get; set; }
  public bool Mushrooms { get; set; }
  public bool Olives { get; set; }
  public bool ExtraCheese { get; set; }
  public bool ThinCrust { get; set; }

  public string GetDescription()
  {
    var ingredients = new List<string>();
    if (Cheese) ingredients.Add("queso");
    if (Pepperoni) ingredients.Add("pepperoni");
    if (Mushrooms) ingredients.Add("champiñones");
    if (Olives) ingredients.Add("aceitunas");
    if (ExtraCheese) ingredients.Add("queso extra");

    var crust = ThinCrust ? "masa delgada" : "masa normal";
    return $"Pizza {Size} con {string.Join(", ", ingredients)} y {crust}";
  }
}

// ✅ Builder con interfaz fluida
public class PizzaBuilder
{
  private Pizza _pizza = new Pizza();

  public PizzaBuilder WithSize(string size)
  {
    _pizza.Size = size;
    return this; // ✅ Retorna this para encadenar llamadas
  }

  public PizzaBuilder WithCheese()
  {
    _pizza.Cheese = true;
    return this;
  }

  public PizzaBuilder WithPepperoni()
  {
    _pizza.Pepperoni = true;
    return this;
  }

  public PizzaBuilder WithMushrooms()
  {
    _pizza.Mushrooms = true;
    return this;
  }

  public PizzaBuilder WithOlives()
  {
    _pizza.Olives = true;
    return this;
  }

  public PizzaBuilder WithExtraCheese()
  {
    _pizza.ExtraCheese = true;
    return this;
  }

  public PizzaBuilder WithThinCrust()
  {
    _pizza.ThinCrust = true;
    return this;
  }

  public Pizza Build()
  {
    return _pizza;
  }
}

// ✅ Beneficios:
// 1. Código auto-documentado y fácil de leer
// 2. Construcción paso a paso con métodos claros
// 3. Fácil agregar nuevos ingredientes sin cambiar la interfaz existente

Console.WriteLine("=== Solución con Patrón Builder ===");

// ✅ Mucho más claro - se entiende exactamente qué incluye la pizza
var pizza1 = new PizzaBuilder()
    .WithSize("grande")
    .WithCheese()
    .WithPepperoni()
    .WithOlives()
    .WithThinCrust()
    .Build();
Console.WriteLine(pizza1.GetDescription());

// ✅ Y este código también es muy legible
var pizza2 = new PizzaBuilder()
    .WithSize("mediana")
    .WithPepperoni()
    .WithMushrooms()
    .WithOlives()
    .WithExtraCheese()
    .Build();
Console.WriteLine(pizza2.GetDescription());
