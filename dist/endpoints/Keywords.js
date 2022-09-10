"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Keywords = void 0;
const Endpoint_1 = __importDefault(require("./Endpoint"));
class Keywords extends Endpoint_1.default {
    /**
     * Get Details
     *
     * {@link https://developers.themoviedb.org/3/keywords/get-keyword-details}
     */
    getDetails(keyword_id) {
        return this._get(`keyword/${keyword_id}`);
    }
    /**
     * Get Movies
     *
     * Get the movies that belong to a keyword.
     *
     * We highly recommend using [movie discover]({@link https://developers.themoviedb.org/3/discover/movie-discover}) instead of this method as it is much more flexible.
     */
    getMoviesFromKeyword(keyword_id, queryString) {
        return this._get(`keyword/${keyword_id}/movies`, this.applyTranslation(queryString));
    }
}
exports.Keywords = Keywords;
//# sourceMappingURL=Keywords.js.map