import { Cart, OrderItemType } from "@/@types/api";

function useCalcCartList(cartList: Cart[]) {
  const selectedCartIdList = cartList
    .filter((cart) => cart.product.selected)
    .map((cart) => cart.id);

  const purchaseList: OrderItemType[] = cartList.map((cart) => {
    return {
      id: cart.product.id,
      name: cart.product.name,
      price: cart.product.price,
      quantity: cart.product.id,
      imageUrl: cart.product.imageUrl,
    };
  });

  const totalPrice = cartList.reduce((prev, cur) => {
    if (cur.product.selected) {
      return prev + cur.product.price * cur.product.quantity;
    }
    return prev;
  }, 0);

  const totalCount = cartList.reduce((prev, cur) => {
    if (cur.product.selected) {
      return prev + cur.product.quantity;
    }
    return prev;
  }, 0);

  const isEmpty = () => cartList.length === 0;

  const isSelectedAll = () => {
    if (!isEmpty()) {
      return cartList.every((cart) => cart.product.selected);
    }
    return false;
  };

  return {
    totalPrice,
    totalCount,
    purchaseList,
    isEmpty: isEmpty(),
    isSelectedAll: isSelectedAll(),
    selectedCartIdList,
  };
}

export default useCalcCartList;
