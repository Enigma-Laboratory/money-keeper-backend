"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// index.ts
var shared_exports = {};
__export(shared_exports, {
  BadRequestError: () => BadRequestError,
  ConflictError: () => ConflictError,
  ForbiddenError: () => ForbiddenError,
  HttpError: () => HttpError,
  InternalServerError: () => InternalServerError,
  NotFoundError: () => NotFoundError,
  OrderDetailMode: () => OrderDetailMode,
  OrderStatus: () => OrderStatus,
  ProductType: () => ProductType,
  UnauthorizedError: () => UnauthorizedError,
  UserTypes: () => UserTypes,
  clearAllIds: () => clearAllIds,
  createId: () => createId,
  defaultDateFormat: () => defaultDateFormat,
  defaultDateTimeFormat: () => defaultDateTimeFormat,
  defaultTimeFormat: () => defaultTimeFormat,
  removeId: () => removeId
});
module.exports = __toCommonJS(shared_exports);

// src/interfaces/order/order.types.ts
var OrderStatus = /* @__PURE__ */ ((OrderStatus2) => {
  OrderStatus2["PENDING"] = "pending";
  OrderStatus2["CANCELLED"] = "cancelled";
  OrderStatus2["PROCESSING"] = "processing";
  OrderStatus2["CONFIRM"] = "confirm";
  OrderStatus2["DONE"] = "done";
  return OrderStatus2;
})(OrderStatus || {});

// src/interfaces/user/user.types.ts
var UserTypes = /* @__PURE__ */ ((UserTypes2) => {
  UserTypes2["ADMIN"] = "admin";
  UserTypes2["CUSTOMER"] = "customer";
  return UserTypes2;
})(UserTypes || {});

// src/interfaces/product/product.types.ts
var ProductType = /* @__PURE__ */ ((ProductType2) => {
  ProductType2["Electronics"] = "Electronics";
  ProductType2["Clothing"] = "Clothing";
  ProductType2["Furniture"] = "Furniture";
  ProductType2["Beauty"] = "Beauty";
  ProductType2["Food"] = "Food";
  return ProductType2;
})(ProductType || {});

// src/interfaces/orderDetail/orderDetail.types.ts
var OrderDetailMode = /* @__PURE__ */ ((OrderDetailMode2) => {
  OrderDetailMode2["DEFAULT"] = "default";
  OrderDetailMode2["CUSTOMIZED"] = "customized";
  return OrderDetailMode2;
})(OrderDetailMode || {});

// src/utils/defaultFormatDate.ts
var defaultDateFormat = "YYYY-MM-DD";
var defaultTimeFormat = "HH:mm:ss";
var defaultDateTimeFormat = "YYYY-MM-DDTHH:mm:ss.sssZ";

// src/utils/ids.ts
var usedIds = /* @__PURE__ */ new Set();
var makeId = (idBase, iteration) => iteration <= 1 ? idBase : idBase + iteration.toString();
var isUniqueId = (idBase, iteration) => {
  const newID = makeId(idBase, iteration);
  return !usedIds.has(newID);
};
var createId = (proposedId) => {
  if (proposedId === void 0) {
    proposedId = "undefined";
  }
  let tries = 0;
  while (!isUniqueId(proposedId, tries)) {
    tries++;
  }
  const newID = makeId(proposedId, tries);
  usedIds.add(newID);
  return newID;
};
var removeId = (id) => usedIds.delete(id);
var clearAllIds = () => usedIds.clear();

// src/errors/httpError.ts
var import_http = require("http");
var HttpError = class extends Error {
  constructor(status, message, name, component) {
    super(message);
    this.status = status || 500;
    this.message = message || import_http.STATUS_CODES[this.status] || "HttpError";
    Error.captureStackTrace(this, this.constructor);
    if (component)
      this.component = component;
  }
  toObject() {
    return {
      status: this.status,
      message: this.message,
      stack: this.stack,
      ...this.component && { component: this.component }
    };
  }
};

// src/errors/BadRequestError.ts
var BadRequestError = class extends HttpError {
  constructor(message = "Bad request", component) {
    super(400, message, "BadRequestError", component);
  }
};

// src/errors/ConflictError.ts
var ConflictError = class extends HttpError {
  constructor(message = "Conflict", component) {
    super(409, message, "ConflictError", component);
  }
};

// src/errors/ForbiddenError.ts
var ForbiddenError = class extends HttpError {
  constructor(message = "Forbidden", component) {
    super(403, message, "ForbiddenError", component);
  }
};

// src/errors/InternalServerError.ts
var InternalServerError = class extends HttpError {
  constructor(message = "Internal Server Error", component) {
    super(500, message, "InternalServerError", component);
  }
};

// src/errors/NotFoundError.ts
var NotFoundError = class extends HttpError {
  constructor(message = "Not Found", component) {
    super(404, message, "NotFoundError", component);
  }
};

// src/errors/UnauthorizedError.ts
var UnauthorizedError = class extends HttpError {
  constructor(message = "Unauthorized", component) {
    super(401, message, "UnauthorizedError", component);
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  BadRequestError,
  ConflictError,
  ForbiddenError,
  HttpError,
  InternalServerError,
  NotFoundError,
  OrderDetailMode,
  OrderStatus,
  ProductType,
  UnauthorizedError,
  UserTypes,
  clearAllIds,
  createId,
  defaultDateFormat,
  defaultDateTimeFormat,
  defaultTimeFormat,
  removeId
});
