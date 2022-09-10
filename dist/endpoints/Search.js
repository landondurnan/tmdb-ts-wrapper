"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Search = void 0;
const Endpoint_1 = __importDefault(require("./Endpoint"));
class Search extends Endpoint_1.default {
    /**
     * Search Companies
     *
     * Search for companies.
     *
     * {@link https://developers.themoviedb.org/3/search/search-companies}
    */
    searchCompanies(queryString) {
        return this._get(`search/company`, queryString);
    }
    /**
     * Search Collections
     *
     * Search for collections.
     *
     * {@link https://developers.themoviedb.org/3/search/search-collections}
    */
    searchCollections(queryString) {
        return this._get(`search/collection`, this.applyTranslation(queryString));
    }
    /**
     * Search Keywords
     *
     * Search for keywords.
     *
     * {@link https://developers.themoviedb.org/3/search/search-keywords}
    */
    searchKeywords(queryString) {
        return this._get(`search/keyword`, queryString);
    }
    /**
     * Search Movies
     *
     * Search for movies.
     *
     * {@link https://developers.themoviedb.org/3/search/search-movies}
    */
    searchMovies(queryString) {
        return this._get(`search/movie`, this.applyTranslation(queryString));
    }
    /**
     * Multi Search
     *
     * Search multiple models in a single request. Multi search currently supports searching for movies, tv shows and people in a single request.
     *
     * {@link https://developers.themoviedb.org/3/search/multi-search}
    */
    multiSearch(queryString) {
        return this._get(`search/multi`, this.applyTranslation(queryString));
    }
    /**
     * Search People
     *
     * Search for people.
     *
     * {@link https://developers.themoviedb.org/3/search/search-people}
    */
    searchPeople(queryString) {
        return this._get(`search/person`, this.applyTranslation(queryString));
    }
    /**
     * Search TV Shows
     *
     * Search for a TV show.
     *
     * {@link https://developers.themoviedb.org/3/search/search-tv-shows}
    */
    searchTVShows(queryString) {
        return this._get(`search/tv`, this.applyTranslation(queryString));
    }
}
exports.Search = Search;
//# sourceMappingURL=Search.js.map