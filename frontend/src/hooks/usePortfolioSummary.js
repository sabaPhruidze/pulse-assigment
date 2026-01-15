import { getPortfolio } from "../services/api";
import { useApiRequest } from "./useApiRequest";

export const usePortfolioSummary = () => {
  const { data, loading, error } = useApiRequest(getPortfolio, [], {
    pollIntervalMs: 30_000,
  });
  return { portfolio: data, loading, error };
};
