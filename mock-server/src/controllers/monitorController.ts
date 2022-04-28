import { NextFunction, Request, Response } from "express";
import { getMonitorsByQueryParams } from "../services/monitorService";
import { parseFilterQueries } from "../utils/parseFilterQueries";
import { extractSortParams } from "../utils/extractSortParams";
import { mockMonitors } from "../data/mock-monitors";

export async function getMonitors(request: Request, response: Response, next: NextFunction) {
  try {
    const parsedQueries = parseFilterQueries(request.query);
    const { sortVariant } = extractSortParams(request.query);
    const { limit = "10" } = request.query;

    const monitors = getMonitorsByQueryParams(mockMonitors, { ...parsedQueries, sortVariant });
    response.json({ totalCount: monitors.length, monitors: monitors.slice(0, Number(limit)) });
  } catch (e) {
    next(e);
  }
}
