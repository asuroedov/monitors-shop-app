export function extractSortParams(query: any) {
  let { sortVariant }: Record<string, string | undefined> = query;
  if (!sortVariant || !["asc", "desc"].includes(sortVariant)) sortVariant = "asc";

  return {
    sortBy: "price",
    sortVariant,
  };
}
