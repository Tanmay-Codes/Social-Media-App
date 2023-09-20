import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user_routes.js";
import gigRoutes from "./routes/gigs_routes.js";
import messageRoutes from "./routes/message_routes.js";
import authRoutes from "./routes/auth_routes.js";
import cookieParser from "cookie-parser";
import cors from "cors";
const app = express();
dotenv.config();
mongoose.set("strictQuery", true);

//connect function to connect to the mongo DB
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("connected to MongoDB!");
  } catch (error) {
    console.log(error);
  }
};

//In order to allow the JSON Input from the client side
//middlewares
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/gigs", gigRoutes);
app.use("/api/messages", messageRoutes);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "something is wrong!";

  return res.status(errorStatus).send(errorMessage);
});

app.listen(8800, () => {
  connect();
  console.log("Backend is Live!!");
});
