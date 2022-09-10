import { AcceptedLanguage, DeleteMovieQueryQueryString, DeleteMovieResponse, LatestMovie, Movie, MovieAccountStates, MovieAccountStatesQueryString, MovieAlternativeTitles, MovieAlternativeTitlesQueryString, MovieChanges, MovieChangesQueryString, MovieCredits, MovieExternalIds, MovieImages, MovieImagesQueryString, MovieKeywords, MovieLists, MovieListsQueryString, MovieRecommendations, MovieRecommendationsQueryString, MovieReleaseDates, MovieReviews, MovieReviewsQueryString, MovieTranslations, MovieVideos, MovieWatchProviders, NowPlaying, NowPlayingQueryString, PopularMovies, PopularMoviesQueryString, RateMovieQueryString, RateMovieResponse, SimilarMovies, SimilarMoviesQueryString, TopRatedMovies, TopRatedMoviesQueryString, UpcomingMovies, UpcomingMoviesQueryString } from "../types";
import Endpoint from "./Endpoint";
export declare class Movies extends Endpoint {
    /**
     * Get Details
     *
     * Get the primary information about a movie.
     *
     * {@link https://developers.themoviedb.org/3/movies/get-movie-details}
    */
    getDetails(movie_id: number, language?: AcceptedLanguage): Promise<Movie>;
    /**
     * Get Account States
     *
     * Grab the following account states for a session:
     * - Movie rating
     * - If it belongs to your watchlist
     * - If it belongs to your favorite list
     *
     * {@link https://developers.themoviedb.org/3/movies/get-movie-account-states}
    */
    getAccountStates(movie_id: number, queryString: MovieAccountStatesQueryString): Promise<MovieAccountStates>;
    /**
     * Get Alternative Titles
     *
     * Get all of the alternative titles for a movie.
     *
     * {@link https://developers.themoviedb.org/3/movies/get-movie-alternative-titles}
    */
    getAlternativeTitles(movie_id: number, queryString?: MovieAlternativeTitlesQueryString): Promise<MovieAlternativeTitles>;
    /**
     * Get Changes
     *
     * Get the changes for a movie. By default only the last 24 hours are returned.
     *
     * You can query up to 14 days in a single query by using the start_date and end_date query parameters.
     *
     * {@link https://developers.themoviedb.org/3/movies/get-movie-changes}
    */
    gteChanges(movie_id: number, queryString?: MovieChangesQueryString): Promise<MovieChanges>;
    /**
     * Get Credits
     *
     * Get the cast and crew for a movie.
     *
     * {@link https://developers.themoviedb.org/3/movies/get-movie-credits}
    */
    getCredits(movie_id: number, language?: AcceptedLanguage): Promise<MovieCredits>;
    /**
     * Get External Ids
     *
     * Get the external ids for a movie.
     *
     * {@link https://developers.themoviedb.org/3/movies/get-movie-external-ids}
    */
    getExternalIds(movie_id: number): Promise<MovieExternalIds>;
    /**
     * Get Images
     *
     * Get the images that belong to a movie.
     *
     * Querying images with a language parameter will filter the results.
     * If you want to include a fallback language (especially useful for backdrops) you can use the include_image_language parameter.
     * This should be a comma seperated value like so: include_image_language=en,null.
     *
     * {@link https://developers.themoviedb.org/3/movies/get-movie-images}
    */
    getImages(movie_id: number, queryString?: MovieImagesQueryString): Promise<MovieImages>;
    /**
     * Get Keywords
     *
     * Get the keywords that have been added to a movie.
     *
     * {@link https://developers.themoviedb.org/3/movies/get-movie-keywords}
    */
    getKeywords(movie_id: number): Promise<MovieKeywords>;
    /**
     * Get Lists
     *
     * Get a list of lists that this movie belongs to.
     *
     * {@link https://developers.themoviedb.org/3/movies/get-movie-lists}
    */
    getLists(movie_id: number, queryString?: MovieListsQueryString): Promise<MovieLists>;
    /**
     * Get Recommendations
     *
     * Get a list of recommended movies for a movie.
     *
     * {@link https://developers.themoviedb.org/3/movies/get-movie-recommendations}
    */
    getRecommendations(movie_id: number, queryString?: MovieRecommendationsQueryString): Promise<MovieRecommendations>;
    /**
     * Get Release Dates
     *
     * Get the release date along with the certification for a movie.
     *
     * Release dates support different types:
     * 1. Premiere
     * 2. Theatrical (limited)
     * 3. Theatrical
     * 4. Digital
     * 5. Physical
     * 6. TV
     *
     * {@link https://developers.themoviedb.org/3/movies/get-movie-release-dates}
    */
    getReleaseDates(movie_id: number): Promise<MovieReleaseDates>;
    /**
     * Get Reviews
     *
     * Get the user reviews for a movie.
     *
     * {@link https://developers.themoviedb.org/3/movies/get-movie-reviews}
    */
    getReviews(movie_id: number, queryString?: MovieReviewsQueryString): Promise<MovieReviews>;
    /**
     * Get Similar Movies
     *
     * Get a list of similar movies. This is not the same as the "Recommendation" system you see on the website.
     *
     * These items are assembled by looking at keywords and genres.
     *
     * {@link https://developers.themoviedb.org/3/movies/get-similar-movies}
    */
    getSimilarMovies(movie_id: number, queryString?: SimilarMoviesQueryString): Promise<SimilarMovies>;
    /**
     * Get Translations
     *
     * Get a list of translations that have been created for a movie.
     *
     * {@link https://developers.themoviedb.org/3/movies/get-movie-translations}
    */
    getTranslations(movie_id: number): Promise<MovieTranslations>;
    /**
     * Get Videos
     *
     * Get the videos that have been added to a movie.
     *
     * {@link https://developers.themoviedb.org/3/movies/get-movie-videos}
    */
    getVideos(movie_id: number, language?: AcceptedLanguage): Promise<MovieVideos>;
    /**
     * Get Watch Providers
     *
     * Powered by our partnership with JustWatch, you can query this method to get a list of the availabilities per country by provider.
     *
     * This is not going to return full deep links, but rather, it's just enough information to display what's available where.
     *
     * You can link to the provided TMDB URL to help support TMDB and provide the actual deep links to the content.
     *
     * Please note: In order to use this data you must attribute the source of the data as JustWatch. If we find any usage not complying with these terms we will revoke access to the API.
     *
     * {@link https://developers.themoviedb.org/3/movies/get-movie-watch-providers}
    */
    getWatchProviders(movie_id: number): Promise<MovieWatchProviders>;
    /**
     * Rate Movie
     *
     * Rate a movie.
     *
     * A valid session or guest session ID is required. You can read more about how this works [here]({@link https://developers.themoviedb.org/3/authentication/how-do-i-generate-a-session-id}).
     *
     * {@link https://developers.themoviedb.org/3/movies/rate-movie}
    */
    rateMovie(movie_id: number, value: number, queryString: RateMovieQueryString): Promise<RateMovieResponse>;
    /**
     * Delete Rating
     *
     * Remove your rating for a movie.
     *
     * A valid session or guest session ID is required. You can read more about how this works [here]({@link https://developers.themoviedb.org/3/authentication/how-do-i-generate-a-session-id}).
     *
     * {@link https://developers.themoviedb.org/3/movies/delete-movie-rating}
    */
    deleteMovieRating(movie_id: number, queryString: DeleteMovieQueryQueryString): Promise<DeleteMovieResponse>;
    /**
     * Get Latest
     *
     * Get the most newly created movie. This is a live response and will continuously change.
     *
     * {@link https://developers.themoviedb.org/3/movies/get-latest-movie}
    */
    getLatest(language?: AcceptedLanguage): Promise<LatestMovie>;
    /**
     * Get Now Playing
     *
     * Get a list of movies in theatres. This is a release type query that looks for all movies that have a release type of 2 or 3 within the specified date range.
     *
     * You can optionally specify a region prameter which will narrow the search to only look for theatrical release dates within the specified country.
     *
     * {@link https://developers.themoviedb.org/3/movies/get-now-playing}
    */
    getNowPlaying(queryString?: NowPlayingQueryString): Promise<NowPlaying>;
    /**
     * Get Popular
     *
     * Get a list of the current popular movies on TMDB. This list updates daily.
     *
     * {@link https://developers.themoviedb.org/3/movies/get-popular-movies}
    */
    getPopular(queryString?: PopularMoviesQueryString): Promise<PopularMovies>;
    /**
     * Get Top Rated
     *
     * Get the top rated movies on TMDB.
     *
     * {@link https://developers.themoviedb.org/3/movies/get-top-rated-movies}
    */
    getTopRated(queryString?: TopRatedMoviesQueryString): Promise<TopRatedMovies>;
    /**
     * Get Upcoming
     *
     * Get a list of upcoming movies in theatres. This is a release type query that looks for all movies that have a release type of 2 or 3 within the specified date range.
     *
     * You can optionally specify a region prameter which will narrow the search to only look for theatrical release dates within the specified country.
     *
     * {@link https://developers.themoviedb.org/3/movies/get-upcoming}
    */
    getUpcoming(queryString?: UpcomingMoviesQueryString): Promise<UpcomingMovies>;
}
