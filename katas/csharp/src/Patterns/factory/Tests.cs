using Xunit;

namespace Patterns.Factory.Tests
{
  /// <summary>
  /// Tests para el patrón Factory
  /// </summary>
  public class FactoryTests
  {
    [Fact]
    public void NotificationServiceBad_SendsEmailNotification()
    {
      // Arrange
      var service = new NotificationService();

      // Act
      var result = service.SendNotification("email", "Test message");

      // Assert
      Assert.Contains("EMAIL", result);
      Assert.Contains("Test message", result);
    }

    [Fact]
    public void NotificationServiceBad_SendsSMSNotification()
    {
      // Arrange
      var service = new NotificationService();

      // Act
      var result = service.SendNotification("sms", "Test message");

      // Assert
      Assert.Contains("SMS", result);
      Assert.Contains("Test message", result);
    }

    [Fact]
    public void NotificationServiceBad_SendsPushNotification()
    {
      // Arrange
      var service = new NotificationService();

      // Act
      var result = service.SendNotification("push", "Test message");

      // Assert
      Assert.Contains("PUSH", result);
      Assert.Contains("Test message", result);
    }

    [Fact]
    public void NotificationFactoryGood_CreatesEmailNotification()
    {
      // Arrange & Act
      var notification = NotificationFactory.Create("email");
      var result = notification.Send("Test message");

      // Assert
      Assert.Contains("EMAIL", result);
    }

    [Fact]
    public void NotificationFactoryGood_CreatesSMSNotification()
    {
      // Arrange & Act
      var notification = NotificationFactory.Create("sms");
      var result = notification.Send("Test message");

      // Assert
      Assert.Contains("SMS", result);
    }

    [Fact]
    public void NotificationFactoryGood_CreatesPushNotification()
    {
      // Arrange & Act
      var notification = NotificationFactory.Create("push");
      var result = notification.Send("Test message");

      // Assert
      Assert.Contains("PUSH", result);
    }

    [Fact]
    public void NotificationServiceGood_UsesFactory()
    {
      // Arrange
      var service = new NotificationService();

      // Act
      var emailResult = service.SendNotification("email", "Test 1");
      var smsResult = service.SendNotification("sms", "Test 2");
      var pushResult = service.SendNotification("push", "Test 3");

      // Assert
      Assert.Contains("EMAIL", emailResult);
      Assert.Contains("SMS", smsResult);
      Assert.Contains("PUSH", pushResult);
    }
  }
}
