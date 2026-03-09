import { ValidationException } from "../exceptions/ValidationException";
import { BasePackage, Size } from "./IPackage";

/**
 * Paquete terrestre nacional estándar.
 *
 * Reglas específicas:
 * - Máximo 25 kg
 * - Dimensiones máximas: 100 x 100 x 100 cm
 */
class StandardPackage extends BasePackage {
  constructor(
    ref: string,
    weigth: number,
    size: Size,
    senderName: string,
    destination: string
  ) {
    super(ref, "StandardPackage", weigth, size, senderName, destination);
    this.validate();
  }

  validate(): void {
    // correr validaciones comunes
    this.validateBase();

    if (this.weigth > 25) {
      throw new ValidationException("El peso del paquete excede el límite de 25 kg.");
    }

    if (
      this.size.width > 100 ||
      this.size.height > 100 ||
      this.size.depth > 100
    ) {
      throw new ValidationException(
        "Las dimensiones del paquete estándar exceden el límite de 100 x 100 x 100 cm."
      );
    }
  }
}

export { StandardPackage };