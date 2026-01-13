import { getNews } from "../services/api";
import { useApiRequest } from "./useApiRequest";

export const useNewsData = (category) => {
  const params = category && category !== "all" ? { category } : undefined;
  return useApiRequest(() => getNews(params), [category]);
};
