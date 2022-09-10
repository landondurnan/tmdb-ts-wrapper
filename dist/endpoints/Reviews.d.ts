import { Review } from "../types";
import Endpoint from "./Endpoint";
export declare class Reviews extends Endpoint {
    /**
     * Get Details
     *
     * Retrieve the details of a movie or TV show review.
     *
     * {@link https://developers.themoviedb.org/3/reviews/get-review-details}
    */
    getDetails(review_id: string): Promise<Review>;
}
