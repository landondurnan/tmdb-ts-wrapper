import { AcceptedLanguage, Listsv3CheckItemStatusResponse, Listv3, Listv3AddMovieResponse, Listv3ClearListQueryString, Listv3ClearListResponse, Listv3CreateListRequestBody, Listv3CreateListResponse, Listv3DeleteListResponse, Listv3RemoveMovieResponse } from "../types";
import Endpoint from "./Endpoint";
export declare class Listsv3 extends Endpoint {
    /**
     * Get Details
     *
     * Get the details of a list.
     *
     * {@link https://developers.themoviedb.org/3/lists/get-list-details}
    */
    getDetails(list_id: string | number, language?: AcceptedLanguage): Promise<Listv3>;
    /**
     * Check Item Status
     *
     * You can use this method to check if a movie has already been added to the list.
     *
     * {@link https://developers.themoviedb.org/3/lists/check-item-status}
    */
    checkItemStatus(list_id: string | number, movie_id: number): Promise<Listsv3CheckItemStatusResponse>;
    /**
     * Create List
     *
     * Create a list.
     *
     * {@link https://developers.themoviedb.org/3/lists/create-list}
    */
    createList(session_id: string, body: Listv3CreateListRequestBody): Promise<Listv3CreateListResponse>;
    /**
     * Add Movie
     *
     * Add a movie to a list.
     *
     * {@link https://developers.themoviedb.org/3/lists/add-movie}
    */
    addMovie(list_id: string | number, session_id: string, media_id: number): Promise<Listv3AddMovieResponse>;
    /**
     * Remove Movie
     *
     * Remove a movie from a list.
     *
     * {@link https://developers.themoviedb.org/3/lists/remove-movie}
    */
    removeMovie(list_id: string | number, session_id: string, media_id: number): Promise<Listv3RemoveMovieResponse>;
    /**
     * Clear List
     *
     * Clear all of the items from a list.
     *
     * {@link https://developers.themoviedb.org/3/lists/clear-list}
    */
    clearList(list_id: string, queryString: Listv3ClearListQueryString): Promise<Listv3ClearListResponse>;
    /**
     * Delete List
     *
     * Delete a list.
     *
     * {@link https://developers.themoviedb.org/3/lists/delete-list}
    */
    deleteList(list_id: string, session_id: string): Promise<Listv3DeleteListResponse>;
}
