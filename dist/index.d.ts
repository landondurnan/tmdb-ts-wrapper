import { Accountv4, Accountv3, Authenticationv3, Authenticationv4, Certifications, Changes, Collections, Companies, Configuration, Credits, Discover, Find, Genres, GuestSessions, Keywords, Listsv3, Listsv4, Movies, Networks, People, Reviews, Search, Trending, TV, TVEpisodeGroups, TVEpisodes, TVSeasons, WatchProviders, Generic } from "./endpoints";
import { AcceptedLanguage, ImageOptions } from "./types";
export declare class TMDB {
    private config;
    private IMAGE_BASE_URL;
    private _endpoint;
    private _accountv3;
    private _accountv4;
    private _authv3;
    private _authv4;
    private _certifications;
    private _changes;
    private _collections;
    private _companies;
    private _configuration;
    private _credits;
    private _discover;
    private _find;
    private _genres;
    private _guestSessions;
    private _keywords;
    private _listsv3;
    private _listsv4;
    private _movies;
    private _networks;
    private _people;
    private _reviews;
    private _search;
    private _trending;
    private _tv;
    private _tvEpisodeGroups;
    private _tvEpisodes;
    private _tvSeasons;
    private _watchProviders;
    /**
     * Create TMDB Wrapper.
     */
    constructor(access_token: string, language?: AcceptedLanguage);
    get endpoint(): Generic;
    get accountv3(): Accountv3;
    get accountsv4(): Accountv4;
    get authv3(): Authenticationv3;
    get authv4(): Authenticationv4;
    get certifications(): Certifications;
    get changes(): Changes;
    get collections(): Collections;
    get companies(): Companies;
    get configuration(): Configuration;
    get credits(): Credits;
    get discover(): Discover;
    get find(): Find;
    get genres(): Genres;
    get guestSessions(): GuestSessions;
    get keywords(): Keywords;
    get listsv3(): Listsv3;
    get listsv4(): Listsv4;
    get movies(): Movies;
    get networks(): Networks;
    get people(): People;
    get reviews(): Reviews;
    get search(): Search;
    get trending(): Trending;
    get tv(): TV;
    get tvEpisodeGroups(): TVEpisodeGroups;
    get tvEpisodes(): TVEpisodes;
    get tvSeasons(): TVSeasons;
    get watchProviders(): WatchProviders;
    /**
     * Get Image URL
     *
     * Provide image_type and size typing will be automatically typed for you.
     *
     * {@link https://developers.themoviedb.org/3/getting-started/images}
     * {@link https://developers.themoviedb.org/3/configuration/get-api-configuration}
     */
    getImageURL(options: ImageOptions): string;
}
