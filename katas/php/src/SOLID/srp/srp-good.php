<?php
// Cumplimiento del SRP: Cada clase tiene una única responsabilidad
// Solución: Clases separadas para diferentes responsabilidades

class User {
    public string $name;
    public string $email;

    public function __construct(string $name, string $email) {
        $this->name = $name;
        $this->email = $email;
    }

    // Solo gestión de datos de usuario aquí ✅
    public function getName(): string {
        return $this->name;
    }

    public function getEmail(): string {
        return $this->email;
    }
}

// Clase separada para operaciones de email ✅
class EmailService {
    public function sendWelcomeEmail(User $user): string {
        return "Enviando email de bienvenida a {$user->getEmail()}";
    }

    public function sendPasswordResetEmail(User $user): string {
        return "Enviando email de restablecimiento de contraseña a {$user->getEmail()}";
    }
}

// Clase separada para operaciones de archivos ✅
class UserFileManager {
    public function saveToFile(User $user): string {
        return "Guardando usuario {$user->getName()} en archivo";
    }

    public function loadFromFile(string $fileName): string {
        return "Cargando datos de usuario desde $fileName";
    }
}

// Ejemplo de uso
$user = new User("Juan Pérez", "juan@ejemplo.com");
$emailService = new EmailService();
$fileManager = new UserFileManager();

// Cada servicio maneja su propia responsabilidad
echo $emailService->sendWelcomeEmail($user) . PHP_EOL;
echo $fileManager->saveToFile($user) . PHP_EOL;

// Beneficios:
// 1. Cada clase tiene solo una razón para cambiar
// 2. Fácil de probar responsabilidades individuales
// 3. Se pueden reutilizar servicios para diferentes tipos de usuario
// 4. El código está más organizado y es más mantenible
