"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Credits = void 0;
const Endpoint_1 = __importDefault(require("./Endpoint"));
class Credits extends Endpoint_1.default {
    /**
     * Get Details
     *
     * Get a movie or TV credit details by id.
     *
     * {@link https://developers.themoviedb.org/3/credits/get-credit-details}
    */
    getDetails(credit_id) {
        return this._get(`credit/${credit_id}`);
    }
}
exports.Credits = Credits;
//# sourceMappingURL=Credits.js.map