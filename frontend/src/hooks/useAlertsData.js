import { getAlerts } from "../services/api";
import { useApiRequest } from "./useApiRequest";

export const useAlertsData = () => {
  // /api/alerts returns { success, data: [...] } in most cases
  return useApiRequest(getAlerts, []);
};
