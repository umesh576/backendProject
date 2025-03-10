import mongoose from "mongoose";
// import category from "./model.category";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Product name is required"],
      trim: true,
    },
    price: {
      type: Number,
      required: [true, "price is required"],
      min: [0, "price should be greater than 0"],
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "user",
      required: [true, "Author is required"],
    },
    category: {
      type: mongoose.Types.ObjectId,
      ref: "category",
      required: [true, "Author is required"],
    },
    description: {
      type: mongoose.Types.ObjectId,
      required: false,
      min: [50, "description should be at least 50 character long"],
      trim: true,
    },
    coverImage: {
      type: String,
      required: false,
    },
    images: [
      {
        type: String,
        require: false,
      },
    ],
    reviews: [
      {
        type: mongoose.Types.ObjectId,
        ref: "review",
        required: false,
      },
    ],
    averageRating: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("product", productSchema);
export default Product;
