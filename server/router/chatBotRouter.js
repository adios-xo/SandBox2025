const express = require("express");
const chatBot = require("../controllers/chatBot");

const router = express.Router();
router.post("/chatbot", chatBot);

module.exports = router;
