// importing routes

// for thr variable decleration we can make a .env file for importing the varivable from here er can use this import
import "dotenv/config";

// for using the express content we can use the line of code
import express, { NextFunction, Request, Response } from "express";

// for connecting database code cna writeen in the database.config file we can inport the result and pass the argunment we import this
import { connectDatabase } from "./config/database.config";

// if any error is ocurr for handling the erorr we can write the code in errorHandler.middleware
import CustomError from "./middleware/errorHandler.middleware";

// for the using the filehandling
import path from "path";

// routes of the code actual code written in this file
import userRoutes from "./routes/user.routes";
import productRoutes from "./routes/product.routes";
import categoryRoutes from "./routes/category.routes";
import reviewRoutes from "./routes/review.routes";
import cartRoutes from "./routes/cart.routes";

const app = express();

// acessing variable from the .env file
const PORT = process.env.PORT || 8000;
const DB_URI = process.env.DB_URI || "";

// database connect function
connectDatabase(DB_URI);

// using middlewares
app.use(express.urlencoded({ extended: false }));

app.use("/api/uploads", express.static(path.join(__dirname, "../", "uploads")));
// for see the upload image in the local server send this path
// http://localhost:7000/api/uploads//1740734022157-444291739449058383_879195714235685_4708642614440258367_n.jpg

console.log("~index.ts:23 ~ _dirname:", __dirname);
// app.use(express.static(path.join(__dirname, "uploads")));

// using routes
app.use("/api/user", userRoutes);
app.use("/api/product", productRoutes);
app.use("/category", categoryRoutes);
app.use("/api/review", reviewRoutes);
app.use("/api/cart", cartRoutes);

// handle not found path
app.all("*", (req: Request, res: Response, next: NextFunction) => {
  const message = `can not ${req.method} on ${req.originalUrl}`;

  const error = new CustomError(message, 404);
  next(error);
});

// error handler

app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  const statusCode = error.statusCode || 500;
  const status = error.status || "error";
  const message = error.message || "Something went wrong";

  res.status(statusCode).json({
    status,
    success: false,
    message,
  });
});

app.listen(PORT, () =>
  console.log(`Server is running at http://localhost:${PORT}`)
);
