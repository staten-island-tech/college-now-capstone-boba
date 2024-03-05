const express = require("express");
const router = new express.Router();
const controller = require("../Controllers/controllers");

//menu
router.get("/menu/fetch", controller.getMenuItem);
router.post("/menu/add", controller.createMenuItem);
router.patch("/menu/update/:id", controller.updateMenuItem);
router.delete("/menu/delete/:id", controller.deleteMenuItem);

//user
router.get("/order/:id", controller.getUser);
router.post("/order/add", controller.createUser);
router.patch("/order/update/:id", controller.updateUser);
router.delete("/order/delete/:id", controller.deleteUser);

//order
router.get("/order/:id", controller.getOrder);
router.post("/order/add", controller.createOrder);
router.patch("/order/update/:id", controller.updateOrder);
router.delete("/order/delete/:id", controller.deleteOrder);

module.exports = router;
