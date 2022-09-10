import { AcceptedLanguage, LatestPerson, Person, PersonChanges, PersonChangesQueryString, PersonCombinedCredits, PersonExternalIds, PersonImages, PersonMovieCredits, PersonTaggedImages, PersonTaggedImagesQueryString, PersonTranslations, PersonTVCredits, PopularPeople, PopularPeopleQueryString } from "../types";
import Endpoint from "./Endpoint";
export declare class People extends Endpoint {
    /**
     * Get Details
     *
     * Get the primary person details by id.
     *
     * {@link https://developers.themoviedb.org/3/tv-episodes/get-person-details}
    */
    getDetails(person_id: number, language?: AcceptedLanguage): Promise<Person>;
    /**
     * Get Changes
     *
     * Get the changes for a person. By default only the last 24 hours are returned.
     *
     * You can query up to 14 days in a single query by using the start_date and end_date query parameters.
     *
     * {@link https://developers.themoviedb.org/3/people/get-person-changes}
    */
    getChanges(person_id: number, queryString?: PersonChangesQueryString): Promise<PersonChanges>;
    /**
     * Get Movie Credits
     *
     * Get the movie credits for a person.
     *
     * {@link https://developers.themoviedb.org/3/people/get-person-movie-credits}
    */
    getMovieCredits(person_id: number, language?: AcceptedLanguage): Promise<PersonMovieCredits>;
    /**
     * Get TV Credits
     *
     * Get the TV show credits for a person.
     *
     * You can query for some extra details about the credit with the [credit method]({ @link https://developers.themoviedb.org/3/credits/get-credit-details }).
     *
     * {@link https://developers.themoviedb.org/3/people/get-person-tv-credits}
    */
    getTVCredits(person_id: number, language?: AcceptedLanguage): Promise<PersonTVCredits>;
    /**
     * Get Combined Credits
     *
     * Get the movie and TV credits together in a single response.
     *
     * {@link https://developers.themoviedb.org/3/people/get-person-combined-credits}
    */
    getCombinedCredits(person_id: number, language?: AcceptedLanguage): Promise<PersonCombinedCredits>;
    /**
     * Get External Ids
     *
     * Get the external ids for a person.
     *
     * {@link https://developers.themoviedb.org/3/people/get-person-external-ids}
    */
    getExternalIds(person_id: number, language?: AcceptedLanguage): Promise<PersonExternalIds>;
    /**
     * Get Images
     *
     * Get the images for a person.
     *
     * There are two image formats that are supported for companies, PNG's and SVG's.
     * You can see which type the original file is by looking at the file_type field.
     * We prefer SVG's as they are resolution independent and as such, the width and height are only there to reflect the original asset that was uploaded.
     * An SVG can be scaled properly beyond those dimensions if you call them as a PNG.
     *
     * For more information about how SVG's and PNG's can be used, take a read through [this document]({@link https://developers.themoviedb.org/3/getting-started/images}).
     *
     * {@link https://developers.themoviedb.org/3/people/get-person-images}
    */
    getImages(person_id: number): Promise<PersonImages>;
    /**
     * Get Tagged Images
     *
     * Get the images that this person has been tagged in.
     *
     * {@link https://developers.themoviedb.org/3/people/get-tagged-images}
    */
    getTaggedImages(person_id: number, queryString?: PersonTaggedImagesQueryString): Promise<PersonTaggedImages>;
    /**
     * Get Translations
     *
     * Get a list of translations that have been created for a person.
     *
     * {@link https://developers.themoviedb.org/3/people/get-person-translations}
    */
    getTranslations(person_id: number, language?: AcceptedLanguage): Promise<PersonTranslations>;
    /**
     * Get Latest
     *
     * Get the most newly created person. This is a live response and will continuously change.
     *
     * {@link https://developers.themoviedb.org/3/people/get-latest-person}
    */
    getLatestPerson(language?: AcceptedLanguage): Promise<LatestPerson>;
    /**
     * Get Popular
     *
     * Get the list of popular people on TMDB. This list updates daily.
     *
     * {@link https://developers.themoviedb.org/3/people/get-popular-people}
    */
    getPopularPeople(queryString?: PopularPeopleQueryString): Promise<PopularPeople>;
}
