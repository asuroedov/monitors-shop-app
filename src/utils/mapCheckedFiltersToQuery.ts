export function mapCheckedFiltersToQuery(checkedFilters: Record<string, string[]>) {
  return Object.keys(checkedFilters)
    .filter((key) => checkedFilters[key].length)
    .map((key) => `${key}=[${checkedFilters[key].map((value) => wrapQuotes(value))}]`)
    .reduce((acc, value) => {
      return `${acc}&${value}`;
    }, "")
    .slice(1);
}

function wrapQuotes(value: string) {
  return `"${value}"`;
}
