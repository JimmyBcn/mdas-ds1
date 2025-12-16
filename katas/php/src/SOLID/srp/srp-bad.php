<?php
// Violación del SRP: La clase User tiene demasiadas responsabilidades
// Problema: Esta clase maneja datos de usuario Y envío de emails Y operaciones de archivos

class User {
    public string $name;
    public string $email;

    public function __construct(string $name, string $email) {
        $this->name = $name;
        $this->email = $email;
    }

    // Responsabilidad 1: Gestión de datos de usuario ✅ (pertenece aquí)
    public function getName(): string {
        return $this->name;
    }

    public function getEmail(): string {
        return $this->email;
    }

    // Responsabilidad 2: Operaciones de email ❌ (no pertenece aquí)
    public function sendWelcomeEmail(): string {
        return "Enviando email de bienvenida a {$this->email}";
    }

    public function sendPasswordResetEmail(): string {
        return "Enviando email de restablecimiento de contraseña a {$this->email}";
    }

    // Responsabilidad 3: Operaciones de archivos ❌ (no pertenece aquí)
    public function saveToFile(): string {
        return "Guardando usuario {$this->name} en archivo";
    }

    public function loadFromFile(): string {
        return "Cargando datos de usuario desde archivo";
    }
}

// Problemas con este enfoque:
// 1. Si el sistema de email cambia, modificamos la clase User
// 2. Si el formato de archivo cambia, modificamos la clase User
// 3. La clase se vuelve grande y difícil de mantener
// 4. Difícil de probar las responsabilidades individuales
