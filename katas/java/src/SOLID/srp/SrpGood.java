package SOLID.srp;

// Cumplimiento del SRP: Cada clase tiene una única responsabilidad
// Solución: Clases separadas para diferentes responsabilidades

public class SrpGood {
    public static void main(String[] args) {
        User user = new User("Juan Pérez", "juan@ejemplo.com");
        EmailService emailService = new EmailService();
        UserFileManager fileManager = new UserFileManager();
        
        // Cada servicio maneja su propia responsabilidad
        System.out.println(emailService.sendWelcomeEmail(user));
        System.out.println(fileManager.saveToFile(user));
    }
}

class User {
    public String name;
    public String email;
    
    public User(String name, String email) {
        this.name = name;
        this.email = email;
    }
    
    // Solo gestión de datos de usuario aquí ✅
    public String getName() {
        return name;
    }
    
    public String getEmail() {
        return email;
    }
}

// Clase separada para operaciones de email ✅
class EmailService {
    public String sendWelcomeEmail(User user) {
        return "Enviando email de bienvenida a " + user.getEmail();
    }
    
    public String sendPasswordResetEmail(User user) {
        return "Enviando email de restablecimiento de contraseña a " + user.getEmail();
    }
}

// Clase separada para operaciones de archivos ✅
class UserFileManager {
    public String saveToFile(User user) {
        return "Guardando usuario " + user.getName() + " en archivo";
    }
    
    public String loadFromFile(String fileName) {
        return "Cargando datos de usuario desde " + fileName;
    }
}

// Beneficios:
// 1. Cada clase tiene solo una razón para cambiar
// 2. Fácil de probar responsabilidades individuales
// 3. Se pueden reutilizar servicios para diferentes tipos de usuario
// 4. El código está más organizado y es más mantenible
