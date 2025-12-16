/**
 * Tests para el Interface Segregation Principle (ISP)
 * Valida tanto las implementaciones malas como las buenas
 */

import { Printer as PrinterBad, Scanner as ScannerBad } from "../isp-bad";
import { SimplePrinter, AdvancedPrinter, SimpleScanner } from "../isp-good";

describe("ISP - Bad Implementation", () => {
  test("should print document", () => {
    const printer = new PrinterBad();
    const result = printer.print("Document");
    expect(result).toContain("Imprimiendo");
    expect(result).toContain("Document");
  });

  test("should throw error when trying to scan from printer", () => {
    const printer = new PrinterBad();
    expect(() => printer.scan()).toThrow();
  });

  test("should scan document", () => {
    const scanner = new ScannerBad();
    const result = scanner.scan();
    expect(result).toContain("Escaneando");
  });

  test("should throw error when trying to print from scanner", () => {
    const scanner = new ScannerBad();
    expect(() => scanner.print("Document")).toThrow();
  });
});

describe("ISP - Good Implementation", () => {
  test("should print document with simple printer", () => {
    const printer = new SimplePrinter();
    const result = printer.print("Document");
    expect(result).toContain("Imprimiendo");
    expect(result).toContain("Document");
  });

  test("should print and scan with advanced printer", () => {
    const printer = new AdvancedPrinter();
    const printResult = printer.print("Document");
    const scanResult = printer.scan();

    expect(printResult).toContain("Imprimiendo");
    expect(scanResult).toContain("Escaneando");
  });

  test("should scan document with simple scanner", () => {
    const scanner = new SimpleScanner();
    const result = scanner.scan();
    expect(result).toContain("Escaneando");
  });

  test("demonstrates ISP compliance - no forced implementations", () => {
    const simplePrinter = new SimplePrinter();
    const scanner = new SimpleScanner();

    // SimplePrinter only has print method - no unused scan method
    expect(simplePrinter.print("Test")).toBeTruthy();

    // SimpleScanner only has scan method - no unused print method
    expect(scanner.scan()).toBeTruthy();
  });
});
