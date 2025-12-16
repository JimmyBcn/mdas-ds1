package CleanCode.functions;

// Violación de Clean Code: Funciones Mal Diseñadas
// ❌ Problemas: Hacen muchas cosas, grandes, niveles de abstracción mezclados, efectos secundarios

public class FunctionsBad {
    public static void main(String[] args) {
        System.out.println("=== Violación de Funciones en Clean Code ===");
        User user = new User("Alex", 100);
        UserScoreProcessor processor = new UserScoreProcessor();
        processor.processUserScore(user, 50, 30);
        System.out.println("Puntaje final del usuario: " + user.score);
    }
}

class UserScoreProcessor {
    // ❌ Función hace MUCHAS cosas: calcula bonus, actualiza score, envía notificación y loguea
    // ❌ Niveles de abstracción mezclados
    public void processUserScore(User user, int newScore, int timeInSeconds) {
        System.out.println("Procesando puntaje para " + user.name + "...");

        // Nivel bajo: cálculo de bonus
        int bonus = 0;
        if (timeInSeconds < 60) {
            bonus = 10;
            System.out.println("Aplica bonus de " + bonus + " puntos por tiempo rápido.");
        }

        int finalScore = user.score + newScore + bonus;

        // Nivel medio: actualizar el score del usuario (efecto secundario)
        user.score = finalScore;

        // Nivel bajo: enviar notificación
        System.out.println("Notificación enviada a " + user.name + ": Tu nuevo puntaje es " + finalScore);

        // Nivel bajo: guardar en log
        System.out.println("LOG: " + user.name + " obtuvo " + newScore + " puntos. Puntaje final: " + finalScore);
    }
}

class User {
    String name;
    int score;

    User(String name, int score) {
        this.name = name;
        this.score = score;
    }
}
