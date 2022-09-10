import { $fetch } from "ohmyfetch";
import { Config } from "../types";

/**
 * Base Endpoint
 */
export default class Endpoint {
  protected config: Config;
  protected version: number;
  private BASE_URL = "https://api.themoviedb.org/";

  constructor(config: Config, version: 3 | 4 = 3) {
    this.config = config;
    this.version = version;
  }

  /**
   * Utility function to apply config language if language is not overrided
   */
  protected applyTranslation(obj?: Object) {
    if (obj && !obj.hasOwnProperty("language")) {
      return { ...obj, language: this.config.language };
    }

    return obj;
  }

  protected async _get<T>(endpoint: string, options?: Object, version?: 3 | 4) {
    return fetch<T>(
      `${this.BASE_URL}/${version ? version : this.version}/${endpoint}${
        options ? `?${this.queryString(options)}` : ""
      }`,
      {
        headers: {
          Authorization: `Bearer ${this.config.access_token}`,
          "Content-Type": "application/json;charset=utf-8",
        },
      }
    );
  }

  protected async _post<T>(
    endpoint: string,
    body?: Object,
    qs?: Object,
    version?: 3 | 4
  ) {
    return fetch<T>(
      `${this.BASE_URL}/${version ? version : this.version}/${endpoint}${
        qs ? `?${this.queryString(qs)}` : ""
      }`,
      {
        method: "POST",
        body,
        headers: {
          Authorization: `Bearer ${this.config.access_token}`,
          "Content-Type": "application/json;charset=utf-8",
        },
      }
    );
  }

  protected async _delete<T>(
    endpoint: string,
    body?: Object,
    qs?: Object,
    version?: 3 | 4
  ) {
    return fetch<T>(
      `${this.BASE_URL}/${version ? version : this.version}/${endpoint}${
        qs ? `?${this.queryString(qs)}` : ""
      }`,
      {
        headers: {
          Authorization: `Bearer ${this.config.access_token}`,
          "Content-Type": "application/json;charset=utf-8",
        },
        method: "DELETE",
        data: body,
      }
    );
  }

  protected async _put<T>(
    endpoint: string,
    body?: Object,
    qs?: Object,
    version?: 3 | 4
  ) {
    return fetch<T>(
      `${this.BASE_URL}/${version ? version : this.version}/${endpoint}${
        qs ? `?${this.queryString(qs)}` : ""
      }`,
      {
        headers: {
          Authorization: `Bearer ${this.config.access_token}`,
          "Content-Type": "application/json;charset=utf-8",
        },
        method: "PUT",
        data: body,
      }
    );
  }

  private queryString(obj: Object) {
    return Object.keys(obj)
      .map((key) => {
        let value = obj[key];

        if (Array.isArray(value)) {
          value = value.join(",");
        }

        return `${key}=${value}`;
      })
      .join("&");
  }
}
