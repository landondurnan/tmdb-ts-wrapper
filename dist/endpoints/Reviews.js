"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reviews = void 0;
const Endpoint_1 = __importDefault(require("./Endpoint"));
class Reviews extends Endpoint_1.default {
    /**
     * Get Details
     *
     * Retrieve the details of a movie or TV show review.
     *
     * {@link https://developers.themoviedb.org/3/reviews/get-review-details}
    */
    getDetails(review_id) {
        return this._get(`review/${review_id}`);
    }
}
exports.Reviews = Reviews;
//# sourceMappingURL=Reviews.js.map