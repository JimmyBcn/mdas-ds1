using Xunit;

namespace OOP.Encapsulation.Tests
{
  /// <summary>
  /// Tests para el concepto de Encapsulación en OOP
  /// </summary>
  public class EncapsulationTests
  {
    [Fact]
    public void BankAccountBad_AllowsDirectBalanceAccess()
    {
      // Arrange
      var account = new BankAccount("123456", 1000);

      // Act
      var balance = account.Balance;

      // Assert
      Assert.Equal(1000, balance);

      // Problema: se puede modificar directamente
      account.Balance = 5000;
      Assert.Equal(5000, account.Balance);
    }

    [Fact]
    public void BankAccountBad_Deposit_IncreasesBalance()
    {
      // Arrange
      var account = new BankAccount("123456", 1000);

      // Act
      account.Deposit(500);

      // Assert
      Assert.Equal(1500, account.Balance);
    }

    [Fact]
    public void BankAccountGood_BalanceIsPrivate()
    {
      // Arrange
      var account = new BankAccount("123456", 1000);

      // Act
      var balance = account.GetBalance();

      // Assert
      Assert.Equal(1000, balance);
    }

    [Fact]
    public void BankAccountGood_Deposit_ValidAmount_IncreasesBalance()
    {
      // Arrange
      var account = new BankAccount("123456", 1000);

      // Act
      account.Deposit(500);

      // Assert
      Assert.Equal(1500, account.GetBalance());
    }

    [Fact]
    public void BankAccountGood_Deposit_NegativeAmount_DoesNotChange()
    {
      // Arrange
      var account = new BankAccount("123456", 1000);

      // Act
      account.Deposit(-100);

      // Assert
      Assert.Equal(1000, account.GetBalance());
    }

    [Fact]
    public void BankAccountGood_Withdraw_SufficientFunds_DecreasesBalance()
    {
      // Arrange
      var account = new BankAccount("123456", 1000);

      // Act
      var result = account.Withdraw(300);

      // Assert
      Assert.True(result);
      Assert.Equal(700, account.GetBalance());
    }

    [Fact]
    public void BankAccountGood_Withdraw_InsufficientFunds_DoesNotChange()
    {
      // Arrange
      var account = new BankAccount("123456", 1000);

      // Act
      var result = account.Withdraw(1500);

      // Assert
      Assert.False(result);
      Assert.Equal(1000, account.GetBalance());
    }
  }
}
