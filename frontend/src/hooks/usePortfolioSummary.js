import { getPortfolio } from "../services/api";
import { useApiRequest } from "./useApiRequest";

export const usePortfolioSummary = () => {
  const { data, loading, error } = useApiRequest(getPortfolio, []);
  return { portfolio: data, loading, error };
};
