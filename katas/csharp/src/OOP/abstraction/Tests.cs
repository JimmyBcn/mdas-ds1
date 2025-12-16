using Xunit;

namespace OOP.Abstraction.Tests
{
  /// <summary>
  /// Tests para el concepto de Abstracción en OOP
  /// </summary>
  public class AbstractionTests
  {
    [Fact]
    public void EmailSenderBad_SendsWithGmail()
    {
      // Arrange
      var sender = new EmailSender();

      // Act
      var result = sender.SendEmail("gmail", "test@example.com", "Hello");

      // Assert
      Assert.Contains("Gmail", result);
    }

    [Fact]
    public void EmailSenderBad_SendsWithOutlook()
    {
      // Arrange
      var sender = new EmailSender();

      // Act
      var result = sender.SendEmail("outlook", "test@example.com", "Hello");

      // Assert
      Assert.Contains("Outlook", result);
    }

    [Fact]
    public void GmailSenderGood_SendsEmail()
    {
      // Arrange
      var sender = new GmailSender();

      // Act
      var result = sender.Send("test@example.com", "Hello");

      // Assert
      Assert.Contains("Gmail", result);
    }

    [Fact]
    public void OutlookSenderGood_SendsEmail()
    {
      // Arrange
      var sender = new OutlookSender();

      // Act
      var result = sender.Send("test@example.com", "Hello");

      // Assert
      Assert.Contains("Outlook", result);
    }

    [Fact]
    public void EmailSenderGood_SupportsPolymorphism()
    {
      // Arrange
      var emailService = new EmailSender();
      var gmail = new GmailSender();
      var outlook = new OutlookSender();

      // Act
      var result1 = emailService.SendEmail(gmail, "test@example.com", "Hello");
      var result2 = emailService.SendEmail(outlook, "test@example.com", "Hello");

      // Assert
      Assert.Contains("Gmail", result1);
      Assert.Contains("Outlook", result2);
    }
  }
}
