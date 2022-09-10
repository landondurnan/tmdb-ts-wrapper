import { GuestSessionRatedMovies, GuestSessionRatedMoviesQueryString, GuestSessionRatedTVEpisodes, GuestSessionRatedTVEpisodesQueryString, GuestSessionRatedTVShows, GuestSessionRatedTVShowsQueryString } from "../types";
import Endpoint from "./Endpoint";
export declare class GuestSessions extends Endpoint {
    /**
     * Get Rated Movies
     *
     * Get the rated movies for a guest session.
     *
     * {@link https://developers.themoviedb.org/3/guest-sessions/get-guest-session-rated-movies}
    */
    getRatedMovies(guest_session_id: string, queryString?: GuestSessionRatedMoviesQueryString): Promise<GuestSessionRatedMovies>;
    /**
     * Get Rated TV Shows
     *
     * Get the rated TV shows for a guest session.
     *
     * {@link https://developers.themoviedb.org/3/guest-sessions/get-guest-session-rated-tv-shows}
    */
    getRatedTVShows(guest_session_id: string, queryString?: GuestSessionRatedTVShowsQueryString): Promise<GuestSessionRatedTVShows>;
    /**
     * Get Rated TV Episodes
     *
     * Get the rated TV episodes for a guest session.
     *
     * {@link https://developers.themoviedb.org/3/guest-sessions/get-guest-session-rated-tv-episodes}
    */
    getRatedTVEpisodes(guest_session_id: string, queryString?: GuestSessionRatedTVEpisodesQueryString): Promise<GuestSessionRatedTVEpisodes>;
}
