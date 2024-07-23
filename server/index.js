import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import { routeNotFound, errorHandler } from "./middlewares/errorMiddlewaves.js";

// environment variable
dotenv.config();

// initialise express
const app = express();

//  mondodb connect
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Your MongoDB connected"))
  .catch((err) => console.log(err));

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use(morgan("dev"));

// Server listen
app.listen(3000, () => console.log("Server listening to port 3000"));

// error middlewares
app.use(routeNotFound);
app.use(errorHandler);

// routes
app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:3001"],
    methods: ["GET", "POST", "DELETE", "PUT"],
    credentials: true,
  })
);
