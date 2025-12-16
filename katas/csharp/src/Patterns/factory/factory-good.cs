using System;

// Implementación del Patrón Factory: Creación centralizada de objetos
// ✅ Solución: Crear una fábrica que maneje la creación de objetos

// Interfaz común ✅
public interface INotification
{
  string Send(string message);
}

// Implementaciones concretas ✅
public class EmailNotification : INotification
{
  public string Send(string message)
  {
    return $"EMAIL: {message}";
  }
}

public class SMSNotification : INotification
{
  public string Send(string message)
  {
    return $"SMS: {message}";
  }
}

public class PushNotification : INotification
{
  public string Send(string message)
  {
    return $"PUSH: {message}";
  }
}

// ✅ La fábrica centraliza la creación de objetos
public class NotificationFactory
{
  public static INotification Create(string type)
  {
    switch (type)
    {
      case "email":
        return new EmailNotification();
      case "sms":
        return new SMSNotification();
      case "push":
        return new PushNotification();
      default:
        throw new Exception($"Tipo de notificación desconocido: {type}");
    }
  }
}

// ✅ El código cliente no conoce las clases concretas
public class NotificationService
{
  public string SendNotification(string type, string message)
  {
    // ✅ La fábrica maneja la creación de objetos
    var notification = NotificationFactory.Create(type);
    return notification.Send(message);
  }
}

// ✅ Beneficios:
// 1. Creación centralizada de objetos
// 2. Fácil agregar nuevos tipos de notificación (solo actualizar la fábrica)
// 3. El código cliente depende de la interfaz, no de clases concretas

Console.WriteLine("=== Solución con Patrón Factory ===");
var service = new NotificationService();
Console.WriteLine(service.SendNotification("email", "Hola Mundo"));
Console.WriteLine(service.SendNotification("sms", "Hola Mundo"));
Console.WriteLine(service.SendNotification("push", "Hola Mundo"));

// ¡Agregar un nuevo tipo es fácil - solo cambiar la fábrica!
Console.WriteLine("\n=== Nuevo tipo agregado ===");
// Para agregar SlackNotification, solo crear la clase e incluir en la factory

// ✅ Agregar un nuevo tipo (ejemplo):
public class SlackNotification : INotification
{
  public string Send(string message)
  {
    return $"SLACK: {message}";
  }
}
