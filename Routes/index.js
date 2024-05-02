const express = require("express");
const router = new express.Router();
const controller = require("../Controllers/controllers");
const authController = require("../Controllers/authController");

//menu
router.get("/menu/fetch", controller.getMenu);
router.get("/menu/fetch/:id", controller.getMenuItem);
router.post("/menu/add", controller.createMenuItem);
router.patch("/menu/update/:id", controller.updateMenuItem);
router.delete("/menu/delete/:id", controller.deleteMenuItem);

//user
router.get("/user/:id", controller.getUser);
router.get(
  "/user/protected",
  authController.authCheck,
  authController.protected
);
router.post("/user/login", authController.login);
router.post("/user/register", authController.register);
router.patch("/user/update/:id", controller.updateUser);
router.delete("/user/delete/:id", controller.deleteUser);

//order
router.get("/order/:id", controller.getOrder);
router.post("/order/add", controller.createOrder);
router.patch("/order/update/:id", controller.updateOrder);
router.delete("/order/delete/:id", controller.deleteOrder);

module.exports = router;
