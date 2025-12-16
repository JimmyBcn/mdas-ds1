using System;
using System.Collections.Generic;

// Violación del Patrón Builder: Constructor telescópico y creación compleja de objetos
// ❌ Problema: Múltiples parámetros opcionales, difícil de leer y mantener

Console.WriteLine("=== Violación del Patrón Builder ===");

// ❌ ¿Qué significa esto? Imposible de entender sin ver la definición
var pizza1 = new Pizza("grande", true, true, false, true, false, true);
Console.WriteLine(pizza1.GetDescription());

// ❌ Y esto es aún peor
var pizza2 = new Pizza("mediana", false, true, true, true, true, false);
Console.WriteLine(pizza2.GetDescription());

// ❌ Problemas:
// 1. Difícil de leer y entender las llamadas al constructor
// 2. Fácil confundir el orden de los parámetros (todos bool)
// 3. Agregar nuevos ingredientes requiere nuevos constructores

// ❌ Constructor telescópico con demasiados parámetros
public class Pizza
{
  public string Size { get; set; }
  public bool Cheese { get; set; }
  public bool Pepperoni { get; set; }
  public bool Mushrooms { get; set; }
  public bool Olives { get; set; }
  public bool ExtraCheese { get; set; }
  public bool ThinCrust { get; set; }

  // ❌ Constructor telescópico - difícil de leer
  public Pizza(string size, bool cheese, bool pepperoni, bool mushrooms,
               bool olives, bool extraCheese, bool thinCrust)
  {
    Size = size;
    Cheese = cheese;
    Pepperoni = pepperoni;
    Mushrooms = mushrooms;
    Olives = olives;
    ExtraCheese = extraCheese;
    ThinCrust = thinCrust;
  }

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
