<?php

use PHPUnit\Framework\TestCase;

require_once 'isp-good.php';

/**
 * Tests para el principio de Segregación de Interfaces (ISP)
 * Valida que las interfaces sean específicas y los clientes no dependan de métodos que no usan
 */
class IspTests extends TestCase
{
    public function testPrinter_CanPrint()
    {
        // Arrange
        $printer = new Printer();
        
        // Act
        $result = $printer->print("Test document");
        
        // Assert
        $this->assertNotNull($result, 'El printer debe poder imprimir');
        $this->assertStringContainsString("Printing", $result, 'El resultado debe indicar impresión');
    }
    
    public function testScanner_CanScan()
    {
        // Arrange
        $scanner = new Scanner();
        
        // Act
        $result = $scanner->scan();
        
        // Assert
        $this->assertNotNull($result, 'El scanner debe poder escanear');
        $this->assertStringContainsString("Scanning", $result, 'El resultado debe indicar escaneo');
    }
    
    public function testFaxMachine_CanFax()
    {
        // Arrange
        $fax = new FaxMachine();
        
        // Act
        $result = $fax->fax("Test fax");
        
        // Assert
        $this->assertNotNull($result, 'La máquina de fax debe poder enviar fax');
        $this->assertStringContainsString("Faxing", $result, 'El resultado debe indicar envío de fax');
    }
    
    public function testMultiFunctionPrinter_CanPrintScanAndFax()
    {
        // Arrange
        $mfp = new MultiFunctionPrinter();
        
        // Act
        $printResult = $mfp->print("Document");
        $scanResult = $mfp->scan();
        $faxResult = $mfp->fax("Fax content");
        
        // Assert
        $this->assertNotNull($printResult, 'MFP debe poder imprimir');
        $this->assertNotNull($scanResult, 'MFP debe poder escanear');
        $this->assertNotNull($faxResult, 'MFP debe poder enviar fax');
    }
    
    public function testISP_PrinterOnlyImplementsPrintable()
    {
        // Arrange & Act
        $printer = new Printer();
        
        // Assert - El printer solo implementa Printable
        $this->assertInstanceOf(Printable::class, $printer, 'Printer debe implementar Printable');
        $this->assertNotInstanceOf(Scannable::class, $printer, 'Printer NO debe implementar Scannable');
        $this->assertNotInstanceOf(Faxable::class, $printer, 'Printer NO debe implementar Faxable');
    }
    
    public function testISP_ScannerOnlyImplementsScannable()
    {
        // Arrange & Act
        $scanner = new Scanner();
        
        // Assert - El scanner solo implementa Scannable
        $this->assertInstanceOf(Scannable::class, $scanner, 'Scanner debe implementar Scannable');
        $this->assertNotInstanceOf(Printable::class, $scanner, 'Scanner NO debe implementar Printable');
        $this->assertNotInstanceOf(Faxable::class, $scanner, 'Scanner NO debe implementar Faxable');
    }
    
    public function testISP_MultiFunctionImplementsAllInterfaces()
    {
        // Arrange & Act
        $mfp = new MultiFunctionPrinter();
        
        // Assert - MFP implementa todas las interfaces porque las necesita todas
        $this->assertInstanceOf(Printable::class, $mfp, 'MFP debe implementar Printable');
        $this->assertInstanceOf(Scannable::class, $mfp, 'MFP debe implementar Scannable');
        $this->assertInstanceOf(Faxable::class, $mfp, 'MFP debe implementar Faxable');
    }
}
