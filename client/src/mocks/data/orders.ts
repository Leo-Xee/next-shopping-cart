import { Order, OrderItemType } from "@/@types/api";

export type PostOrderBody = {
  orderDetails: OrderItemType[];
};

export const orders: Order[] = [
  {
    id: 1,
    orderDetails: [
      {
        id: 14,
        name: "냉동 딸기 1kg",
        price: 5310,
        quantity: 2,
        imageUrl:
          "https://cdn-mart.baemin.com/sellergoods/main/eb8ea1ed-7988-4b31-a352-8d27773812de.jpg",
      },
    ],
  },
  {
    id: 2,
    orderDetails: [
      {
        id: 16,
        name: "페루산 청포도 1kg내외",
        price: 12500,
        quantity: 3,
        imageUrl:
          "https://cdn-mart.baemin.com/sellergoods/main/c152e5c3-95e3-4fb4-ba67-8845e2ba0d60.jpg",
      },
    ],
  },
];
