import axios, { AxiosInstance } from "axios";
import { MonitorsResponseInterface } from "../types/monitor";
import { errorHandler } from "../utils/errorHandler";

class MonitorApi {
  api: AxiosInstance;

  constructor() {
    this.api = axios.create({ baseURL: "http://localhost:5000" });
  }

  async getList() {
    return await errorHandler<MonitorsResponseInterface>(() => this.api.get("/monitors"));
  }
}

export default new MonitorApi();
