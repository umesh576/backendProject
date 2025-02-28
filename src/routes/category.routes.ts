import express from "express";
import { cateCreate, getAll } from "../controller/category.controller";

const routercat = express.Router();

routercat.post("/", cateCreate);
routercat.get("/", getAll);

export default routercat;
