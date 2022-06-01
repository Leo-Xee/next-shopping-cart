import { BsCart4 } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { Product } from "@/@types/api";
import * as S from "./style";
import { filterName, filterPrice } from "@/shared/utils/filter";
import cartService from "@/services/cartService";

type ProductItemProps = {
  data: Product;
};

function ProductItem({ data }: ProductItemProps) {
  const addCartHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!data) return;
    cartService.addCart(data);
  };

  return (
    <Link href={`/products/${data.id}`}>
      <a>
        <S.Container>
          <Image src={data.imageUrl} alt={data.name} width="282px" height="282px" />
          <S.InfoContainer>
            <S.Info>
              <S.Name>{filterName(data.name)}</S.Name>
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
  );
}

export default ProductItem;
