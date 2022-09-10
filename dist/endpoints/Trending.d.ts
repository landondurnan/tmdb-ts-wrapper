import { TrendingResults } from "../types";
import Endpoint from "./Endpoint";
export declare class Trending extends Endpoint {
    /**
     * Get Trending
     *
     * Get the daily or weekly trending items. The daily trending list tracks items over the period of a day while items have a 24 hour half life. The weekly list tracks items over a 7 day period, with a 7 day half life.
     *
     * {@link https://developers.themoviedb.org/3/trending/get-trending}
    */
    getTrending(media_type: "all" | "movie" | "tv" | "person", time_window: "day" | "week"): Promise<TrendingResults>;
}
