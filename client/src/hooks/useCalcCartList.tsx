import { Cart } from "@/@types/api";

function useCalcCartList(cartList: Cart[]) {
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

  const isSelectedAll = cartList.every((cart) => cart.product.selected === true);

  return {
    totalPrice,
    totalCount,
    isSelectedAll,
  };
}

export default useCalcCartList;
