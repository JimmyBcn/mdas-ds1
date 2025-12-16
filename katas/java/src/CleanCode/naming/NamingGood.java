package CleanCode.naming;

import java.util.HashSet;
import java.util.Set;

// Cumplimiento de Clean Code: Buen Nombrado
// ✅ Solución: Nombres con intención, sin información falsa, pronunciables, sin codificaciones

public class NamingGood {
    public static void main(String[] args) {
        // ✅ Nombres con intención clara
        int secondsInDay;
        String userEmailAddress;
        int[] productPrices = {1, 2, 3};

        // ✅ Sin información falsa
        Set<String> activeUsers = new HashSet<>(); // Correcto: es un Set
        UserAccount userAccount = new UserAccount("John", 1000); // Correcto: es un objeto

        // ✅ Pronunciables
        String currentDateString = "20251102";
        java.util.Date generatedTimestamp = new java.util.Date();

        // ✅ Sin codificaciones innecesarias
        String firstName = "John"; // Java ya sabe que es String
        int age = 25; // Java ya sabe que es int
        boolean isActive = true; // Java ya sabe que es boolean

        // Uso
        System.out.println("=== Cumplimiento de Nombrado en Clean Code ===");

        secondsInDay = 86400; // ✅ Claro: segundos en un día
        userEmailAddress = "usuario@email.com"; // ✅ Claro: dirección de email del usuario

        UserService userService = new UserService();
        User validUser = new User(20, "ACT", 1200);
        System.out.println("Usuario válido: " + userService.validateUser(validUser));
        System.out.println("Descuento: " + userService.calculateDiscount(100, "VIP"));
    }
}

// ✅ Constantes con nombre en lugar de números/strings mágicos
class UserService {
    // Constantes descriptivas
    private static final int MINIMUM_AGE = 18;
    private static final String ACTIVE_STATUS = "ACT";
    private static final int PREMIUM_POINTS_THRESHOLD = 1000;

    private static final String VIP_CUSTOMER_TYPE = "VIP";
    private static final String REGULAR_CUSTOMER_TYPE = "REG";

    private static final double VIP_DISCOUNT_RATE = 0.2;
    private static final double REGULAR_DISCOUNT_RATE = 0.05;

    public boolean validateUser(User user) {
        if (user.age < MINIMUM_AGE) { // ✅ Claro: edad mínima requerida
            return false;
        }

        if (ACTIVE_STATUS.equals(user.status)) { // ✅ Claro: estado activo
            return true;
        }

        if (user.points > PREMIUM_POINTS_THRESHOLD) { // ✅ Claro: umbral de puntos premium
            return true;
        }

        return false;
    }

    public double calculateDiscount(double totalAmount, String customerType) {
        if (VIP_CUSTOMER_TYPE.equals(customerType)) {
            return totalAmount * VIP_DISCOUNT_RATE; // ✅ Claro: tasa de descuento VIP
        } else if (REGULAR_CUSTOMER_TYPE.equals(customerType)) {
            return totalAmount * REGULAR_DISCOUNT_RATE; // ✅ Claro: tasa de descuento regular
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

class UserAccount {
    String name;
    int balance;

    UserAccount(String name, int balance) {
        this.name = name;
        this.balance = balance;
    }
}
