const express = require("express");
const router = express.Router();
const Item = require("../modles/Item");

// @route GET api/items
// @desc Get all Items
// @access Public
router.get("/", async (req, res) => {
  const items = await Item.find({});
  res.send(items);
});

module.exports = router;
