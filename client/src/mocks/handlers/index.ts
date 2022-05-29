import cartHandler from "./cart";
import productsHandlers from "./product";

const handlers = [...Object.values(productsHandlers), ...Object.values(cartHandler)];

export default handlers;
