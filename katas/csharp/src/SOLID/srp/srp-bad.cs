using System;

// Violación del SRP: La clase User tiene demasiadas responsabilidades
// Problema: Esta clase maneja datos de usuario Y envío de emails Y operaciones de archivos

var user = new User("Juan Pérez", "juan@ejemplo.com");

Console.WriteLine(user.GetName());
Console.WriteLine(user.SendWelcomeEmail());
Console.WriteLine(user.SaveToFile());

class User
{
  public string Name { get; set; }
  public string Email { get; set; }

  public User(string name, string email)
  {
    Name = name;
    Email = email;
  }

  // Responsabilidad 1: Gestión de datos de usuario ✅ (pertenece aquí)
  public string GetName()
  {
    return Name;
  }

  public string GetEmail()
  {
    return Email;
  }

  // Responsabilidad 2: Operaciones de email ❌ (no pertenece aquí)
  public string SendWelcomeEmail()
  {
    return $"Enviando email de bienvenida a {Email}";
  }

  public string SendPasswordResetEmail()
  {
    return $"Enviando email de restablecimiento de contraseña a {Email}";
  }

  // Responsabilidad 3: Operaciones de archivos ❌ (no pertenece aquí)
  public string SaveToFile()
  {
    return $"Guardando usuario {Name} en archivo";
  }

  public string LoadFromFile()
  {
    return "Cargando datos de usuario desde archivo";
  }
}

// Problemas con este enfoque:
// 1. Si el sistema de email cambia, modificamos la clase User
// 2. Si el formato de archivo cambia, modificamos la clase User
// 3. La clase se vuelve grande y difícil de mantener
// 4. Difícil de probar las responsabilidades individuales
