import { Accountv3AddToWatchlistRequestBody, Accountv3AddToWatchlistResponse, Accountv3FavoriteMovies, Accountv3FavoriteMoviesQueryString, Accountv3FavoriteTVShows, Accountv3FavoriteTVShowsQueryString, Accountv3Lists, Accountv3ListsQueryString, Accountv3MarkAsFavoriteRequestBody, Accountv3MarkAsFavoriteResponse, Accountv3MovieWatchlist, Accountv3MovieWatchlistQueryString, Accountv3RatedMovies, Accountv3RatedMoviesQueryString, Accountv3RatedTVShowEpisodes, Accountv3RatedTVShowEpisodesQueryString, Accountv3RatedTVShows, Accountv3RatedTVShowsQueryString, Accountv3TVWatchlist, Accountv3TVWatchlistQueryString } from '../types';
import Endpoint from './Endpoint';
export declare class Accountv3 extends Endpoint {
    /**
     * Get Details
     *
     * Get Your Account Details.
     *
     * {@link https://developers.themoviedb.org/3/account/get-account-details}
     */
    getDetails(session_id: string): Promise<Accountv3>;
    /**
     * Get Created Lists
     *
     * Get all of the lists created by an account. Will include private lists if you are the owner.
     *
     * {@link https://developers.themoviedb.org/3/account/get-created-lists}
     */
    getCreatedLists(account_id: number, queryString: Accountv3ListsQueryString): Promise<Accountv3Lists>;
    /**
     * Get Favorite Movies
     *
     * Get the list of your favorite movies.
     *
     * {@link https://developers.themoviedb.org/3/account/get-favorite-movies}
     */
    getFavoriteMovies(account_id: number, queryString: Accountv3FavoriteMoviesQueryString): Promise<Accountv3FavoriteMovies>;
    /**
     * Get Favorite TV Shows
     *
     * Get the list of your favorite TV shows.
     *
     * {@link https://developers.themoviedb.org/3/account/get-favorite-tv-shows}
     */
    getFavoriteTVShows(account_id: number, queryString: Accountv3FavoriteTVShowsQueryString): Promise<Accountv3FavoriteTVShows>;
    /**
     * Mark as Favorite
     *
     * This method allows you to mark a movie or TV show as a favorite item.
     *
     * {@link https://developers.themoviedb.org/3/account/mark-as-favorite}
     */
    markAsFavorite(account_id: number, session_id: string, requestBody: Accountv3MarkAsFavoriteRequestBody): Promise<Accountv3MarkAsFavoriteResponse>;
    /**
     * Get Rated Movies
     *
     * Get a list of all the movies you have rated.
     *
     * {@link https://developers.themoviedb.org/3/account/get-rated-movies}
     */
    getRatedMovies(account_id: number, queryString: Accountv3RatedMoviesQueryString): Promise<Accountv3RatedMovies>;
    /**
     * Get Rated TV Shows
     *
     * Get a list of all the TV shows you have rated.
     *
     * {@link https://developers.themoviedb.org/3/account/get-rated-tv-shows}
    */
    getRatedTVShows(account_id: number, queryString: Accountv3RatedTVShowsQueryString): Promise<Accountv3RatedTVShows>;
    /**
     * Get Rated TV Episodes
     *
     * Get a list of all the TV episodes you have rated.
     *
     * {@link https://developers.themoviedb.org/3/account/get-rated-tv-episodes}
    */
    getRatedTVEpisodes(account_id: number, queryString: Accountv3RatedTVShowEpisodesQueryString): Promise<Accountv3RatedTVShowEpisodes>;
    /**
     * Get Movie Watchlist
     *
     * Get a list of all the movies you have added to your watchlist.
     *
     * {@link https://developers.themoviedb.org/3/account/get-movie-watchlist}
    */
    getMovieWatchlist(account_id: number, queryString: Accountv3MovieWatchlistQueryString): Promise<Accountv3MovieWatchlist>;
    /**
     * Get TV Show Watchlist
     *
     * Get a list of all the TV shows you have added to your watchlist.
     *
     * {@link https://developers.themoviedb.org/3/account/get-tv-show-watchlist}
    */
    getTVWatchlist(account_id: number, queryString: Accountv3TVWatchlistQueryString): Promise<Accountv3TVWatchlist>;
    /**
     * Add to Watchlist
     *
     * Add a movie or TV show to your watchlist.
     *
     * {@link https://developers.themoviedb.org/3/account/add-to-watchlist}
    */
    addToWatchlist(account_id: number, session_id: string, requestBody: Accountv3AddToWatchlistRequestBody): Promise<Accountv3AddToWatchlistResponse>;
}
