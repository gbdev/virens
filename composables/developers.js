// A game's "developer" field can be a plain string, a single
// { name, link, role } object, or an array mixing strings and such objects.
// Normalize to an array of objects.
export function normalizeDevelopers(developer) {
  if (!developer) {
    return [];
  }
  const developers = Array.isArray(developer) ? developer : [developer];
  return developers.map((dev) =>
    typeof dev === "string" ? { name: dev } : dev,
  );
}
