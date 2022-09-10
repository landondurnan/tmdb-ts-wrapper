"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Accountv4 = void 0;
const Endpoint_1 = __importDefault(require("./Endpoint"));
class Accountv4 extends Endpoint_1.default {
    /**
    * Get Lists
    *
    * Get all the lists you've created.
    *
    * {@link https://developers.themoviedb.org/4/account/get-account-lists}
    */
    getLists(account_id, page) {
        return this._get(`account/${account_id}/lists`, page && { page });
    }
    /**
    * Get Favorite Movies
    *
    * Get the list of movies you have marked as a favorite.
    *
    * {@link https://developers.themoviedb.org/4/account/get-account-favorite-movies}
    */
    getFavoriteMovies(account_id, queryString) {
        return this._get(`account/${account_id}/movie/favorites`, queryString);
    }
    /**
    * Get Favorite TV Shows
    *
    * Get the list of TV shows you have marked as a favorite.
    *
    * {@link https://developers.themoviedb.org/4/account/get-account-favorite-tv-shows}
    */
    getFavoriteTVShows(account_id, queryString) {
        return this._get(`account/${account_id}/tv/favorites`, queryString);
    }
    /**
    * Get Movie Recommendations
    *
    * Get the list of your personal movie recommendations.
    *
    * {@link https://developers.themoviedb.org/4/account/get-account-movie-recommendations}
    */
    getMovieRecommendations(account_id, queryString) {
        return this._get(`account/${account_id}/movie/recommendations`, queryString);
    }
    /**
    * Get TV Show Recommendations
    *
    * Get the list of your personal TV show recommendations.
    *
    * {@link https://developers.themoviedb.org/4/account/get-account-tv-show-recommendations}
    */
    getTVShowRecommendations(account_id, queryString) {
        return this._get(`account/${account_id}/tv/recommendations`, queryString);
    }
    /**
    * Get Movie Watchlist
    *
    * Get the list of movies you have added to your watchlist.
    *
    * {@link https://developers.themoviedb.org/4/account/get-account-movie-watchlist}
    */
    getMovieWatchlist(account_id, queryString) {
        return this._get(`account/${account_id}/movie/watchlist`, queryString);
    }
    /**
    * Get TV Show Watchlist
    *
    * Get the list of TV shows you have added to your watchlist.
    *
    * {@link https://developers.themoviedb.org/4/account/get-account-tv-show-watchlist}
    */
    getTVShowWatchlist(account_id, queryString) {
        return this._get(`account/${account_id}/tv/watchlist`, queryString);
    }
    /**
    * Get Rated Movie
    *
    * Get the list of movies you have rated.
    *
    * {@link https://developers.themoviedb.org/4/account/get-account-rated-movies}
    */
    getRatedMovies(account_id, queryString) {
        return this._get(`account/${account_id}/movie/rated`, queryString);
    }
    /**
    * Get Rated TV Shows
    *
    * Get the list of TV shows you have rated.
    *
    * {@link https://developers.themoviedb.org/4/account/get-account-rated-tv-shows}
    */
    getRatedTVShows(account_id, queryString) {
        return this._get(`account/${account_id}/tv/rated`, queryString);
    }
}
exports.Accountv4 = Accountv4;
//# sourceMappingURL=Accountv4.js.map