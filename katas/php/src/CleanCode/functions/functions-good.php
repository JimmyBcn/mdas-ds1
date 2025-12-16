<?php
// Cumplimiento de Clean Code: Funciones Bien Diseñadas
// ✅ Solución: Una cosa por función, pequeñas, mismo nivel de abstracción, sin efectos secundarios

class User {
    public string $name;
    public int $score;

    public function __construct(string $name, int $score) {
        $this->name = $name;
        $this->score = $score;
    }
}

class UserScoreProcessor {
    private const FAST_TIME_BONUS = 10;
    private const FAST_TIME_THRESHOLD_SECONDS = 60;

    // ✅ Función hace UNA cosa: orquestar el procesamiento del puntaje
    // ✅ Mismo nivel de abstracción
    public function processUserScore(User $user, int $newScore, int $timeInSeconds): void {
        $bonus = $this->calculateBonus($timeInSeconds);
        $finalScore = $user->score + $newScore + $bonus;

        $this->updateScore($user, $finalScore);
        $this->sendNotification($user);
        $this->logActivity($user, $newScore);
    }

    // ✅ Función pequeña que hace UNA cosa: calcular bonus
    private function calculateBonus(int $timeInSeconds): int {
        if ($timeInSeconds < self::FAST_TIME_THRESHOLD_SECONDS) {
            echo "Aplica bonus de " . self::FAST_TIME_BONUS . " puntos por tiempo rápido." . PHP_EOL;
            return self::FAST_TIME_BONUS;
        }
        return 0;
    }

    // ✅ Función pequeña que hace UNA cosa: actualizar puntaje
    private function updateScore(User $user, int $finalScore): void {
        $user->score = $finalScore;
    }

    // ✅ Función pequeña que hace UNA cosa: enviar notificación
    private function sendNotification(User $user): void {
        echo "Notificación enviada a {$user->name}: Tu nuevo puntaje es {$user->score}" . PHP_EOL;
    }

    // ✅ Función pequeña que hace UNA cosa: registrar actividad
    private function logActivity(User $user, int $newScore): void {
        echo "LOG: {$user->name} obtuvo {$newScore} puntos. Puntaje final: {$user->score}" . PHP_EOL;
    }
}

// Uso
echo "=== Cumplimiento de Funciones en Clean Code ===" . PHP_EOL;
$user = new User("Alex", 100);
$processor = new UserScoreProcessor();
$processor->processUserScore($user, 50, 30);
echo "Puntaje final del usuario: {$user->score}" . PHP_EOL;
