import { BsCart4 } from "react-icons/bs";
import Image from "next/image";

import { Product } from "@/@types/dto";
import * as S from "./style";
import { filterName, filterPrice } from "@/utils/filter";

type ProductItemProps = {
  data: Product;
};

function ProductItem({ data }: ProductItemProps) {
  return (
    <S.Container>
      <Image src={data.imageUrl} alt={data.name} width="282px" height="282px" />
      <S.InfoContainer>
        <S.Info>
          <S.Name>{filterName(data.name)}</S.Name>
          <S.Price>{filterPrice(data.price)}원</S.Price>
        </S.Info>
        <S.CartButton type="button" aria-label={`${data.name} 장바구니에 담기`}>
          <BsCart4 size={30} />
        </S.CartButton>
      </S.InfoContainer>
    </S.Container>
  );
}

export default ProductItem;
