package OOP.abstraction;

// Violación de Abstracción: Expone detalles de implementación innecesarios
// ❌ Problema: El usuario debe conocer cómo funciona internamente la clase

public class AbstractionBad {
    public static void main(String[] args) {
        System.out.println("=== Violación de Abstracción ===");
        
        EmailSender emailSender = new EmailSender();
        
        // ❌ Muchos pasos manuales y conocimiento de detalles internos
        emailSender.authenticate("usuario@gmail.com", "password123");
        emailSender.connectToServer();
        
        String message = emailSender.buildMessage(
            "destinatario@gmail.com", 
            "Hola", 
            "Este es el cuerpo del mensaje"
        );
        
        emailSender.sendRawMessage(message);
        emailSender.disconnectFromServer();
        
        // ❌ Si algo falla, el usuario debe verificar propiedades internas
        if (!emailSender.lastError.isEmpty()) {
            System.out.println("Error: " + emailSender.lastError);
        }
    }
}

class EmailSender {
    public String smtpServer = "smtp.gmail.com";
    public int smtpPort = 587;
    public String username = "";
    public String password = "";
    public boolean isConnected = false;
    public int connectionAttempts = 0;
    public String lastError = "";
    
    // ❌ Usuario debe manejar todos los detalles de la conexión
    public boolean connectToServer() {
        System.out.println("Conectando a " + smtpServer + ":" + smtpPort + "...");
        connectionAttempts++;
        
        if (!username.isEmpty() && !password.isEmpty()) {
            isConnected = true;
            lastError = "";
            return true;
        } else {
            lastError = "Credenciales inválidas";
            isConnected = false;
            return false;
        }
    }
    
    // ❌ Usuario debe manejar autenticación manualmente
    public boolean authenticate(String username, String password) {
        this.username = username;
        this.password = password;
        System.out.println("Autenticando usuario " + username + "...");
        return !username.isEmpty() && !password.isEmpty();
    }
    
    // ❌ Usuario debe construir el mensaje manualmente
    public String buildMessage(String to, String subject, String body) {
        return "To: " + to + "\nSubject: " + subject + "\n\n" + body;
    }
    
    // ❌ Usuario debe enviar mensaje después de conectar y construir
    public boolean sendRawMessage(String message) {
        if (!isConnected) {
            lastError = "No conectado al servidor";
            return false;
        }
        System.out.println("Enviando mensaje:\n" + message);
        return true;
    }
    
    // ❌ Usuario debe desconectar manualmente
    public void disconnectFromServer() {
        System.out.println("Desconectando del servidor...");
        isConnected = false;
    }
}
