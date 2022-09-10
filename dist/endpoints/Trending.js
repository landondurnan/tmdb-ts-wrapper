"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Trending = void 0;
const Endpoint_1 = __importDefault(require("./Endpoint"));
class Trending extends Endpoint_1.default {
    /**
     * Get Trending
     *
     * Get the daily or weekly trending items. The daily trending list tracks items over the period of a day while items have a 24 hour half life. The weekly list tracks items over a 7 day period, with a 7 day half life.
     *
     * {@link https://developers.themoviedb.org/3/trending/get-trending}
    */
    getTrending(media_type, time_window) {
        return this._get(`trending/${media_type}/${time_window}`);
    }
}
exports.Trending = Trending;
//# sourceMappingURL=Trending.js.map