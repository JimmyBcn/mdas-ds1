// @ts-nocheck
import { processOrders as patternsProcess } from '../patterns/bookly-solid';
function processOrders() {
  return patternsProcess();
}
if (require.main === module) {
  processOrders();
}
export { processOrders };
