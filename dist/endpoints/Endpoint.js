"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const ohmyfetch_1 = require("ohmyfetch");
/**
 * Base Endpoint
 */
class Endpoint {
    constructor(config, version = 3) {
        this.BASE_URL = 'https://api.themoviedb.org/';
        this.config = config;
        this.version = version;
    }
    /**
     * Utility function to apply config language if language is not overrided
     */
    applyTranslation(obj) {
        if (obj && !obj.hasOwnProperty('language')) {
            return Object.assign(Object.assign({}, obj), { language: this.config.language });
        }
        return obj;
    }
    _get(endpoint, options, version) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, ohmyfetch_1.$fetch)(`${this.BASE_URL}/${version ? version : this.version}/${endpoint}${options ? `?${this.queryString(options)}` : ''}`, {
                headers: {
                    Authorization: `Bearer ${this.config.access_token}`,
                    'Content-Type': 'application/json;charset=utf-8',
                },
            });
        });
    }
    _post(endpoint, body, qs, version) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, ohmyfetch_1.$fetch)(`${this.BASE_URL}/${version ? version : this.version}/${endpoint}${qs ? `?${this.queryString(qs)}` : ''}`, {
                method: 'POST',
                body,
                headers: {
                    Authorization: `Bearer ${this.config.access_token}`,
                    'Content-Type': 'application/json;charset=utf-8',
                },
            });
        });
    }
    _delete(endpoint, body, qs, version) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, ohmyfetch_1.$fetch)(`${this.BASE_URL}/${version ? version : this.version}/${endpoint}${qs ? `?${this.queryString(qs)}` : ''}`, {
                method: 'DELETE',
                body,
                headers: {
                    Authorization: `Bearer ${this.config.access_token}`,
                    'Content-Type': 'application/json;charset=utf-8',
                },
            });
        });
    }
    _put(endpoint, body, qs, version) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, ohmyfetch_1.$fetch)(`${this.BASE_URL}/${version ? version : this.version}/${endpoint}${qs ? `?${this.queryString(qs)}` : ''}`, {
                method: 'PUT',
                body,
                headers: {
                    Authorization: `Bearer ${this.config.access_token}`,
                    'Content-Type': 'application/json;charset=utf-8',
                },
            });
        });
    }
    queryString(obj) {
        return Object.keys(obj)
            .map((key) => {
            let value = obj[key];
            if (Array.isArray(value)) {
                value = value.join(',');
            }
            return `${key}=${value}`;
        })
            .join('&');
    }
}
exports.default = Endpoint;
//# sourceMappingURL=Endpoint.js.map