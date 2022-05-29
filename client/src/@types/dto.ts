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

export interface Cart {
  id: number;
  product: Product;
}

/*
  /orders
*/

export interface OrderDetail extends Product {
  quantity: number;
}

export interface Order {
  id: number;
  orderDetails: OrderDetail[];
}
