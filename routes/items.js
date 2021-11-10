const express = require("express");
const router = express.Router();
const Item = require("../modles/Item");

// @route  GET api/items
// @desc   Get all Items
// @access Public
router.get("/", async (req, res) => {
  const items = await Item.find({});
  res.send(items);
});

// @route  POST api/items
// @desc   Create A Post
// @access Public
router.post("/", async (req, res) => {
  const newItem = new Item({
    name: req.body.name,
  });
  await newItem.save();
  return res.status(200).json({
    status: 200,
    data: newItem,
    message: "New item saved",
  });
});

// @route  DELETE api/items/item_id
// @desc   Delete an item by its _id
// @access Public
router.delete("/:item_id", async (req, res) => {
  const { item_id } = req.params;
  await Item.findByIdAndDelete(item_id);
  res.send("Item deleted!");
});

module.exports = router;
