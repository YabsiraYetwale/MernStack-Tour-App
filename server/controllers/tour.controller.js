import Tour from "../models/Tour.js";

export const createTour = async (req, res) => {
  try {
    const tour = req.body;
    const newTour = new Tour({
      ...tour,
      image: req?.file?.filename,
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
export const getTourBySearch = async (req, res) => {
  try {
    const {searchQuery} = req.query;
    const title= new RegExp(searchQuery,"i");
    const tours = await Tour.find({title});
    res.json({tours});
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
      { ...tour, image: req?.file?.filename, creator: req.userId },
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
