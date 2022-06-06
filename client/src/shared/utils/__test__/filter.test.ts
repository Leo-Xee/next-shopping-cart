import { filterName, filterPrice } from "@/shared/utils/filter";

const longName = "젓가락(종이)-웬만해선 이 맛을 막을 수 없다";
const bigNumber = 1000000000000;

describe("filterName", () => {
  it("return filterd Name", () => {
    expect(filterName(longName)).toBe("젓가락(종이)-웬만해선 이 맛을...");
  });
});

describe("filterPrice", () => {
  it("1000 단위마다 ','를 붙여준다.", () => {
    expect(filterPrice(bigNumber)).toBe("1,000,000,000,000");
  });
});
