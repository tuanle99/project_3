const router = require("express").Router();
const userController = require("../../controllers/userController");
const journalsRoute = require("./journals");

router.route("/").get(userController.findAll).post(userController.create);

router.route("/auth").get(userController.authenticate);

router.route("/login").post(userController.login);

router.route("/logout").post(userController.logout);

router.use("/journals", journalsRoute);

router
  .route("/:id")
  .get(userController.findById)
  .put(userController.updateUserPlants);

module.exports = router;
