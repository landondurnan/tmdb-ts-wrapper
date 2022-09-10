import { Identifiable } from "../../util";
export interface MovieReleaseDates extends Identifiable {
    results?: MovieReleaseDateResult[];
}
export interface MovieReleaseDateResult {
    iso_3166_1?: string;
    release_dates?: MovieReleaseDate[];
}
export interface MovieReleaseDate {
    certification?: string;
    iso_639_1?: string;
    release_date?: string;
    type?: MovieReleaseDateType;
    note?: string;
}
export declare enum MovieReleaseDateType {
    "PREMIERE" = 1,
    "THEATRICAL_LIMITED" = 2,
    "THEATRICAL" = 3,
    "DIGITAL" = 4,
    "PHYSICAL" = 5,
    "TV" = 6
}
