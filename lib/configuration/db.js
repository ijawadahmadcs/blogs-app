import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://jawadahmad:Jawadahmad@3612@nextjs.hilo1yi.mongodb.net/?appName=Nextjs",
  );
  console.log("MongoDB connected");
};
