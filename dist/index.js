"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TMDB = void 0;
const endpoints_1 = require("./endpoints");
class TMDB {
    /**
     * Create TMDB Wrapper.
     */
    constructor(access_token, language = "en-US") {
        this.IMAGE_BASE_URL = "https://image.tmdb.org/t/p";
        this.config = { access_token, language };
    }
    get endpoint() {
        return this._endpoint || (this._endpoint = new endpoints_1.Generic(this.config));
    }
    get accountv3() {
        return this._accountv3 || (this._accountv3 = new endpoints_1.Accountv3(this.config));
    }
    get accountsv4() {
        return this._accountv4 || (this._accountv4 = new endpoints_1.Accountv4(this.config, 4));
    }
    get authv3() {
        return this._authv3 || (this._authv3 = new endpoints_1.Authenticationv3(this.config));
    }
    get authv4() {
        return this._authv4 || (this._authv4 = new endpoints_1.Authenticationv4(this.config, 4));
    }
    get certifications() {
        return this._certifications || (this._certifications = new endpoints_1.Certifications(this.config));
    }
    get changes() {
        return this._changes || (this._changes = new endpoints_1.Changes(this.config));
    }
    get collections() {
        return this._collections || (this._collections = new endpoints_1.Collections(this.config));
    }
    get companies() {
        return this._companies || (this._companies = new endpoints_1.Companies(this.config));
    }
    get configuration() {
        return this._configuration || (this._configuration = new endpoints_1.Configuration(this.config));
    }
    get credits() {
        return this._credits || (this._credits = new endpoints_1.Credits(this.config));
    }
    get discover() {
        return this._discover || (this._discover = new endpoints_1.Discover(this.config));
    }
    get find() {
        return this._find || (this._find = new endpoints_1.Find(this.config));
    }
    get genres() {
        return this._genres || (this._genres = new endpoints_1.Genres(this.config));
    }
    get guestSessions() {
        return this._guestSessions || (this._guestSessions = new endpoints_1.GuestSessions(this.config));
    }
    get keywords() {
        return this._keywords || (this._keywords = new endpoints_1.Keywords(this.config));
    }
    get listsv3() {
        return this._listsv3 || (this._listsv3 = new endpoints_1.Listsv3(this.config));
    }
    get listsv4() {
        return this._listsv4 || (this._listsv4 = new endpoints_1.Listsv4(this.config, 4));
    }
    get movies() {
        return this._movies || (this._movies = new endpoints_1.Movies(this.config));
    }
    get networks() {
        return this._networks || (this._networks = new endpoints_1.Networks(this.config));
    }
    get people() {
        return this._people || (this._people = new endpoints_1.People(this.config));
    }
    get reviews() {
        return this._reviews || (this._reviews = new endpoints_1.Reviews(this.config));
    }
    get search() {
        return this._search || (this._search = new endpoints_1.Search(this.config));
    }
    get trending() {
        return this._trending || (this._trending = new endpoints_1.Trending(this.config));
    }
    get tv() {
        return this._tv || (this._tv = new endpoints_1.TV(this.config));
    }
    get tvEpisodeGroups() {
        return this._tvEpisodeGroups || (this._tvEpisodeGroups = new endpoints_1.TVEpisodeGroups(this.config));
    }
    get tvEpisodes() {
        return this._tvEpisodes || (this._tvEpisodes = new endpoints_1.TVEpisodes(this.config));
    }
    get tvSeasons() {
        return this._tvSeasons || (this._tvSeasons = new endpoints_1.TVSeasons(this.config));
    }
    get watchProviders() {
        return this._watchProviders || (this._watchProviders = new endpoints_1.WatchProviders(this.config));
    }
    /**
     * Get Image URL
     *
     * Provide image_type and size typing will be automatically typed for you.
     *
     * {@link https://developers.themoviedb.org/3/getting-started/images}
     * {@link https://developers.themoviedb.org/3/configuration/get-api-configuration}
     */
    getImageURL(options) {
        const { image_type } = options;
        let size;
        if (image_type === "backdrop") {
            size = options.backdrop_size;
        }
        else if (image_type === "logo") {
            size = options.logo_size;
        }
        else if (image_type === "poster") {
            size = options.poster_size;
        }
        else if (image_type === "profile") {
            size = options.profile_size;
        }
        //Still
        else {
            size = options.still_size;
        }
        return `${this.IMAGE_BASE_URL}/${size}/${options.file_path}`;
    }
}
exports.TMDB = TMDB;
//# sourceMappingURL=index.js.map