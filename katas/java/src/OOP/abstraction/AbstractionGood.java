package OOP.abstraction;

// Cumplimiento de Abstracción: Oculta detalles de implementación
// ✅ Solución: Interfaz simple que oculta la complejidad interna

public class AbstractionGood {
    public static void main(String[] args) {
        System.out.println("=== Cumplimiento de Abstracción ===");
        
        EmailSender emailSender = new EmailSender("usuario@gmail.com", "password123");
        
        // ✅ Un solo método simple - toda la complejidad está oculta
        emailSender.sendEmail(
            "destinatario@gmail.com", 
            "Hola", 
            "Este es el cuerpo del mensaje"
        );
        
        // ✅ Usuario no necesita conocer detalles internos como:
        // - Conexión al servidor
        // - Autenticación
        // - Construcción del mensaje
        // - Desconexión
        // Todo está abstraído en un método simple
    }
}

class EmailSender {
    // ✅ Detalles internos son privados
    private String smtpServer = "smtp.gmail.com";
    private int smtpPort = 587;
    private String username = "";
    private String password = "";
    private boolean isConnected = false;
    
    // ✅ Constructor simplifica la configuración
    public EmailSender(String username, String password) {
        this.username = username;
        this.password = password;
    }
    
    // ✅ Método público simple que oculta toda la complejidad
    public boolean sendEmail(String to, String subject, String body) {
        try {
            // Internamente maneja todos los detalles
            connect();
            authenticate();
            String message = buildMessage(to, subject, body);
            send(message);
            disconnect();
            
            System.out.println("Email enviado exitosamente a " + to);
            return true;
        } catch (Exception e) {
            System.out.println("Error al enviar email: " + e.getMessage());
            return false;
        }
    }
    
    // ✅ Métodos privados ocultan la implementación
    private void connect() {
        System.out.println("Conectando a " + smtpServer + ":" + smtpPort + "...");
        isConnected = true;
    }
    
    private void authenticate() throws Exception {
        if (username.isEmpty() || password.isEmpty()) {
            throw new Exception("Credenciales inválidas");
        }
        System.out.println("Autenticando usuario " + username + "...");
    }
    
    private String buildMessage(String to, String subject, String body) {
        return "To: " + to + "\nSubject: " + subject + "\n\n" + body;
    }
    
    private void send(String message) throws Exception {
        if (!isConnected) {
            throw new Exception("No conectado al servidor");
        }
        System.out.println("Enviando mensaje...");
    }
    
    private void disconnect() {
        System.out.println("Desconectando del servidor...");
        isConnected = false;
    }
}
