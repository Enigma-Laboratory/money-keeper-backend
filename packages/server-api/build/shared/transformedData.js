"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeFieldsNotUse = void 0;
const lodash_1 = require("lodash");
function removeFieldsNotUse(data, params) {
    return (0, lodash_1.omit)(data, "__v", ...(params || []));
}
exports.removeFieldsNotUse = removeFieldsNotUse;
