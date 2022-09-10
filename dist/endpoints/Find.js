"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Find = void 0;
const Endpoint_1 = __importDefault(require("./Endpoint"));
class Find extends Endpoint_1.default {
    /**
     * Find by ID
     *
     * The find method makes it easy to search for objects in our database by an external id.
     *
     * This method will search all objects (movies, TV shows and people) and return the results in a single response.
     *
     * {@link https://developers.themoviedb.org/3/find/find-by-id}
     */
    findById(external_id, external_source, language) {
        return this._get(`find/${external_id}`, { language: language ? language : this.config.language, external_source });
    }
}
exports.Find = Find;
//# sourceMappingURL=Find.js.map