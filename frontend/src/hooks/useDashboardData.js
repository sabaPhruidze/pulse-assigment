import { getDashboard } from "../services/api";
import { useApiRequest } from "./useApiRequest";

export const useDashboardData = () => {
  return useApiRequest(getDashboard, []);
};
