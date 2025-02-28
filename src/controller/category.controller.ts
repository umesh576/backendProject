import { Request, Response } from "express";
import { asyncHandler } from "../utils/asyncHandler.utils";
import Category from "../model/model.category";

export const cateCreate = asyncHandler(async (req: Request, res: Response) => {
  const body = req.body;
  const category = await Category.create(body);

  res.status(201).json({
    status: "success",
    success: true,
    data: category,
    message: "Category created successfully!",
  });
});

export const getAll = asyncHandler(async (req: Request, res: Response) => {
  const category = await Category.find({});

  res.status(200).json({
    success: true,
    status: "success",
    data: category,
    message: "Products fetched successfully!",
  });
});
