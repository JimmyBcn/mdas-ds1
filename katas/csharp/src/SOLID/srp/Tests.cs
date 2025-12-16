using Xunit;

namespace SOLID.SRP.Tests
{
  /// <summary>
  /// Tests para el principio SRP (Single Responsibility Principle)
  /// </summary>
  public class SRPTests
  {
    [Fact]
    public void UserBad_GetName_ReturnsCorrectName()
    {
      // Arrange
      var user = new User("Juan Pérez", "juan@ejemplo.com");

      // Act
      var name = user.GetName();

      // Assert
      Assert.Equal("Juan Pérez", name);
    }

    [Fact]
    public void UserBad_SendWelcomeEmail_ContainsEmail()
    {
      // Arrange
      var user = new User("Juan Pérez", "juan@ejemplo.com");

      // Act
      var result = user.SendWelcomeEmail();

      // Assert
      Assert.Contains("juan@ejemplo.com", result);
      Assert.Contains("bienvenida", result);
    }

    [Fact]
    public void UserBad_SaveToFile_ContainsUsername()
    {
      // Arrange
      var user = new User("Juan Pérez", "juan@ejemplo.com");

      // Act
      var result = user.SaveToFile();

      // Assert
      Assert.Contains("Juan Pérez", result);
      Assert.Contains("Guardando", result);
    }

    [Fact]
    public void UserGood_OnlyManagesUserData()
    {
      // Arrange & Act
      var user = new User("Juan Pérez", "juan@ejemplo.com");

      // Assert - Verifica que User solo tiene métodos de datos
      Assert.Equal("Juan Pérez", user.GetName());
      Assert.Equal("juan@ejemplo.com", user.GetEmail());
    }

    [Fact]
    public void EmailService_SendsWelcomeEmail()
    {
      // Arrange
      var user = new User("Juan Pérez", "juan@ejemplo.com");
      var emailService = new EmailService();

      // Act
      var result = emailService.SendWelcomeEmail(user);

      // Assert
      Assert.Contains("juan@ejemplo.com", result);
      Assert.Contains("bienvenida", result);
    }

    [Fact]
    public void UserFileManager_SavesUser()
    {
      // Arrange
      var user = new User("Juan Pérez", "juan@ejemplo.com");
      var fileManager = new UserFileManager();

      // Act
      var result = fileManager.SaveToFile(user);

      // Assert
      Assert.Contains("Juan Pérez", result);
      Assert.Contains("Guardando", result);
    }

    [Fact]
    public void SRP_EachClassHasSingleResponsibility()
    {
      // Arrange
      var user = new User("Juan", "juan@email.com");
      var emailService = new EmailService();
      var fileManager = new UserFileManager();

      // Act & Assert
      // User maneja solo datos
      Assert.NotNull(user.GetName());

      // EmailService maneja solo emails
      Assert.Contains("email", emailService.SendWelcomeEmail(user).ToLower());

      // UserFileManager maneja solo archivos
      Assert.Contains("archivo", fileManager.SaveToFile(user).ToLower());
    }
  }
}
