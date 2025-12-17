import { Documento } from "../models/Document/Documento";

export interface IValidationStrategy {
    Validate(Document: Documento): boolean;
}