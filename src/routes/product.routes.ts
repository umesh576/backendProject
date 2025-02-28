import express from "express";
import { create, getAll } from "../controller/product.controller";
import multer from "multer";

const router = express.Router();

// this is copy from the multer website
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + file.originalname);
  },
});
const upload = multer({ storage: storage });

// create product image
router.post("/", upload.single("coverImage"), create);

router.get("/", getAll);

export default router;
