"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Generic = void 0;
const Endpoint_1 = __importDefault(require("./Endpoint"));
/**
 * Create your own calls.
 * Version can also be changed if needed. Default is 3.
 * Use with append_to_response
 */
class Generic extends Endpoint_1.default {
    get(endpoint, queryString, version) {
        return this._get(endpoint, queryString, version);
    }
    post(endpoint, body, queryString, version) {
        return this._post(endpoint, body, queryString, version);
    }
    delete(endpoint, body, queryString, version) {
        return this._delete(endpoint, body, queryString, version);
    }
    put(endpoint, body, queryString, version) {
        return this._put(endpoint, body, queryString, version);
    }
}
exports.Generic = Generic;
//# sourceMappingURL=Generic.js.map