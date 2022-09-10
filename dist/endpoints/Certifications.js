"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Certifications = void 0;
const Endpoint_1 = __importDefault(require("./Endpoint"));
class Certifications extends Endpoint_1.default {
    /**
     * Get Movie Certifications
     *
     * Get an up to date list of the officially supported movie certifications on TMDB.
     *
     * {@link https://developers.themoviedb.org/3/certifications/get-movie-certifications}
    */
    getMovieCertifications() {
        return this._get("certification/movie/list");
    }
    /**
     * Get TV Certifications
     *
     * Get an up to date list of the officially supported TV show certifications on TMDB.
     *
     * {@link https://developers.themoviedb.org/3/certifications/get-tv-certifications}
    */
    getTVCertifications() {
        return this._get("certification/tv/list");
    }
}
exports.Certifications = Certifications;
//# sourceMappingURL=Certifications.js.map