"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Networks = void 0;
const Endpoint_1 = __importDefault(require("./Endpoint"));
class Networks extends Endpoint_1.default {
    /**
     * Get Details
     *
     * Get the details of a network.
     *
     * {@link https://developers.themoviedb.org/3/networks/get-network-details}
    */
    getDetails(network_id) {
        return this._get(`network/${network_id}`);
    }
    /**
     * Get Alternative Names
     *
     * Get the alternative names of a network.
     *
     * {@link https://developers.themoviedb.org/3/networks/get-network-alternative-names
    */
    getAlternativeNames(network_id) {
        return this._get(`network/${network_id}/alternative_names`);
    }
    /**
     * Get Images
     *
     * Get a companies logos by id.
     *
     * There are two image formats that are supported for companies, PNG's and SVG's.
     * You can see which type the original file is by looking at the file_type field.
     * We prefer SVG's as they are resolution independent and as such, the width and height are only there to reflect the original asset that was uploaded.
     * An SVG can be scaled properly beyond those dimensions if you call them as a PNG.
     *
     * For more information about how SVG's and PNG's can be used, take a read through [this document]({@link https://developers.themoviedb.org/3/getting-started/images}).
     *
     * {@link https://developers.themoviedb.org/3/networks/get-network-images}
    */
    getImages(network_id) {
        return this._get(`network/${network_id}/images`);
    }
}
exports.Networks = Networks;
//# sourceMappingURL=Networks.js.map