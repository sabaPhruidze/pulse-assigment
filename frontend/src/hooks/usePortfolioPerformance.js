import { getPortfolioPerformance } from "../services/api";
import { useApiRequest } from "./useApiRequest";

export const usePortfolioPerformance = () => {
  return useApiRequest(getPortfolioPerformance, []);
};
