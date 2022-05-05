import { MonitorInterface } from "../types/monitor";

interface GetMonitorsByQueryParamsProps {
  brand: string[];
  screenResolution: string[];
  screenDiagonal: string[];
  frequency: string[];
  sortBy?: "price";
  sortVariant: "desc" | "asc" | string;
}

export function getMonitorsByQueryParams(
  monitors: MonitorInterface[],
  {
    frequency,
    screenDiagonal,
    screenResolution,
    brand,
    sortBy = "price",
    sortVariant = "asc",
  }: GetMonitorsByQueryParamsProps,
) {
  let responseMonitors = [...monitors];

  responseMonitors.sort((monitor1, monitor2) => {
    return sortVariant === "asc" ? monitor1.price - monitor2.price : monitor2.price - monitor1.price;
  });

  return getMonitorsByFilters(responseMonitors, { screenResolution, screenDiagonal, brand, frequency });
}

interface GetMonitorsByFiltersInterface {
  brand: string[];
  screenResolution: string[];
  screenDiagonal: string[];
  frequency: string[];
}

export function getMonitorsByFilters(
  monitors: MonitorInterface[],
  filters: GetMonitorsByFiltersInterface,
  excluded?: keyof GetMonitorsByFiltersInterface,
) {
  let responseMonitors = [...monitors];

  // @ts-ignore
  Object.entries(filters).forEach(([filterKey, filterValue]: [keyof MonitorInterface, string[]]) => {
    responseMonitors =
      filterValue.length && excluded !== filterKey.toString()
        ? responseMonitors.filter((monitor) => {
            return filterValue
              .map((filter) => filter.toLowerCase())
              .includes(monitor[filterKey].toString().toLowerCase());
          })
        : responseMonitors;
  });

  return responseMonitors;
}
