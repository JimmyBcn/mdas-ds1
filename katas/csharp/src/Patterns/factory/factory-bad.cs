using System;
using System.Collections.Generic;

// Violación del Patrón Factory: El código cliente crea objetos directamente con cadenas if/else
// ❌ Problema: Lógica de creación de objetos dispersa por todas partes

// Clases de notificación simples
public class EmailNotification
{
  public string Send(string message)
  {
    return $"EMAIL: {message}";
  }
}

public class SMSNotification
{
  public string Send(string message)
  {
    return $"SMS: {message}";
  }
}

public class PushNotification
{
  public string Send(string message)
  {
    return $"PUSH: {message}";
  }
}

// ❌ El código cliente tiene que conocer todas las clases concretas
public class NotificationService
{
  public string SendNotification(string type, string message)
  {
    // ❌ Creación de objetos dispersa con cadenas if/else
    if (type == "email")
    {
      var notification = new EmailNotification(); // ❌ Creación directa
      return notification.Send(message);
    }
    else if (type == "sms")
    {
      var notification = new SMSNotification(); // ❌ Creación directa
      return notification.Send(message);
    }
    else if (type == "push")
    {
      var notification = new PushNotification(); // ❌ Creación directa
      return notification.Send(message);
    }
    else
    {
      throw new Exception($"Tipo de notificación desconocido: {type}");
    }
  }
}

// ❌ Problemas:
// 1. Cada nuevo tipo de notificación requiere modificar NotificationService
// 2. Lógica de creación de objetos duplicada en toda la aplicación
// 3. Difícil de probar - el cliente conoce todas las clases concretas

Console.WriteLine("=== Violación del Patrón Factory ===");
var service = new NotificationService();
Console.WriteLine(service.SendNotification("email", "Hola Mundo"));
Console.WriteLine(service.SendNotification("sms", "Hola Mundo"));
Console.WriteLine(service.SendNotification("push", "Hola Mundo"));
