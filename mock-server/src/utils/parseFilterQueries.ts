export function parseFilterQueries(query: any) {
  const { brand, screenResolution, screenDiagonal, frequency } = query;

  const parsedBrand: string[] = brand ? JSON.parse(brand) : [];
  const parsedScreenResolution: string[] = screenResolution ? JSON.parse(screenResolution) : [];
  const parsedScreenDiagonal: string[] = screenDiagonal ? JSON.parse(screenDiagonal) : [];
  const parsedFrequency: string[] = frequency ? JSON.parse(frequency) : [];

  return {
    brand: parsedBrand,
    screenResolution: parsedScreenResolution,
    screenDiagonal: parsedScreenDiagonal,
    frequency: parsedFrequency,
  };
}
