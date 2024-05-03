import Config from "@/services/configServices";
import logger from "@/utils/logger";
import mongoose from "mongoose";

async function connect() {
  try {
    await mongoose.connect(Config.instance.dbUri);
    logger.info("DB connected");
  } catch (error) {
    logger.error("Could not connect to db.");
    process.exit(1);
  }
}

export default connect;
