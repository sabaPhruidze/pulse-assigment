import { useEffect, useRef, useState } from "react";

/**
 * Generic API request hook.
 *
 * Backward compatible signature:
 *   useApiRequest(fetcher, deps)
 *
 * Optional polling support:
 *   useApiRequest(fetcher, deps, { pollIntervalMs: 30000, enabled: true })
 */
export const useApiRequest = (fetcher, deps = [], options = {}) => {
  const { pollIntervalMs = 0, enabled = true } = options;

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const hasLoadedOnceRef = useRef(false);

  useEffect(() => {
    if (!enabled) return;

    let mounted = true;
    let intervalId = null;

    const run = async ({ isPolling = false } = {}) => {
      try {
        // Only show loading state on first load.
        if (!hasLoadedOnceRef.current && !isPolling) setLoading(true);
        setError(null);

        const res = await fetcher();
        if (!mounted) return;

        setData(res?.data?.data ?? null);
        hasLoadedOnceRef.current = true;
      } catch (e) {
        if (!mounted) return;
        setError("Failed to load data.");
        console.error("API request error:", e);
      } finally {
        if (mounted && !isPolling) setLoading(false);
      }
    };

    // Initial fetch
    run();
    if (pollIntervalMs > 0 && typeof window !== "undefined") {
      intervalId = window.setInterval(() => {
        // If tab is hidden, skip to reduce unnecessary requests.
        if (
          typeof document !== "undefined" &&
          document.visibilityState === "hidden"
        )
          return;
        run({ isPolling: true });
      }, pollIntervalMs);

      // Refresh immediately when user returns to the tab.
      const onVisibilityChange = () => {
        if (
          typeof document !== "undefined" &&
          document.visibilityState === "visible"
        ) {
          run({ isPolling: true });
        }
      };

      if (typeof document !== "undefined") {
        document.addEventListener("visibilitychange", onVisibilityChange);
      }

      return () => {
        mounted = false;
        if (intervalId) window.clearInterval(intervalId);
        if (typeof document !== "undefined") {
          document.removeEventListener("visibilitychange", onVisibilityChange);
        }
      };
    }

    return () => {
      mounted = false;
    };
  }, deps);

  return { data, loading, error };
};
