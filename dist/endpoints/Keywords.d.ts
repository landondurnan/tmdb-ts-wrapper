import { Keyword, KeywordMovies, KeywordMoviesQueryString } from "../types";
import Endpoint from "./Endpoint";
export declare class Keywords extends Endpoint {
    /**
     * Get Details
     *
     * {@link https://developers.themoviedb.org/3/keywords/get-keyword-details}
     */
    getDetails(keyword_id: number): Promise<Keyword>;
    /**
     * Get Movies
     *
     * Get the movies that belong to a keyword.
     *
     * We highly recommend using [movie discover]({@link https://developers.themoviedb.org/3/discover/movie-discover}) instead of this method as it is much more flexible.
     */
    getMoviesFromKeyword(keyword_id: number, queryString?: KeywordMoviesQueryString): Promise<KeywordMovies>;
}
