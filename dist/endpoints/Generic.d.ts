import Endpoint from "./Endpoint";
/**
 * Create your own calls.
 * Version can also be changed if needed. Default is 3.
 * Use with append_to_response
 */
export declare class Generic extends Endpoint {
    get<T>(endpoint: string, queryString?: Object, version?: 3 | 4): Promise<T>;
    post<T>(endpoint: string, body?: Object, queryString?: Object, version?: 3 | 4): Promise<T>;
    delete<T>(endpoint: string, body?: Object, queryString?: Object, version?: 3 | 4): Promise<T>;
    put<T>(endpoint: string, body?: Object, queryString?: Object, version?: 3 | 4): Promise<T>;
}
