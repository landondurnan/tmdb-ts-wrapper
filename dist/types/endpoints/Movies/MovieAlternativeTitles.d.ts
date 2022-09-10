import { Identifiable } from "../../util";
export interface MovieAlternativeTitles extends Identifiable {
    titles?: MovieAlternativeTitle[];
}
export interface MovieAlternativeTitle {
    iso_3166_1?: string;
    title?: string;
    type?: string;
}
export interface MovieAlternativeTitlesQueryString {
    country?: string;
}
