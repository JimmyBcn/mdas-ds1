import { ValidationException } from "../exceptions/ValidationException";
import { BasePackage, Size } from "./IPackage";

/**
 * Paquete con envío urgente 24‑48h.
 * Reglas específicas:
 * - Máximo 15 kg
 * - Dimensiones máximas: 80 x 80 x 80 cm
 * - Requiere `urgencyLevel` y `deliveryTime`
 */
class ExpressPackage extends BasePackage {
  urgencyLevel: string;
  deliveryTime: string;

  constructor(
    ref: string,
    weigth: number,
    size: Size,
    senderName: string,
    destination: string,
    urgencyLevel: string,
    deliveryTime: string
  ) {
    super(ref, "ExpressPackage", weigth, size, senderName, destination);
    this.urgencyLevel = urgencyLevel;
    this.deliveryTime = deliveryTime;
    this.validate();
  }

  validate(): void {
    this.validateBase();

    if (this.weigth > 15) {
      throw new ValidationException("El peso del paquete excede el límite de 15 kg.");
    }
    if (
      this.size.width > 80 ||
      this.size.height > 80 ||
      this.size.depth > 80
    ) {
      throw new ValidationException(
        "Las dimensiones del paquete express exceden el límite de 80 x 80 x 80 cm."
      );
    }

    if (!this.urgencyLevel) {
      throw new ValidationException("El campo urgencyLevel es obligatorio para paquetes express.");
    }
    if (!this.deliveryTime) {
      throw new ValidationException("El campo deliveryTime es obligatorio para paquetes express.");
    }
  }
}

export { ExpressPackage };