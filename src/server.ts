import mongoose from "mongoose";
import config from "./config";
import app from "./app";

async function main() {
  try {
    await mongoose.connect(config.db_url as string, {
      dbName: "Assignment-4",
    });

    app.listen(config.port, () => {
      console.log(`Server is listening on port:${config.port}`);
    });
  } catch (error) {
    console.log(error);
  }
}

main();
