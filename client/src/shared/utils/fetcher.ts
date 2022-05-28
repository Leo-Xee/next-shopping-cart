import axios from "axios";
import BASE_URL from "@/shared/constant/common";

axios.defaults.baseURL = BASE_URL;

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
