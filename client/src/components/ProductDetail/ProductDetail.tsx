import { useRouter } from "next/router";
import { useQuery } from "react-query";
import Image from "next/image";

import productService from "@/services/productService";
import { filterPrice } from "@/shared/utils/filter";
import * as S from "./style";
import Spinner from "../common/Spinner";
import ErrorBanner from "../common/ErrorBanner";
import cartService from "@/services/cartService";

function ProductDetail() {
  const router = useRouter();
  const { productId } = router.query;

  const { isLoading, isError, data } = useQuery(["/product", productId], () =>
    productService.getProduct(String(productId)),
  );

  const addCartHandler = () => {
    if (!data) return;
    cartService.addCart(data);
  };

  return (
    <div>
      {isLoading ? (
        <Spinner message="로딩 중..." />
      ) : isError ? (
        <ErrorBanner />
      ) : (
        data && (
          <S.Container>
            <Image src={data.imageUrl} alt={data.name} width="570px" height="570px" />
            <S.Name>{data.name}</S.Name>
            <S.PriceContainer>
              <span>금액</span>
              <span>{filterPrice(data.price)}원</span>
            </S.PriceContainer>
            <S.CartButton type="button" onClick={addCartHandler}>
              장바구니
            </S.CartButton>
          </S.Container>
        )
      )}
    </div>
  );
}

export default ProductDetail;
