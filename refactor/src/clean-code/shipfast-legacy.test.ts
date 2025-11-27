import { processShipments } from "./shipfast-legacy";

describe("ShipFast - Legacy (Clean Code Exercise)", () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, "log").mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  describe("processShipments - High Level Functionality", () => {
    it("should process all 5 shipments and return results", () => {
      const results = processShipments();

      expect(results).toBeDefined();
      expect(results.length).toBe(5);
    });

    it("should return results with correct structure", () => {
      const results = processShipments();

      results.forEach((result) => {
        expect(result).toHaveProperty("id");
        expect(result).toHaveProperty("price");
        expect(result).toHaveProperty("discount");
        expect(result).toHaveProperty("final");
        expect(result).toHaveProperty("type");
      });
    });

    it("should calculate correct prices for shipment #1 (Standard, Premium, 5 orders)", () => {
      const results = processShipments();
      const shipment1 = results.find((r) => r.id === 1);

      expect(shipment1).toBeDefined();
      expect(shipment1!.type).toBe("std");
      // Base: 5 + 2.5*2 + 150*0.01 = 5 + 5 + 1.5 = 11.5
      expect(shipment1!.price).toBeCloseTo(11.5, 2);
      // Premium customer with 5 orders: 15% discount
      expect(shipment1!.discount).toBeCloseTo(1.725, 2);
      expect(shipment1!.final).toBeCloseTo(9.775, 2);
    });

    it("should calculate correct prices for shipment #2 (Express, Regular, 2 orders)", () => {
      const results = processShipments();
      const shipment2 = results.find((r) => r.id === 2);

      expect(shipment2).toBeDefined();
      expect(shipment2!.type).toBe("exp");
      // Base: 10 + 1.2*3 + 300*0.02 = 10 + 3.6 + 6 = 19.6
      // Distance > 200: +20
      expect(shipment2!.price).toBeCloseTo(39.6, 2);
      // Regular customer with 2 orders: no discount
      expect(shipment2!.discount).toBeCloseTo(0, 2);
      expect(shipment2!.final).toBeCloseTo(39.6, 2);
    });

    it("should calculate correct prices for shipment #3 (Standard, Premium, 12 orders)", () => {
      const results = processShipments();
      const shipment3 = results.find((r) => r.id === 3);

      expect(shipment3).toBeDefined();
      expect(shipment3!.type).toBe("std");
      // Base: 5 + 5.0*2 + 50*0.01 = 5 + 10 + 0.5 = 15.5
      // Weight = 5, not > 5, so no heavy surcharge
      expect(shipment3!.price).toBeCloseTo(15.5, 2);
      // Premium customer with 12 orders: 20% discount
      expect(shipment3!.discount).toBeCloseTo(3.1, 2);
      expect(shipment3!.final).toBeCloseTo(12.4, 2);
    });

    it("should calculate correct prices for shipment #4 (Same Day, Regular, 1 order)", () => {
      const results = processShipments();
      const shipment4 = results.find((r) => r.id === 4);

      expect(shipment4).toBeDefined();
      expect(shipment4!.type).toBe("sme");
      // Base: 3 + 0.8*1.5 + 500*0.005 = 3 + 1.2 + 2.5 = 6.7
      expect(shipment4!.price).toBeCloseTo(6.7, 2);
      // Regular customer with 1 order: no discount
      expect(shipment4!.discount).toBeCloseTo(0, 2);
      expect(shipment4!.final).toBeCloseTo(6.7, 2);
    });

    it("should calculate correct prices for shipment #5 (Express, Premium, 8 orders)", () => {
      const results = processShipments();
      const shipment5 = results.find((r) => r.id === 5);

      expect(shipment5).toBeDefined();
      expect(shipment5!.type).toBe("exp");
      // Base: 10 + 3.0*3 + 200*0.02 = 10 + 9 + 4 = 23
      // Distance = 200, not > 200, so no long distance surcharge
      expect(shipment5!.price).toBeCloseTo(23, 2);
      // Premium customer with 8 orders: 15% discount
      expect(shipment5!.discount).toBeCloseTo(3.45, 2);
      expect(shipment5!.final).toBeCloseTo(19.55, 2);
    });

    it("should calculate correct total revenue", () => {
      const results = processShipments();
      const totalRevenue = results.reduce((sum, r) => sum + r.final, 0);

      // 9.775 + 39.6 + 12.4 + 6.7 + 19.55 = 88.025
      expect(totalRevenue).toBeCloseTo(88.025, 2);
    });

    it("should calculate correct total discounts", () => {
      const results = processShipments();
      const totalDiscounts = results.reduce((sum, r) => sum + r.discount, 0);

      // 1.725 + 0 + 3.1 + 0 + 3.45 = 8.275
      expect(totalDiscounts).toBeCloseTo(8.275, 2);
    });

    it("should print report to console", () => {
      processShipments();

      expect(consoleSpy).toHaveBeenCalled();
      const calls = consoleSpy.mock.calls.map((call) => call[0]);
      const output = calls.join("\n");

      expect(output).toContain("SHIPFAST REPORT");
      expect(output).toContain("Total shipments: 5");
      expect(output).toContain("Total Revenue: $88.02");
      expect(output).toContain("Total Discounts: $8.28");
    });

    it("should handle premium customers with different order counts correctly", () => {
      const results = processShipments();

      // Shipment 1: 5 orders -> 15% discount
      const shipment1 = results.find((r) => r.id === 1);
      const discount1Rate = shipment1!.discount / shipment1!.price;
      expect(discount1Rate).toBeCloseTo(0.15, 2);

      // Shipment 3: 12 orders -> 20% discount
      const shipment3 = results.find((r) => r.id === 3);
      const discount3Rate = shipment3!.discount / shipment3!.price;
      expect(discount3Rate).toBeCloseTo(0.2, 2);

      // Shipment 5: 8 orders -> 15% discount
      const shipment5 = results.find((r) => r.id === 5);
      const discount5Rate = shipment5!.discount / shipment5!.price;
      expect(discount5Rate).toBeCloseTo(0.15, 2);
    });

    it("should handle regular customers with no discount for low order counts", () => {
      const results = processShipments();

      // Shipment 2: 2 orders -> 0% discount
      const shipment2 = results.find((r) => r.id === 2);
      expect(shipment2!.discount).toBe(0);

      // Shipment 4: 1 order -> 0% discount
      const shipment4 = results.find((r) => r.id === 4);
      expect(shipment4!.discount).toBe(0);
    });

    it("should apply express surcharges correctly", () => {
      const results = processShipments();

      // Shipment 2: Express with distance 300 (> 200) -> should have long distance surcharge
      const shipment2 = results.find((r) => r.id === 2);
      expect(shipment2!.price).toBeGreaterThan(19.6); // Base without surcharge
      expect(shipment2!.price).toBeCloseTo(39.6, 2); // With +20 surcharge

      // Shipment 5: Express with distance 200 (not > 200) -> no long distance surcharge
      const shipment5 = results.find((r) => r.id === 5);
      expect(shipment5!.price).toBeCloseTo(23, 2); // No surcharge
    });

    it("should ensure final price is always price minus discount", () => {
      const results = processShipments();

      results.forEach((result) => {
        const expectedFinal = result.price - result.discount;
        expect(result.final).toBeCloseTo(expectedFinal, 2);
      });
    });

    it("should process shipments in order by ID", () => {
      const results = processShipments();

      for (let i = 0; i < results.length; i++) {
        expect(results[i]!.id).toBe(i + 1);
      }
    });
  });
});
