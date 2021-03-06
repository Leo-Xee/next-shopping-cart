import Image from "next/image";
import { useRouter } from "next/router";
import Head from "next/head";

import styled from "@emotion/styled";
import logo from "public/bm-loading.png";
import Button from "@/components/common/Button";

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  font-size: 3rem;
  font-weight: 500;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

function PurchaseCompletePage() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>WOOWA SHOP | 결제완료</title>
      </Head>
      <Container>
        <Image src={logo} width="400px" height="400px" />
        <div>결제가 완료되었습니다!! 🎉</div>
        <ButtonContainer>
          <Button
            buttonName="홈으로"
            colorType="primary"
            size="full"
            onClick={() => router.push("/")}
          />
          <Button
            buttonName="주문목록"
            colorType="primary"
            size="full"
            onClick={() => router.push("/orders")}
          />
        </ButtonContainer>
      </Container>
    </>
  );
}

export default PurchaseCompletePage;
