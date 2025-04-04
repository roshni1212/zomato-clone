import Restaurant from "../models/Restaurant.js";

export const getRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurant.find();
    res.json(restaurants);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const addRestaurant = async (req, res) => {
  const { name, location, cuisine } = req.body;
  try {
    const newRestaurant = new Restaurant({ name, location, cuisine });
    await newRestaurant.save();
    res.status(201).json(newRestaurant);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
