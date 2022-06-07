import cartHandler from "./cart";
import orderHandler from "./order";
import productsHandlers from "./product";

const handlers = [
  ...Object.values(productsHandlers),
  ...Object.values(cartHandler),
  ...Object.values(orderHandler),
];

export default handlers;
