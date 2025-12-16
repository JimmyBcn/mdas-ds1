<?php
// Violación de Abstracción: Expone detalles de implementación innecesarios
// ❌ Problema: El usuario debe conocer cómo funciona internamente la clase

class EmailSender {
    public string $smtpServer = "smtp.gmail.com";
    public int $smtpPort = 587;
    public string $username = "";
    public string $password = "";
    public bool $isConnected = false;
    public int $connectionAttempts = 0;
    public string $lastError = "";

    // ❌ Usuario debe manejar todos los detalles de la conexión
    public function connectToServer(): bool {
        echo "Conectando a {$this->smtpServer}:{$this->smtpPort}..." . PHP_EOL;
        $this->connectionAttempts++;

        // Simulación de conexión
        if ($this->username && $this->password) {
            $this->isConnected = true;
            $this->lastError = "";
            return true;
        } else {
            $this->lastError = "Credenciales inválidas";
            $this->isConnected = false;
            return false;
        }
    }

    // ❌ Usuario debe manejar autenticación manualmente
    public function authenticate(string $username, string $password): bool {
        $this->username = $username;
        $this->password = $password;
        echo "Autenticando usuario $username..." . PHP_EOL;
        return strlen($username) > 0 && strlen($password) > 0;
    }

    // ❌ Usuario debe construir el mensaje manualmente
    public function buildMessage(string $to, string $subject, string $body): string {
        return "To: $to\nSubject: $subject\n\n$body";
    }

    // ❌ Usuario debe enviar mensaje después de conectar y construir
    public function sendRawMessage(string $message): bool {
        if (!$this->isConnected) {
            $this->lastError = "No conectado al servidor";
            return false;
        }
        echo "Enviando mensaje:\n$message" . PHP_EOL;
        return true;
    }

    // ❌ Usuario debe desconectar manualmente
    public function disconnectFromServer(): void {
        echo "Desconectando del servidor..." . PHP_EOL;
        $this->isConnected = false;
    }
}

// ❌ Usuario debe conocer TODOS los pasos internos
echo "=== Violación de Abstracción ===" . PHP_EOL;

$emailSender = new EmailSender();

// ❌ Muchos pasos manuales y conocimiento de detalles internos
$emailSender->authenticate("usuario@gmail.com", "password123");
$emailSender->connectToServer();

$message = $emailSender->buildMessage(
    "destinatario@gmail.com",
    "Hola",
    "Este es el cuerpo del mensaje"
);

$emailSender->sendRawMessage($message);
$emailSender->disconnectFromServer();

// ❌ Si algo falla, el usuario debe verificar propiedades internas
if ($emailSender->lastError) {
    echo "Error: {$emailSender->lastError}" . PHP_EOL;
}
