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
  OperationalSettingEvent: () => OperationalSettingEvent,
  OrderDetailMode: () => OrderDetailMode,
  OrderEvent: () => OrderEvent,
  OrderStatus: () => OrderStatus,
  ProductType: () => ProductType,
  SocketEvents: () => SocketEvents,
  UserTypes: () => UserTypes,
  clearAllIds: () => clearAllIds,
  createId: () => createId,
  defaultDateFormat: () => defaultDateFormat,
  defaultDateTimeFormat: () => defaultDateTimeFormat,
  defaultTimeFormat: () => defaultTimeFormat,
  removeId: () => removeId
});
module.exports = __toCommonJS(shared_exports);

// src/interfaces/common/common.types.ts
var SocketEvents = /* @__PURE__ */ ((SocketEvents2) => {
  SocketEvents2["CONNECTION"] = "connection";
  SocketEvents2["DISCONNECT"] = "disconnect";
  SocketEvents2["MESSAGE_RECEIVED"] = "message_received";
  return SocketEvents2;
})(SocketEvents || {});

// src/interfaces/order/order.types.ts
var OrderStatus = /* @__PURE__ */ ((OrderStatus2) => {
  OrderStatus2["PROCESSING"] = "processing";
  OrderStatus2["CONFIRM"] = "confirm";
  OrderStatus2["DONE"] = "done";
  OrderStatus2["CANCELLED"] = "cancelled";
  return OrderStatus2;
})(OrderStatus || {});
var OrderEvent = /* @__PURE__ */ ((OrderEvent2) => {
  OrderEvent2["CREATED"] = "order:created";
  OrderEvent2["UPDATED"] = "order:updated";
  OrderEvent2["DELETED"] = "order:deleted";
  OrderEvent2["CREATE"] = "order:create";
  OrderEvent2["UPDATE"] = "order:update";
  OrderEvent2["READ"] = "order:read";
  OrderEvent2["DELETE"] = "order:delete";
  return OrderEvent2;
})(OrderEvent || {});

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

// src/interfaces/operationalSetting/operationalSetting.types.ts
var OperationalSettingEvent = /* @__PURE__ */ ((OperationalSettingEvent2) => {
  OperationalSettingEvent2["CREATED"] = "operational_setting:created";
  OperationalSettingEvent2["UPDATED"] = "operational_setting:updated";
  OperationalSettingEvent2["DELETED"] = "operational_setting:deleted";
  OperationalSettingEvent2["CREATE"] = "operational_setting:create";
  OperationalSettingEvent2["UPDATE"] = "operational_setting:update";
  OperationalSettingEvent2["READ"] = "operational_setting:read";
  OperationalSettingEvent2["DELETE"] = "operational_setting:delete";
  return OperationalSettingEvent2;
})(OperationalSettingEvent || {});

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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  OperationalSettingEvent,
  OrderDetailMode,
  OrderEvent,
  OrderStatus,
  ProductType,
  SocketEvents,
  UserTypes,
  clearAllIds,
  createId,
  defaultDateFormat,
  defaultDateTimeFormat,
  defaultTimeFormat,
  removeId
});
