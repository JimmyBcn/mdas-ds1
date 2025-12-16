using Xunit;

namespace SOLID.LSP.Tests
{
  /// <summary>
  /// Tests para el principio LSP (Liskov Substitution Principle)
  /// </summary>
  public class LSPTests
  {
    [Fact]
    public void RectangleBad_CalculatesAreaCorrectly()
    {
      // Arrange
      var rect = new Rectangle(5, 4);

      // Act
      var area = rect.GetArea();

      // Assert
      Assert.Equal(20, area);
    }

    [Fact]
    public void SquareBad_CalculatesAreaCorrectly()
    {
      // Arrange
      var square = new Square(5);

      // Act
      var area = square.GetArea();

      // Assert
      Assert.Equal(25, area);
    }

    [Fact]
    public void LSPViolation_SquareChangesWidthAndHeight()
    {
      // Arrange
      var square = new Square(5);

      // Act
      square.SetWidth(3);
      var area = square.GetArea();

      // Assert
      // Esto demuestra la violación: al cambiar width, también cambia height
      Assert.Equal(9, area); // 3 * 3, no 3 * 5
    }

    [Fact]
    public void RectangleGood_CalculatesAreaCorrectly()
    {
      // Arrange
      var rect = new Rectangle(5, 4);

      // Act
      var area = rect.GetArea();

      // Assert
      Assert.Equal(20, area);
    }

    [Fact]
    public void RectangleGood_ModifiesDimensionsIndependently()
    {
      // Arrange
      var rect = new Rectangle(5, 4);

      // Act
      rect.SetWidth(3);
      rect.SetHeight(6);
      var area = rect.GetArea();

      // Assert
      Assert.Equal(18, area);
    }

    [Fact]
    public void SquareGood_CalculatesAreaCorrectly()
    {
      // Arrange
      var square = new Square(5);

      // Act
      var area = square.GetArea();

      // Assert
      Assert.Equal(25, area);
    }

    [Fact]
    public void SquareGood_SetSideChangesArea()
    {
      // Arrange
      var square = new Square(5);

      // Act
      square.SetSide(7);
      var area = square.GetArea();

      // Assert
      Assert.Equal(49, area);
    }
  }
}
