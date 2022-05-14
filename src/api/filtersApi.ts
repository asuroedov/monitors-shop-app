import axios, { AxiosInstance } from "axios";
import { config } from "../utils/config";
import { FilterInterface } from "../types/filters";

class FiltersApi {
  api: AxiosInstance;

  constructor() {
    this.api = axios.create({ baseURL: config.BASE_URL });
  }

  async getFilters() {
    return (await this.api.get<FilterInterface[]>("/filters")).data;
  }
}

export default new FiltersApi();
