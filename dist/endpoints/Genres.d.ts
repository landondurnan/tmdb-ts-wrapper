import { AcceptedLanguage, GenresMovie, GenresTV } from "../types";
import Endpoint from "./Endpoint";
export declare class Genres extends Endpoint {
    /**
     * Get Movie List
     *
     * Get the list of official genres for movies.
     *
     * {@link https://developers.themoviedb.org/3/genres/get-movie-list}
    */
    getMovieList(language?: AcceptedLanguage): Promise<GenresMovie>;
    /**
     * Get TV List
     *
     * Get the list of official genres for TV shows.
     *
     * {@link https://developers.themoviedb.org/3/genres/get-tv-list}
    */
    getTVList(language?: AcceptedLanguage): Promise<GenresTV>;
}
