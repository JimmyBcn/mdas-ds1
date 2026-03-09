import { ValidationException } from "../exceptions/ValidationException";
import { BasePackage, Size } from "./IPackage";

/**
 * Paquete enviado fuera del país.
 * Reglas específicas:
 * - Máximo 30 kg
 * - Dimensiones máximas: 120 x 120 x 120 cm
 * - Requiere `customsDeclaration` y `destinationCountry`
 */
class InternationalPackage extends BasePackage {
  customsDeclaration: string;
  destinationCountry: string;

  constructor(
    ref: string,
    weigth: number,
    size: Size,
    senderName: string,
    destination: string,
    customsDeclaration: string,
    destinationCountry: string
  ) {
    super(ref, "InternationalPackage", weigth, size, senderName, destination);
    this.customsDeclaration = customsDeclaration;
    this.destinationCountry = destinationCountry;
    this.validate();
  }

  validate(): void {
    this.validateBase();

    if (this.weigth > 30) {
      throw new ValidationException(
        "El peso del paquete excede el límite de 30 kg."
      );
    }
    if (
      this.size.width > 120 ||
      this.size.height > 120 ||
      this.size.depth > 120
    ) {
      throw new ValidationException(
        "Las dimensiones del paquete internacional exceden el límite de 120 x 120 x 120 cm."
      );
    }

    if (!this.customsDeclaration) {
      throw new ValidationException(
        "El campo customsDeclaration es obligatorio para paquetes internacionales."
      );
    }
    if (!this.destinationCountry) {
      throw new ValidationException(
        "El campo destinationCountry es obligatorio para paquetes internacionales."
      );
    }
  }
}

export { InternationalPackage };