# Cumplimiento del ISP: Dividir interfaz ancha en interfaces más pequeñas y enfocadas
# ✅ Solución: Crear interfaces separadas para diferentes capacidades

from abc import ABC, abstractmethod


# ✅ Interfaces segregadas (separadas) para cada capacidad
class Printable(ABC):
    @abstractmethod
    def print_document(self, document: str) -> str:
        pass


class Scannable(ABC):
    @abstractmethod
    def scan(self) -> str:
        pass


# ✅ Impresora simple solo implementa lo que necesita
class SimplePrinter(Printable):
    def print_document(self, document: str) -> str:
        return f"Imprimiendo documento: {document}"
    # ✅ No necesita implementar scan()


# ✅ Escáner simple solo implementa lo que necesita
class SimpleScanner(Scannable):
    def scan(self) -> str:
        return "Escaneando documento..."
    # ✅ No necesita implementar print()


# ✅ Dispositivo multifunción implementa ambas interfaces
class AdvancedPrinter(Printable, Scannable):
    def print_document(self, document: str) -> str:
        return f"Imprimiendo documento: {document}"

    def scan(self) -> str:
        return "Escaneando documento..."


# Uso - ¡sin más implementaciones forzadas!
if __name__ == "__main__":
    simple_printer = SimplePrinter()
    simple_scanner = SimpleScanner()
    advanced_printer = AdvancedPrinter()

    print(simple_printer.print_document("documento.pdf"))  # ✅ Funciona
    # simple_printer.scan() - El método no existe (¡seguro en tiempo de compilación!)

    print(simple_scanner.scan())  # ✅ Funciona
    # simple_scanner.print_document() - El método no existe (¡seguro en tiempo de compilación!)

    print(advanced_printer.print_document("documento.pdf"))  # ✅ Funciona
    print(advanced_printer.scan())  # ✅ Funciona

    # ✅ Beneficios:
    # 1. Interfaces pequeñas y enfocadas
    # 2. Clases solo implementan lo que necesitan
    # 3. Sin métodos que lancen errores
    # 4. Cumple ISP: interfaces segregadas
