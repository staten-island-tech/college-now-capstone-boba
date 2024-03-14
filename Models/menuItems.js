const mongoose = require("mongoose");
const slugify = require("slugify");

const menuItem = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: "Please enter a menu item name!",
  },
  slug: String,
  description: {
    type: String,
    trim: true,
    required: "Please provide a description",
  },
  tags: [String],
  cost: {
    type: Number,
    trim: true,
    required: "Please provide a cost",
  },
  calories: {
    type: Number,
    trim: true,
    required: "Please provide a calorie count",
  },
  sizes: {
    type: Array,
    trim: true,
    required: "Please provide sizes",
  },
  sugarPercentage: {
    type: Array,
    trim: true,
    required: "Please provide sugar values",
  },
  icePercentage: {
    type: Array,
    trim: true,
    required: "Please provide ice values",
  },
  ingredients: {
    type: Array,
    trim: true,
    required: "Please provide ingredients",
  },
  allergens: {
    type: Array,
    trim: true,
    required: "Please provide a list of allergens",
  },
});

menuItem.pre("save", function (next) {
  if (!this.isModified("name")) {
    next();
    return;
  }
  this.slug = slugify(this.name);
  next();
});

module.exports = mongoose.model("menuItem", menuItem);
