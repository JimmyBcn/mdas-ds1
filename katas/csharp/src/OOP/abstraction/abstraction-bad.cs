using System;

// Violación de Abstracción: Expone detalles de implementación innecesarios
// ❌ Problema: El usuario debe conocer cómo funciona internamente la clase

public class EmailSender
{
  public string SmtpServer = "smtp.gmail.com";
  public int SmtpPort = 587;
  public string Username = "";
  public string Password = "";
  public bool IsConnected = false;
  public int ConnectionAttempts = 0;
  public string LastError = "";

  // ❌ Usuario debe manejar todos los detalles de la conexión
  public bool ConnectToServer()
  {
    Console.WriteLine($"Conectando a {SmtpServer}:{SmtpPort}...");
    ConnectionAttempts++;

    // Simulación de conexión
    if (!string.IsNullOrEmpty(Username) && !string.IsNullOrEmpty(Password))
    {
      IsConnected = true;
      LastError = "";
      return true;
    }
    else
    {
      LastError = "Credenciales inválidas";
      IsConnected = false;
      return false;
    }
  }

  // ❌ Usuario debe manejar autenticación manualmente
  public bool Authenticate(string username, string password)
  {
    Username = username;
    Password = password;
    Console.WriteLine($"Autenticando usuario {username}...");
    return username.Length > 0 && password.Length > 0;
  }

  // ❌ Usuario debe construir el mensaje manualmente
  public string BuildMessage(string to, string subject, string body)
  {
    return $"To: {to}\nSubject: {subject}\n\n{body}";
  }

  // ❌ Usuario debe enviar mensaje después de conectar y construir
  public bool SendRawMessage(string message)
  {
    if (!IsConnected)
    {
      LastError = "No conectado al servidor";
      return false;
    }
    Console.WriteLine($"Enviando mensaje:\n{message}");
    return true;
  }

  // ❌ Usuario debe desconectar manualmente
  public void DisconnectFromServer()
  {
    Console.WriteLine("Desconectando del servidor...");
    IsConnected = false;
  }
}

// ❌ Usuario debe conocer TODOS los pasos internos
Console.WriteLine("=== Violación de Abstracción ===");

var emailSender = new EmailSender();

// ❌ Muchos pasos manuales y conocimiento de detalles internos
emailSender.Authenticate("usuario@gmail.com", "password123");
emailSender.ConnectToServer();

string message = emailSender.BuildMessage(
    "destinatario@gmail.com",
    "Hola",
    "Este es el cuerpo del mensaje");

emailSender.SendRawMessage(message);
emailSender.DisconnectFromServer();

// ❌ Si algo falla, el usuario debe verificar propiedades internas
if (!string.IsNullOrEmpty(emailSender.LastError))
{
  Console.WriteLine($"Error: {emailSender.LastError}");
}
