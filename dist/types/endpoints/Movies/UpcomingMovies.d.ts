import { MovieListResult } from ".";
import { Pageable, Paginated, Translatable } from "../../util";
export interface UpcomingMovies extends Paginated {
    results?: MovieListResult[];
    dates?: UpcomingMoviesDates;
}
export interface UpcomingMoviesDates {
    maximum?: string;
    minimum?: string;
}
export interface UpcomingMoviesQueryString extends Pageable, Translatable {
    region?: string;
}
