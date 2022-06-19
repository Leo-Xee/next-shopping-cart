<h1 align="middle">장바구니 애플리케이션</h1>
<p align="middle">Next.js와 JSON 서버로 구현하는 장바구니 애플리케이션</p>
<p align="middle">
  <img src="https://img.shields.io/badge/version-1.0.0-yellow?style=flat-square" alt="template version"/>
  <a href="https://github.com/daybrush/moveable/blob/master/LICENSE" target="_blank">
    <img src="https://img.shields.io/github/license/daybrush/moveable.svg?style=flat-square&label=license&color=08CE5D"/>
  </a>
</p>
<img width="1600" alt="next-shopping-cart" src="https://user-images.githubusercontent.com/21965795/174474785-8b6f221e-23ed-4390-b58e-52809265538b.png">


## 🔥 소개 ( [Demo](https://next-shopping-cart-bice.vercel.app/) )

**장바구니 애플리케이션은 상품을 확인하고 장바구니에 담은 뒤 결제 해볼 수 있는 데스크탑 애플리케이션입니다.**

이 프로젝트는 우아한 테크코스의 과제 중 하나인 [장바구니](https://github.com/woowacourse/react-shopping-cart-prod)를 기반으로 최근에 사용되고 있는 기술들과 [MSW](https://mswjs.io/) 기반의 TDD 및 테스트 작성을 경험해보고자 시작하게 되었습니다. 그리고 Postman으로 API를 먼저 명세하고 JSON Server를 활용해서 최대한 RESTful한 API 요청 및 응답 환경에서 애플리케이션을 구현하고자 했습니다. 또한 한 명의 스터디원과 함께 각자의 프로젝트를 구현하되 정기적으로 미팅을 하여 구현 방향과 기술에 대한 고민하고 특정 기능을 정해 페어프로그래밍을 진행헀습니다.

<br />

## ⚙️ 구현 내용

- Next 기반의 SSR
- React-Query를 사용해 서버상태 관리
- 장바구니의 주요 기능을 최대한 서버와 동기화
- 무분별한 요청 방지를 위해 디바운스 적용
- MSW, Jest, Testing-library를 사용한 단위테스트

<br />

## 📚 기술 스택

| Typescript | Next.js |  React-Query   |  Emotion   | Jest |  Testing-Library |
| :--------: | :--------: | :------: | :-----: |:-----: |:-----: |
|  <img src="https://user-images.githubusercontent.com/21965795/174472604-4e0c144f-4500-4cc6-80b7-3dd29c907171.png" width="100px"/> |  <img src="https://user-images.githubusercontent.com/21965795/174472790-693e1a27-c653-45a6-880d-1cbebbdcf020.png" width="100px" > | <img src="https://user-images.githubusercontent.com/21965795/174472982-dd91c0b0-e6ea-4dfa-bb4a-badf7b3119ae.png" width="100px"/> |<img src="https://user-images.githubusercontent.com/21965795/174472822-309713cb-6730-453c-8bd2-ea071c1176ec.png" width="100px"/>|<img src="https://user-images.githubusercontent.com/21965795/174472830-0a5511cf-3d7b-4d75-a0f8-209325d6d846.png" width="100px"/>|<img src="https://user-images.githubusercontent.com/21965795/174472827-961a87ee-742b-41f5-9fc2-baeae62cc5ae.png" width="100px"/>|

<br />

## 📝 요구 사항

### **레이아웃**

- [x]  베이스 레이아웃의 최상단에는 헤더가 위치하며, 스크롤되어도 고정되어 있다.
- [x]  나머지 영역은 각 페이지가 표시된다.
- [x]  각 페이지가 표시되는 영역은 최대 width가 1320px, 최소 width는 768px이다.

### **헤더**

- [x]  로고, 장바구니, 주문목록 버튼이 있다.
- [x]  로고 버튼을 클릭하면, 상품 목록 페이지로 이동한다.
- [x]  [장바구니] 버튼을 클릭하면, 장바구니 페이지로 이동한다.
- [x]  [주문목록] 버튼을 클릭하면, 주문 목록 페이지로 이동한다.

### **상품 목록 페이지**

- [x]  상품 목록을 조회할 수 있다.
    - 상품은 한 행에 4개씩 보여준다.
- [x]  각각의 상품에는 이미지, 이름, 가격, 장바구니 버튼이 표시된다.
- [x]  [장바구니] 버튼을 클릭하면, 선택한 상품이 장바구니에 들어간다.
    -  장바구니에 상품을 추가하면 Snackbar로 유저에게 알려준다.

### **장바구니 페이지**

- [x]  상품 목록 상단에 현재 장바구니에 담긴 상품의 개수를 보여준다.
- [x]  유저가 장바구니에 담은 상품 목록을 조회할 수 있다.
    - 장바구니 페이지 최초 진입 시 상품들은 모두 선택되어 있다.
- [x]  [전체 선택] 버튼 클릭 시 전체 상품을 선택/해제할 수 있다.
- [x]  상품 목록 왼쪽의 체크박스 클릭 시 상품을 선택/해제할 수 있다.
- [x]  [선택 상품 삭제] 버튼 클릭 시 선택한 상품들을 한번에 삭제할 수 있다.
- [x]  상품 목록 오른쪽의 휴지통 버튼 클릭 시 해당 상품을 삭제할 수 있다.
- [x]  상품 목록 오른쪽에서 상품의 수량을 조정할 수 있다.
    - 상품 목록 조정 시 금액에 반영되어야 한다.
- [x]  결제예상금액을 보여준다.
- [x]  주문하기 버튼을 클릭해 상품을 구매할 수 있다.

### **주문/결제 페이지**

- [x]  유저가 주문할 상품들과 전체 수량을 보여준다.
- [x]  각 주문 상품의 수량을 보여준다.
- [x]  총 결제금액을 확인할 수 있다.
- [x]  결제하기 버튼 클릭 시 결제 완료 페이지로 넘어간다.
- [x]  주문 결제한 상품은 장바구니에서 삭제된다.

### **결제 완료 페이지**

- [x]  [홈으로], [주문상세] 버튼이 표시된다.
- [x]  [홈으로] 버튼 클릭 시 상품 목록 페이지로 이동한다.
- [x]  [주문상세] 버튼 클릭 시 주문 목록 페이지로 이동한다.

### **주문 목록 페이지**

- [x]  유저의 주문 내역 목록을 조회할 수 있다.
- [x]  각 상품 우측의 [장바구니] 버튼 클릭 시 해당 상품이 다시 장바구니에 담긴다.

<br />

## 🔧 테스트

MSW를 기반으로 API를 모킹하였으며 최대한 TDD를 지키면서 많은 테스트를 작성하려고 노력했습니다.  
그 결과, 총 35개의 테스트 케이스를 작성했고 87%의 기능 테스트 커버리지를 달성했습니다.

<img width="860" alt="Screen Shot 2022-06-19 at 18 32 10" src="https://user-images.githubusercontent.com/21965795/174474660-972d3a17-1305-46ff-8e24-d715e119da44.png">

<br />

## 🌐 링크
- [Web VSCode](https://github.dev/Leo-Xee/next-shopping-cart)
- [POSTMAN API 명세](https://documenter.getpostman.com/view/15701641/Uz5DowLV)
- [Figma](https://www.figma.com/file/m3B8Ev4BsmuVco4jIclhYf/FE_Level2_Mission3_Shopping_Cart?node-id=0%3A1)






