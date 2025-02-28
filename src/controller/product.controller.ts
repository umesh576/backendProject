import { Request, Response } from "express";
import { asyncHandler } from "../utils/asyncHandler.utils";
import Product from "../model/product.model";
// import multer from "multer";

export const create = asyncHandler(async (req: Request, res: Response) => {
  const body = req.body;
  const product = await Product.create(body);
  console.log(req.file);

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
