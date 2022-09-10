"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuestSessions = void 0;
const Endpoint_1 = __importDefault(require("./Endpoint"));
class GuestSessions extends Endpoint_1.default {
    /**
     * Get Rated Movies
     *
     * Get the rated movies for a guest session.
     *
     * {@link https://developers.themoviedb.org/3/guest-sessions/get-guest-session-rated-movies}
    */
    getRatedMovies(guest_session_id, queryString) {
        return this._get(`guest_session/${guest_session_id}/rated/tv/episodes`, this.applyTranslation(queryString));
    }
    /**
     * Get Rated TV Shows
     *
     * Get the rated TV shows for a guest session.
     *
     * {@link https://developers.themoviedb.org/3/guest-sessions/get-guest-session-rated-tv-shows}
    */
    getRatedTVShows(guest_session_id, queryString) {
        return this._get(`guest_session/${guest_session_id}/rated/tv`, this.applyTranslation(queryString));
    }
    /**
     * Get Rated TV Episodes
     *
     * Get the rated TV episodes for a guest session.
     *
     * {@link https://developers.themoviedb.org/3/guest-sessions/get-guest-session-rated-tv-episodes}
    */
    getRatedTVEpisodes(guest_session_id, queryString) {
        return this._get(`guest_session/${guest_session_id}/rated/tv/episodes`, this.applyTranslation(queryString));
    }
}
exports.GuestSessions = GuestSessions;
//# sourceMappingURL=GuestSessions.js.map