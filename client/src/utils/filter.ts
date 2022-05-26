// 따로 뺴서 함수를 테스트를 하고 컴포넌트 테스트 파일에서 해당 함수를 사용하기
// 공통적으로 사용하는 함수는 빼서 따로 테스트!!
export const filterName = (name: string) => {
  const LENGTH = 20;
  return name.length > LENGTH ? name.slice(0, LENGTH + 1).concat("...") : name;
};

export const filterPrice = (price: number) => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
