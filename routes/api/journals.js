const router = require("express").Router();
const userController = require("../../controllers/userController");

router.route("/:id").put(userController.updateUserJournals);

module.exports = router;
