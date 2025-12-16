<?php
// Violación de Clean Code: Funciones Mal Diseñadas
// ❌ Problemas: Hacen muchas cosas, grandes, niveles de abstracción mezclados, efectos secundarios

class UserScoreProcessor {
    // ❌ Función hace MUCHAS cosas: calcula bonus, actualiza score, envía notificación y loguea
    // ❌ Niveles de abstracción mezclados
    public function processUserScore(object $user, int $newScore, int $timeInSeconds): void {
        echo "Procesando puntaje para {$user->name}..." . PHP_EOL;

        // Nivel bajo: cálculo de bonus
        $bonus = 0;
        if ($timeInSeconds < 60) {
            $bonus = 10;
            echo "Aplica bonus de {$bonus} puntos por tiempo rápido." . PHP_EOL;
        }

        $finalScore = $user->score + $newScore + $bonus;

        // Nivel medio: actualizar el score del usuario (efecto secundario)
        $user->score = $finalScore;

        // Nivel bajo: enviar notificación
        echo "Notificación enviada a {$user->name}: Tu nuevo puntaje es {$finalScore}" . PHP_EOL;

        // Nivel bajo: guardar en log
        echo "LOG: {$user->name} obtuvo {$newScore} puntos. Puntaje final: {$finalScore}" . PHP_EOL;
    }
}

// Uso
echo "=== Violación de Funciones en Clean Code ===" . PHP_EOL;
$user = (object)['name' => 'Alex', 'score' => 100];
$processor = new UserScoreProcessor();
$processor->processUserScore($user, 50, 30);
echo "Puntaje final del usuario: {$user->score}" . PHP_EOL;
