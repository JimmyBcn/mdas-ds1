package CleanCode.naming;

import java.util.HashSet;
import java.util.Set;

// Violación de Clean Code: Mal Nombrado
// ❌ Problemas: Nombres sin intención, información falsa, difícil pronunciar, codificaciones

public class NamingBad {
    public static void main(String[] args) {
        // ❌ Sin intención clara
        int d; // ¿Qué es 'd'?
        String x; // ¿Qué es 'x'?
        int[] arr = {1, 2, 3}; // ¿Array de qué?

        // ❌ Información falsa
        Set<String> userList = new HashSet<>(); // ¡No es una List, es un Set!
        Object accountsArray = new Object() {
            String name = "John";
            int balance = 1000;
        }; // ¡No es un array!

        // ❌ Difícil de pronunciar
        String yyyymmdstr = "20251102"; // ¿Cómo pronuncias esto?
        java.util.Date genymdhms = new java.util.Date(); // ¿Gen-y-m-d-h-m-s?

        // ❌ Codificaciones innecesarias (notación húngara)
        String strFirstName = "John"; // El 'str' es redundante en Java
        int intAge = 25; // El 'int' es redundante
        boolean boolIsActive = true; // El 'bool' es redundante

        // Uso
        System.out.println("=== Violación de Nombrado en Clean Code ===");

        d = 86400; // ¿Segundos? ¿Milisegundos? ¿Días?
        x = "usuario@email.com";

        UserService service = new UserService();
        User user = new User(20, "ACT", 1200);
        System.out.println("Usuario válido: " + service.validateUser(user));
        System.out.println("Descuento: " + service.calculateDiscount(100, "VIP"));
    }
}

// ❌ Números y strings mágicos
class UserService {
    public boolean validateUser(User user) {
        if (user.age < 18) { // ❌ ¿Qué significa 18?
            return false;
        }

        if ("ACT".equals(user.status)) { // ❌ ¿Qué significa "ACT"?
            return true;
        }

        if (user.points > 1000) { // ❌ ¿Por qué 1000?
            return true;
        }

        return false;
    }

    public double calculateDiscount(double total, String type) {
        if ("VIP".equals(type)) {
            return total * 0.2; // ❌ ¿Qué significa 0.2?
        } else if ("REG".equals(type)) {
            return total * 0.05; // ❌ ¿Qué significa 0.05?
        }
        return 0;
    }
}

class User {
    int age;
    String status;
    int points;

    User(int age, String status, int points) {
        this.age = age;
        this.status = status;
        this.points = points;
    }
}
