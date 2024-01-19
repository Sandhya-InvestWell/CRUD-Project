const express = require("express");
const createController = require("../Controllers/createController");
const readController = require("../Controllers/readController");
const updateController = require("../Controllers/updateController");
const deleteController = require("../Controllers/deleteController");
const router = express.Router();

router.post('/create', createController);
router.get('/read', readController);
router.put('/update/:id', updateController);
router.delete('/delete', deleteController);

module.exports = router;