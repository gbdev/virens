// A game's "developer" field can be a plain string, an array of strings, or
// an array of { name, link, role } objects. Normalize to the latter shape.
export function normalizeDevelopers(developer) {
  if (Array.isArray(developer)) {
    return developer.map((dev) =>
      typeof dev === "string" ? { name: dev } : dev,
    );
  }
  if (developer) {
    return [{ name: developer }];
  }
  return [];
}
