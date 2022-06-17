import { RouterContext } from "next/dist/shared/lib/router-context";
import { Order } from "@/@types/api";
import { filterPrice } from "@/shared/utils/filter";
import { fireEvent, render, screen } from "@/shared/utils/test-utils";
import OrderItem from "./OrderItem";
import createMockRouter from "@/shared/utils/createMockRouter";

const order: Order = {
  id: 1,
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
};

const totalPrice = order.orderDetails[0].price * order.orderDetails[0].quantity;

const renderOrderItem = (orderItem: Order, type: "list" | "detail") => {
  const router = createMockRouter({});
  const result = render(
    <RouterContext.Provider value={router}>
      <OrderItem orderItem={orderItem} type={type} />
    </RouterContext.Provider>,
  );

  const orderNumber = result.getByText(/주문번호 : [0-9]{0,13}/);
  const name = result.getByLabelText(/상품명/);
  const price = result.getByText(
    `${filterPrice(totalPrice)} 원 / ${orderItem.orderDetails[0].quantity} 개`,
  );
  const image = result.getByRole("img", { name: `${orderItem.orderDetails[0].name}` });
  const detailButton = result.getByRole("button", { name: "상세 보기" });
  const cartButton = result.getByRole("button", { name: "장바구니" });

  return { result, router, orderNumber, name, price, image, detailButton, cartButton };
};

describe("<OrderItem />", () => {
  it("주문 정보와 버튼들을 보여준다.", () => {
    const { orderNumber, name, price, image, detailButton, cartButton } = renderOrderItem(
      order,
      "list",
    );

    expect(orderNumber).toBeInTheDocument();
    expect(name).toBeInTheDocument();
    expect(price).toBeInTheDocument();
    expect(image).toBeInTheDocument();
    expect(detailButton).toBeInTheDocument();
    expect(cartButton).toBeInTheDocument();
  });

  it("상세 보기를 클릭하면 주문상세페이지로 이동한다.", () => {
    const { router, detailButton } = renderOrderItem(order, "list");

    fireEvent.click(detailButton);

    expect(router.push).toHaveBeenCalledWith(`/orders/${order.id}`);
  });

  it("상품 정보를 클릭하면 상품상세페이지로 이동한다.", () => {
    render(<OrderItem orderItem={order} type="list" />);

    const link = screen.getByRole("link");

    expect(link).toHaveAttribute("href", `/products/${order.orderDetails[0].id}`);
  });

  it("카트 버튼을 클릭하면 상품 추가 SnackBar를 보여준다.", async () => {
    render(<OrderItem orderItem={order} type="list" />);

    const cartButton = screen.getByRole("button", { name: "장바구니" });

    fireEvent.click(cartButton);

    const snackBar = await screen.findByText(/상품이 장바구니에 추가되었습니다./);

    expect(snackBar).toBeInTheDocument();
  });
});
