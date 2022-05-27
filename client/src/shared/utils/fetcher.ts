import axios from "axios";

axios.defaults.baseURL = "http://localhost:3003";

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

export default fetcher;
