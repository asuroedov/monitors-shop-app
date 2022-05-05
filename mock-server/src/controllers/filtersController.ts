import { NextFunction, Request, Response } from "express";
import { getMonitorsByFilters } from "../services/monitorService";
import { parseFilterQueries } from "../utils/parseFilterQueries";
import { mockMonitors } from "../data/mock-monitors";
import { getCountOfAvailableFilters } from "../services/filtersService";

export async function getFilters(request: Request, response: Response, next: NextFunction) {
  try {
    const parsedQueries = parseFilterQueries(request.query);

    const availableBrands = getCountOfAvailableFilters(
      getMonitorsByFilters(mockMonitors, parsedQueries, "brand"),
      "brand",
    );

    const availableScreenResolutions = getCountOfAvailableFilters(
      getMonitorsByFilters(mockMonitors, parsedQueries, "screenResolution"),
      "screenResolution",
    );

    const availableFrequencies = getCountOfAvailableFilters(
      getMonitorsByFilters(mockMonitors, parsedQueries, "frequency"),
      "frequency",
    );

    const availableScreenDiagonals = getCountOfAvailableFilters(
      getMonitorsByFilters(mockMonitors, parsedQueries, "screenDiagonal"),
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
