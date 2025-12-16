import { DocumentValidator } from "./DocumentValidator";

export class ContractValidator extends DocumentValidator {
  constructor() {
    super(3, [".pdf"], ["author", "version"]);
  }
}
