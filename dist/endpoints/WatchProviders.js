"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WatchProviders = void 0;
const Endpoint_1 = __importDefault(require("./Endpoint"));
class WatchProviders extends Endpoint_1.default {
    /**
     * Get Available Regions
     *
     * Returns a list of all of the countries we have watch provider (OTT/streaming) data for.
     *
     * {@link https://developers.themoviedb.org/3/watch-providers/get-available-regions}
     */
    getAvailableRegions(language) {
        return this._get(`watch/providers/regions`, { language: language ? language : this.config.language });
    }
    /**
     * Get Movie Providers
     *
     * Returns a list of the watch provider (OTT/streaming) data we have available for movies. You can specify a watch_region param if you want to further filter the list by country.
     *
     * {@link https://developers.themoviedb.org/3/watch-providers/get-movie-providers}
     */
    getMovieProviders(queryString) {
        return this._get(`watch/providers/movie`, this.applyTranslation(queryString));
    }
    /**
     * Get TV Providers.
     *
     * Returns a list of the watch provider (OTT/streaming) data we have available for TV series. You can specify a watch_region param if you want to further filter the list by country.
     *
     * {@link https://developers.themoviedb.org/3/watch-providers/get-tv-providers}
     */
    getTVProviders(queryString) {
        return this._get(`watch/providers/tv`, this.applyTranslation(queryString));
    }
}
exports.WatchProviders = WatchProviders;
//# sourceMappingURL=WatchProviders.js.map