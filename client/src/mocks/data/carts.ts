import { Cart, Product } from "@/@types/api";

export type PostRequestBody = {
  product: Product;
};

export type PatchSelectedRequestBody = {
  selected: boolean;
};

export type PatchQuantityRequestBody = {
  quantity: number;
};

export const carts: Cart[] = [
  {
    id: 1,
    product: {
      id: 1,
      name: "냉면용기(대)",
      price: 83700,
      imageUrl: "https://cdn-mart.baemin.com/goods/2/1556008840639m0.jpg",
      quantity: 3,
      selected: false,
    },
  },
  {
    id: 2,
    product: {
      id: 2,
      name: "생새우살 (71/90) 500g 4개",
      price: 29000,
      imageUrl:
        "https://cdn-mart.baemin.com/sellergoods/main/6b95c66a-c13d-4ccd-9df5-b1af1428a225.jpg",
      quantity: 1,
      selected: true,
    },
  },
];
