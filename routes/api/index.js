const router = require("express").Router();
const plantsRoutes = require("./plants");
const userRoutes = require("./user");

// Post routes
router.use("/plants", plantsRoutes);
router.use("/user", userRoutes);

module.exports = router;
