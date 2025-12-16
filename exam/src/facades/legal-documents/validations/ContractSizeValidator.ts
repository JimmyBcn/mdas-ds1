export class ContractSizeValidator {
  validateSize(contract: any): boolean {
    // Lógica de validación del tamaño del contrato
    if (contract.size > 3000) {
      return false;
    }
    return true;
  }
}
