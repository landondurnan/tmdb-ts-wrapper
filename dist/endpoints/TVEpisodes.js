"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TVEpisodes = void 0;
const Endpoint_1 = __importDefault(require("./Endpoint"));
class TVEpisodes extends Endpoint_1.default {
    /**
     * Get Details
     *
     * Get the TV episode details by id.
     *
     * {@link https://developers.themoviedb.org/3/tv-episodes/get-tv-episode-details}
    */
    getDetails(tv_id, season_number, episode_number, language) {
        return this._get(`tv/${tv_id}/season/${season_number}/episode/${episode_number}`, { language: language ? language : this.config.language });
    }
    /**
     * Get Account States
     *
     * Get your rating for a episode.
     *
     * {@link https://developers.themoviedb.org/3/tv-episodes/get-tv-episode-account-states}
    */
    getAccountStates(tv_id, season_number, episode_number) {
        return this._get(`tv/${tv_id}/season/${season_number}/episode/${episode_number}/account_states`);
    }
    /**
     * Get Changes
     *
     * Get the changes for a TV episode. By default only the last 24 hours are returned.
     *
     * You can query up to 14 days in a single query by using the start_date and end_date query parameters.
     *
     * {@link https://developers.themoviedb.org/3/tv-episodes/get-tv-episode-changes}
    */
    getChanges(episode_id, queryString) {
        return this._get(`tv/episode/${episode_id}/changes`, queryString);
    }
    /**
     * Get Credits
     *
     * Get the credits (cast, crew and guest stars) for a TV episode.
     *
     * {@link https://developers.themoviedb.org/3/tv-episodes/get-tv-episode-credits}
    */
    getCredits(tv_id, season_number, episode_number, language) {
        return this._get(`tv/${tv_id}/season/${season_number}/episode/${episode_number}/credits`, { language: language ? language : this.config.language });
    }
    /**
     * Get External Ids
     *
     * Get the external ids for a TV episode. Supports IMDB ID and TVDB ID.
     *
     * {@link https://developers.themoviedb.org/3/tv-episodes/get-tv-episode-external-ids}
    */
    getExternalIds(tv_id, season_number, episode_number) {
        return this._get(`tv/${tv_id}/season/${season_number}/episode/${episode_number}/external_ids`);
    }
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
    getImages(tv_id, season_number, episode_number) {
        return this._get(`tv/${tv_id}/season/${season_number}/episode/${episode_number}/images`);
    }
    /**
     * Get Translations
     *
     * Get the translation data for an episode.
     *
     * {@link https://developers.themoviedb.org/3/tv-episodes/get-tv-episode-translations}
    */
    getTranslations(tv_id, season_number, episode_number) {
        return this._get(`tv/${tv_id}/season/${season_number}/episode/${episode_number}/translations`);
    }
    /**
     * Rate TV Episode
     *
     * Rate a TV episode.
     *
     * A valid session or guest session ID is required. You can read more about how this works [here]({@link https://developers.themoviedb.org/3/authentication/how-do-i-generate-a-session-id}).
     *
     * {@link https://developers.themoviedb.org/3/tv-episodes/rate-tv-episode}
    */
    rateTVEpisode(tv_id, season_number, episode_number, value, queryString) {
        return this._post(`tv/${tv_id}/season/${season_number}/episode/${episode_number}/rating`, { value }, queryString);
    }
    /**
     * Delete Rating
     *
     * Remove your rating for a TV episode.
     *
     * A valid session or guest session ID is required. You can read more about how this works [here]({@link https://developers.themoviedb.org/3/authentication/how-do-i-generate-a-session-id}).
     * {@link https://developers.themoviedb.org/3/tv-episodes/get-tv-episode-translations}
    */
    deleteRating(tv_id, season_number, episode_number, queryString) {
        return this._delete(`tv/${tv_id}/season/${season_number}/episode/${episode_number}/rating`, undefined, queryString);
    }
    /**
     * Get Videos
     *
     * Get the videos that have been added to a TV episode.
     *
     * {@link https://developers.themoviedb.org/3/tv-episodes/get-tv-episode-videos}
    */
    getVideos(tv_id, season_number, episode_number, language) {
        return this._get(`tv/${tv_id}/season/${season_number}/episode/${episode_number}/videos`, { language: language ? language : this.config.language });
    }
}
exports.TVEpisodes = TVEpisodes;
//# sourceMappingURL=TVEpisodes.js.map