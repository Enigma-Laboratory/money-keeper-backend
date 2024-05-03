"use strict";
// import { MongoClient } from "mongodb";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transaction = void 0;
class Transaction {
    // private client: MongoClient | undefined;
    static get instance() {
        if (!Transaction._instance) {
            Transaction._instance = new Transaction();
        }
        return Transaction._instance;
    }
    constructor() {
        if (!Transaction.instance) {
            // this.client = new MongoClient(Config.instance.dbUri);
        }
    }
    Client() {
        // return this.client;
    }
}
exports.Transaction = Transaction;
