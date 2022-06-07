import { Order, OrderItemType } from "@/@types/api";

export type PostOrderBody = {
  orderDetails: OrderItemType[];
};

export const orders: Order[] = [
  {
    id: 1653961114577,
    orderDetails: [
      {
        id: 1,
        name: "[리뉴얼]젓가락(종이)-정성을 담아",
        price: 21800,
        imageUrl:
          "https://cdn-mart.baemin.com/sellergoods/main/5297837f-5ecd-4945-be2f-4a75854cd06e.jpg",
        quantity: 5,
      },
      {
        id: 2,
        name: "젓가락(종이)-웬만해선 이 맛을 막을 수 없다",
        price: 21800,
        imageUrl:
          "https://cdn-mart.baemin.com/sellergoods/main/1b6e926b-52a3-4a92-8db5-fddaccdb2583.jpg",
        quantity: 3,
      },
    ],
  },
  {
    id: 1653961414177,
    orderDetails: [
      {
        id: 7,
        name: "식자재왕 김말이튀김 야채맛 1kg",
        price: 6580,
        imageUrl: "https://cdn-mart.baemin.com/sellergoods/bulk/20211210-155432/9416-main-01.jpg",
        quantity: 4,
      },
      {
        id: 8,
        name: "삼양 야채튀김 (60g*50±1/박스) 3kg",
        price: 24610,
        imageUrl:
          "https://cdn-mart.baemin.com/sellergoods/main/8916edff-9fa9-4538-95c3-13d463f58a86.jpg",
        quantity: 2,
      },
      {
        id: 9,
        name: "미미사 분모자 (17mm) 250G",
        price: 1440,
        imageUrl:
          "https://cdn-mart.baemin.com/sellergoods/main/6ae4c431-6988-41ab-8894-7df7ee7b7cb3.jpg",
        quantity: 1,
      },
    ],
  },
];
