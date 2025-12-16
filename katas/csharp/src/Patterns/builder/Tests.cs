using Xunit;

namespace Patterns.Builder.Tests
{
  /// <summary>
  /// Tests para el patrón Builder
  /// </summary>
  public class BuilderTests
  {
    [Fact]
    public void CreateBasicUserBad_CreatesUserWithBasicInfo()
    {
      // Arrange & Act
      var user = CreateBasicUser("John", "john@example.com");

      // Assert
      Assert.Contains("John", user);
      Assert.Contains("john@example.com", user);
      Assert.Contains("Role: user", user);
    }

    [Fact]
    public void CreateAdminUserBad_CreatesUserWithAdminRole()
    {
      // Arrange & Act
      var user = CreateAdminUser("Admin", "admin@example.com", "secret123");

      // Assert
      Assert.Contains("Admin", user);
      Assert.Contains("admin@example.com", user);
      Assert.Contains("Role: admin", user);
      Assert.Contains("secret123", user);
    }

    [Fact]
    public void UserBuilderGood_BuildsMinimalUser()
    {
      // Arrange & Act
      var user = new UserBuilder()
          .WithName("John")
          .WithEmail("john@example.com")
          .Build();

      var info = user.GetInfo();

      // Assert
      Assert.Contains("John", info);
      Assert.Contains("john@example.com", info);
    }

    [Fact]
    public void UserBuilderGood_BuildsUserWithPhone()
    {
      // Arrange & Act
      var user = new UserBuilder()
          .WithName("John")
          .WithEmail("john@example.com")
          .WithPhone("123-456-7890")
          .Build();

      var info = user.GetInfo();

      // Assert
      Assert.Contains("123-456-7890", info);
    }

    [Fact]
    public void UserBuilderGood_BuildsUserWithAddress()
    {
      // Arrange & Act
      var user = new UserBuilder()
          .WithName("John")
          .WithEmail("john@example.com")
          .WithAddress("123 Main St")
          .Build();

      var info = user.GetInfo();

      // Assert
      Assert.Contains("123 Main St", info);
    }

    [Fact]
    public void UserBuilderGood_BuildsCompleteUser()
    {
      // Arrange & Act
      var user = new UserBuilder()
          .WithName("John Doe")
          .WithEmail("john@example.com")
          .WithPhone("123-456-7890")
          .WithAddress("123 Main St")
          .WithRole("admin")
          .Build();

      var info = user.GetInfo();

      // Assert
      Assert.Contains("John Doe", info);
      Assert.Contains("john@example.com", info);
      Assert.Contains("123-456-7890", info);
      Assert.Contains("123 Main St", info);
      Assert.Contains("admin", info.ToLower());
    }

    [Fact]
    public void UserBuilderGood_SupportsFluentInterface()
    {
      // Arrange & Act
      var builder = new UserBuilder();

      // Assert - Cada método debería retornar el builder
      Assert.IsType<UserBuilder>(builder.WithName("Test"));
      Assert.IsType<UserBuilder>(builder.WithEmail("test@test.com"));
      Assert.IsType<UserBuilder>(builder.WithPhone("123"));
    }
  }
}
