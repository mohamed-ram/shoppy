import mongoose from "mongoose";
import colors from "colors";

const connectToDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/shoppy");
    console.log("Connected to database successfully.".bgGreen.bold.underline);
  } catch (err) {
    console.log(`Error: ${err.message}`.bgRed.bold);
    process.exit(1);
  }
};

export default connectToDB;
