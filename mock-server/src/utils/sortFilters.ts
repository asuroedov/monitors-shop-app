export function sortBrands(availableBrands: Record<string, number>) {
  return Object.keys(availableBrands)
    .sort((brand1, brand2) => {
      return brand1.toLowerCase().localeCompare(brand2.toLowerCase());
    })
    .reduce((acc: Record<keyof typeof availableBrands, number>, brandKey) => {
      acc[brandKey] = availableBrands[brandKey];
      return acc;
    }, {});
}

export function sortScreenResolutions(availableScreenResolutions: Record<string, number>) {
  return Object.keys(availableScreenResolutions)
    .sort((screenResolution1, screenResolution2) => {
      return parseInt(screenResolution1) - parseInt(screenResolution2);
    })
    .reduce((acc: Record<keyof typeof availableScreenResolutions, number>, key) => {
      acc[key] = availableScreenResolutions[key];
      return acc;
    }, {});
}
