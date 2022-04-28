import { MonitorInterface } from "../types/monitor";

type FILTER = "brand" | "screenResolution" | "screenDiagonal" | "frequency";

export function getCountOfAvailableFilters(monitors: MonitorInterface[], filterName: FILTER) {
  const result = new Map<string, number>();
  monitors.forEach((monitor) => {
    const filterValue = monitor[filterName].toString();
    result.set(filterValue, (result.get(filterValue) || 0) + 1);
  });

  return Object.fromEntries(result);
}
