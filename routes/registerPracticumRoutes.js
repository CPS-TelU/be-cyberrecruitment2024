const express = require('express');
const router = express.Router();
const { registerUser } = require("../controller/registerPracticumController");

router.post('/practicum', registerUser);

module.exports = router;