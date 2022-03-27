import {environment} from "../../../../environments/environment";

export class EnvService {

  public baseUrl = environment.baseUrl;
  public api = environment.api;
  public production = environment.production;
  public enableDebug = true;

  constructor() {
  }

  getBaseApiUrl(): string {
    return this.baseUrl +  this.api;
  }
}
