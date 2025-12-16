using Xunit;

namespace OOP.Inheritance.Tests
{
  /// <summary>
  /// Tests para el concepto de Herencia en OOP
  /// </summary>
  public class InheritanceTests
  {
    [Fact]
    public void DogBad_CanEat()
    {
      // Arrange
      var dog = new Dog("Firulais");

      // Act
      var result = dog.Eat();

      // Assert
      Assert.Contains("Firulais", result);
      Assert.Contains("comiendo", result);
    }

    [Fact]
    public void DogBad_CanSleep()
    {
      // Arrange
      var dog = new Dog("Firulais");

      // Act
      var result = dog.Sleep();

      // Assert
      Assert.Contains("Firulais", result);
      Assert.Contains("durmiendo", result);
    }

    [Fact]
    public void DogBad_CanBark()
    {
      // Arrange
      var dog = new Dog("Firulais");

      // Act
      var result = dog.Bark();

      // Assert
      Assert.Contains("Firulais", result);
      Assert.Contains("Guau", result);
    }

    [Fact]
    public void CatBad_CanEat()
    {
      // Arrange
      var cat = new Cat("Michi");

      // Act
      var result = cat.Eat();

      // Assert
      Assert.Contains("Michi", result);
      Assert.Contains("comiendo", result);
    }

    [Fact]
    public void DogGood_InheritsEatFromAnimal()
    {
      // Arrange
      var dog = new Dog("Firulais");

      // Act
      var result = dog.Eat();

      // Assert
      Assert.Contains("Firulais", result);
      Assert.Contains("comiendo", result);
    }

    [Fact]
    public void DogGood_InheritsSleepFromAnimal()
    {
      // Arrange
      var dog = new Dog("Firulais");

      // Act
      var result = dog.Sleep();

      // Assert
      Assert.Contains("Firulais", result);
      Assert.Contains("durmiendo", result);
    }

    [Fact]
    public void DogGood_HasSpecificBarkMethod()
    {
      // Arrange
      var dog = new Dog("Firulais");

      // Act
      var result = dog.Bark();

      // Assert
      Assert.Contains("Guau", result);
    }

    [Fact]
    public void CatGood_InheritsFromAnimal()
    {
      // Arrange
      var cat = new Cat("Michi");

      // Act
      var eatResult = cat.Eat();
      var sleepResult = cat.Sleep();
      var meowResult = cat.Meow();

      // Assert
      Assert.Contains("Michi", eatResult);
      Assert.Contains("comiendo", eatResult);
      Assert.Contains("durmiendo", sleepResult);
      Assert.Contains("Miau", meowResult);
    }
  }
}
