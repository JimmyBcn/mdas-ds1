const path = require('path');
const stage = path.basename(__dirname);
function loadProcessOrders() {
  switch (stage) {
    case 'clean-code':
      return require('../clean-code/bookly-legacy').processOrders;
    case 'oop':
      return require('../oop/bookly-clean-code').processOrders;
    case 'solid':
      return require('../solid/bookly-oop').processOrders;
    case 'patterns':
      return require('../patterns/bookly-solid').processOrders;
    case 'summary':
      return require('./bookly-patterns').processOrders;
    default:
      throw new Error('Etapa desconocida');
  }
}
const processOrders = loadProcessOrders();

describe('Bookly - invariancia de comportamiento', () => {
  test('Devuelve 5 pedidos con totales calculados', () => {
    const results = processOrders();
    expect(results.length).toBe(5);
    for (const r of results) {
      expect(r).toHaveProperty('id');
      expect(r).toHaveProperty('subtotal');
      expect(r).toHaveProperty('tax');
      expect(r).toHaveProperty('shipping');
      expect(r).toHaveProperty('discount');
      expect(r).toHaveProperty('total');
      expect(r).toHaveProperty('type');
      expect(typeof r.total).toBe('number');
    }
  });
  test('Informe con formato y dos decimales', () => {
    const spy = jest.spyOn(console, 'log').mockImplementation(() => {});
    processOrders();
    const lines = spy.mock.calls.map((c) => c.join(''));
    expect(lines[0]).toBe('=== BOOKLY REPORT ===');
    expect(lines[1]).toBe('Total pedidos: 5');
    expect(lines[2]).toBe('---');
    for (let i = 3; i < 8; i++) {
      expect(lines[i]).toMatch(/Total: €\d+\.\d{2}$/);
    }
    expect(lines[8]).toBe('---');
    expect(lines[9]).toMatch(/^Ingresos totales: €\d+\.\d{2}$/);
    expect(lines[10]).toMatch(/^Descuentos totales: €\d+\.\d{2}$/);
    expect(lines[11]).toMatch(/^Impuestos totales: €\d+\.\d{2}$/);
    expect(lines[12]).toBe('=====================');
    spy.mockRestore();
  });
  test('Totales específicos mantienen valores esperados', () => {
    const results = processOrders();
    const byId = (id) => results.find((r) => r.id === id);
    expect(byId(1).total.toFixed(2)).toBe('36.00');
    expect(byId(2).total.toFixed(2)).toBe('40.50');
    expect(byId(3).total.toFixed(2)).toBe('46.52');
    expect(byId(4).total.toFixed(2)).toBe('46.10');
    expect(byId(5).total.toFixed(2)).toBe('94.00');
  });
});
export {};
