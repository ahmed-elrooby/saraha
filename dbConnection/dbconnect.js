import mongoose from "mongoose";

const dbconnect = async () => {
  console.log(process.env.DB_CONNECTION);
  try {
    await mongoose.connect(process.env.DB_CONNECTION);
    console.log("DB Connected");
  } catch (error) {
    console.log("DB Error:", error);
  }
};

export default dbconnect;
