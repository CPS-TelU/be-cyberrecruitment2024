const express = require('express');
const router = express.Router();
const { registerUser } = require("../controller/registerResearchController");

router.post('/research', registerUser);

module.exports = router;