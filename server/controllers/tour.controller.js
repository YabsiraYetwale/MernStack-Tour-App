import Tour from "../models/Tour.js";
import User from "../models/User.js";

export const createTour = async (req, res) => {
  try {
    const tour = req.body;
    const newTour = new Tour({
      ...tour,
      createdAt:new Date().toISOString(),
      creator: req.userId,
    });
    await newTour.save();
    res.json({ newTour });
  } catch (error) {
    res.json({ error: error });
  }
};
export const getTours = async (req, res) => {
  try {
    const tours = await Tour.find();
    res.json({ tours });
  } catch (error) {
    res.json({ error: error });
  }
};
export const getTour = async (req, res) => {
  try {
    const { id } = req.params;
    const tour = await Tour.findById(id);
    res.json({ tour });
  } catch (error) {
    res.json({ error: error });
  }
};
export const getToursByUser = async (req, res) => {
  try {
    const { id } = req.params;
    const tours = await Tour.find({ creator: id });
    res.json({ tours });
  } catch (error) {
    res.json({ error: error });
  }
};
export const getTourBySearch = async (req, res) => {
  try {
    const { searchQuery } = req.query;
    const title = new RegExp(searchQuery, "i");
    const tours = await Tour.find({ title });
    res.json({ tours });
  } catch (error) {
    res.json({ error: error });
  }
};
export const updateTour = async (req, res) => {
  try {
    const tour = req.body;
    const { id } = req.params;
    const updatedTour = await Tour.findByIdAndUpdate(
      id,
      { ...tour,creator: req.userId },
      { new: true }
    );
    if (updatedTour) return res.json({ updatedTour });
    return res.json({ message: `no tour with this id ${id}` });
  } catch (error) {
    res.json({ error: error });
  }
};
export const deleteTour = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedTour = await Tour.findByIdAndDelete(id);
    if (deletedTour) return res.json({ deletedTour });
    return res.json({ message: `no tour with this id ${id}` });
  } catch (error) {
    res.json({ error: error });
  }
};

export const likeTour = async (req, res) => {
  try {
    const { id } = req.params;
    const tour = await Tour.findById(id);
    if (!req.userId) {
      return res.json({ message: "you are not authenticated!" });
    }
    const index = tour.likes.findIndex((id) => id === String(req.userId));
    if (index === -1) {
      tour.likes.push(req.userId);
    } else {
      tour.likes = tour.likes.filter((id) => id !== String(req.userId));
    }
    const updatedTour = await Tour.findByIdAndUpdate(id, tour, { new: true });
    res.json({ updatedTour });
  } catch (error) {
    res.json({ error: error });
  }
};
export const commentTour = async (req, res) => {
  try {
    const { comment, commentator,commentedAt } = req.body;
    const { commentsId } = req.params;
    const tour = await Tour.findById(commentsId).populate(
      "comments.commentsId"
    );
    const user = await User.findById(req.userId);
    if (!req.userId) {
      return res.json({ message: "you are not authenticated!" });
    }
    const commentUser = {
      commentsId: user,
      commentator,
      commentedAt:new Date().toISOString(),
      comment: String(comment),
    };
    tour.comments.push(commentUser);
    const updatedTour = await Tour.findByIdAndUpdate(commentsId, tour, {
      new: true,
    });
    res.json({ updatedTour });
  } catch (error) {
    res.json({ error: error });
  }
};
