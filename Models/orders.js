const mongoose = require("mongoose");
const slugify = require("slugify");

const orderSchema = new mongoose.Schema({
  user: {
    type: String,
    trim: true,
    required: "please provide a name",
  },
  currentOrder: {
    type: Boolean,
    trim: true,
    required: "please provide true or false",
  },
  menuItems: {
    type: Array,
    trim: true,
    required: "please add at least 1 menu item",
  },
  cost: {
    type: Number,
    trim: true,
    required: "please add a total cost",
  },
});

orderSchema.pre("save", function (next) {
  if (!this.isModified("name")) {
    next();
    return;
  }
  this.slug = slugify(this.name);
  next();
});

module.exports = mongoose.model("orderSchema", orderSchema);
