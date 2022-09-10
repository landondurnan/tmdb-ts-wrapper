import { Accountv4FavoriteMovies, Accountv4FavoriteMoviesQueryString, Accountv4FavoriteTVShows, Accountv4FavoriteTVShowsQueryString, Accountv4Lists, Accountv4MovieRecommendations, Accountv4MovieRecommendationsQueryString, Accountv4MovieWatchlist, Accountv4MovieWatchlistQueryString, Accountv4RatedMovies, Accountv4RatedMoviesQueryString, Accountv4RatedTVShows, Accountv4RatedTVShowsQueryString, Accountv4TVShowRecommendations, Accountv4TVShowRecommendationsQueryString, Accountv4TVShowWatchlist, Accountv4TVShowWatchlistQueryString } from "../types";
import Endpoint from "./Endpoint";
export declare class Accountv4 extends Endpoint {
    /**
    * Get Lists
    *
    * Get all the lists you've created.
    *
    * {@link https://developers.themoviedb.org/4/account/get-account-lists}
    */
    getLists(account_id: string, page?: number): Promise<Accountv4Lists>;
    /**
    * Get Favorite Movies
    *
    * Get the list of movies you have marked as a favorite.
    *
    * {@link https://developers.themoviedb.org/4/account/get-account-favorite-movies}
    */
    getFavoriteMovies(account_id: string, queryString?: Accountv4FavoriteMoviesQueryString): Promise<Accountv4FavoriteMovies>;
    /**
    * Get Favorite TV Shows
    *
    * Get the list of TV shows you have marked as a favorite.
    *
    * {@link https://developers.themoviedb.org/4/account/get-account-favorite-tv-shows}
    */
    getFavoriteTVShows(account_id: string, queryString?: Accountv4FavoriteTVShowsQueryString): Promise<Accountv4FavoriteTVShows>;
    /**
    * Get Movie Recommendations
    *
    * Get the list of your personal movie recommendations.
    *
    * {@link https://developers.themoviedb.org/4/account/get-account-movie-recommendations}
    */
    getMovieRecommendations(account_id: string, queryString?: Accountv4MovieRecommendationsQueryString): Promise<Accountv4MovieRecommendations>;
    /**
    * Get TV Show Recommendations
    *
    * Get the list of your personal TV show recommendations.
    *
    * {@link https://developers.themoviedb.org/4/account/get-account-tv-show-recommendations}
    */
    getTVShowRecommendations(account_id: string, queryString?: Accountv4TVShowRecommendationsQueryString): Promise<Accountv4TVShowRecommendations>;
    /**
    * Get Movie Watchlist
    *
    * Get the list of movies you have added to your watchlist.
    *
    * {@link https://developers.themoviedb.org/4/account/get-account-movie-watchlist}
    */
    getMovieWatchlist(account_id: string, queryString?: Accountv4MovieWatchlistQueryString): Promise<Accountv4MovieWatchlist>;
    /**
    * Get TV Show Watchlist
    *
    * Get the list of TV shows you have added to your watchlist.
    *
    * {@link https://developers.themoviedb.org/4/account/get-account-tv-show-watchlist}
    */
    getTVShowWatchlist(account_id: string, queryString?: Accountv4TVShowWatchlistQueryString): Promise<Accountv4TVShowWatchlist>;
    /**
    * Get Rated Movie
    *
    * Get the list of movies you have rated.
    *
    * {@link https://developers.themoviedb.org/4/account/get-account-rated-movies}
    */
    getRatedMovies(account_id: string, queryString?: Accountv4RatedMoviesQueryString): Promise<Accountv4RatedMovies>;
    /**
    * Get Rated TV Shows
    *
    * Get the list of TV shows you have rated.
    *
    * {@link https://developers.themoviedb.org/4/account/get-account-rated-tv-shows}
    */
    getRatedTVShows(account_id: string, queryString?: Accountv4RatedTVShowsQueryString): Promise<Accountv4RatedTVShows>;
}
