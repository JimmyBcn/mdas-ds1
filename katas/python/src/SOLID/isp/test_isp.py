"""
Tests para el principio ISP (Interface Segregation Principle)
Valida tanto las implementaciones malas como las buenas
"""

import pytest
from isp_bad import Printer as PrinterBad, Scanner as ScannerBad
from isp_good import SimplePrinter, SimpleScanner, AdvancedPrinter


class TestISPBad:
    """Tests para la implementación que viola ISP"""

    def test_printer_can_print(self):
        """Verifica que la impresora puede imprimir"""
        printer = PrinterBad()
        result = printer.print_document("documento.pdf")
        assert result == "Imprimiendo documento: documento.pdf"

    def test_printer_scan_violation(self):
        """Demuestra la violación de ISP: Printer forzada a implementar scan()"""
        printer = PrinterBad()
        with pytest.raises(NotImplementedError) as exc_info:
            printer.scan()
        assert "¡Esta impresora no puede escanear!" in str(exc_info.value)

    def test_scanner_can_scan(self):
        """Verifica que el escáner puede escanear"""
        scanner = ScannerBad()
        result = scanner.scan()
        assert result == "Escaneando documento..."

    def test_scanner_print_violation(self):
        """Demuestra la violación de ISP: Scanner forzado a implementar print()"""
        scanner = ScannerBad()
        with pytest.raises(NotImplementedError) as exc_info:
            scanner.print_document("documento.pdf")
        assert "¡Este escáner no puede imprimir!" in str(exc_info.value)


class TestISPGood:
    """Tests para la implementación que cumple con ISP"""

    def test_simple_printer_can_print(self):
        """Verifica que la impresora simple puede imprimir"""
        printer = SimplePrinter()
        result = printer.print_document("documento.pdf")
        assert result == "Imprimiendo documento: documento.pdf"

    def test_simple_scanner_can_scan(self):
        """Verifica que el escáner simple puede escanear"""
        scanner = SimpleScanner()
        result = scanner.scan()
        assert result == "Escaneando documento..."

    def test_advanced_printer_can_print(self):
        """Verifica que la impresora avanzada puede imprimir"""
        printer = AdvancedPrinter()
        result = printer.print_document("documento.pdf")
        assert result == "Imprimiendo documento: documento.pdf"

    def test_advanced_printer_can_scan(self):
        """Verifica que la impresora avanzada puede escanear"""
        printer = AdvancedPrinter()
        result = printer.scan()
        assert result == "Escaneando documento..."

    def test_isp_compliance(self):
        """Verifica que las clases solo implementan las interfaces que necesitan"""
        from isp_good import Printable, Scannable

        printer = SimplePrinter()
        scanner = SimpleScanner()
        advanced = AdvancedPrinter()

        # SimplePrinter solo implementa Printable
        assert isinstance(printer, Printable)
        assert not isinstance(printer, Scannable)

        # SimpleScanner solo implementa Scannable
        assert isinstance(scanner, Scannable)
        assert not isinstance(scanner, Printable)

        # AdvancedPrinter implementa ambas
        assert isinstance(advanced, Printable)
        assert isinstance(advanced, Scannable)


if __name__ == "__main__":
    pytest.main([__file__, "-v"])
