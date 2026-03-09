import { PackageProcessingFacade } from "./facades/PackageProcessingFacade";
import { ValidationException } from "./exceptions/ValidationException";
import { StandardPackage } from "./packages/StandardPackage";

function main(): void {
  // TODO: Implementar la lógica del programa principal
  console.log("=== Sistema de Gestión de Paquetes de Envío ===");

  console.log("Iniciando el sistema...");

  // Ejemplo de uso esperado (descomenta y adapta cuando tengas las clases implementadas):
  try {
    console.log("Creando fachada de procesamiento de paquetes...");
    const facade = new PackageProcessingFacade();

    console.log("Creando paquete de ejemplo...");

    const standardPackage = new StandardPackage(
      "PKG-2024-001",
      10,
      { width: 50, height: 50, depth: 50 },
      "Juan Pérez",
      "Calle Falsa 123, Ciudad"
    );

    console.log("Creando paquete de ejemplo...");
    // Procesar un paquete estándar
    const result = facade.processPackage(standardPackage);

    console.log(result.getReport());
  } catch (error) {
    console.log(handleError(error));
  }
}

function handleError(error: unknown): string {
  try {
    if (error instanceof ValidationException) {
      return `Error de validación: ${error.message}`;
    } else if (error instanceof Error) {
      return `Error inesperado: ${error.message}`;
    } else {
      return "Ocurrió un error desconocido.";
    }
  } catch (e) {
    return "Ocurrió un error al manejar otro error.";
  }
}

main();
