"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Collections = void 0;
const Endpoint_1 = __importDefault(require("./Endpoint"));
class Collections extends Endpoint_1.default {
    /**
     * Get Details
     *
     * Get collection details by id.
     *
     * {@link https://developers.themoviedb.org/3/collections/get-collection-details}
    */
    getDetails(collectionId, language) {
        return this._get(`collection/${collectionId}`, { language: language ? language : this.config.language });
    }
    /**
     * Get Images
     *
     * Get the images for a collection by id.
     *
     * {@link https://developers.themoviedb.org/3/collections/get-collection-images}
    */
    getImages(collectionId, language) {
        return this._get(`collection/${collectionId}/images`, { language: language ? language : this.config.language });
    }
    /**
     * Get Translations
     *
     * Get the list translations for a collection by id.
     *
     * {@link https://developers.themoviedb.org/3/collections/get-collection-translations}
    */
    getTranslations(collectionId, language) {
        return this._get(`collection/${collectionId}/translations`, { language: language ? language : this.config.language });
    }
}
exports.Collections = Collections;
//# sourceMappingURL=Collections.js.map