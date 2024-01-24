const express = require("express");
const { preventAccess } = require("../middlewares/authMiddleware");
const { registerUser, loginUser } = require("../controllers/UserController");
const {
  createTrigger,
  getAllTriggersByUser,
} = require("../controllers/triggerController");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/addTrigger", preventAccess, createTrigger);
router.post("/getTriggers", preventAccess, getAllTriggersByUser);

module.exports = router;
