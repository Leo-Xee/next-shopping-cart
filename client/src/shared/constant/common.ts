const BASE_URL =
  process.env.NODE_ENV === "development" || process.env.NODE_ENV === "test"
    ? "http://localhost:3003"
    : "https://next-shopping-api.herokuapp.com/";

export default BASE_URL;
