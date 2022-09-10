"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Listsv4 = void 0;
const Endpoint_1 = __importDefault(require("./Endpoint"));
class Listsv4 extends Endpoint_1.default {
    /**
    * Get List
    *
    * This method will retrieve a list by id.
    *
    * Private lists can only be accessed by their owners and therefore require a valid user access token.
    *
    * {@link https://developers.themoviedb.org/4/list/get-list}
    */
    getList(list_id, queryString) {
        return this._get(`list/${list_id}`, this.applyTranslation(queryString));
    }
    /**
    * Create List
    *
    * This method will create a new list.
    *
    * You will need to have valid user access token in order to create a new list.
    *
    * {@link https://developers.themoviedb.org/4/list/create-list}
    */
    createList(body) {
        return this._post(`list`, body);
    }
    /**
    * Update List
    *
    * This method will let you update the details of a list.
    *
    * You must be the owner of the list and therefore have a valid user access token in order to edit it.
    *
    * {@link https://developers.themoviedb.org/4/list/update-list}
    */
    updateList(list_id, body) {
        return this._put(`list/${list_id}`, body);
    }
    /**
    * Clear List
    *
    * This method lets you clear all of the items from a list in a single request. This action cannot be reversed so use it with caution.
    *
    * You must be the owner of the list and therefore have a valid user access token in order to clear a list.
    *
    * {@link https://developers.themoviedb.org/4/list/clear-list}
    */
    clearList(list_id) {
        return this._get(`list/${list_id}/clear`);
    }
    /**
    * Delete List
    *
    * This method will delete a list by id. This action is not reversible so take care when issuing it.
    *
    * You must be the owner of the list and therefore have a valid user access token in order to clear a list.
    *
    * {@link https://developers.themoviedb.org/4/list/delete-list}
    */
    deleteList(list_id) {
        return this._delete(`list/${list_id}`);
    }
    /**
    * Add Items
    *
    * This method will let you add items to a list. We support essentially an unlimited number of items to be posted at a time. Both movie and TV series are support.
    *
    * The results of this query will return a results array. Each result includes a success field.
    * If a result is false this will usually indicate that the item already exists on the list.
    * It may also indicate that the item could not be found.
    *
    * You must be the owner of the list and therefore have a valid user access token in order to clear a list.
    *
    * {@link https://developers.themoviedb.org/4/list/add-items}
    */
    addItems(list_id, body) {
        return this._post(`list//${list_id}/items`, body);
    }
    /**
    * Update Items
    *
    * This method will let you update an individual item on a list. Currently, only adding a comment is supported.
    *
    * You must be the owner of the list and therefore have a valid user access token in order to clear a list.
    *
    * {@link https://developers.themoviedb.org/4/list/update-items}
    */
    updateItems(list_id, body) {
        return this._put(`list/${list_id}/items`, body);
    }
    /**
    * Remove Items
    *
    * This method will let you remove items from a list. You can remove multiple items at a time.
    *
    * You must be the owner of the list and therefore have a valid user access token in order to clear a list.
    *
    * {@link https://developers.themoviedb.org/4/list/remove-items}
    */
    removeItems(list_id, body) {
        return this._delete(`list/${list_id}/items`, body);
    }
    /**
    * Check Item Status
    *
    * This method lets you quickly check if the item is already added to the list.
    *
    * You must be the owner of the list and therefore have a valid user access token in order to clear a list.
    *
    * {@link https://developers.themoviedb.org/4/list/check-item-status}
    */
    checkItemStatus(list_id, queryString) {
        return this._get(`list/${list_id}/item_status`, queryString);
    }
}
exports.Listsv4 = Listsv4;
//# sourceMappingURL=Listsv4.js.map