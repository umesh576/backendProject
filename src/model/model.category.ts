// import { Min, Trim } from "./../../node_modules/mongoose/types/expressions.d";
// import { Schema } from "./../../node_modules/mongoose/types/index.d";
import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
  {
    categoryName: {
      type: String,
      require: [true, "category name is necessary"],
      min: [6, "name must be more than 6 letter"],

      Trim: true,
    },
    categoryDecription: {
      type: String,
      require: [true, "category name is necessary"],
      Trim: true,
    },
  },
  { timestamps: true }
);

const category = mongoose.model("category", categorySchema);

export default category;
