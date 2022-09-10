"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Changes = void 0;
const Endpoint_1 = __importDefault(require("./Endpoint"));
class Changes extends Endpoint_1.default {
    /**
     * Get Movie Change List
     *
     * Get a list of all of the movie ids that have been changed in the past 24 hours.
     *
     * You can query it for up to 14 days worth of changed IDs at a time with the start_date and end_date query parameters. 100 items are returned per page.
     *
     * {@link https://developers.themoviedb.org/3/changes/get-movie-change-list}
    */
    getMovieChangeList(queryString) {
        return this._get("movie/changes", queryString);
    }
    /**
     * Get TV Change List
     *
     * Get a list of all of the TV show ids that have been changed in the past 24 hours.
     *
     * You can query it for up to 14 days worth of changed IDs at a time with the start_date and end_date query parameters. 100 items are returned per page.
     *
     * {@link https://developers.themoviedb.org/3/changes/get-tv-change-list}
    */
    getTVChangeList(queryString) {
        return this._get("tv/changes", queryString);
    }
    /**
     * Get Person Change List
     *
     * Get a list of all of the person ids that have been changed in the past 24 hours.
     *
     * You can query it for up to 14 days worth of changed IDs at a time with the start_date and end_date query parameters. 100 items are returned per page.
     *
     * {@link https://developers.themoviedb.org/3/changes/get-person-change-list}
    */
    getPersonChangeList(queryString) {
        return this._get("person/changes", queryString);
    }
}
exports.Changes = Changes;
//# sourceMappingURL=Changes.js.map