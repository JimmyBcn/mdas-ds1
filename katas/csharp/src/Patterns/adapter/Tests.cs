using Xunit;

namespace Patterns.Adapter.Tests
{
  /// <summary>
  /// Tests para el patrón Adapter
  /// </summary>
  public class AdapterTests
  {
    [Fact]
    public void LegacyPaymentSystemBad_ProcessesPayment()
    {
      // Arrange
      var legacy = new LegacyPaymentSystem();

      // Act
      var result = legacy.MakePaymentOldWay("123", 100);

      // Assert
      Assert.Contains("Procesando pago antiguo", result);
      Assert.Contains("Account: 123", result);
      Assert.Contains("Amount: 100", result);
    }

    [Fact]
    public void ProcessPaymentBad_WrapsLegacySystem()
    {
      // Arrange & Act
      var result = ProcessPaymentBad("456", 200);

      // Assert
      Assert.Contains("Procesando pago antiguo", result);
      Assert.Contains("456", result);
      Assert.Contains("200", result);
    }

    [Fact]
    public void LegacyPaymentSystemGood_ProcessesPaymentOldWay()
    {
      // Arrange
      var legacy = new LegacyPaymentSystem();

      // Act
      var result = legacy.MakePaymentOldWay("123", 100);

      // Assert
      Assert.Contains("Procesando pago antiguo", result);
    }

    [Fact]
    public void PaymentAdapterGood_AdaptsLegacyToModern()
    {
      // Arrange
      var legacy = new LegacyPaymentSystem();
      var adapter = new PaymentAdapter(legacy);

      // Act
      var result = adapter.ProcessPayment("456", 200);

      // Assert
      Assert.Contains("Procesando pago antiguo", result);
      Assert.Contains("456", result);
      Assert.Contains("200", result);
    }

    [Fact]
    public void ModernPaymentProcessorGood_UsesAdapterWithLegacySystem()
    {
      // Arrange
      var legacy = new LegacyPaymentSystem();
      var adapter = new PaymentAdapter(legacy);
      var processor = new ModernPaymentProcessor();

      // Act
      var result = processor.Execute(adapter, "789", 300);

      // Assert
      Assert.Contains("Ejecutando pago moderno", result);
      Assert.Contains("Procesando pago antiguo", result);
    }
  }
}
