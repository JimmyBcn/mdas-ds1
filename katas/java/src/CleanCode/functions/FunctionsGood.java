package CleanCode.functions;

// Cumplimiento de Clean Code: Funciones Bien Diseñadas
// ✅ Solución: Una cosa por función, pequeñas, mismo nivel de abstracción, sin efectos secundarios

public class FunctionsGood {
    public static void main(String[] args) {
        System.out.println("=== Cumplimiento de Funciones en Clean Code ===");
        User user = new User("Alex", 100);
        UserScoreProcessor processor = new UserScoreProcessor();
        processor.processUserScore(user, 50, 30);
        System.out.println("Puntaje final del usuario: " + user.score);
    }
}

class UserScoreProcessor {
    private static final int FAST_TIME_BONUS = 10;
    private static final int FAST_TIME_THRESHOLD_SECONDS = 60;

    // ✅ Función hace UNA cosa: orquestar el procesamiento del puntaje
    // ✅ Mismo nivel de abstracción
    public void processUserScore(User user, int newScore, int timeInSeconds) {
        int bonus = calculateBonus(timeInSeconds);
        int finalScore = user.score + newScore + bonus;

        updateScore(user, finalScore);
        sendNotification(user);
        logActivity(user, newScore);
    }

    // ✅ Función pequeña que hace UNA cosa: calcular bonus
    private int calculateBonus(int timeInSeconds) {
        if (timeInSeconds < FAST_TIME_THRESHOLD_SECONDS) {
            System.out.println("Aplica bonus de " + FAST_TIME_BONUS + " puntos por tiempo rápido.");
            return FAST_TIME_BONUS;
        }
        return 0;
    }

    // ✅ Función pequeña que hace UNA cosa: actualizar puntaje
    private void updateScore(User user, int finalScore) {
        user.score = finalScore;
    }

    // ✅ Función pequeña que hace UNA cosa: enviar notificación
    private void sendNotification(User user) {
        System.out.println("Notificación enviada a " + user.name + ": Tu nuevo puntaje es " + user.score);
    }

    // ✅ Función pequeña que hace UNA cosa: registrar actividad
    private void logActivity(User user, int newScore) {
        System.out.println("LOG: " + user.name + " obtuvo " + newScore + " puntos. Puntaje final: " + user.score);
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
