import { ValidationException } from "../exceptions/ValidationException";

// simple alias for dimensions
export type Size = { width: number; height: number; depth: number };

/**
 * Contract that every package must fulfill.
 */
export interface IPackage {
  ref: string;
  type: string;
  weigth: number;
  size: Size;
  senderName: string;
  destination: string;

  getTrackingCode(): string;
}

/**
 * Base class providing common behavior and validations shared across
 * all package variants. Subclasses should call `validateBase()` as part of
 * their own validation routine.
 */
export abstract class BasePackage implements IPackage {
  ref: string;
  type: string;
  weigth: number;
  size: Size;
  senderName: string;
  destination: string;

  constructor(
    ref: string,
    type: string,
    weigth: number,
    size: Size,
    senderName: string,
    destination: string
  ) {
    this.ref = ref;
    this.type = type;
    this.weigth = weigth;
    this.size = size;
    this.senderName = senderName;
    this.destination = destination;
  }

  getTrackingCode(): string {
    // Simple example of a tracking code generator that could be overridden
    return `TRACK-${this.ref}`;
  }

  /**
   * Run the base/common validation rules that apply to every package.
   * Subclasses should invoke this method from their own validation logic.
   */
  protected validateBase(): void {
    if (!this.ref || this.ref.trim().length === 0) {
      throw new ValidationException("El código de referencia no puede estar vacío.");
    }
    if (this.weigth <= 0) {
      throw new ValidationException("El peso debe ser un número positivo.");
    }
    if (
      this.size.width <= 0 ||
      this.size.height <= 0 ||
      this.size.depth <= 0
    ) {
      throw new ValidationException(
        "Todas las dimensiones deben ser números positivos."
      );
    }
  }
}
