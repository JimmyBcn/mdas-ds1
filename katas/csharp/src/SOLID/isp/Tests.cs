using Xunit;

namespace SOLID.ISP.Tests
{
  /// <summary>
  /// Tests para el principio ISP (Interface Segregation Principle)
  /// </summary>
  public class ISPTests
  {
    [Fact]
    public void HumanBad_CanWork()
    {
      // Arrange
      var human = new Human("Juan");

      // Act
      var result = human.Work();

      // Assert
      Assert.Contains("Juan", result);
      Assert.Contains("trabajando", result);
    }

    [Fact]
    public void HumanBad_CanEat()
    {
      // Arrange
      var human = new Human("Juan");

      // Act
      var result = human.Eat();

      // Assert
      Assert.Contains("Juan", result);
      Assert.Contains("comiendo", result);
    }

    [Fact]
    public void RobotBad_CanWork()
    {
      // Arrange
      var robot = new Robot("R2D2");

      // Act
      var result = robot.Work();

      // Assert
      Assert.Contains("R2D2", result);
      Assert.Contains("trabajando", result);
    }

    [Fact]
    public void RobotBad_EatThrowsException()
    {
      // Arrange
      var robot = new Robot("R2D2");

      // Act & Assert
      Assert.Throws<NotImplementedException>(() => robot.Eat());
    }

    [Fact]
    public void HumanGood_ImplementsWorkableAndEatable()
    {
      // Arrange
      var human = new Human("Juan");

      // Act
      var workResult = human.Work();
      var eatResult = human.Eat();

      // Assert
      Assert.Contains("Juan", workResult);
      Assert.Contains("trabajando", workResult);
      Assert.Contains("Juan", eatResult);
      Assert.Contains("comiendo", eatResult);
    }

    [Fact]
    public void RobotGood_OnlyImplementsWorkable()
    {
      // Arrange
      var robot = new Robot("R2D2");

      // Act
      var result = robot.Work();

      // Assert
      Assert.Contains("R2D2", result);
      Assert.Contains("trabajando", result);
      // Robot NO tiene método Eat() - cumple ISP
    }
  }
}
