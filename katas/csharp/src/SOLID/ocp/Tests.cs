using Xunit;

namespace SOLID.OCP.Tests
{
  /// <summary>
  /// Tests para el principio OCP (Open/Closed Principle)
  /// </summary>
  public class OCPTests
  {
    [Fact]
    public void DiscountCalculatorBad_RegularCustomer_Returns5PercentDiscount()
    {
      // Arrange
      var calculator = new DiscountCalculator();

      // Act
      var result = calculator.CalculateDiscount("regular", 100);

      // Assert
      Assert.Equal(95.0, result);
    }

    [Fact]
    public void DiscountCalculatorBad_VIPCustomer_Returns20PercentDiscount()
    {
      // Arrange
      var calculator = new DiscountCalculator();

      // Act
      var result = calculator.CalculateDiscount("vip", 100);

      // Assert
      Assert.Equal(80.0, result);
    }

    [Fact]
    public void DiscountCalculatorBad_StudentCustomer_Returns15PercentDiscount()
    {
      // Arrange
      var calculator = new DiscountCalculator();

      // Act
      var result = calculator.CalculateDiscount("student", 100);

      // Assert
      Assert.Equal(85.0, result);
    }

    [Fact]
    public void DiscountCalculatorGood_WithRegularStrategy_Returns5PercentDiscount()
    {
      // Arrange
      var calculator = new DiscountCalculator();
      var strategy = new RegularDiscount();

      // Act
      var result = calculator.CalculateDiscount(strategy, 100);

      // Assert
      Assert.Equal(95.0, result);
    }

    [Fact]
    public void DiscountCalculatorGood_WithVIPStrategy_Returns20PercentDiscount()
    {
      // Arrange
      var calculator = new DiscountCalculator();
      var strategy = new VIPDiscount();

      // Act
      var result = calculator.CalculateDiscount(strategy, 100);

      // Assert
      Assert.Equal(80.0, result);
    }

    [Fact]
    public void DiscountCalculatorGood_WithStudentStrategy_Returns15PercentDiscount()
    {
      // Arrange
      var calculator = new DiscountCalculator();
      var strategy = new StudentDiscount();

      // Act
      var result = calculator.CalculateDiscount(strategy, 100);

      // Assert
      Assert.Equal(85.0, result);
    }
  }
}
