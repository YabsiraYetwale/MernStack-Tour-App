import express from "express"
import {
  createTour,
  deleteTour,
  getTour,
  getTours,
  updateTour,
  getTourBySearch,
  likeTour,
  getToursByUser,
  commentTour,
} from "../controllers/tour.controller.js";
import { auth } from "../middlewares/auth.js";
const tourRouter = express.Router();

tourRouter.post("/", auth,createTour);
tourRouter.get("/", getTours);
tourRouter.get("/:id", getTour);
tourRouter.get("/userTours/:id", auth, getToursByUser);
tourRouter.get("/tour/search", getTourBySearch);
tourRouter.patch("/:id", auth,updateTour);
tourRouter.delete("/:id", auth, deleteTour);
tourRouter.patch("/like/:id", auth, likeTour);
tourRouter.post("/comment/:commentsId", auth, commentTour);

export default tourRouter;
