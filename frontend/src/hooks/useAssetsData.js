import { useEffect, useState } from "react";
import { getStocks, getCrypto } from "../services/api";

export const useAssetsData = () => {
  const [assets, setAssets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;

    const fetchAssets = async () => {
      try {
        setLoading(true);
        setError(null);

        const [stocksRes, cryptoRes] = await Promise.all([
          getStocks(),
          getCrypto(),
        ]);
        if (!mounted) return;

        // Legacy endpoints return arrays; modern endpoints return { data: [...] }
        const stocksRaw = Array.isArray(stocksRes.data)
          ? stocksRes.data
          : stocksRes.data?.data || [];
        const cryptoRaw = Array.isArray(cryptoRes.data)
          ? cryptoRes.data
          : cryptoRes.data?.data || [];

        const stocks = stocksRaw.map((a) => ({ ...a, assetType: "stock" }));
        const crypto = cryptoRaw.map((a) => ({ ...a, assetType: "crypto" }));

        setAssets([...stocks, ...crypto]);
      } catch (e) {
        if (!mounted) return;
        setError("Failed to load assets.");
        console.error("Assets fetch error:", e);
      } finally {
        if (mounted) setLoading(false);
      }
    };

    fetchAssets();
    return () => {
      mounted = false;
    };
  }, []);

  return { assets, loading, error };
};
