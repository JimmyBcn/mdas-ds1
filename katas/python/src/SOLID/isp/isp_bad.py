# Violación del ISP: Interfaz ancha fuerza a las clases a implementar métodos que no usan
# ❌ Problema: Todos los dispositivos deben implementar todos los métodos, incluso si no los necesitan

from abc import ABC, abstractmethod


class Device(ABC):
    @abstractmethod
    def print_document(self, document: str) -> str:
        pass

    @abstractmethod
    def scan(self) -> str:
        pass


# ❌ Impresora simple debe implementar scan() aunque no lo necesite
class Printer(Device):
    def print_document(self, document: str) -> str:
        return f"Imprimiendo documento: {document}"

    # ❌ Forzada a implementar scan() lanzando error
    def scan(self) -> str:
        raise NotImplementedError("¡Esta impresora no puede escanear!")


# ❌ Escáner simple debe implementar print() aunque no lo necesite
class Scanner(Device):
    def scan(self) -> str:
        return "Escaneando documento..."

    # ❌ Forzada a implementar print() lanzando error
    def print_document(self, document: str) -> str:
        raise NotImplementedError("¡Este escáner no puede imprimir!")


# Uso mostrando el problema
if __name__ == "__main__":
    printer = Printer()
    scanner = Scanner()

    print(printer.print_document("documento.pdf"))  # ✅ Funciona
    # print(printer.scan())                          # ❌ ¡Lanza error!

    print(scanner.scan())  # ✅ Funciona
    # print(scanner.print_document("documento.pdf")) # ❌ ¡Lanza error!

    # ❌ Problemas:
    # 1. Implementaciones forzadas que lanzan errores
    # 2. Clases con métodos que nunca deberían existir
    # 3. Interfaz demasiado ancha (no segregada)
    # 4. Violación de ISP
