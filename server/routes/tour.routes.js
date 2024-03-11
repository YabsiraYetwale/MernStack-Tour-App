import express from "express";
import multer from "multer";
import path from "path";
import {
  createTour,
  deleteTour,
  getTour,
  getTours,
  updateTour,
  getTourBySearch,
} from "../controllers/tour.controller.js";
import { auth } from "../middlewares/auth.js";
const tourRouter = express.Router();

const storage = multer.diskStorage({
  destination: "./upload/images",
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});
const upload = multer({ storage });
tourRouter.post("/", auth, upload.single("image"), createTour);
tourRouter.get("/", getTours);
tourRouter.get("/:id", getTour);
tourRouter.get("/tour/search", getTourBySearch);
tourRouter.patch("/:id", auth, upload.single("image"), updateTour);
tourRouter.delete("/:id", auth, deleteTour);

export default tourRouter;
