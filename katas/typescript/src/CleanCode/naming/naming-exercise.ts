// 🔧 EJERCICIO: Clean Code - Naming (Nombrado)
//
// Instrucciones:
// 1. Analiza el archivo naming-bad.ts e identifica los problemas de nombrado
// 2. Refactoriza el código eliminando magic numbers, encodings y nombres poco claros
// 3. Implementa tu solución aquí antes de ver naming-good.ts
//
// Pistas:
// - ¿Qué significan los números 18, 0.2, "ACT"?
//        18 implica mayoría de edad
//        0.2 implica tasa de descuento para usuarios VIP
//        "ACT" implica estado activo del usuario
// - ¿Qué es "d", "x", "arr"? ¿Son nombres descriptivos?
//        "d" podría ser la cantidad de segundos en un día
//        "x" es el correo electrónico del usuario
//        "arr" es un array de números
// - ¿"userList" es realmente una lista o es un Set?
//        Es un Set, por lo que el nombre debe reflejar eso
// - ¿"strFirstName" necesita el prefijo "str"?
//        No, el prefijo es redundante, especialmente en TypeScript
// - Crea constantes con nombres descriptivos para los valores mágicos
//        const MINIMUM_AGE = 18;
//        const VIP_DISCOUNT_RATE = 0.2;
//        const REGULAR_DISCOUNT_RATE = 0.05;
//        const USER_STATUS_ACTIVE = "ACT";
//        const POINTS_THRESHOLD = 1000;
//        const SECONDS_IN_A_DAY = 86400;
//
// Desafío extra: Revisa tu propio código y encuentra variables con nombres de una letra
//
// Cuando termines, compara tu solución con naming-good.ts

// Escribe tu solución aquí:
const SECONDS_IN_A_DAY: number = 86400;
const MINIMUM_AGE: number = 18;
const USER_STATUS_ACTIVE: string = "ACT";
const POINTS_THRESHOLD: number = 1000;
const VIP_DISCOUNT_RATE: number = 0.2;
const REGULAR_DISCOUNT_RATE: number = 0.05;

const userJoinedDate = new Date("2025-11-02");
const userEmail: string = "user@example.com";
const userFirstName: string = "John";
const userAge: number = 25;
const isUserActive: boolean = true;

class UserService {
  public checkUserAge(age: number): boolean {
    return age >= MINIMUM_AGE;
  }

  public checkUserStatus(status: string): boolean {
    return status === USER_STATUS_ACTIVE;
  }

  public checkUserPoints(points: number): boolean {
    return points > POINTS_THRESHOLD;
  }

  public validateUser(user: any): boolean {
    return (
      this.checkUserAge(user.age) &&
      this.checkUserStatus(user.status) &&
      this.checkUserPoints(user.points)
    );
  }

  public calculateDiscount(total: number, type: string): number {
    if (type === "VIP") {
      return total * VIP_DISCOUNT_RATE;
    } else if (type === "REG") {
      return total * REGULAR_DISCOUNT_RATE;
    } else {
      return 0;
    }
  }
}

// Uso
console.log("=== Solución de Nombrado en Clean Code ===");

const service = new UserService();
const isValidUser = service.validateUser({
  age: 20,
  status: "ACT",
  points: 1500,
});
console.log("¿El usuario es válido?", isValidUser);
const discount = service.calculateDiscount(200, "VIP");
console.log("Descuento aplicado:", discount);

export { UserService };
