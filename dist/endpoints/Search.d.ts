import { MultiSearch, MultiSearchQueryString, SearchCollections, SearchCollectionsQueryString, SearchCompanies, SearchCompaniesQueryString, SearchKeywords, SearchKeywordsQueryString, SearchMovies, SearchMoviesQueryString, SearchPeople, SearchPeopleQueryString, SearchTV, SearchTVQueryString } from "../types";
import Endpoint from "./Endpoint";
export declare class Search extends Endpoint {
    /**
     * Search Companies
     *
     * Search for companies.
     *
     * {@link https://developers.themoviedb.org/3/search/search-companies}
    */
    searchCompanies(queryString: SearchCompaniesQueryString): Promise<SearchCompanies>;
    /**
     * Search Collections
     *
     * Search for collections.
     *
     * {@link https://developers.themoviedb.org/3/search/search-collections}
    */
    searchCollections(queryString: SearchCollectionsQueryString): Promise<SearchCollections>;
    /**
     * Search Keywords
     *
     * Search for keywords.
     *
     * {@link https://developers.themoviedb.org/3/search/search-keywords}
    */
    searchKeywords(queryString: SearchKeywordsQueryString): Promise<SearchKeywords>;
    /**
     * Search Movies
     *
     * Search for movies.
     *
     * {@link https://developers.themoviedb.org/3/search/search-movies}
    */
    searchMovies(queryString: SearchMoviesQueryString): Promise<SearchMovies>;
    /**
     * Multi Search
     *
     * Search multiple models in a single request. Multi search currently supports searching for movies, tv shows and people in a single request.
     *
     * {@link https://developers.themoviedb.org/3/search/multi-search}
    */
    multiSearch(queryString: MultiSearchQueryString): Promise<MultiSearch>;
    /**
     * Search People
     *
     * Search for people.
     *
     * {@link https://developers.themoviedb.org/3/search/search-people}
    */
    searchPeople(queryString: SearchPeopleQueryString): Promise<SearchPeople>;
    /**
     * Search TV Shows
     *
     * Search for a TV show.
     *
     * {@link https://developers.themoviedb.org/3/search/search-tv-shows}
    */
    searchTVShows(queryString: SearchTVQueryString): Promise<SearchTV>;
}
