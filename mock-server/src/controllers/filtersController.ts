import { NextFunction, Request, Response } from "express";
import { getMonitorsByFilters } from "../services/monitorService";
import { parseFilterQueries } from "../utils/parseFilterQueries";
import { mockMonitors } from "../data/mock-monitors";
import { getCountOfAvailableFilters } from "../services/filtersService";
import { sortBrands, sortScreenResolutions } from "../utils/sortFilters";

export async function getFilters(request: Request, response: Response, next: NextFunction) {
  try {
    const parsedQueries = parseFilterQueries(request.query);

    const availableBrands = sortBrands(
      getCountOfAvailableFilters(getMonitorsByFilters(mockMonitors, parsedQueries, "brand"), "brand"),
    );

    const availableScreenResolutions = sortScreenResolutions(
      getCountOfAvailableFilters(
        getMonitorsByFilters(mockMonitors, parsedQueries, "screenResolution"),
        "screenResolution",
      ),
    );

    const availableFrequencies = getCountOfAvailableFilters(
      getMonitorsByFilters(mockMonitors, parsedQueries, "frequency"),
      "frequency",
    );

    const availableScreenDiagonals = getCountOfAvailableFilters(
      getMonitorsByFilters(mockMonitors, parsedQueries, "screenDiagonal"),
      "screenDiagonal",
    );

    response.json([
      { title: "brand", name: "Брэнд", data: availableBrands },
      { title: "screenResolution", name: "Разрешение экрана", data: availableScreenResolutions },
      { title: "screenDiagonal", name: "Размер экрана", data: availableScreenDiagonals },
      { title: "frequency", name: "Частота обновления", data: availableFrequencies },
    ]);
  } catch (e) {
    next(e);
  }
}
