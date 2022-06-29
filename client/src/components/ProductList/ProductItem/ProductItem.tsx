import { MouseEvent } from "react";
import { BsCart4 } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";

import { Product } from "@/@types/api";
import * as S from "./style";
import { filterName, filterPrice } from "@/shared/utils/filter";
import { usePostCart } from "@/hooks/queries/cart";
import SnackBar from "@/components/common/SnackBar";
import useSnackBar from "@/hooks/useSnackBar";
import debounce from "@/shared/utils/debounce";

type ProductItemProps = {
  productItem: Product;
};

function ProductItem({ productItem }: ProductItemProps) {
  const { isShowing, setIsShowing } = useSnackBar(1.5);
  const postCart = usePostCart();

  const debounceAddCart = debounce(() => {
    postCart.mutate(productItem);
    setIsShowing(true);
  }, 0.3);

  const addCartHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    debounceAddCart();
  };

  return (
    <li>
      {isShowing && <SnackBar message="상품이 장바구니에 추가되었습니다." duration={1.5} />}
      <Link href={`/products/${productItem.id}`}>
        <a>
          <S.Container>
            <Image src={productItem.imageUrl} alt={productItem.name} width="282px" height="282px" />
            <S.InfoContainer>
              <S.Info>
                <S.Name className="name">{filterName(productItem.name)}</S.Name>
                <S.Price>{filterPrice(productItem.price)}원</S.Price>
              </S.Info>
              <S.CartButton
                type="button"
                aria-label={`${productItem.name} 장바구니에 담기`}
                onClick={addCartHandler}
              >
                <BsCart4 size={30} />
              </S.CartButton>
            </S.InfoContainer>
          </S.Container>
        </a>
      </Link>
    </li>
  );
}

export default ProductItem;
