// import { MongoClient } from "mongodb";

export class Transaction {
  private static _instance: Transaction;

  // private client: MongoClient | undefined;

  public static get instance(): Transaction {
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
  public Client() {
    // return this.client;
  }
}
