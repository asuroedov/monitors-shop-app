import axios, { AxiosInstance } from "axios";
import { config } from "../utils/config";
import { FilterInterface } from "../types/filters";

class FiltersApi {
  api: AxiosInstance;

  constructor() {
    this.api = axios.create({ baseURL: config.BASE_URL });
  }

  async getFilters(query?: string) {
    return (await this.api.get<FilterInterface[]>(`/filters?${query}`)).data;
  }
}

export default new FiltersApi();
