<?php
// Cumplimiento de Abstracción: Oculta detalles de implementación
// ✅ Solución: Interfaz simple que oculta la complejidad interna

class EmailSender {
    // ✅ Detalles internos son privados
    private string $smtpServer = "smtp.gmail.com";
    private int $smtpPort = 587;
    private string $username = "";
    private string $password = "";
    private bool $isConnected = false;

    // ✅ Constructor simplifica la configuración
    public function __construct(string $username, string $password) {
        $this->username = $username;
        $this->password = $password;
    }

    // ✅ Método público simple que oculta toda la complejidad
    public function sendEmail(string $to, string $subject, string $body): bool {
        try {
            // Internamente maneja todos los detalles
            $this->connect();
            $this->authenticate();
            $message = $this->buildMessage($to, $subject, $body);
            $this->send($message);
            $this->disconnect();

            echo "Email enviado exitosamente a $to" . PHP_EOL;
            return true;
        } catch (Exception $error) {
            echo "Error al enviar email: {$error->getMessage()}" . PHP_EOL;
            return false;
        }
    }

    // ✅ Métodos privados ocultan la implementación
    private function connect(): void {
        echo "Conectando a {$this->smtpServer}:{$this->smtpPort}..." . PHP_EOL;
        $this->isConnected = true;
    }

    private function authenticate(): void {
        if (!$this->username || !$this->password) {
            throw new Exception("Credenciales inválidas");
        }
        echo "Autenticando usuario {$this->username}..." . PHP_EOL;
    }

    private function buildMessage(string $to, string $subject, string $body): string {
        return "To: $to\nSubject: $subject\n\n$body";
    }

    private function send(string $message): void {
        if (!$this->isConnected) {
            throw new Exception("No conectado al servidor");
        }
        echo "Enviando mensaje..." . PHP_EOL;
    }

    private function disconnect(): void {
        echo "Desconectando del servidor..." . PHP_EOL;
        $this->isConnected = false;
    }
}

// ✅ Usuario solo necesita saber la interfaz pública simple
echo "=== Cumplimiento de Abstracción ===" . PHP_EOL;

$emailSender = new EmailSender("usuario@gmail.com", "password123");

// ✅ Un solo método simple - toda la complejidad está oculta
$emailSender->sendEmail(
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
