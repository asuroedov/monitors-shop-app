import { NextFunction, Request, Response } from "express";
import { getMonitorsByFilters } from "../services/monitorService";
import { parseFilterQueries } from "../utils/parseFilterQueries";
import { mockMonitors } from "../data/mock-monitors";
import { getCountOfAvailableFilters } from "../services/filtersService";

export async function getFilters(request: Request, response: Response, next: NextFunction) {
  try {
    const parsedQueries = parseFilterQueries(request.query);

    const availableBrands = getCountOfAvailableFilters(
      getMonitorsByFilters(mockMonitors, parsedQueries, "brands"),
      "brand",
    );

    const availableScreenResolutions = getCountOfAvailableFilters(
      getMonitorsByFilters(mockMonitors, parsedQueries, "screenResolutions"),
      "screenResolution",
    );

    const availableFrequencies = getCountOfAvailableFilters(
      getMonitorsByFilters(mockMonitors, parsedQueries, "frequencies"),
      "frequency",
    );

    const availableScreenDiagonals = getCountOfAvailableFilters(
      getMonitorsByFilters(mockMonitors, parsedQueries, "screenDiagonals"),
      "screenDiagonal",
    );

    response.json({
      brands: availableBrands,
      screenResolutions: availableScreenResolutions,
      screenDiagonals: availableScreenDiagonals,
      frequencies: availableFrequencies,
    });
  } catch (e) {
    next(e);
  }
}

/*
 для brands кол-во массива мониторов получениых без учета brands
 для resolutions кол-во массива мониторов полученных без учета resolutions
 .....
 getMonitorsCount
 getCountOfAvailableFilters(monitors, filter) - возвращает кол-во доступных значений для данного фильтра
 */
