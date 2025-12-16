using System;

// Cumplimiento de Abstracción: Oculta detalles de implementación
// ✅ Solución: Interfaz simple que oculta la complejidad interna

public class EmailSender
{
  // ✅ Detalles internos son privados
  private string smtpServer = "smtp.gmail.com";
  private int smtpPort = 587;
  private string username = "";
  private string password = "";
  private bool isConnected = false;

  // ✅ Constructor simplifica la configuración
  public EmailSender(string username, string password)
  {
    this.username = username;
    this.password = password;
  }

  // ✅ Método público simple que oculta toda la complejidad
  public bool SendEmail(string to, string subject, string body)
  {
    try
    {
      // Internamente maneja todos los detalles
      Connect();
      Authenticate();
      string message = BuildMessage(to, subject, body);
      Send(message);
      Disconnect();

      Console.WriteLine($"Email enviado exitosamente a {to}");
      return true;
    }
    catch (Exception error)
    {
      Console.WriteLine($"Error al enviar email: {error.Message}");
      return false;
    }
  }

  // ✅ Métodos privados ocultan la implementación
  private void Connect()
  {
    Console.WriteLine($"Conectando a {smtpServer}:{smtpPort}...");
    isConnected = true;
  }

  private void Authenticate()
  {
    if (string.IsNullOrEmpty(username) || string.IsNullOrEmpty(password))
    {
      throw new Exception("Credenciales inválidas");
    }
    Console.WriteLine($"Autenticando usuario {username}...");
  }

  private string BuildMessage(string to, string subject, string body)
  {
    return $"To: {to}\nSubject: {subject}\n\n{body}";
  }

  private void Send(string message)
  {
    if (!isConnected)
    {
      throw new Exception("No conectado al servidor");
    }
    Console.WriteLine("Enviando mensaje...");
  }

  private void Disconnect()
  {
    Console.WriteLine("Desconectando del servidor...");
    isConnected = false;
  }
}

// ✅ Usuario solo necesita saber la interfaz pública simple
Console.WriteLine("=== Cumplimiento de Abstracción ===");

var emailSender = new EmailSender("usuario@gmail.com", "password123");

// ✅ Un solo método simple - toda la complejidad está oculta
emailSender.SendEmail(
    "destinatario@gmail.com",
    "Hola",
    "Este es el cuerpo del mensaje");

// ✅ Usuario no necesita conocer detalles internos como:
// - Conexión al servidor
// - Autenticación
// - Construcción del mensaje
// - Desconexión
// Todo está abstraído en un método simple
