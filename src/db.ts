import "dotenv/config";
import { connect } from "mongoose";

const dbConnect = async (): Promise<void> => {
  try {
    const { DB_URI } = process.env;
    await connect(DB_URI as string);
    console.log("DB connected");
  } catch (error) {
    console.error(error);
  }
};

export { dbConnect };
