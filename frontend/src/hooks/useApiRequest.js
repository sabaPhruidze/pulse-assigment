import { useEffect, useState } from "react";

export const useApiRequest = (fetcher, deps = []) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;

    const run = async () => {
      try {
        setLoading(true);
        setError(null);

        const res = await fetcher();
        if (!mounted) return;

        setData(res?.data?.data ?? null);
      } catch (e) {
        if (!mounted) return;
        setError("Failed to load data.");
        console.error("API request error:", e);
      } finally {
        if (mounted) setLoading(false);
      }
    };

    run();
    return () => {
      mounted = false;
    };
  }, deps);

  return { data, loading, error };
};
