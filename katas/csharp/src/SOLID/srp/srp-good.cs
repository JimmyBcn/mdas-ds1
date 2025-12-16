using System;

// Cumplimiento del SRP: Cada clase tiene una única responsabilidad
// Solución: Clases separadas para diferentes responsabilidades

var user = new User("Juan Pérez", "juan@ejemplo.com");
var emailService = new EmailService();
var fileManager = new UserFileManager();

// Cada servicio maneja su propia responsabilidad
Console.WriteLine(emailService.SendWelcomeEmail(user));
Console.WriteLine(fileManager.SaveToFile(user));

class User
{
  public string Name { get; private set; }
  public string Email { get; private set; }

  public User(string name, string email)
  {
    Name = name;
    Email = email;
  }

  // Solo gestión de datos de usuario aquí ✅
  public string GetName()
  {
    return Name;
  }

  public string GetEmail()
  {
    return Email;
  }
}

// Clase separada para operaciones de email ✅
class EmailService
{
  public string SendWelcomeEmail(User user)
  {
    return $"Enviando email de bienvenida a {user.GetEmail()}";
  }

  public string SendPasswordResetEmail(User user)
  {
    return $"Enviando email de restablecimiento de contraseña a {user.GetEmail()}";
  }
}

// Clase separada para operaciones de archivos ✅
class UserFileManager
{
  public string SaveToFile(User user)
  {
    return $"Guardando usuario {user.GetName()} en archivo";
  }

  public string LoadFromFile(string fileName)
  {
    return $"Cargando datos de usuario desde {fileName}";
  }
}

// Beneficios:
// 1. Cada clase tiene solo una razón para cambiar
// 2. Fácil de probar responsabilidades individuales
// 3. Se pueden reutilizar servicios para diferentes tipos de usuario
// 4. El código está más organizado y es más mantenible
