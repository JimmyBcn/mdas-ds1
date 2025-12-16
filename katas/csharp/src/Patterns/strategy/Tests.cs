using Xunit;

namespace Patterns.Strategy.Tests
{
  /// <summary>
  /// Tests para el patrón Strategy
  /// </summary>
  public class StrategyTests
  {
    [Fact]
    public void ShippingCalculatorBad_StandardShipping_Calculates10Percent()
    {
      // Arrange
      var calculator = new ShippingCalculator();

      // Act
      var cost = calculator.CalculateShippingCost(100, "standard");

      // Assert
      Assert.Equal(10.0, cost);
    }

    [Fact]
    public void ShippingCalculatorBad_ExpressShipping_Calculates20Percent()
    {
      // Arrange
      var calculator = new ShippingCalculator();

      // Act
      var cost = calculator.CalculateShippingCost(100, "express");

      // Assert
      Assert.Equal(20.0, cost);
    }

    [Fact]
    public void ShippingCalculatorBad_OvernightShipping_Calculates50Percent()
    {
      // Arrange
      var calculator = new ShippingCalculator();

      // Act
      var cost = calculator.CalculateShippingCost(100, "overnight");

      // Assert
      Assert.Equal(50.0, cost);
    }

    [Fact]
    public void StandardShippingGood_Calculates10Percent()
    {
      // Arrange
      var strategy = new StandardShipping();

      // Act
      var cost = strategy.Calculate(100);

      // Assert
      Assert.Equal(10.0, cost);
    }

    [Fact]
    public void ExpressShippingGood_Calculates20Percent()
    {
      // Arrange
      var strategy = new ExpressShipping();

      // Act
      var cost = strategy.Calculate(100);

      // Assert
      Assert.Equal(20.0, cost);
    }

    [Fact]
    public void OvernightShippingGood_Calculates50Percent()
    {
      // Arrange
      var strategy = new OvernightShipping();

      // Act
      var cost = strategy.Calculate(100);

      // Assert
      Assert.Equal(50.0, cost);
    }

    [Fact]
    public void ShippingCalculatorGood_WithStandardStrategy()
    {
      // Arrange
      var calculator = new ShippingCalculator(new StandardShipping());

      // Act
      var cost = calculator.CalculateCost(100);

      // Assert
      Assert.Equal(10.0, cost);
    }

    [Fact]
    public void ShippingCalculatorGood_CanChangeStrategy()
    {
      // Arrange
      var calculator = new ShippingCalculator(new StandardShipping());
      var cost1 = calculator.CalculateCost(100);

      // Act
      calculator.SetStrategy(new ExpressShipping());
      var cost2 = calculator.CalculateCost(100);

      calculator.SetStrategy(new OvernightShipping());
      var cost3 = calculator.CalculateCost(100);

      // Assert
      Assert.Equal(10.0, cost1);
      Assert.Equal(20.0, cost2);
      Assert.Equal(50.0, cost3);
    }
  }
}
