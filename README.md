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


## 📚 기술 스택

| Typescript | Next.js |  React-Query   |  Emotion   | Jest |  Testing-Library |
| :--------: | :--------: | :------: | :-----: |:-----: |:-----: |
|  <img src="https://user-images.githubusercontent.com/21965795/174472604-4e0c144f-4500-4cc6-80b7-3dd29c907171.png" width="100px"/> |  <img src="https://user-images.githubusercontent.com/21965795/174472790-693e1a27-c653-45a6-880d-1cbebbdcf020.png" width="100px" > | <img src="https://user-images.githubusercontent.com/21965795/174472982-dd91c0b0-e6ea-4dfa-bb4a-badf7b3119ae.png" width="100px"/> |<img src="https://user-images.githubusercontent.com/21965795/174472822-309713cb-6730-453c-8bd2-ea071c1176ec.png" width="100px"/>|<img src="https://user-images.githubusercontent.com/21965795/174472830-0a5511cf-3d7b-4d75-a0f8-209325d6d846.png" width="100px"/>|<img src="https://user-images.githubusercontent.com/21965795/174472827-961a87ee-742b-41f5-9fc2-baeae62cc5ae.png" width="100px"/>|

<br />

## 🌲 디렉터리 구조

```
├── client
│   ├── public            // 정적 파일
│   └── src
│       ├── @types        // 타입
│       ├── components    
│       │   └── common    // 공통 컴포넌트
│       ├── hooks
│       │   └── queries   // react-query의 hooks
│       ├── mocks
│       │   └── data      // MSW의 mockData
│       │   └── handlers  // MSW의 handlers
│       ├── pages
│       ├── services      // API 함수
│       ├── shared
│       │   └── constant  // 공통 상수
│       │   └── utils     // 공통 함수
│       └── styles        // 전역 및 테마 스타일
└── server                // JSON Server
```

<br />

## ⚙️ 주요 내용

### ✅ Next 기반의 SSR
도메인의 특성을 고려해서 SEO와 TTV(Time To View)가 중요하다고 생각해 Next.js 프레임워크를 사용해서 SSR로 구현했습니다.

### ✅ React-Query를 사용해 서버상태 관리
장바구니 애플리케이션에서는 클라이언트 상태를 관리할 요소가 따로 없다고 판단했습니다. 그래서 Redux에 미들웨어 붙여서 서버 상태를 관리하기보다는 React-Query로 관리하고 추후에 클라이언트 상태를 관리할 필요성이 생긴다면 Recoil과 같은 클라이언트 상태관리 라이브러리를 사용하는 걸로 결정했습니다. 

또한 API 함수를 최대한 모듈화해서 사용하기 위해서 아래과 같이 fetcher 함수를 구현했고 이를 기반으로 Service 함수와 React-Query 함수를 각각의 디렉토리에서 도메인별로 관리하도록 구성했습니다.

```ts
// src/shared/utils/fetcher.ts

const fetcher = async <T>(
  method: "get" | "post" | "patch" | "delete",
  url: string,
  ...rest: object[]
) => {
  try {
    const { data } = await axios[method]<T>(url, ...rest);
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error;
    }

    throw new Error("different error than axios");
  }
};
```


### ✅ 장바구니의 주요 기능을 최대한 서버와 동기화
![cart](https://user-images.githubusercontent.com/21965795/176478545-de7954ab-b02a-4add-9853-9f7574a505b6.gif)





### ✅ Snackbar 구현 및 디바운스 적용
![snackbar](https://user-images.githubusercontent.com/21965795/176473620-26aabac0-45ce-4f01-b9eb-53d2aac21d8b.gif)

사용자가 상품을 장바구니에 담았다는 피드백을 주기 위해서 SnackBar 컴포넌트와 useSnackBar를 구현해서 사용했습니다.

```ts
// src/components/common/SnackBar/SnackBar.tsx

function SnackBar({ message, duration }: SnackBarProps) {
  const [target, setTarget] = useState<Element | null>(null);

  const element = <Container duration={duration}>{message}</Container>;

  useEffect(() => {
    if (document) {
      setTarget(document.querySelector("#portal"));
    }
  }, []);

  if (!target) return <></>;

  return ReactDOM.createPortal(element, target);
}
```

```ts
// src/hooks/useSnackBar.tsx

function useSnackBar(sec: number) {
  const [isShowing, setIsShowing] = useState(false);
  const timer = useRef<Timer>();

  useEffect(() => {
    if (timer.current) clearTimeout(timer.current);
    if (isShowing) {
      timer.current = setTimeout(() => setIsShowing(false), sec * 1000);
    }
    return () => {
      clearTimeout(timer.current);
    };
  }, [isShowing, sec]);

  return { isShowing, setIsShowing };
}
```



### ✅ MSW, Jest, Testing-library를 사용한 단위테스트



<br />

## 🔧 테스트

MSW를 기반으로 API를 모킹하였으며 최대한 TDD를 지키면서 많은 테스트를 작성하려고 노력했습니다.  
그 결과, 총 35개의 테스트 케이스를 작성했고 87%의 기능 테스트 커버리지를 달성했습니다.

<img width="700" alt="Screen Shot 2022-06-19 at 18 32 10" src="https://user-images.githubusercontent.com/21965795/174474660-972d3a17-1305-46ff-8e24-d715e119da44.png">

<br />

## 🎨 LightHouse 측정

![Screen Shot 2022-06-29 at 22 35 03](https://user-images.githubusercontent.com/21965795/176449624-4e3771f0-1e27-47f0-afab-7d9578041330.png)

<br />

## 🌐 링크
- [Web VSCode](https://github.dev/Leo-Xee/next-shopping-cart)
- [POSTMAN API 명세](https://documenter.getpostman.com/view/15701641/Uz5DowLV)
- [Figma](https://www.figma.com/file/m3B8Ev4BsmuVco4jIclhYf/FE_Level2_Mission3_Shopping_Cart?node-id=0%3A1)






