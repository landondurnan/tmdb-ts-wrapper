import { ChangeListQueryString, ChangesForMovie, ChangesForPerson, ChangesForTV } from "../types";
import Endpoint from "./Endpoint";
export declare class Changes extends Endpoint {
    /**
     * Get Movie Change List
     *
     * Get a list of all of the movie ids that have been changed in the past 24 hours.
     *
     * You can query it for up to 14 days worth of changed IDs at a time with the start_date and end_date query parameters. 100 items are returned per page.
     *
     * {@link https://developers.themoviedb.org/3/changes/get-movie-change-list}
    */
    getMovieChangeList(queryString?: ChangeListQueryString): Promise<ChangesForMovie>;
    /**
     * Get TV Change List
     *
     * Get a list of all of the TV show ids that have been changed in the past 24 hours.
     *
     * You can query it for up to 14 days worth of changed IDs at a time with the start_date and end_date query parameters. 100 items are returned per page.
     *
     * {@link https://developers.themoviedb.org/3/changes/get-tv-change-list}
    */
    getTVChangeList(queryString?: ChangeListQueryString): Promise<ChangesForTV>;
    /**
     * Get Person Change List
     *
     * Get a list of all of the person ids that have been changed in the past 24 hours.
     *
     * You can query it for up to 14 days worth of changed IDs at a time with the start_date and end_date query parameters. 100 items are returned per page.
     *
     * {@link https://developers.themoviedb.org/3/changes/get-person-change-list}
    */
    getPersonChangeList(queryString?: ChangeListQueryString): Promise<ChangesForPerson>;
}
