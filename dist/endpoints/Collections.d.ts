import { AcceptedLanguage, Collection, CollectionImages, CollectionTranslations } from "../types";
import Endpoint from "./Endpoint";
export declare class Collections extends Endpoint {
    /**
     * Get Details
     *
     * Get collection details by id.
     *
     * {@link https://developers.themoviedb.org/3/collections/get-collection-details}
    */
    getDetails(collectionId: number, language?: AcceptedLanguage): Promise<Collection>;
    /**
     * Get Images
     *
     * Get the images for a collection by id.
     *
     * {@link https://developers.themoviedb.org/3/collections/get-collection-images}
    */
    getImages(collectionId: number, language?: AcceptedLanguage): Promise<CollectionImages>;
    /**
     * Get Translations
     *
     * Get the list translations for a collection by id.
     *
     * {@link https://developers.themoviedb.org/3/collections/get-collection-translations}
    */
    getTranslations(collectionId: number, language?: AcceptedLanguage): Promise<CollectionTranslations>;
}
