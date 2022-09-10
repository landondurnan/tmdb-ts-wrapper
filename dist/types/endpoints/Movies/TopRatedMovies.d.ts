import { MovieListResult } from ".";
import { Pageable, Paginated, Translatable } from "../../util";
export interface TopRatedMovies extends Paginated {
    results?: MovieListResult[];
}
export interface TopRatedMoviesQueryString extends Pageable, Translatable {
    region?: string;
}
