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

// @route POST api/items
// @desc Create A Post
// @access Public
router.post("/", async (req, res) => {
  const newItem = new Item({
    name: req.body.name,
  });
  await newItem.save();
  res.status(200).json({
    status: 200,
    data: newItem,
    message: "New item saved",
  });
});

module.exports = router;
