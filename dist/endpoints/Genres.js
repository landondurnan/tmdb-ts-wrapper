"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Genres = void 0;
const Endpoint_1 = __importDefault(require("./Endpoint"));
class Genres extends Endpoint_1.default {
    /**
     * Get Movie List
     *
     * Get the list of official genres for movies.
     *
     * {@link https://developers.themoviedb.org/3/genres/get-movie-list}
    */
    getMovieList(language) {
        return this._get("genre/movie/list", { language: language ? language : this.config.language });
    }
    /**
     * Get TV List
     *
     * Get the list of official genres for TV shows.
     *
     * {@link https://developers.themoviedb.org/3/genres/get-tv-list}
    */
    getTVList(language) {
        return this._get("genre/tv/list", { language: language ? language : this.config.language });
    }
}
exports.Genres = Genres;
//# sourceMappingURL=Genres.js.map