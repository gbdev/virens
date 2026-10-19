// An entry's "date" can be a unix timestamp (number or numeric string), a
// full date string, or a partial one: just a year ("2026") or a year and a
// month ("2001-11"). A bare 4-digit year must not be read as a timestamp,
// and neither must a compact YYYYMMDD date ("20250308").
function normalizeDateText(date) {
  const text = String(date).trim();
  const compact = text.match(/^(\d{4})(\d{2})(\d{2})$/);
  return compact ? `${compact[1]}-${compact[2]}-${compact[3]}` : text;
}

export function parseEntryDate(date) {
  if (date == null || date === "") return null;
  const text = normalizeDateText(date);
  const isTimestamp = /^\d+$/.test(text) && text.length > 4;
  const parsed = isTimestamp ? new Date(Number(text) * 1000) : new Date(text);
  return isNaN(parsed) ? null : parsed;
}

// Format an entry's date, showing only as much as the source specifies
export function formatEntryDate(date, month = "long") {
  const parsed = parseEntryDate(date);
  if (!parsed) return "";
  const text = normalizeDateText(date);
  const options = { year: "numeric" };
  // ISO date-only strings are parsed as UTC, so format them in UTC too to
  // avoid shifting to the previous day in timezones behind it
  if (/^\d{4}(-\d{2}){0,2}$/.test(text)) options.timeZone = "UTC";
  if (!/^\d{4}$/.test(text)) {
    options.month = month;
    if (!/^\d{4}-\d{2}$/.test(text)) options.day = "numeric";
  }
  return parsed.toLocaleString("en-US", options);
}
