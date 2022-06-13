import { MouseEvent } from "react";
import { BsCart4 } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";

import { Product } from "@/@types/api";
import * as S from "./style";
import { filterName, filterPrice } from "@/shared/utils/filter";
import useCartMutation from "@/hooks/apis/useCartMutation";
import SnackBar from "@/components/common/SnackBar";
import useSnackBar from "@/hooks/useSnackBar";

type ProductItemProps = {
  data: Product;
};

function ProductItem({ data }: ProductItemProps) {
  const { isShowing, setIsShowing } = useSnackBar(1.5);
  const { addCart } = useCartMutation();

  const addCartHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addCart(data);
    setIsShowing(true);
  };

  return (
    <li>
      {isShowing && <SnackBar message="상품이 장바구니에 추가되었습니다." duration={1.5} />}
      <Link href={`/products/${data.id}`}>
        <a>
          <S.Container>
            <Image src={data.imageUrl} alt={data.name} width="282px" height="282px" />
            <S.InfoContainer>
              <S.Info>
                <S.Name className="name">{filterName(data.name)}</S.Name>
                <S.Price>{filterPrice(data.price)}원</S.Price>
              </S.Info>
              <S.CartButton
                type="button"
                aria-label={`${data.name} 장바구니에 담기`}
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
