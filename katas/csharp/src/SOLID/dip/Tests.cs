using Xunit;

namespace SOLID.DIP.Tests
{
  /// <summary>
  /// Tests para el principio DIP (Dependency Inversion Principle)
  /// </summary>
  public class DIPTests
  {
    [Fact]
    public void EmailNotificationBad_SendsEmail()
    {
      // Arrange
      var email = new EmailNotification();

      // Act
      var result = email.Send("Test message");

      // Assert
      Assert.Contains("email", result.ToLower());
      Assert.Contains("Test message", result);
    }

    [Fact]
    public void NotificationServiceBad_DependsOnConcreteClass()
    {
      // Arrange
      var service = new NotificationService();

      // Act
      var result = service.Send("Test message");

      // Assert
      Assert.Contains("email", result.ToLower());
    }

    [Fact]
    public void EmailNotificationGood_SendsEmail()
    {
      // Arrange
      var email = new EmailNotification();

      // Act
      var result = email.Send("Test message");

      // Assert
      Assert.Contains("email", result.ToLower());
      Assert.Contains("Test message", result);
    }

    [Fact]
    public void SMSNotificationGood_SendsSMS()
    {
      // Arrange
      var sms = new SMSNotification();

      // Act
      var result = sms.Send("Test message");

      // Assert
      Assert.Contains("sms", result.ToLower());
      Assert.Contains("Test message", result);
    }

    [Fact]
    public void NotificationServiceGood_WorksWithEmailNotification()
    {
      // Arrange
      var emailNotifier = new EmailNotification();
      var service = new NotificationService(emailNotifier);

      // Act
      var result = service.Send("Test message");

      // Assert
      Assert.Contains("email", result.ToLower());
    }

    [Fact]
    public void NotificationServiceGood_WorksWithSMSNotification()
    {
      // Arrange
      var smsNotifier = new SMSNotification();
      var service = new NotificationService(smsNotifier);

      // Act
      var result = service.Send("Test message");

      // Assert
      Assert.Contains("sms", result.ToLower());
    }

    [Fact]
    public void DIP_AllowsDependencyInjection()
    {
      // Arrange & Act
      var emailService = new NotificationService(new EmailNotification());
      var smsService = new NotificationService(new SMSNotification());

      // Assert - Ambos servicios funcionan con diferentes implementaciones
      Assert.Contains("email", emailService.Send("Test").ToLower());
      Assert.Contains("sms", smsService.Send("Test").ToLower());
    }
  }
}
