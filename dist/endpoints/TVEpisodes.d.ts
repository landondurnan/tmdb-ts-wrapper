import { AcceptedLanguage, DeleteTVEpisodeRatingQueryString, DeleteTVEpisodeRatingResponse, RateTVEpisodeQueryString, RateTVEpisodeResponse, TVEpisode, TVEpisodeAccountStates, TVEpisodeChanges, TVEpisodeChangesQueryString, TVEpisodeCredits, TVEpisodeExternalIds, TVEpisodeImages, TVEpisodeTranslations, TVEpisodeVideos } from "../types";
import Endpoint from "./Endpoint";
export declare class TVEpisodes extends Endpoint {
    /**
     * Get Details
     *
     * Get the TV episode details by id.
     *
     * {@link https://developers.themoviedb.org/3/tv-episodes/get-tv-episode-details}
    */
    getDetails(tv_id: number, season_number: number, episode_number: number, language?: AcceptedLanguage): Promise<TVEpisode>;
    /**
     * Get Account States
     *
     * Get your rating for a episode.
     *
     * {@link https://developers.themoviedb.org/3/tv-episodes/get-tv-episode-account-states}
    */
    getAccountStates(tv_id: number, season_number: number, episode_number: number): Promise<TVEpisodeAccountStates>;
    /**
     * Get Changes
     *
     * Get the changes for a TV episode. By default only the last 24 hours are returned.
     *
     * You can query up to 14 days in a single query by using the start_date and end_date query parameters.
     *
     * {@link https://developers.themoviedb.org/3/tv-episodes/get-tv-episode-changes}
    */
    getChanges(episode_id?: number, queryString?: TVEpisodeChangesQueryString): Promise<TVEpisodeChanges>;
    /**
     * Get Credits
     *
     * Get the credits (cast, crew and guest stars) for a TV episode.
     *
     * {@link https://developers.themoviedb.org/3/tv-episodes/get-tv-episode-credits}
    */
    getCredits(tv_id: number, season_number: number, episode_number: number, language?: AcceptedLanguage): Promise<TVEpisodeCredits>;
    /**
     * Get External Ids
     *
     * Get the external ids for a TV episode. Supports IMDB ID and TVDB ID.
     *
     * {@link https://developers.themoviedb.org/3/tv-episodes/get-tv-episode-external-ids}
    */
    getExternalIds(tv_id: number, season_number: number, episode_number: number): Promise<TVEpisodeExternalIds>;
    /**
     * Get Images
     *
     * Get the images that belong to a TV episode.
     *
     * There are two image formats that are supported for companies, PNG's and SVG's.
     * You can see which type the original file is by looking at the file_type field.
     * We prefer SVG's as they are resolution independent and as such, the width and height are only there to reflect the original asset that was uploaded.
     * An SVG can be scaled properly beyond those dimensions if you call them as a PNG.
     *
     * For more information about how SVG's and PNG's can be used, take a read through [this document]({@link https://developers.themoviedb.org/3/getting-started/images}).
     *
     * {@link https://developers.themoviedb.org/3/companies/get-tv-episode-images}
    */
    getImages(tv_id: number, season_number: number, episode_number: number): Promise<TVEpisodeImages>;
    /**
     * Get Translations
     *
     * Get the translation data for an episode.
     *
     * {@link https://developers.themoviedb.org/3/tv-episodes/get-tv-episode-translations}
    */
    getTranslations(tv_id: number, season_number: number, episode_number: number): Promise<TVEpisodeTranslations>;
    /**
     * Rate TV Episode
     *
     * Rate a TV episode.
     *
     * A valid session or guest session ID is required. You can read more about how this works [here]({@link https://developers.themoviedb.org/3/authentication/how-do-i-generate-a-session-id}).
     *
     * {@link https://developers.themoviedb.org/3/tv-episodes/rate-tv-episode}
    */
    rateTVEpisode(tv_id: number, season_number: number, episode_number: number, value: number, queryString: RateTVEpisodeQueryString): Promise<RateTVEpisodeResponse>;
    /**
     * Delete Rating
     *
     * Remove your rating for a TV episode.
     *
     * A valid session or guest session ID is required. You can read more about how this works [here]({@link https://developers.themoviedb.org/3/authentication/how-do-i-generate-a-session-id}).
     * {@link https://developers.themoviedb.org/3/tv-episodes/get-tv-episode-translations}
    */
    deleteRating(tv_id: number, season_number: number, episode_number: number, queryString: DeleteTVEpisodeRatingQueryString): Promise<DeleteTVEpisodeRatingResponse>;
    /**
     * Get Videos
     *
     * Get the videos that have been added to a TV episode.
     *
     * {@link https://developers.themoviedb.org/3/tv-episodes/get-tv-episode-videos}
    */
    getVideos(tv_id: number, season_number: number, episode_number: number, language?: AcceptedLanguage): Promise<TVEpisodeVideos>;
}
