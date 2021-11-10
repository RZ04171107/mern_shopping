const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// FIXME: delete this later
// items.json
// [{
//     "name": "Barska GB12166 Fitness Watch with Heart Rate Monitor",
//     "price": "$49.99",
//     "body_location": "Wrist",
//     "category": "Fitness",
//     "_id": 6543,
//     "imageSrc": "...",
//     "numInStock": 9,
//     "companyId": 19962
// },
// ...,
// ]

// Create Schema
const ItemSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
  },
  body_location: {
    type: String,
  },
});

module.exports = mongoose.model("Item", ItemSchema);
