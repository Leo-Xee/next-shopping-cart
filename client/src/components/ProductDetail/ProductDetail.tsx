import { useRouter } from "next/router";
import Image from "next/image";

import { filterPrice } from "@/shared/utils/filter";
import * as S from "./style";
import Button from "../common/Button";
import { usePostCart } from "@/hooks/queries/cart";
import useSnackBar from "@/hooks/useSnackBar";
import SnackBar from "../common/SnackBar";
import debounce from "@/shared/utils/debounce";
import { useGetProduct } from "@/hooks/queries/product";

function ProductDetail() {
  const router = useRouter();
  const { productId } = router.query;
  const { isShowing, setIsShowing } = useSnackBar(1.5);

  const { data: product } = useGetProduct(String(productId));
  const postCart = usePostCart();

  const debounceAddCart = debounce(() => {
    if (product) {
      postCart.mutate(product);
      setIsShowing(true);
    }
  }, 0.3);

  const addCartHandler = () => {
    debounceAddCart();
  };

  return (
    <div>
      {product && (
        <S.Container>
          <Image src={product.imageUrl} alt={product.name} width="500px" height="500px" />
          <S.Name>{product.name}</S.Name>
          <S.PriceContainer>
            <span>금액</span>
            <span>{filterPrice(product.price)}원</span>
          </S.PriceContainer>
          <Button
            buttonName="장바구니"
            colorType="brown"
            size="full"
            onClick={() => addCartHandler()}
          />
        </S.Container>
      )}
      {isShowing && <SnackBar message="상품이 장바구니에 추가되었습니다." duration={1.5} />}
    </div>
  );
}

export default ProductDetail;
