import { BsCart4 } from "react-icons/bs";
import Image from "next/image";

import { Product } from "@/@types/dto";
import * as S from "./style";

type ProductItemProps = {
  data: Product;
};

function ProductItem({ data }: ProductItemProps) {
  const filterName = (name: string) =>
    name.length > 20 ? name.slice(0, 21).concat("...") : name;

  const filterPrice = (price: number) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <S.Container>
      <Image src={data.imageUrl} alt={data.name} width="290px" height="290px" />
      <S.InfoContainer>
        <S.Info>
          <S.Name>{filterName(data.name)}</S.Name>
          <S.Price>{filterPrice(data.price)}원</S.Price>
        </S.Info>
        <S.CartButton type="button" aria-label="cartButton">
          <BsCart4 size={30} />
        </S.CartButton>
      </S.InfoContainer>
    </S.Container>
  );
}

export default ProductItem;
