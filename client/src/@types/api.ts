/*
  /products
*/

export interface Product {
  id: number;
  price: number;
  name: string;
  imageUrl: string;
}

/*
  /carts
*/
export interface CartItem extends Product {
  quantity: number;
  selected: boolean;
}

export interface Cart {
  id: number;
  product: Product;
}

/*
  /orders
*/

export interface OrderItem extends Product {
  quantity: number;
}

export interface Order {
  id: number;
  orderDetails: OrderItem[];
}
