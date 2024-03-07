const menuItem = require("../Models/menuItems");
const userSchema = require("../Models/users");
const orderSchema = require("../Models/orders");

//menu items
exports.createMenuItem = async (req, res) => {
  try {
    const item = new menuItem(req.body);
    await item.save();
    res.json(item);
  } catch (error) {
    res.stats(500).json(error);
  }
};

exports.updateMenuItem = async (req, res) => {
  try {
    const item = await menuItem.findById(req.params.id);
    const updates = Object.keys(req.body);
    updates.forEach((update) => (item[update] = req.body[update]));
    await item.save();
    res.json(item);
  } catch (error) {
    console.log(error);
  }
};

exports.deleteMenuItem = async (req, res) => {
  try {
    const item = await menuItem.findByIdAndDelete(req.params.id);
    if (!item) {
      res.status(404).send();
    }
    res.send(`${item} was deleted from the DB`);
  } catch (error) {
    console.log(error);
  }
};

exports.getMenuItem = async (req, res) => {
  try {
    const menu = await menuItem.find();
    res.json(menu);
  } catch (error) {
    console.log(error);
  }
};

//users
exports.createUser = async (req, res) => {
  try {
    const user = new userSchema(req.body);
    await user.save();
    res.json(user);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.updateUser = async (req, res) => {
  try {
    const user = await userSchema.findById(req.params.id);
    const updates = Object.keys(req.body);
    updates.forEach((update) => (user[update] = req.body[update]));
    await user.save();
    res.json(user);
  } catch (error) {
    console.log(error);
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const user = await userSchema.findByIdAndDelete(req.params.id);
    if (!user) {
      res.status(404).send();
    }
    res.send(`${user} was deleted from the DB`);
  } catch (error) {
    console.log(error);
  }
};

exports.getUser = async (req, res) => {
  try {
    const user = await userSchema.find();
    res.json(user);
  } catch (error) {
    console.log(error);
  }
};
//orders
exports.createOrder = async (req, res) => {
  try {
    const order = new orderSchema(req.body);
    await order.save();
    res.json(order);
  } catch (error) {
    res.stats(500).json(error);
  }
};

exports.updateOrder = async (req, res) => {
  try {
    const order = await orderSchema.findById(req.params.id);
    const updates = Object.keys(req.body);
    updates.forEach((update) => (order[update] = req.body[update]));
    await order.save();
    res.json(order);
  } catch (error) {
    console.log(error);
  }
};

exports.deleteOrder = async (req, res) => {
  try {
    const order = await orderSchema.findByIdAndDelete(req.params.id);
    if (!order) {
      res.status(404).send();
    }
    res.send(`${order} was deleted from the DB`);
  } catch (error) {
    console.log(error);
  }
};

exports.getOrder = async (req, res) => {
  try {
    const order = await orderSchema.find();
    res.json(order);
  } catch (error) {
    console.log(error);
  }
};
