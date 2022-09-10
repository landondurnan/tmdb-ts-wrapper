"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TVEpisodeGroups = void 0;
const Endpoint_1 = __importDefault(require("./Endpoint"));
class TVEpisodeGroups extends Endpoint_1.default {
    /**
     * Get Details
     *
     * Get the details of a TV episode group. Groups support 7 different types which are enumerated as the following:
     *
     * 1. Original air date
     * 2. Absolute
     * 3. DVD
     * 4. Digital
     * 5. Story arc
     * 6. Production
     * 7. TV
     *
     * {@link https://developers.themoviedb.org/3/tv-episode-groups/get-tv-episode-group-details}
    */
    getDetails(episode_group_id, language) {
        return this._get(`tv/episode_group/${episode_group_id}`, { language: language ? language : this.config.language });
    }
}
exports.TVEpisodeGroups = TVEpisodeGroups;
//# sourceMappingURL=TVEpisodeGroups.js.map