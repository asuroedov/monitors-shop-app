import { MonitorInterface } from "../types/monitor";

interface GetMonitorsByQueryParamsProps {
  brands: string[];
  screenResolutions: string[];
  screenDiagonals: string[];
  frequencies: string[];
  sortBy?: "price";
  sortVariant: "desc" | "asc" | string;
}

export function getMonitorsByQueryParams(
  monitors: MonitorInterface[],
  {
    frequencies,
    screenDiagonals,
    screenResolutions,
    brands,
    sortBy = "price",
    sortVariant = "asc",
  }: GetMonitorsByQueryParamsProps,
) {
  let responseMonitors = [...monitors];

  responseMonitors.sort((monitor1, monitor2) => {
    return sortVariant === "asc" ? monitor1.price - monitor2.price : monitor2.price - monitor1.price;
  });

  return getMonitorsByFilters(responseMonitors, { screenResolutions, screenDiagonals, brands, frequencies });
}

interface GetMonitorsByFiltersInterface {
  brands: string[];
  screenResolutions: string[];
  screenDiagonals: string[];
  frequencies: string[];
}

export function getMonitorsByFilters(
  monitors: MonitorInterface[],
  { frequencies, screenDiagonals, screenResolutions, brands }: GetMonitorsByFiltersInterface,
  excluded?: keyof GetMonitorsByFiltersInterface,
) {
  let responseMonitors = [...monitors];

  responseMonitors =
    brands.length && excluded !== "brands"
      ? responseMonitors.filter((monitor) => brands.includes(monitor.brand))
      : responseMonitors;
  responseMonitors =
    frequencies.length && excluded !== "frequencies"
      ? responseMonitors.filter((monitor) => frequencies.includes(monitor.frequency.toString()))
      : responseMonitors;
  responseMonitors =
    screenDiagonals.length && excluded !== "screenDiagonals"
      ? responseMonitors.filter((monitor) => screenDiagonals.includes(monitor.screenDiagonal.toString()))
      : responseMonitors;
  responseMonitors =
    screenResolutions.length && excluded !== "screenResolutions"
      ? responseMonitors.filter((monitor) => screenResolutions.includes(monitor.screenResolution))
      : responseMonitors;

  return responseMonitors;
}
