"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Listsv3 = void 0;
const Endpoint_1 = __importDefault(require("./Endpoint"));
class Listsv3 extends Endpoint_1.default {
    /**
     * Get Details
     *
     * Get the details of a list.
     *
     * {@link https://developers.themoviedb.org/3/lists/get-list-details}
    */
    getDetails(list_id, language) {
        return this._get(`list/${list_id}`, { language: language ? language : this.config.language });
    }
    /**
     * Check Item Status
     *
     * You can use this method to check if a movie has already been added to the list.
     *
     * {@link https://developers.themoviedb.org/3/lists/check-item-status}
    */
    checkItemStatus(list_id, movie_id) {
        return this._get(`list/${list_id}/item_status`, { movie_id });
    }
    /**
     * Create List
     *
     * Create a list.
     *
     * {@link https://developers.themoviedb.org/3/lists/create-list}
    */
    createList(session_id, body) {
        return this._post(`list`, body, { session_id });
    }
    /**
     * Add Movie
     *
     * Add a movie to a list.
     *
     * {@link https://developers.themoviedb.org/3/lists/add-movie}
    */
    addMovie(list_id, session_id, media_id) {
        return this._post(`list/${list_id}`, { media_id }, { session_id });
    }
    /**
     * Remove Movie
     *
     * Remove a movie from a list.
     *
     * {@link https://developers.themoviedb.org/3/lists/remove-movie}
    */
    removeMovie(list_id, session_id, media_id) {
        return this._post(`list/${list_id}/remove_item`, { media_id }, { session_id });
    }
    /**
     * Clear List
     *
     * Clear all of the items from a list.
     *
     * {@link https://developers.themoviedb.org/3/lists/clear-list}
    */
    clearList(list_id, queryString) {
        return this._post(`list/${list_id}/remove_item`, undefined, queryString);
    }
    /**
     * Delete List
     *
     * Delete a list.
     *
     * {@link https://developers.themoviedb.org/3/lists/delete-list}
    */
    deleteList(list_id, session_id) {
        return this._delete(`list/${list_id}/remove_item`, undefined, { session_id });
    }
}
exports.Listsv3 = Listsv3;
//# sourceMappingURL=Listsv3.js.map