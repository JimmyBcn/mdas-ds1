package SOLID.srp;

// Violación del SRP: La clase User tiene demasiadas responsabilidades
// Problema: Esta clase maneja datos de usuario Y envío de emails Y operaciones de archivos

public class SrpBad {
    public static void main(String[] args) {
        User user = new User("Juan Pérez", "juan@ejemplo.com");
        
        // La clase User hace demasiado
        System.out.println(user.sendWelcomeEmail());
        System.out.println(user.saveToFile());
    }
}

class User {
    public String name;
    public String email;
    
    public User(String name, String email) {
        this.name = name;
        this.email = email;
    }
    
    // Responsabilidad 1: Gestión de datos de usuario ✅ (pertenece aquí)
    public String getName() {
        return name;
    }
    
    public String getEmail() {
        return email;
    }
    
    // Responsabilidad 2: Operaciones de email ❌ (no pertenece aquí)
    public String sendWelcomeEmail() {
        return "Enviando email de bienvenida a " + email;
    }
    
    public String sendPasswordResetEmail() {
        return "Enviando email de restablecimiento de contraseña a " + email;
    }
    
    // Responsabilidad 3: Operaciones de archivos ❌ (no pertenece aquí)
    public String saveToFile() {
        return "Guardando usuario " + name + " en archivo";
    }
    
    public String loadFromFile() {
        return "Cargando datos de usuario desde archivo";
    }
}

// Problemas con este enfoque:
// 1. Si el sistema de email cambia, modificamos la clase User
// 2. Si el formato de archivo cambia, modificamos la clase User
// 3. La clase se vuelve grande y difícil de mantener
// 4. Difícil de probar las responsabilidades individuales
