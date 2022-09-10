import { Config } from '../types';
/**
 * Base Endpoint
 */
export default class Endpoint {
    protected config: Config;
    protected version: number;
    private BASE_URL;
    constructor(config: Config, version?: 3 | 4);
    /**
     * Utility function to apply config language if language is not overrided
     */
    protected applyTranslation(obj?: Object): Object | {
        language: import("../types").AcceptedLanguage;
        constructor: Function;
        toString(): string;
        toLocaleString(): string;
        valueOf(): Object;
        hasOwnProperty(v: PropertyKey): boolean;
        isPrototypeOf(v: Object): boolean;
        propertyIsEnumerable(v: PropertyKey): boolean;
    };
    protected _get<T>(endpoint: string, options?: Object, version?: 3 | 4): Promise<T>;
    protected _post<T>(endpoint: string, body?: Object, qs?: Object, version?: 3 | 4): Promise<T>;
    protected _delete<T>(endpoint: string, body?: Object, qs?: Object, version?: 3 | 4): Promise<T>;
    protected _put<T>(endpoint: string, body?: Object, qs?: Object, version?: 3 | 4): Promise<T>;
    private queryString;
}
