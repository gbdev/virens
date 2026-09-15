function formatEventDate(isoDate) {
  return new Date(isoDate).toLocaleString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

// An event's "period" is a { start, end } pair of ISO date-time strings.
export function formatEventPeriod(period) {
  if (!period) return "";
  return `${formatEventDate(period.start)} - ${formatEventDate(period.end)}`;
}
