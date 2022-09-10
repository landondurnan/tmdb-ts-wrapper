import { AcceptedLanguage, WatchProviderRegions, WatchProvidersMovie, WatchProvidersMovieQueryString, WatchProvidersTV, WatchProvidersTVQueryString } from "../types";
import Endpoint from "./Endpoint";
export declare class WatchProviders extends Endpoint {
    /**
     * Get Available Regions
     *
     * Returns a list of all of the countries we have watch provider (OTT/streaming) data for.
     *
     * {@link https://developers.themoviedb.org/3/watch-providers/get-available-regions}
     */
    getAvailableRegions(language?: AcceptedLanguage): Promise<WatchProviderRegions>;
    /**
     * Get Movie Providers
     *
     * Returns a list of the watch provider (OTT/streaming) data we have available for movies. You can specify a watch_region param if you want to further filter the list by country.
     *
     * {@link https://developers.themoviedb.org/3/watch-providers/get-movie-providers}
     */
    getMovieProviders(queryString?: WatchProvidersMovieQueryString): Promise<WatchProvidersMovie>;
    /**
     * Get TV Providers.
     *
     * Returns a list of the watch provider (OTT/streaming) data we have available for TV series. You can specify a watch_region param if you want to further filter the list by country.
     *
     * {@link https://developers.themoviedb.org/3/watch-providers/get-tv-providers}
     */
    getTVProviders(queryString?: WatchProvidersTVQueryString): Promise<WatchProvidersTV>;
}
