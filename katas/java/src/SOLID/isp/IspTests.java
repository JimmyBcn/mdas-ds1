package SOLID.isp;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

/**
 * Tests para el principio de Segregación de Interfaces (ISP)
 * Valida que las interfaces sean específicas y los clientes no dependan de métodos que no usan
 */
public class IspTests {
    
    @Test
    public void testPrinter_CanPrint() {
        // Arrange
        Printer printer = new Printer();
        
        // Act
        String result = printer.print("Test document");
        
        // Assert
        assertNotNull(result, "El printer debe poder imprimir");
        assertTrue(result.contains("Printing"), "El resultado debe indicar impresión");
    }
    
    @Test
    public void testScanner_CanScan() {
        // Arrange
        Scanner scanner = new Scanner();
        
        // Act
        String result = scanner.scan();
        
        // Assert
        assertNotNull(result, "El scanner debe poder escanear");
        assertTrue(result.contains("Scanning"), "El resultado debe indicar escaneo");
    }
    
    @Test
    public void testFaxMachine_CanFax() {
        // Arrange
        FaxMachine fax = new FaxMachine();
        
        // Act
        String result = fax.fax("Test fax");
        
        // Assert
        assertNotNull(result, "La máquina de fax debe poder enviar fax");
        assertTrue(result.contains("Faxing"), "El resultado debe indicar envío de fax");
    }
    
    @Test
    public void testMultiFunctionPrinter_CanPrintScanAndFax() {
        // Arrange
        MultiFunctionPrinter mfp = new MultiFunctionPrinter();
        
        // Act
        String printResult = mfp.print("Document");
        String scanResult = mfp.scan();
        String faxResult = mfp.fax("Fax content");
        
        // Assert
        assertNotNull(printResult, "MFP debe poder imprimir");
        assertNotNull(scanResult, "MFP debe poder escanear");
        assertNotNull(faxResult, "MFP debe poder enviar fax");
    }
    
    @Test
    public void testISP_PrinterOnlyImplementsPrintable() {
        // Arrange & Act
        Printer printer = new Printer();
        
        // Assert - El printer solo implementa Printable, no necesita implementar Scannable o Faxable
        assertTrue(printer instanceof Printable, "Printer debe implementar Printable");
        assertFalse(printer instanceof Scannable, "Printer NO debe implementar Scannable");
        assertFalse(printer instanceof Faxable, "Printer NO debe implementar Faxable");
    }
    
    @Test
    public void testISP_ScannerOnlyImplementsScannable() {
        // Arrange & Act
        Scanner scanner = new Scanner();
        
        // Assert - El scanner solo implementa Scannable
        assertTrue(scanner instanceof Scannable, "Scanner debe implementar Scannable");
        assertFalse(scanner instanceof Printable, "Scanner NO debe implementar Printable");
        assertFalse(scanner instanceof Faxable, "Scanner NO debe implementar Faxable");
    }
    
    @Test
    public void testISP_MultiFunctionImplementsAllInterfaces() {
        // Arrange & Act
        MultiFunctionPrinter mfp = new MultiFunctionPrinter();
        
        // Assert - MFP implementa todas las interfaces porque las necesita todas
        assertTrue(mfp instanceof Printable, "MFP debe implementar Printable");
        assertTrue(mfp instanceof Scannable, "MFP debe implementar Scannable");
        assertTrue(mfp instanceof Faxable, "MFP debe implementar Faxable");
    }
}
