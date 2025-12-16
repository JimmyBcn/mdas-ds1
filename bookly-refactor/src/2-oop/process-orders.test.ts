const path = require('path');
const stage = path.basename(__dirname);
function loadProcessOrders() {
  switch (stage) {
    case '0-legacy':
      return require('../0-legacy/bookly-legacy').processOrders;
    case '1-clean-code':
      return require('../1-clean-code/bookly-clean-code').processOrders;
    case '2-oop':
      return require('../2-oop/bookly-oop').processOrders;
    case '3-solid':
      return require('../3-solid/bookly-solid').processOrders;
    case '4-patterns':
      return require('../4-patterns/bookly-patterns').processOrders;
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
    expect(lines[0]).toBe('=== BOOKLY REPORT === | Total pedidos: 5');
    for (let i = 1; i <= 5; i++) {
      expect(lines[i]).toMatch(/Total: €\d+\.\d{2}$/);
    }
    expect(lines[6]).toMatch(
      /^Ingresos totales: €\d+\.\d{2} \| Descuentos totales: €\d+\.\d{2} \| Impuestos totales: €\d+\.\d{2}$/
    );
    expect(lines[7]).toBe('=====================');
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
