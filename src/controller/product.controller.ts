// import { path } from "path";
import { Request, Response } from "express";
import { asyncHandler } from "../utils/asyncHandler.utils";
import Product from "../model/product.model";
import CustomError from "../middleware/errorHandler.middleware";
// import multer from "multer";

// import multer from "multer";

export const create = asyncHandler(async (req: Request, res: Response) => {
  const body = req.body;
  console.log(req.files);
  // const product = await Product.create(body);
  const product = await Product.create(body);
  const { coverImage, images } = req.files as {
    [fieldname: string]: Express.Multer.File[];
  };
  if (!coverImage) {
    throw new CustomError("cover image is required", 404);
  }
  product.coverImage = coverImage[0].path;

  if (images && images.length > 0) {
    const imagePath: string[] = images.map(
      (image: any, index: number) => image.path
    );
    product.images = imagePath;
  }

  await product.save();

  res.status(201).json({
    status: "success",
    success: true,
    data: product,
    message: "Product created successfully!",
  });
});

export const getAll = asyncHandler(async (req: Request, res: Response) => {
  const products = await Product.find({}).populate("createdBy");

  res.status(200).json({
    success: true,
    status: "success",
    data: products,
    message: "Products fetched successfully!",
  });
});
