import { Credit } from "../types";
import Endpoint from "./Endpoint";
export declare class Credits extends Endpoint {
    /**
     * Get Details
     *
     * Get a movie or TV credit details by id.
     *
     * {@link https://developers.themoviedb.org/3/credits/get-credit-details}
    */
    getDetails(credit_id: string): Promise<Credit>;
}
