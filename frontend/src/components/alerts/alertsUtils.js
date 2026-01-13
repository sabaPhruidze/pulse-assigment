export const SEVERITY_ORDER = ["critical", "high", "medium", "low"];

export const groupBySeverity = (items = []) => {
  const groups = { critical: [], high: [], medium: [], low: [] };

  items.forEach((a) => {
    const key = a?.severity;
    if (groups[key]) groups[key].push(a);
  });

  SEVERITY_ORDER.forEach((k) => {
    groups[k].sort((x, y) => new Date(y.timestamp) - new Date(x.timestamp));
  });

  return groups;
};
