"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Accountv3 = void 0;
const Endpoint_1 = __importDefault(require("./Endpoint"));
class Accountv3 extends Endpoint_1.default {
    /**
     * Get Details
     *
     * Get Your Account Details.
     *
     * {@link https://developers.themoviedb.org/3/account/get-account-details}
     */
    getDetails(session_id) {
        return this._get("account", { session_id });
    }
    /**
     * Get Created Lists
     *
     * Get all of the lists created by an account. Will include private lists if you are the owner.
     *
     * {@link https://developers.themoviedb.org/3/account/get-created-lists}
     */
    getCreatedLists(account_id, queryString) {
        return this._get(`account/${account_id}/lists`, queryString);
    }
    /**
     * Get Favorite Movies
     *
     * Get the list of your favorite movies.
     *
     * {@link https://developers.themoviedb.org/3/account/get-favorite-movies}
     */
    getFavoriteMovies(account_id, queryString) {
        return this._get(`account/${account_id}/favorite/movies`, queryString);
    }
    /**
     * Get Favorite TV Shows
     *
     * Get the list of your favorite TV shows.
     *
     * {@link https://developers.themoviedb.org/3/account/get-favorite-tv-shows}
     */
    getFavoriteTVShows(account_id, queryString) {
        return this._get(`account/${account_id}/favorite/tv`, queryString);
    }
    /**
     * Mark as Favorite
     *
     * This method allows you to mark a movie or TV show as a favorite item.
     *
     * {@link https://developers.themoviedb.org/3/account/mark-as-favorite}
     */
    markAsFavorite(account_id, session_id, requestBody) {
        return this._post(`account/${account_id}/favorite`, requestBody, { session_id });
    }
    /**
     * Get Rated Movies
     *
     * Get a list of all the movies you have rated.
     *
     * {@link https://developers.themoviedb.org/3/account/get-rated-movies}
     */
    getRatedMovies(account_id, queryString) {
        return this._get(`account/${account_id}/rated/movies`, queryString);
    }
    /**
     * Get Rated TV Shows
     *
     * Get a list of all the TV shows you have rated.
     *
     * {@link https://developers.themoviedb.org/3/account/get-rated-tv-shows}
    */
    getRatedTVShows(account_id, queryString) {
        return this._get(`account/${account_id}/rated/tv`, queryString);
    }
    /**
     * Get Rated TV Episodes
     *
     * Get a list of all the TV episodes you have rated.
     *
     * {@link https://developers.themoviedb.org/3/account/get-rated-tv-episodes}
    */
    getRatedTVEpisodes(account_id, queryString) {
        return this._get(`account/${account_id}/rated/tv`, queryString);
    }
    /**
     * Get Movie Watchlist
     *
     * Get a list of all the movies you have added to your watchlist.
     *
     * {@link https://developers.themoviedb.org/3/account/get-movie-watchlist}
    */
    getMovieWatchlist(account_id, queryString) {
        return this._get(`account/${account_id}/watchlist/movies`, queryString);
    }
    /**
     * Get TV Show Watchlist
     *
     * Get a list of all the TV shows you have added to your watchlist.
     *
     * {@link https://developers.themoviedb.org/3/account/get-tv-show-watchlist}
    */
    getTVWatchlist(account_id, queryString) {
        return this._get(`account/${account_id}/watchlist/tv`, queryString);
    }
    /**
     * Add to Watchlist
     *
     * Add a movie or TV show to your watchlist.
     *
     * {@link https://developers.themoviedb.org/3/account/add-to-watchlist}
    */
    addToWatchlist(account_id, session_id, requestBody) {
        return this._post(`account/${account_id}/watchlist`, requestBody, { session_id });
    }
}
exports.Accountv3 = Accountv3;
//# sourceMappingURL=Accountv3.js.map