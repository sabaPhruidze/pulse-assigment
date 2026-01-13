// Formats a numeric value as a currency string (defaults to USD). Returns "—" if the value is not a valid number.
export const formatCurrency = (value, currency = "USD") => {
  const n = Number(value);
  if (!Number.isFinite(n)) return "—";

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    maximumFractionDigits: 2,
  }).format(n);
};

// Formats a numeric value as a percentage string with two decimals. Adds "+" for positive values. Returns "—" if invalid.
export const formatPercent = (value) => {
  const n = Number(value);
  if (!Number.isFinite(n)) return "—";
  const sign = n > 0 ? "+" : "";
  return `${sign}${n.toFixed(2)}%`;
};

// Returns a Tailwind text color class based on the sign of the number (green for positive, red for negative, gray for zero/invalid).
export const getChangeColor = (value) => {
  const n = Number(value);
  if (!Number.isFinite(n) || n === 0) return "text-gray-600";
  return n > 0 ? "text-green-600" : "text-red-600";
};

// Formats an ISO timestamp into a short, readable date/time string. Returns "—" if missing or invalid.
export const formatDateTime = (isoString) => {
  if (!isoString) return "—";
  const date = new Date(isoString);
  if (Number.isNaN(date.getTime())) return "—";

  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
};
// Formats large numbers with commas (e.g., 1200000 -> 1,200,000). Returns "—" if invalid.
export const formatNumber = (value) => {
  const n = Number(value);
  if (!Number.isFinite(n)) return "—";
  return new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 }).format(n);
};
