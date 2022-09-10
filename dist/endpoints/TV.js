"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TV = void 0;
const Endpoint_1 = __importDefault(require("./Endpoint"));
class TV extends Endpoint_1.default {
    /**
     * Get Details
     *
     * Get the primary TV show details by id.
     *
     * {@link https://developers.themoviedb.org/3/tv/get-tv-details}
    */
    getDetails(tv_id, language) {
        return this._get(`tv/${tv_id}`, { language: language ? language : this.config.language });
    }
    /**
     * Get Account States
     *
     * Grab the following account states for a session:
     *  - TV show rating
     *  - If it belongs to your watchlist
     *  - If it belongs to your favorite list
     *
     * {@link https://developers.themoviedb.org/3/tv/get-tv-account-states}
    */
    getAccountStates(tv_id, queryString) {
        return this._get(`tv/${tv_id}/account_states`, this.applyTranslation(queryString));
    }
    /**
     * Get Aggregrate Credits
     *
     * Get the aggregate credits (cast and crew) that have been added to a TV show.
     *
     * This call differs from the main credits call in that it does not return the newest season but rather, is a view of all the entire cast & crew for all episodes belonging to a TV show.
     *
     * {@link https://developers.themoviedb.org/3/tv/get-tv-aggregate-credits}
    */
    getAggregrateCredits(tv_id, language) {
        return this._get(`tv/${tv_id}/aggregrate_credits`, { language: language ? language : this.config.language });
    }
    /**
     * Get Alternative Titles
     *
     * Returns all of the alternative titles for a TV show.
     *
     * {@link https://developers.themoviedb.org/3/tv/get-tv-alternative-titles}
    */
    getAlternativeTitles(tv_id, language) {
        return this._get(`tv/${tv_id}/alternative_titles`, { language: language ? language : this.config.language });
    }
    /**
     * Get Changes
     *
     * Get the changes for a TV show. By default only the last 24 hours are returned.
     *
     * You can query up to 14 days in a single query by using the start_date and end_date query parameters.
     *
     * TV show changes are different than movie changes in that there are some edits on seasons and episodes that will create a change entry at the show level.
     * These can be found under the season and episode keys.
     * These keys will contain a series_id and episode_id.
     * You can use the [season changes]({@link https://developers.themoviedb.org/3/tv-seasons/get-tv-season-changes}) and [episode changes]({@link https://developers.themoviedb.org/3/tv-episodes/get-tv-episode-changes}) methods to look these up individually.
     *
     * {@link https://developers.themoviedb.org/3/tv/get-tv-changes}
    */
    getChanges(tv_id, queryString) {
        return this._get(`tv/${tv_id}/changes`, queryString);
    }
    /**
     * Get Content Ratings
     *
     * Get the list of content ratings (certifications) that have been added to a TV show.
     *
     * {@link https://developers.themoviedb.org/3/tv/get-tv-content-ratings}
    */
    getContentRatings(tv_id, language) {
        return this._get(`tv/${tv_id}/content_ratings`, { language: language ? language : this.config.language });
    }
    /**
     * Get Credits
     *
     * Get the credits (cast and crew) that have been added to a TV show.
     *
     * {@link https://developers.themoviedb.org/3/tv/get-tv-credits}
    */
    getCredits(tv_id, language) {
        return this._get(`tv/${tv_id}/credits`, { language: language ? language : this.config.language });
    }
    /**
     * Get Episode Groups
     *
     * Get all of the episode groups that have been created for a TV show.
     * With a group ID you can call the [get TV episode group details]({@link https://developers.themoviedb.org/3/tv-episode-groups/get-tv-episode-group-details}) method.
     *
     * {@link https://developers.themoviedb.org/3/tv/get-tv-episode-groups}
    */
    getEpisodeGroups(tv_id, language) {
        return this._get(`tv/${tv_id}/episode_groups`, { language: language ? language : this.config.language });
    }
    /**
     * Get External Ids
     *
     * Get the external ids for a TV show.
     *
     * {@link https://developers.themoviedb.org/3/tv/get-tv-external-ids}
    */
    getExternalIds(tv_id, language) {
        return this._get(`tv/${tv_id}/external_ids`, { language: language ? language : this.config.language });
    }
    /**
     * Get Images
     *
     * Get the images that belong to a TV show.
     *
     * Querying images with a language parameter will filter the results.
     * If you want to include a fallback language (especially useful for backdrops) you can use the include_image_language parameter.
     * This should be a comma seperated value like so: include_image_language=en,null.
     *
     * {@link https://developers.themoviedb.org/3/tv/get-tv-images}
    */
    getImages(tv_id, language) {
        return this._get(`tv/${tv_id}/images`, { language: language ? language : this.config.language });
    }
    /**
     * Get Keywords
     *
     * Get the keywords that have been added to a TV show.
     *
     * {@link https://developers.themoviedb.org/3/tv/get-tv-keywords}
    */
    getKeywords(tv_id) {
        return this._get(`tv/${tv_id}/keywords`);
    }
    /**
     * Get Recommendations
     *
     * Get the list of TV show recommendations for this item.
     *
     * {@link https://developers.themoviedb.org/3/tv/get-tv-recommendations}
    */
    getRecommendations(tv_id, queryString) {
        return this._get(`tv/${tv_id}/recommendations`, this.applyTranslation(queryString));
    }
    /**
     * Get Reviews
     *
     * Get the reviews for a TV show.
     *
     * {@link https://developers.themoviedb.org/3/tv/get-tv-reviews}
    */
    getReviews(tv_id, queryString) {
        return this._get(`tv/${tv_id}/reviews`, this.applyTranslation(queryString));
    }
    /**
     * Get Screened Theatrically
     *
     * Get a list of seasons or episodes that have been screened in a film festival or theatre.
     *
     * {@link https://developers.themoviedb.org/3/tv/get-screened-theatrically}
    */
    getScreenedTheatrically(tv_id) {
        return this._get(`tv/${tv_id}/screened_theatrically`);
    }
    /**
     * Get Similar TV Shows
     *
     * Get a list of similar TV shows. These items are assembled by looking at keywords and genres.
     *
     * {@link https://developers.themoviedb.org/3/tv/get-similar-tv-shows}
    */
    getSimilarTVShows(tv_id, queryString) {
        return this._get(`tv/${tv_id}/similar`, this.applyTranslation(queryString));
    }
    /**
     * Get Translations
     *
     * Get a list of the translations that exist for a TV show.
     *
     * {@link https://developers.themoviedb.org/3/tv/get-tv-translations}
    */
    getTranslations(tv_id) {
        return this._get(`tv/${tv_id}/translations`);
    }
    /**
     * Get Videos
     *
     * Get the videos that have been added to a TV show.
     *
     * {@link https://developers.themoviedb.org/3/tv/get-tv-videos}
    */
    getVideos(tv_id, language) {
        return this._get(`tv/${tv_id}/videos`, { language: language ? language : this.config.language });
    }
    /**
     * Get Watch Providers
     *
     * Powered by our partnership with JustWatch, you can query this method to get a list of the availabilities per country by provider.
     *
     * This is not going to return full deep links, but rather, it's just enough information to display what's available where.
     *
     * You can link to the provided TMDB URL to help support TMDB and provide the actual deep links to the content.
     *
     * Please note: In order to use this data you must attribute the source of the data as JustWatch. If we find any usage not complying with these terms we will revoke access to the API.
     *
     * {@link https://developers.themoviedb.org/3/tv/get-tv-watch-providers}
    */
    getWatchProviders(tv_id) {
        return this._get(`tv/${tv_id}/watch/providers`);
    }
    /**
     * Rate TV Show
     *
     * Rate a TV show.
     *
     * A valid session or guest session ID is required. You can read more about how this works [here]({@link https://developers.themoviedb.org/3/authentication/how-do-i-generate-a-session-id}).
     *
     * {@link https://developers.themoviedb.org/3/tv/rate-tv-show}
    */
    rateTVShow(tv_id, value, queryString) {
        return this._post(`tv/${tv_id}/rating`, { value }, queryString);
    }
    /**
     * Delete Rating
     *
     * Remove your rating for a TV show.
     *
     * A valid session or guest session ID is required. You can read more about how this works [here]({@link https://developers.themoviedb.org/3/authentication/how-do-i-generate-a-session-id}).
     *
     * {@link https://developers.themoviedb.org/3/tv/delete-tv-show-rating}
    */
    deleteTVShowRating(tv_id, queryString) {
        return this._delete(`tv/${tv_id}/rating`, undefined, queryString);
    }
    /**
     * Get Latest
     *
     * Get the most newly created TV show. This is a live response and will continuously change.
     *
     * {@link https://developers.themoviedb.org/3/tv/get-latest-tvs}
    */
    getLatest(language) {
        return this._get(`tv/latest`, { language: language ? language : this.config.language });
    }
    /**
     * Get TV Airing Today
     *
     * Get a list of TV shows that are airing today. This query is purely day based as we do not currently support airing times.
     *
     * You can specify a timezone to offset the day calculation. Without a specified timezone, this query defaults to EST (Eastern Time UTC-05:00).
     *
     * {@link https://developers.themoviedb.org/3/tv/get-tv-airing-today}
    */
    getTVAiringToday(queryString) {
        return this._get(`tv/airing_today`, this.applyTranslation(queryString));
    }
    /**
     * Get TV On The Air
     *
     * Get a list of shows that are currently on the air.
     *
     * This query looks for any TV show that has an episode with an air date in the next 7 days.
     *
     * {@link https://developers.themoviedb.org/3/tv/get-tv-on-the-air}
    */
    getTVOnTheAir(queryString) {
        return this._get(`tv/on_the_air`, this.applyTranslation(queryString));
    }
    /**
     * Get Popular
     *
     * Get a list of the current popular TV shows on TMDB. This list updates daily.
     *
     * {@link https://developers.themoviedb.org/3/tv/get-popular-tv-shows}
    */
    getPopular(queryString) {
        return this._get(`tv/popular`, this.applyTranslation(queryString));
    }
    /**
     * Get Top Rated
     *
     * Get a list of the top rated TV shows on TMDB.
     *
     * {@link https://developers.themoviedb.org/3/tv/get-top-rated-tv}
    */
    getTopRated(queryString) {
        return this._get(`tv/top_rated`, this.applyTranslation(queryString));
    }
}
exports.TV = TV;
//# sourceMappingURL=TV.js.map