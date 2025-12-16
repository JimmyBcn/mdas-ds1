using Xunit;

namespace OOP.Polymorphism.Tests
{
  /// <summary>
  /// Tests para el concepto de Polimorfismo en OOP
  /// </summary>
  public class PolymorphismTests
  {
    [Fact]
    public void ProcessPaymentBad_CreditCard_ProcessesPayment()
    {
      // Arrange & Act
      var result = ProcessPaymentBad("credit_card", 100);

      // Assert
      Assert.Contains("tarjeta de crédito", result);
      Assert.Contains("100", result);
    }

    [Fact]
    public void ProcessPaymentBad_PayPal_ProcessesPayment()
    {
      // Arrange & Act
      var result = ProcessPaymentBad("paypal", 200);

      // Assert
      Assert.Contains("PayPal", result);
      Assert.Contains("200", result);
    }

    [Fact]
    public void ProcessPaymentBad_Bitcoin_ProcessesPayment()
    {
      // Arrange & Act
      var result = ProcessPaymentBad("bitcoin", 300);

      // Assert
      Assert.Contains("Bitcoin", result);
      Assert.Contains("300", result);
    }

    [Fact]
    public void CreditCardGood_ProcessesPayment()
    {
      // Arrange
      var payment = new CreditCard();

      // Act
      var result = payment.Process(100);

      // Assert
      Assert.Contains("tarjeta de crédito", result);
      Assert.Contains("100", result);
    }

    [Fact]
    public void PayPalGood_ProcessesPayment()
    {
      // Arrange
      var payment = new PayPal();

      // Act
      var result = payment.Process(200);

      // Assert
      Assert.Contains("PayPal", result);
      Assert.Contains("200", result);
    }

    [Fact]
    public void BitcoinGood_ProcessesPayment()
    {
      // Arrange
      var payment = new Bitcoin();

      // Act
      var result = payment.Process(300);

      // Assert
      Assert.Contains("Bitcoin", result);
      Assert.Contains("300", result);
    }

    [Fact]
    public void PaymentProcessorGood_SupportsPolymorphicBehavior()
    {
      // Arrange
      var processor = new PaymentProcessor();
      var creditCard = new CreditCard();
      var paypal = new PayPal();
      var bitcoin = new Bitcoin();

      // Act
      var result1 = processor.ExecutePayment(creditCard, 100);
      var result2 = processor.ExecutePayment(paypal, 200);
      var result3 = processor.ExecutePayment(bitcoin, 300);

      // Assert
      Assert.Contains("100", result1);
      Assert.Contains("200", result2);
      Assert.Contains("300", result3);
    }
  }
}
