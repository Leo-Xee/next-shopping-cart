import { useRouter } from "next/router";
import { useQuery } from "react-query";
import Image from "next/image";

import productService from "@/services/productService";
import { filterPrice } from "@/shared/utils/filter";
import * as S from "./style";
import Button from "../common/Button";
import useCartMutation from "@/hooks/apis/useCartMutation";
import useSnackBar from "@/hooks/useSnackBar";
import SnackBar from "../common/SnackBar";

function ProductDetail() {
  const router = useRouter();
  const { productId } = router.query;
  const { isShowing, setIsShowing } = useSnackBar(1.5);

  const { data } = useQuery(["/product", productId], () =>
    productService.getProduct(String(productId)),
  );
  const { addCart } = useCartMutation();

  const addCartHandler = () => {
    if (!data) return;
    addCart(data);
    setIsShowing(true);
  };

  return (
    <div>
      {data && (
        <S.Container>
          <Image src={data.imageUrl} alt={data.name} width="500px" height="500px" />
          <S.Name>{data.name}</S.Name>
          <S.PriceContainer>
            <span>금액</span>
            <span>{filterPrice(data.price)}원</span>
          </S.PriceContainer>
          <Button buttonName="장바구니" colorType="brown" size="full" onClick={addCartHandler} />
        </S.Container>
      )}
      {isShowing && <SnackBar message="상품이 장바구니에 추가되었습니다." duration={1.5} />}
    </div>
  );
}

export default ProductDetail;
